import React, { useState } from "react";
import LocationSnap from "../utils/locationCollector";
import axios from "../utils/axios.js";
import mainInstance from "../utils/main";

import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardText,
  FormGroup,
  Input,
  Form,
  Row,
  Col,
} from "reactstrap";

function HospitalForm() {
  const [loc, setLoc] = useState(null);
  const [values, setValues] = useState({});

  const onFinish = async () => {
    console.log(values);

    const address = "0xDaA9b94c12B42c5119EF6dABE3c8cd6D5b3e22bb";

    const receipt = await mainInstance.methods
      .newHospital(mainInstance.options.address)
      .send({ from: address });

    const contract = receipt.events.DistributorCreated.returnValues.distributor;
    try{
    const res = await axios.post("/post/hospital", {
      ...values,
      contract,
      vaccineUsedToday: 0,
      long: loc.longitude,
      lat: loc.latitude,
    });
    console.log(res);
  }
  catch(e){
    console.log(e);
  }
  };

  return (
    <>
      <div className="content">
        <Row>
          <Col md="8">
            <Card>
              <CardHeader>
                <h3 className="title">Hospital Form</h3>
              </CardHeader>
              <CardBody>
                <Form
                  // {...layout}
                  name="nest-messages"
                  // style={{ color: "white" }}
                >
                  <Row>
                    <Col className="pr-md-1" md="7">
                      <FormGroup>
                        <label>Name</label>

                        <Input
                          name="name"
                          onChange={(e) =>
                            setValues({ ...values, name: e.target.value })
                          }
                        />
                      </FormGroup>
                    </Col>

                    <Col className="pl-md-1" md="4">
                      <FormGroup>
                        <label>License Number</label>
                        <Input
                          name="license"
                          placeholder="License Number"
                          type="number"
                          onChange={(e) =>
                            setValues({ ...values, license: e.target.value })
                          }
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-md-1" md="6">
                      <FormGroup>
                        <label htmlFor="exampleInputEmail1">
                          Email address
                        </label>

                        <Input
                          name="email"
                          placeholder="mike@email.com"
                          type="email"
                          onChange={(e) =>
                            setValues({ ...values, email: e.target.value })
                          }
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pl-md-1" md="6">
                      <FormGroup>
                        <label htmlFor="exampleInputEmail1">Website</label>

                        <Input
                          name="website"
                          placeholder="www.xyz.com"
                          type="url"
                          onChange={(e) =>
                            setValues({ ...values, website: e.target.value })
                          }
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <br></br>
                  <h5>Hospital Capacity</h5>
                  <br></br>
                  <Row>
                    <Col className="pr-md-1" md="6">
                      <FormGroup>
                        <label>Hospital Capacity</label>
                        <Input
                          name="capacity"
                          placeholder="Hospital Capacity"
                          type="number"
                          onChange={(e) =>
                            setValues({ ...values, capacity: e.target.value })
                          }
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pl-md-1" md="6">
                      <FormGroup>
                        <label>Number of mobile Vans</label>
                        <Input
                          name="vans"
                          placeholder="Number of mobile Vans"
                          type="number"
                          onChange={(e) =>
                            setValues({ ...values, vans: e.target.value })
                          }
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-md-1" md="6">
                      <FormGroup>
                        <label>Parking Lots</label>
                        <Input
                          name="parkings"
                          placeholder="Parking Lots"
                          type="number"
                          onChange={(e) =>
                            setValues({ ...values, parkings: e.target.value })
                          }
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pl-md-1" md="6">
                      <FormGroup>
                        <label>Number of Teams</label>
                        <Input
                          name="teams"
                          placeholder="Number of Teams"
                          type="number"
                          onChange={(e) =>
                            setValues({ ...values, teams: e.target.value })
                          }
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="8">
                      <FormGroup>
                        <label>About Me</label>
                        <Input
                          cols="80"
                          placeholder="Here can be your description"
                          rows="4"
                          type="textarea"
                          onChange={(e) =>
                            setValues({ ...values, about: e.target.value })
                          }
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
              <CardFooter>
                <Row>
                  <Col className="mr-col-1" md="4">
                    <Button
                      className="btn-fill"
                      color="primary"
                      onClick={() => setLoc(LocationSnap())}
                    >
                      Give Your Location
                    </Button>
                  </Col>
                  <Col className="mr-col-1" md="4">
                    <Button
                      className="btn-fill"
                      color="primary"
                      onClick={onFinish}
                    >
                      Submit
                    </Button>
                  </Col>
                </Row>
              </CardFooter>
            </Card>
          </Col>
          <Col md="4">
            <Card className="card-user">
              <CardBody>
                <CardText />
                <div className="author">
                  <div className="block block-one" />
                  <div className="block block-two" />
                  <div className="block block-three" />
                  <div className="block block-four" />
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <img
                      alt="..."
                      className="avatar"
                      src={require("assets/img/hospital.jpg").default}
                    />
                    <h5 className="title">Vaccination Centres</h5>
                  </a>
                  {/* <p className="description">Ceo/Co-Founder</p> */}
                </div>
                <div className="card-description">
                  Do not be scared of the truth because we need to restart the
                  human foundation in truth And I love you like Kanye loves
                  Kanye I love Rick Owens’ bed design but the back is...
                </div>
              </CardBody>
              <CardFooter>
                <div className="button-container">
                  <Button className="btn-icon btn-round" color="facebook">
                    <i className="fab fa-facebook" />
                  </Button>
                  <Button className="btn-icon btn-round" color="twitter">
                    <i className="fab fa-twitter" />
                  </Button>
                  <Button className="btn-icon btn-round" color="google">
                    <i className="fab fa-google-plus" />
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default HospitalForm;
