import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import blogImage from "../../assets/images/blog.jpg";
import "./style.css";

const blogPosts = [
  {
    title: "Building a Serverless Application on AWS",
    description: `
      <h2>Introduction</h2>
      <p>In this post, I'll share the process of building a fault-tolerant, highly scalable, production-ready API using AWS serverless services. We'll dive into the architecture, best practices, and some lessons learned along the way.</p>
      <h2>Architecture Overview</h2>
      <p>Our application leverages several AWS services to ensure scalability and fault tolerance. Below is a high-level diagram of the architecture:</p>
      <h2>Key Components</h2>
      <h3>API Gateway</h3>
      <ul>
        <li>Acts as the entry point for all client requests.</li>
        <li>Manages routing, security, and throttling.</li>
      </ul>
      <h3>Lambda Functions</h3>
      <ul>
        <li>Handles the business logic.</li>
        <li>Scales automatically with the load.</li>
        <li>No need to manage servers.</li>
      </ul>
      <h3>DynamoDB</h3>
      <ul>
        <li>A fast and flexible NoSQL database service.</li>
        <li>Provides single-digit millisecond performance at any scale.</li>
      </ul>
      <h3>S3</h3>
      <ul>
        <li>Stores static assets like images, videos, and files.</li>
        <li>Used as a storage backend for Lambda functions if needed.</li>
      </ul>
      <h3>SNS & SQS</h3>
      <ul>
        <li>SNS (Simple Notification Service) sends notifications to subscribers.</li>
        <li>SQS (Simple Queue Service) queues messages to decouple microservices and handle asynchronous communication.</li>
      </ul>
      <h3>AWS Step Functions</h3>
      <ul>
        <li>Manages the orchestration of complex workflows.</li>
        <li>Ensures each step in the process completes successfully.</li>
      </ul>
      <h2>Best Practices</h2>
      <h3>Design for Scalability</h3>
      <ul>
        <li>Use AWS services that automatically scale with the demand.</li>
        <li>Employ API Gateway throttling and caching to handle traffic spikes.</li>
      </ul>
      <h3>Ensure Fault Tolerance</h3>
      <ul>
        <li>Use multiple Availability Zones for high availability.</li>
        <li>Implement retries and exponential backoff in Lambda functions.</li>
      </ul>
      <h3>Optimize for Performance</h3>
      <ul>
        <li>Use DynamoDB's best practices for partition keys and indexes.</li>
        <li>Optimize Lambda functions' cold start times by minimizing dependencies.</li>
      </ul>
      <h3>Security First</h3>
      <ul>
        <li>Use IAM roles and policies to control access to AWS resources.</li>
        <li>Enable API Gateway logging and monitoring.</li>
      </ul>
      <h3>Cost Management</h3>
      <ul>
        <li>Monitor usage with AWS CloudWatch.</li>
        <li>Use AWS Cost Explorer to understand cost drivers and optimize accordingly.</li>
      </ul>
      <h2>Lessons Learned</h2>
      <h3>Thorough Testing</h3>
      <ul>
        <li>Serverless applications can be complex to test. Use AWS SAM (Serverless Application Model) to simulate the environment locally.</li>
      </ul>
      <h3>Monitoring and Logging</h3>
      <ul>
        <li>Setting up proper logging and monitoring is crucial. CloudWatch provides insights into application performance and errors.</li>
      </ul>
      <h3>Cold Start Mitigation</h3>
      <ul>
        <li>Be aware of Lambda's cold start latency. Use provisioned concurrency for critical functions to reduce latency.</li>
      </ul>
      <h3>Infrastructure as Code</h3>
      <ul>
        <li>Use AWS CloudFormation or Terraform to manage infrastructure as code. This ensures consistency and easier management.</li>
      </ul>
      <h2>Conclusion</h2>
      <p>Building a serverless application on AWS involves several moving parts, but the benefits of scalability, fault tolerance, and reduced operational overhead are significant. By following best practices and learning from real-world experiences, you can build robust and efficient applications on the cloud.</p>
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
              <Card key={index} className="blog_post mb-4">
                <Card.Header>
                  <h3 className="blog_title">{post.title}</h3>
                </Card.Header>
                <Card.Body>
                  <Image
                    src={post.image}
                    alt={post.title}
                    className="blog_image mb-3"
                    fluid
                  />
                  <div
                    className="blog_description"
                    dangerouslySetInnerHTML={{ __html: post.description }}
                  />
                </Card.Body>
              </Card>
            ))}
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};

export default Blogs;
