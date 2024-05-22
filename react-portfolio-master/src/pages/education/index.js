import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { education, meta } from "../../content_option";
import "./style.css";

export const EducationPage = () => {
  return (
    <HelmetProvider>
      <Container className="Education-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Education | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">Education</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Education</h3>
          </Col>
          <Col lg="7">
            {education.map((edu, i) => (
              <div key={i}>
                <h5 className="service__title">{edu.title}</h5>
                <p className="service_desc">{edu.description}</p>
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};

export default EducationPage;
