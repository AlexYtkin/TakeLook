import React from "react";
import { Card } from "react-bootstrap";
import "./../../../style.css";

const Info = ({specialist}) => {
  return(
      <Card className="specialist_block">
        <Card.Header>
          <Card.Title>
            Об организаторе
          </Card.Title>
        </Card.Header>
        <Card.Body>
          <p>{specialist.name}</p>
          <p>{specialist.description}</p>
          <p>{specialist.uri}</p>
          <p>{specialist.type}</p>
        </Card.Body>
      </Card>
  )
}
export default Info;