const AntiFraudMail = require("./utils/fraudSquad");
const User = require("./models/user");
const Manufacturer = require("./models/manufacturer");
const Hospital = require("./models/hospital");
const Cluster = require("./models/cluster");

exports.getCount = async (req, res, next) => {
  try {
    const hospitalCount = await Hospital.find().countDocuments();
    const userCount = await User.find().countDocuments();
    const manufacturerCount = await Manufacturer.find().countDocuments();
    res.status(200).json({ hospitalCount, userCount, manufacturerCount });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.createManufacturer = async (req, res, next) => {
  try {
    const newManufacturer = new Manufacturer(req.body);
    await newManufacturer.save();
    return res.status(200);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.createWarehouse = async (req, res, next) => {
  try {
    const newWarehouse = new Warehouse(req.body);
    await newWarehouse.save();
    return res.status(200);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.createHospital = async (req, res, next) => {
  try {
    const location = {
      type: "Point",
      coordinates: [req.body.long, req.body.lat],
      formattedAddress: req.body.address,
    };
    req.body.address = undefined;
    req.body.dailyEstimate = 50;

    const newHospital = new Hospital({ ...req.body, location });
    await newHospital.save();
    res.status(200);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.getHospitals = async (req, res, next) => {
  try {
    const hospital = await Hospital.find();
    res.status(200).send(hospital);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.createUser = async (req, res, next) => {
  try {
    const location = {
      type: "Point",
      coordinates: [req.body.long, req.body.lat],
      formattedAddress: req.body.address,
    };
    req.body.address = undefined;
    const newUser = new User({ ...req.body, location });
    await newUser.save();
    res.status(200);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.getUsers = async (req, res, next) => {
  try {
    const user = await User.find();
    res.status(200).send(user);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.getClusters = async (req, res, next) => {
  try {
    const cluster = await Cluster.find();
    res.status(200).send(cluster);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.slotAllotment = async (req, res, next) => {
  try {
    await createHomeboundCluster();
    const hospitals = await Hospital.find();
    for (let i in hospitals) {
      let hospital = hospitals[i];
      const long = hospital.location.coordinates[0];
      const lat = hospital.location.coordinates[1];
      const hospitalArea = {
        type: "Polygon",
        coordinates: [
          [
            [long - 0.0225, lat - 0.0225],
            [long - 0.0225, lat + 0.0225],
            [long + 0.0225, lat + 0.0225],
            [long + 0.0225, lat - 0.0225],
            [long - 0.0225, lat - 0.0225],
          ],
        ],
      };
      hospital.tier1 = await Cluster.find()
        .where("location")
        .within(hospitalArea);
      hospital.tier2 = await User.find({ clustered: false, vehicle: true })
        .where("location")
        .within(hospitalArea);
      hospital.tier3 = await User.find({ clustered: false, vehicle: false })
        .where("location")
        .within(hospitalArea);
      await hospital.save();
      res.status(200);
    }
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

const createHomeboundCluster = async () => {
  const homeboundUsers = await User.find({
    homebound: true,
    clustered: true,
    vaccinated: false,
  });
  for (let i in homeboundUsers) {
    let homebound = homeboundUsers[i];
    const long = homebound.location.coordinates[0];
    const lat = homebound.location.coordinates[1];
    console.log(lat, long)
    const homeboundArea = {
      type: "Polygon",
      coordinates: [
        [
          [long - 0.0114, lat - 0.0114],
          [long - 0.0114, lat + 0.0114],
          [long + 0.0114, lat + 0.0114],
          [long + 0.0114, lat - 0.0114],
          [long - 0.0114, lat - 0.0114],
        ],
      ],
    };
    const users = await User.find({ clustered: false, vaccinated: false })
      .where("location")
      .within(homeboundArea);
    const cluster = new Cluster({
      cluster_id: homebound._id,
      users: users.map((user) => user._id),
      location: homebound.location,
    });
    await cluster.save();
    for (let j in users) {
      const user = users[j];
      user.clustered = true;
      await user.save();
    }
  }
};

// // called by manufacturer
exports.createVaccine = async (req, res, next) => {
  try {
    const newVaccine = new Vaccine({
      vaccine_id: req.body.vaccineId,
      quantity: 1,
    });
    await newVaccine.save();
    res.status(200);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

// // called by technical assistants at hospitals
exports.vaccineScan = async (req, res, next) => {
  try {
    const hospital = await Hospital.findOne({ _id: req.body.hospital_id });
    const vaccines = await Vaccines.find({ vaccine_id: req.body.vaccineId });
    if (vaccines.length > 0) {
      if (vaccines[0].quantity == 10) {
        AntiFraudMail(hospital.name);
      } else {
        vaccines[0].quantity = vaccines[0].quantity + 1;
        hospital.vaccineUsedToday = hospital.vaccineUsedToday + 1;
      }
    } else {
      AntiFraudMail(hospital.name);
    }
    await hospital.save();
    res.status(200);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

// // called by technical assistants at hospitals
exports.verifyUser = async (req, res, next) => {
  try {
    if (hospitalId != scannerId) {
      AntiFraudMail(hospitalId);
    }
    const user = await User.findOne({ aadhar: aadhar });
    user.vaccinated = true;
    await user.save();
    res.status(200);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.afterProcess = async (req, res, next) => {
  try {
    const hospitals = await Hospital.find();
    hospitals.forEach(async (hospital) => {
      const hospitalInstance = getInstance(hospital.contract);
      const totalVaccines = await hospitalInstance.methods.vaccines().call();
      if (hospital.vaccineUsedToday > totalVaccines) {
        AntiFraudMail(hospital.name);
      } else {
        await hospitalInstance.methods
          .useVaccines(hospital.vaccineUsedToday)
          .send({
            from: process.env.DEFAULT_ADDRESS,
          });
        hospital.vaccineUsedToday = 0;
        await hospital.save();
        res.status(200);
      }
    });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.initiateNextCycle = async (req, res, next) => {
  try {
    const hospitals = await Hospital.find();
    hospitals.forEach(async (hospital) => {
      const hospitalInstance = getInstance(hospital.contract);
      const totalVaccines = await hospitalInstance.methods.vaccines().call();
      if (totalVaccines < 2 * hospital.dailyEstimate) {
        AntiFraudMail(hospital.name);
      }
    });
    res.status(200);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.mail = async (req, res, next) => {
  try {
    sgMail.setApiKey(process.env.MAIL_API);
    await sgMail.send({
      to: req.body.to,
      from: req.body.from,
      subject: req.body.qrSub,
      html: req.body.qrHtml,
    });
    if (res) res.status(200).json({ message: "Email sent" });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};
