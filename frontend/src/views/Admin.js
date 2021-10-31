import React, { useEffect, useState } from "react";
import {
  TabContent,
  TabPane,
  Table,
  Nav,
  NavItem,
  NavLink,
  Card,
  Button,
  CardTitle,
  Row,
  Col,
  CardHeader,
  CardBody,
  Input,
} from "reactstrap";
// import { NavLink } from 'react-router-dom';
import classnames from "classnames";
import Map from "./Map";
import axios from "../utils/axios";

const Admina = () => {
  const [activeTab, setActiveTab] = useState("1");
  const [users, setUsers] = useState(null);
  const [hospitals, setHospitals] = useState(null);
  const [coordinates, setCoordinates] = useState(null);
  const [clusters, setClusters] = useState(null);

  useEffect(() => {
    axios.get("/get/users").then((userData) => {
      console.log(userData.data);
      setUsers(userData.data);
    });
    axios.get("/get/hospitals").then((hospitalData) => {
      console.log(hospitalData.data);
      setHospitals(hospitalData.data);
    });
    axios.get("/get/clusters").then((clusterData) => {
      console.log(clusterData.data);
      setClusters(clusterData.data);
    });
  }, []);

  useEffect(() => {
    if (!hospitals) return;
    setCoordinates(
      hospitals.map((hospital) => [
        {
          lng: hospital.location.coordinates[0] - 0.0225,
          lat: hospital.location.coordinates[1] - 0.0225,
        },
        {
          lng: hospital.location.coordinates[0] - 0.0225,
          lat: hospital.location.coordinates[1] + 0.0225,
        },
        {
          lng: hospital.location.coordinates[0] + 0.0225,
          lat: hospital.location.coordinates[1] + 0.0225,
        },
        {
          lng: hospital.location.coordinates[0] + 0.0225,
          lat: hospital.location.coordinates[1] - 0.0225,
        },
        {
          lng: hospital.location.coordinates[0] - 0.0225,
          lat: hospital.location.coordinates[1] - 0.0225,
        },
      ])
    );
  }, [hospitals]);

  const onSubmit = async (e) => {
    e.preventDefault();

    await axios.post("/allotment");

    setClusters(await axios.get("/get/clusters"));
  };

  const toggle = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  return (
    // <BackgroundColorContext.Consumer>
    <div className="content">
      <Nav tabs>
        <NavItem>
          <NavLink
            style={{ color: "white" }}
            className={classnames({ active: activeTab === "1" })}
            // activeClassName="active"
            onClick={() => {
              toggle("1");
            }}
          >
            Registration
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            style={{ color: "white" }}
            className={classnames({ active: activeTab === "2" })}
            onClick={() => {
              toggle("2");
            }}
          >
            Hospital
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            style={{ color: "white" }}
            className={classnames({ active: activeTab === "3" })}
            onClick={() => {
              toggle("3");
            }}
          >
            Map
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <Row>
            <Col className="mt-3" md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Simple Table</CardTitle>
                </CardHeader>
                <CardBody>
                  <Table className="tablesorter" responsive>
                    <thead className="text-primary">
                      <tr>
                        <th>Name</th>
                        <th>Aadhar</th>
                        <th>Date Of Birth</th>
                        <th>Vehicle</th>
                        <th>Homebound</th>
                        <th>Clustered</th>
                        <th>Vaccinated</th>
                      </tr>
                    </thead>
                    <tbody>
                      {users &&
                        users.map((user, i) => (
                          <tr key={i}>
                            <td>{user.name}</td>
                            <td>{user.aadhar}</td>
                            <td>{user.dateOfBirth}</td>
                            <td>
                              <Input
                                type="checkbox"
                                checked={user.vehicle}
                                readOnly
                              />
                            </td>
                            <td>
                              <Input
                                type="checkbox"
                                checked={user.homebound}
                                readOnly
                              />
                            </td>
                            <td>
                              <Input
                                type="checkbox"
                                checked={user.clustered}
                                readOnly
                              />
                            </td>
                            <td>
                              <Input
                                type="checkbox"
                                checked={user.vaccinated}
                                readOnly
                              />
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="2">
          <Row>
            <Col className="mt-3" md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Complex Table</CardTitle>
                </CardHeader>
                <CardBody>
                  <Table className="tablesorter" responsive>
                    <thead className="text-primary">
                      <tr>
                        <th>Name</th>
                        <th>License</th>
                        <th>Email</th>
                        <th>Capacity</th>
                        <th>Daily Estimate</th>
                        <th>Parkings</th>
                        <th>Teams</th>
                        <th>Vans</th>
                      </tr>
                    </thead>
                    <tbody>
                      {hospitals &&
                        hospitals.map((hospital, i) => (
                          <tr key={i}>
                            <td>{hospital.name}</td>
                            <td>{hospital.license}</td>
                            <td>{hospital.email}</td>
                            <td>{hospital.capacity}</td>
                            <td>{hospital.dailyEstimate}</td>
                            <td>{hospital.parkings}</td>
                            <td>{hospital.teams}</td>
                            <td>{hospital.vans}</td>
                          </tr>
                        ))}
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="3">
          <Row>
            <Col className="mt-3" md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Map</CardTitle>
                </CardHeader>
                <CardBody>
                  <Map
                    coordinates={coordinates}
                    users={
                      users &&
                      users.map((user) => ({
                        lat: user.location.coordinates[1],
                        lng: user.location.coordinates[0],
                      }))
                    }
                    hospitals={
                      hospitals &&
                      hospitals.map((hospital) => ({
                        lat: hospital.location.coordinates[1],
                        lng: hospital.location.coordinates[0],
                      }))
                    }
                    clusters={
                      clusters &&
                      clusters.map((cluster) => ({
                        lat: cluster.location.coordinates[1],
                        lng: cluster.location.coordinates[0],
                      }))
                    }
                  />
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col className="mt-3" md="12">
              <Button onClick={onSubmit}>Start Allotment</Button>
            </Col>
          </Row>
        </TabPane>
      </TabContent>
    </div>
  );
};

export default Admina;
