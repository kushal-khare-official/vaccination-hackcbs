import React, { useState } from "react";
import LocationSnap from "../utils/locationCollector";
import axios from "../utils/axios.js";

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
  Label,
} from "reactstrap";

function Registration() {
  const [loc, setLoc] = useState(null);
  const [values, setValues] = useState({});

  const onFinish = () => {
    console.log(values, loc);

    axios.post("/post/user", {
      ...values,
      long: loc.longitude,
      lat: loc.latitude,
    });
  };

  return (
    <>
      <div className="content">
        <Row>
          <Col md="8">
            <Card>
              <CardHeader>
                <h3 className="title">Registration Form</h3>
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
                        <label>Adhaar Number</label>
                        <Input
                          name="license"
                          placeholder="License Number"
                          type="number"
                          onChange={(e) =>
                            setValues({ ...values, aadhar: e.target.value })
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
                        <label>Mobile Number</label>
                        <Input
                          name="mobile"
                          placeholder="Mobile Number"
                          type="number"
                          onChange={(e) =>
                            setValues({ ...values, mobile: e.target.value })
                          }
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-md-1" md="4">
                      <FormGroup>
                        <label>Date of Birth</label>
                        <Input
                          name="mobile"
                          placeholder="Mobile Number"
                          type="date"
                          onChange={(e) =>
                            setValues({
                              ...values,
                              dateOfBirth: e.target.value,
                            })
                          }
                        />
                      </FormGroup>
                    </Col>
                    <Col
                      className="pl-md-1"
                      md="3"
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      <FormGroup check>
                        <Input
                          type="checkbox"
                          style={{ visibilty: "visible" }}
                          checked={values && values.vehicle}
                          onChange={(e) =>
                            setValues({ ...values, vehicle: e.target.value })
                          }
                        />

                        <Label check className="form-check-label">
                          Has vechicle
                        </Label>
                      </FormGroup>
                    </Col>
                    <Col
                      className="pl-md-1"
                      md="3"
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      <FormGroup check>
                        <Input
                          type="checkbox"
                          onChange={(e) =>
                            setValues({
                              ...values,
                              homebound: e.target.checked,
                            })
                          }
                        />

                        <Label check className="form-check-label">
                          Home bound
                        </Label>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <FormGroup>
                        <Label>Upload Home Bound Certificate</Label>
                        <Input type="file"></Input>
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
                      src={require("assets/img/vaccination.jpg").default}
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

export default Registration;
