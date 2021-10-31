const controller = require("../controller");

exports.AntiFraudMail = (hospitalName) => {
  const hmhtml = `<p> A fraud is being conducted at a Hospital named ${hospitalName}. Please have a look and take necessary actions </p>`;
  const subject = `${hospitalName} is doing fraud`;
  const healthMinisterEmail = "kushalkhare.unofficial@gmail.com";
  const websiteOwnerEmail = "kushalkhare.official@gmail.com";
  const body = {
    from: websiteOwnerEmail,
    to: healthMinisterEmail,
    qrHtml: hmhtml,
    qrSub: subject,
  };
  AbortController.mail({ body });
};
