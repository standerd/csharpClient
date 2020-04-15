import React from "react";
import { Container } from "semantic-ui-react";
import { Link } from "react-router-dom";

export const HomePage = () => {
  return (
    <Container style={{ marginTop: "7em" }}>
      <h1>Homne Page</h1>
      <h3>
        Go To <Link to="/activities">ACTIVITIES</Link>
      </h3>
    </Container>
  );
};
