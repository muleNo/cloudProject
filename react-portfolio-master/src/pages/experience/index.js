import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { Experience, meta } from "../../content_option";
import "./style.css"; // Ensure you import the CSS file

const ExperiencePage = () => {
  return (
    <HelmetProvider>
      <Container className="Experience-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Experience | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">Experience</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Professional Experience</h3>
          </Col>
          <Col lg="7">
            <table className="table caption-top">
              <tbody>
                {Experience.map((data, i) => (
                  <tr key={i}>
                    <th scope="row">{data.jobtitle}</th>
                    <td>{data.where}</td>
                    <td>{data.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};

export default ExperiencePage;
