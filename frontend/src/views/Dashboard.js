import React, { useEffect, useState } from "react";
import mainInstance from "../utils/main";
import axios from "../utils/axios";
import { Card, CardBody, CardHeader, CardTitle, Row, Col,Button } from "reactstrap";
import { Link } from "react-router-dom";
// import {notify} from "./Notifications";
function Dashboard(props) {
  const [res, setRes] = useState([]);

  useEffect(() => {
    const init = async () => {
      const vaccines = parseInt(await mainInstance.methods.vaccines().call());
      const response = await axios.get("/home");
      setRes([
        response.data.hospitalCount,
        response.data.userCount - vaccines,
        response.data.manufacturerCount,
      ]);
    };
    init();
  }, []);
  return (
    <>
      <div className="content">
        <Row className="justify-content-around">
          <div className="typography-line">
            <h1 style={{ color: "white", fontSize: "2.5rem" }}>
              {/* <span>Header 1</span> */}
              Glassy and Grounded Vaccination System
            </h1>
          </div>
        </Row>
        <Row className="justify-content-around">
          <Col lg="3">
            <Card>
              <CardHeader>
                <Row className="justify-content-md-center">
                  <i
                    style={{ fontSize: "2.5rem" }}
                    className="tim-icons fas fa-notes-medical text-info"
                  />
                </Row>
                <CardTitle tag="h1">
                  <Row className="justify-content-md-center">
                    <h5
                      style={{ fontSize: "1.5rem" }}
                      className="card-category"
                    >
                      Total Registrations
                    </h5>
                  </Row>
                </CardTitle>
              </CardHeader>
              <CardBody style={{ color: "white", fontSize: "3rem" }}>
                <Row className="justify-content-md-center">{res[1]}</Row>
              </CardBody>
            </Card>
          </Col>
          <Col lg="3">
            <Card>
              <CardHeader>
                <Row className="justify-content-md-center">
                  <i
                    style={{ fontSize: "2.5rem" }}
                    className="tim-icons fas fa-hospital-symbol text-info"
                  />
                </Row>
                <CardTitle tag="h1">
                  <Row className="justify-content-md-center">
                    <h5
                      style={{ fontSize: "1.5rem" }}
                      className="card-category"
                    >
                      Total Hospitals
                    </h5>
                  </Row>
                </CardTitle>
              </CardHeader>
              <CardBody style={{ color: "white", fontSize: "3rem" }}>
                <Row className="justify-content-md-center">{res[0]}</Row>
              </CardBody>
            </Card>
          </Col>
          <Col lg="3">
            <Card>
              <CardHeader>
                <Row className="justify-content-md-center">
                  <i
                    style={{ fontSize: "2.5rem" }}
                    className="tim-icons fas fa-industry text-info"
                  />
                </Row>
                <CardTitle tag="h1">
                  <Row className="justify-content-md-center">
                    <h5
                      style={{ fontSize: "1.5rem" }}
                      className="card-category"
                    >
                      Total Manufacturer
                    </h5>
                  </Row>
                </CardTitle>
              </CardHeader>
              <CardBody style={{ color: "white", fontSize: "3rem" }}>
                <Row className="justify-content-md-center">{res[2]}</Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row className="mt-5 justify-content-md-center align-item-center">
        <Col className="d-flex align-item-center justify-content-md-center" >
                  <Link
                  to="/admin/registration">
                    <Button
                      style={{fontSize:"2.5rem"}}
                      className="btn-fill"
                      color="primary"
                    >
                      
                        Register Now !!
                    </Button>
                  </Link>
                  
                  </Col>
        </Row>
      </div>
    </>
  );
}

export default Dashboard;
