import React from "react";
import { Card, CardTitle, CardHeader, CardBody } from "reactstrap";
// import { NavLink } from 'react-router-dom';

const About = () => {
  return (
    // <BackgroundColorContext.Consumer>
    <div className="content">
      <Card>
        <CardHeader>
          <CardTitle tag="h2">Glassy and Grounded Vaccination system</CardTitle>
        </CardHeader>
        <CardBody>
          
          <p>
            “
            <em>
              A blockchain based supply chain aiming to provide vaccination to
              all sections of society in a fast, efficient and transparent
              manner considering all the ground realities“
            </em>
          </p>
          <ul>
            <li>
              <h3 id="concept-1-blockchain-based-supply-chain">
                Concept 1 : Blockchain based supply chain
              </h3>
            </li>
          </ul>
          <p>
            In a supply chain(without blockchain) consumers’ trust is vested on
            the various parties involved in the process. This trust when broken
            breaks the integrity of the whole system. This results in theft,
            fraud, smuggling &amp; black marketing of vaccines, and other
            illegal activities for which the end user has to pay, either in
            time, money or the discomfort caused. Blockchain mitigates the above
            vulnerabilities of a supply chain by introducing the following
            features:
          </p>
          <ul>
            <li>Transparency</li>
          </ul>
          <p>
            A blockchain based supply chain is transparent. This ensures the
            consumers’ trust is vested on the system and not on the various
            parties involved in the chain.
          </p>
          <ul>
            <li>Product Authenticity</li>
          </ul>
          <p>
            Vaccine vials in a blockchain based supply chain are allotted a
            unique identification number, which helps in proving the
            authenticity of the product.
          </p>
          <ul>
            <li>Security</li>
          </ul>
          <p>
            Blockchain based supply chains provide end-to-end traceability of
            vaccine vials thus preventing any sort of theft, fraud, or black
            marketing of vaccines.
          </p>
          <ul>
            <li>Flexibility</li>
          </ul>
          <p>
            Blockchain can be easily incorporated into an already existing
            supply chain.
          </p>
          <ul>
            <li>Scalability</li>
          </ul>
          <p>
            Blockchain based supply chains can be easily scaled without any
            change in code.
          </p>
          <ul>
            <li>Reduce friction within supply chain</li>
          </ul>
          <p>
            end-to-end visibility to reduce the administrative costs of handling
            dispute resolutions and conducting product recalls
          </p>
          <ul>
            <li>
              <h3 id="concept-2-the-3-tier-system">
                Concept 2 : The 3-Tier System
              </h3>
            </li>
          </ul>
          <p>
            To overcome all the disadvantages and efficiently utilise all the
            advantages of the existing supply chains, we propose a 3-tier
            vaccination system. In this system, the vaccine from the
            manufacturer, through a network of temperature controlled supply
            chains (called cold-chain), reaches the hospitals. From hospitals,
            the vaccines reach the end-consumers using three different forms of
            supply chain based on the category the end-user falls in.
          </p>
          <ul>
            <li>
              <h4 id="tier-1-mobile-vaccination-vans-">
                Tier-1 (Mobile Vaccination Vans)
              </h4>
            </li>
          </ul>
          <p>
            This Vaccination system is focused on Homebound people. To prevent
            vaccine wastage and ensure safe and effective vaccination, the
            following measures could be taken:
          </p>
          <ul>
            <li>Clustering System :</li>
          </ul>
          <p>
            Vaccinating the family and caretakers of the homebound person and
            estimating the number of doses needed as accurately as possible
            increases the efficiency of the system. Getting information about
            recipients and their caregivers in advance helps to determine how
            many doses will be needed. The plan is to use all doses in a vial
            transported for home vaccination to minimize wasting vaccine doses,
            such as having contingency plans for vaccination of caregivers, or
            other persons in the home, and the locality to avoid vaccine
            wastage.
          </p>
          <ul>
            <li>Instant Registration :</li>
          </ul>
          <p>
            For the vaccination of people unable to register for vaccination
            (people without mobile phones) or illiterate people, the last hours
            of vaccination is reserved for them. This improves the efficiency of
            the system, and also takes into account vaccination of this group of
            people, which also has been unable to receive vaccination so far.
          </p>
          <ul>
            <li>Maximum Utilisation :</li>
          </ul>
          <p>
            For vans vaccinating urban areas(areas with high population
            density), the vans are allotted vaccines according to the maximum
            number of people it can vaccinate within the approved time frame.
            Whereas for rural areas, vans are allotted vaccines according to the
            population of the maximum area it can cover within the approved time
            frame. Travel plans are mapped out to ensure vaccine is utilized
            within the approved time frames for use of vaccine at different
            temperatures, including factoring in pre-vaccination preparation
            time, and post-vaccination observation time.
          </p>
          <ul>
            <li>
              <h4 id="tier-2-public-parking-lots-">
                Tier-2 (Public Parking Lots)
              </h4>
            </li>
          </ul>
          <p>
            This system is focused mostly on urban areas, where the population
            density is high, the risk of overcrowding and congested vaccination
            rooms is high, and the majority of the population have a 4-wheeler
            vehicle. In a report published by the Statista Research Department,
            on May 12, 2021, 55 percent of the respondents of a survey across
            India said that they owned a car{" "}
            <a href="https://www.statista.com/statistics/1027474/india-car-owners-by-gender/">
              [source]
            </a>
            . This statistic is even higher in urban areas. A similar
            vaccination campaign was carried out at Kodak Hawkeye parking lot in
            Rochester, New York. The campaign is regarded as a huge milestone in
            mass vaccination
            <a href="https://www.whec.com/coronavirus/mass-vaccination-site-opens-at-old-kodak-hawkeye-parking-lot/6030495/">
              [source]
            </a>
            . These statistics prove the parking lot vaccination system to be
            efficient and reliable.
          </p>
          <ul>
            <li>
              <h4 id="tier-3-hospital-campus-">Tier-3 (Hospital Campus)</h4>
            </li>
          </ul>
          <p>
            This process is similar to the current method most countries
            including India have adopted. This vaccination system is to
            vaccinate all the people that don&#39;t fall in any other
            vaccination process. These includes
          </p>
          <ul>
            <li>People unable to register</li>
          </ul>
          <p>
            Illiterate people or people with no access to the internet will be
            unable to register using any medium. Thus, these people can reach
            their nearest hospital and can register for their vaccination. The
            only requirement for registering is having any proof of identity
            deemed valid by the Government of India (mostly aadhar card).
          </p>
          <ul>
            <li>People who missed their slots</li>
          </ul>
          <p>
            In case, a person has been unable to get vaccination during his
            allotted slot, he/she can book a slot at his nearest hospital.
          </p>
          <ul>
            <li>Others</li>
          </ul>
          <p>
            All people who don&#39;t fall in any other category have to book a
            slot for vaccination at their nearest hospital campus.
          </p>
          <ul>
            <li>
              <h3 id="concept-3-maintain-authenticity-of-vaccination">
                Concept 3 : Maintain Authenticity of Vaccination
              </h3>
            </li>
          </ul>
          <p>
            Being able to differentiate between a fake vaccine from a real one
            is important for maintaining trust in the system. This is where the
            unique identification number of vaccine and QR code comes into play.
          </p>
          <ul>
            <li>
              During vaccination, the vaccine QR code and people’s QR code is
              scanned.
            </li>
            <li>
              An anti-fraud mechanism is created which will send an alert to the
              vaccination inspection team and to the local police department
              whenever an exception in data is administered.
            </li>
            <li>
              Every vial of vaccine contains 10 doses. If the same vaccine vial
              is used eleventh time, the smart contract will call the anti-fraud
              mechanism .
            </li>
            <li>
              If a fraudulent person creates a duplicate vaccine vial using a
              random or previously used QR code and tries to vaccinate people
              using it, the anti-fraud mechanism will be called.
            </li>
          </ul>
          <ul>
            <li>
              <h3 id="concept-4-verifying-identity-of-people">
                Concept 4 : Verifying Identity of People
              </h3>
            </li>
            <li>
              <p>
                On successful <a href="#kix.dc9gqe2duyf7">registration</a>, a
                table entry will be created into our database containing a
                string field for aadhaar number and boolean fields for dose 1
                and dose 2.
              </p>
            </li>
            <li>
              If anyone tries to register from an aadhaar more than twice, then
              registration will fail.
            </li>
            <li>
              After our <a href="#kix.di71vu6c5vfz">slot management</a>, a QR
              code will be sent to the registered individual.
            </li>
            <li>
              The QR code has information like a person&#39;s aadhar ,dose
              count,venue of vaccination.
            </li>
            <li>
              It will be used to verify individuals on the spot at the
              vaccination points.
            </li>
            <li>
              If the current location and time of the scanner is matched with
              the QR code’s venue the authentication has been done.
            </li>
          </ul>
          <p>
            <strong>IMPLEMENTATION</strong>
          </p>
          <p>
            We want to begin from the very beginning of the entire vaccination
            cycle that is the buying of vaccines from various manufactures and
            distributing them to hospitals and vaccination camps.
          </p>
          <p>================Begin===================</p>
          <ul>
            <li>
              <strong>Smart Contract</strong>
            </li>
          </ul>
          <p>
            A{" "}
            <a href="https://www.investopedia.com/terms/s/smart-contracts.asp">
              smart contract
            </a>{" "}
            named “main contract” will be created which contains the total
            number of vaccines currently available.
          </p>
          <ul>
            <li>
              <strong>Matic mainnet</strong>
            </li>
          </ul>
          <p>
            This contract will be deployed on the{" "}
            <a href="https://docs.matic.network/docs/develop/network-details/network">
              matic-mainnet
            </a>
            . Since this network is public, a transparency is maintained which
            increases the trust in the system.
          </p>
          <p>=============Purchase of vaccine===========</p>
          <ul>
            <li>
              <strong>Manufacturer form</strong>
            </li>
          </ul>
          <p>
            A manufacturer has to apply at our portal via the manufacturer form
            present at the “/post/manufacturer” route.
          </p>
          <ul>
            <li>
              <strong>Approval of health ministry</strong>
            </li>
          </ul>
          <p>
            The details of applying manufacturers will be mailed to the health
            ministry which will handle the validation and approval of a
            manufacturer.
          </p>
          <ul>
            <li>
              <strong>QR Code Generation</strong>
            </li>
          </ul>
          <p>
            After being approved by the health ministry, a{" "}
            <a href="https://privacypros.io/wallets/mnemonic-phrase">
              BIP39 mnemonic phrase
            </a>{" "}
            will be given to each manufacturer. This mnemonic is used by
            manufacturers to print a QR code which is unique to every vial of
            vaccine.
          </p>
          <p>============Transportation to Hospital============</p>
          <ul>
            <li>
              <strong>End-to-end traceability</strong>
            </li>
          </ul>
          <p>
            Every manufacturer, warehouse, transport and hospital in the supply
            chain when registered will have a contract on the blockchain
            network. These contracts will store a number of vaccine vials
            currently under its supervision.
          </p>
          <ul>
            <li>
              <strong>Smart transaction</strong>
            </li>
          </ul>
          <p>
            Whenever a vaccine is being shipped, a transaction is created which
            alters the data in the contracts. For eg. While transporting a stock
            of vaccines from the manufacturer to a warehouse via a transport
            vehicle, a transaction occurs between the vehicle and the
            manufacturer on departure of the vehicle and a transaction occurs
            between vehicle and warehouse on arrival of vehicle. Both of these
            transactions alter the data in the contracts accordingly.
          </p>
          <p>=========Allotment of vaccines to hospitals=========</p>
          <ul>
            <li>
              <strong>Hospital Registration form</strong>
            </li>
          </ul>
          <p>
            A hospital has to be registered to our portal through a new-hospital
            form present at the “/post/hospital” route which will create a smart
            contract linked to the main contract.The fields of our new-hospital
            form includes :
          </p>
          <ul>
            <li>total capacity in hospital campus</li>
            <li>
              total number of nearby parking lots that can be converted into
              vaccination camps and their capacity
            </li>
            <li>
              Number of vehicles which could be converted into mobile
              vaccination vans
            </li>
            <li>Number of trained doctors qualified for vaccination</li>
            <li>Number of technical support present at the hospital</li>
            <li>
              <strong>Vaccine Allotment</strong>
            </li>
          </ul>
          <p>
            An estimate of the number of vaccines required will be calculated by
            our <a href="#kix.gmpjdtbej7ei">algorithm</a> on the basis of form
            data and some assumptions. If the number of vaccines in a given
            hospital is less than two days&#39; requirement, the next vaccine
            allotment cycle is initiated.
          </p>
          <p>============Registration of people===============</p>
          <ul>
            <li>
              <strong>Public Registration</strong>
            </li>
          </ul>
          <p>
            People can register for vaccination through a new-registration form
            on the “/newRegistration” route of our portal. The content of
            registration from includes :
          </p>
          <ul>
            <li>Name</li>
            <li>Age</li>
            <li>Address(Current location if possible)</li>
            <li>Aadhar number</li>
            <li>Has Vehicle Yes / No</li>
            <li>Is Person with disability Yes / No </li>
            <li>Certificate for temporal immobility (If applicable)</li>
            <li>
              If a person is Person with disability or has Certificate for
              temporal immobility
              <ul>
                <li>
                  Another legend of the fields will be visible to add their
                  caretakers and family members.
                </li>
                <li>
                  <code> </code>The aadhar of family members is required to be
                  registered.They will be vaccinated with PWD people at their
                  own home.
                </li>
              </ul>
            </li>
            <li>
              <strong>Pre-registration check</strong>
            </li>
          </ul>
          <p>
            The registration will be successful if the aadhar number is not
            already in our database or just one dose is given and the
            re-registration is after 3 months from dose 1 time stamp.{" "}
          </p>
          <ul>
            <li>
              We ensure a slot for vaccination of registered persons is within 7
              days.
            </li>
            <li>
              The slot and the location of vaccination will be provided through
              SMS and Email with a special generated{" "}
              <a href="#kix.ajo4cfhsn4zy">QR code</a> for authentication.
            </li>
          </ul>
          <p>===============Slot management=============</p>
          <ul>
            <li>
              <p>
                <strong>Slots in Mobile Vans</strong>
              </p>
              <ul>
                <li>
                  We first process data of homebound people. We will cluster
                  them with the locality.
                </li>
                <li>
                  A locality will be given priority according to the number of
                  homebound clusters and will be managed by a mobile van from
                  the nearest hospital.
                </li>
                <li>
                  If the number of vaccination slots are left in the van then
                  the nearest registered people will be given slots in that van.
                </li>
                <li>
                  Nearest people will be considered in accordance with the
                  population density of the area.
                </li>
                <li>
                  If still doses are left in the van then,the remaining hours
                  will be treated as Go-on hours(Anyone without registration can
                  come and get vaccinated via a process of{" "}
                  <a href="#kix.ymqfu31wna5a">instant registration</a>).
                </li>
                <li>
                  If the number of homebound people are insignificant then these
                  mobile vans are sent to backward societies to vaccinate
                  unregistered people.
                </li>
              </ul>
            </li>
            <li>
              <p>
                <strong>Slots in Parking lots</strong>
              </p>
              <ul>
                <li>
                  The parking lots will be given priority in accordance with the
                  number of registered people in its locality with a vehicle.
                </li>
                <li>
                  The registered people with vehicles will be given slots.
                </li>
                <li>If doses are left then it will work as go-on slots.</li>
                <li>
                  The slot will be given to the people in a radius of 5 km.
                </li>
              </ul>
            </li>
            <li>
              <strong>Slots in Hospitals</strong>
              <ul>
                <li>
                  All the people if registered will be given slots after mobile
                  vans and parking lots.
                </li>
                <li>The remaining doses will be treated as Go-on slots. </li>
              </ul>
            </li>
          </ul>
          <p>
            The time slots are given to people on the basis of the number of
            vaccines that could be injected in an hour, taken from past
            experiences and expert advice.
          </p>
          <p>
            Everyone will be sent a QR code through SMS and E-mail on slot
            booking, containing the information of aadhar, where to get
            vaccinated and when to get vaccinated.
          </p>
          <p>==========Authentication and After process=========</p>
          <ul>
            <li>
              <strong>Scanner allotment</strong>
            </li>
          </ul>
          <p>
            In every camp, a technical assistant is incorporated with a doctor.
            A scanning device is given to every technical assistant registered
            to our portal at the “/newScanner” route.
          </p>
          <ul>
            <li>
              <strong>Role of Technical Assistant</strong>
            </li>
          </ul>
          <p>
            To authenticate a person, the technical assistant just needs to scan
            his QR code. By scanning the QR code ,the vaccination venue is
            extracted and tried to match with the live location of the scanning
            device.If matched you may proceed further.
          </p>
          <ul>
            <li>
              Before opening any veil of vaccine one has to write the serial
              number or scan the QR code of the veil, so that we could keep
              track of which serial number veil is opened at which camp.
            </li>
            <li>
              <strong>Authentication</strong>
            </li>
          </ul>
          <p>
            At vaccination points, after vaccination hours (maybe at 6 pm), a
            function ‘vaccinated()’ is called,which will implement the{" "}
            <a href="#kix.3kbgzbxetot2">anti-fraud mechanism</a>. If this
            passes, then we will subtract the number of vials used that day from
            the hospital contract.
          </p>
          <p>===============Some Add Ons===============</p>
          <ul>
            <li>
              Maybe some hospitals have requirements for technical assistants,
              so we provide a vacancy form for hiring of technical personnel if
              there is any vacancy.
            </li>
            <li>
              For security purposes, information about the vaccination camps
              will be sent to the nearest police station
            </li>
            <li>A suggestion page will be available for everyone.</li>
          </ul>
          <h3 id="-vaccine-requirement-estimation-algorithm-">
            <strong>Vaccine requirement estimation algorithm</strong>
          </h3>
          <p>
            Number of vaccination teams = min(technical assist, trained doctors)
          </p>
          <p>
            Assuming working hours for vaccination will be 9:00 AM to 5:00 PM(=
            480 minutes). Almost 1 hour will be utilised in pre-vaccination
            preparations.
          </p>
          <p>Thus, Total time for vaccination = 420 minutes</p>
          <p>
            Maximum number of vaccinations possible in one day(X) = (Number of
            vaccination teams * Average time per vaccination) / Total time
          </p>
          <p>Max number of vaccines required(R) = </p>
          <p>minimum(vaccine storage capacity, X/Number of doses in 1 vial)</p>
          <p>
            Priority factor(P) = number of cases in past 3 weeks in the area
            under the hospitals supervision
          </p>
          <p>
            The number of vaccines supplied to a hospital is in ratio of its (R
            * P) value
          </p>
          <p>Thus,</p>
          <p>
            <code> </code>Number of vaccines supplied to hospital x (Nx) = (Rx *
            Px)/Σ(Ri * Pi)
          </p>
          <h3 id="-final-words-">
            <strong>Final words</strong>
          </h3>
          <ul>
            <li>
              Admitting the fact that we lack good writing skills, if you feel
              some part of the solution is not explained well or is unambiguous,
              please let us know by commenting there. We will try to explain our
              solution in the best way possible.{" "}
            </li>
            <li>
              While designing a vaccination system at such a huge scale, even
              leaving a few corner cases may lead to a collapse of the whole
              system. If you think a few corner cases have been left by us,
              please let us know.
            </li>
          </ul>
        </CardBody>
      </Card>
    </div>
  );
};

export default About;
