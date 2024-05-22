import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import blogImage from "../../assets/images/blog.jpg";
import "./style.css";

const blogPosts = [
  {
    title: "Architecture diagram for a personal website",
    description: `
      This AWS architecture diagram shows a serverless application using various AWS services:

      - S3 Bucket: Stores static content.
      - API Gateway: Manages API requests.
      - Lambda (SubhraDeyLambda): Processes requests, sends emails via SNS, and pushes messages to SQS.
      - SNS: Sends notifications.
      - SQS: Queues messages for processing.
      - IAM: Manages access permissions.
      - CloudWatch: Monitors and logs performance.
      - Lambda (ContentLambda): Fetches content from DynamoDB.
      - Lambda (DataserviceLambda): Processes DynamoDB data triggered by SQS.
      - DynamoDB: Stores data for retrieval and processing.

      This setup illustrates a scalable, event-driven application using AWS.
    `,
    image: blogImage, // Use the imported image here
  },
];

export const Blogs = () => {
  return (
    <HelmetProvider>
      <Container className="Blogs-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Blogs | Mulugeta Assefa</title>
          <meta
            name="description"
            content="A collection of blog posts by Mulugeta Assefa."
          />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">Blogs</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="12">
            {blogPosts.map((post, index) => (
              <div key={index} className="blog_post">
                <h3 className="blog_title">{post.title}</h3>
                <img src={post.image} alt={post.title} className="blog_image" />
                <p className="blog_description">{post.description}</p>
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};

export default Blogs;
