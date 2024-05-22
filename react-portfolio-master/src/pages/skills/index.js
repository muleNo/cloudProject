import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col, Button } from "react-bootstrap";
import { skills, meta } from "../../content_option";
import "./style.css"; // Ensure you import the CSS file

const SkillsPage = () => {
  return (
    <HelmetProvider>
      <Container fluid className="Skills-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Skills | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">Skills</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="12">
            <div className="skills_grid">
              {skills[0].skills.map((skill, index) => (
                <div key={index} className="skill_item">
                  {skill}
                </div>
              ))}
            </div>
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="12" className="text-center">
            <Button variant="primary" href="/path/to/your/resume.pdf" download>
              Download Resume
            </Button>
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};

export default SkillsPage;
