import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataabout, meta } from "../../content_option";

const About = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> About | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">About me</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Introduction</h3>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <div>
              <p>{dataabout.aboutme}</p>
            </div>
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Personal Information</h3>
          </Col>
          <Col lg="7">
            <ul className="list-unstyled">
              <li>
                <strong>Name:</strong> {dataabout.name}
              </li>
              <li>
                <strong>Phone:</strong> {dataabout.phone}
              </li>
              <li>
                <strong>Email:</strong> {dataabout.email}
              </li>
              <li>
                <strong>Address:</strong> {dataabout.address}
              </li>
              <li>
                <strong>Degree:</strong> {dataabout.degree}
              </li>
              <li>
                <strong>Experience:</strong> {dataabout.experience}
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};

export default About;
