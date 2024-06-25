import React, { Fragment, useState } from "react";
import { CSSTransition } from "react-transition-group";
import "./styles/targetPublic.css";
import Card from "react-bootstrap/Card";

const TargetPublic = (props) => {
  const [isMounted, setIsMounted] = useState(false);

  const handleMount = () => {
    setIsMounted(true);
  };
  return (
    <Fragment>
      <Card className="card2" style={{ width: "18rem", height: "25rem" }}>
        <Card.Img variant="top" src={props.image} />
        <Card.Body>
          <Card.Text>
            <CSSTransition in={isMounted} timeout={500} classNames="fade">
              <div className="fade-in">
                <h2>{props.title}</h2>
              </div>
            </CSSTransition>
          </Card.Text>
          <button onClick={handleMount}>{props.description}</button>
        </Card.Body>
      </Card>
    </Fragment>
  );
};
export default TargetPublic;
