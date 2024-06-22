import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import axios from "axios";

export default function PerformancesPage() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [performance, setPerformances] = useState();
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/performances/1")
      .then((response) => response.data)
      .then((data) => {
        console.log("json:", data);
        setPerformances(data);
      });
  }, []);
  return (
    <>
      <div>
        <div className="d-flex flex-column m-2 ">
          <img
            src={performance ? "/uploads/" + performance.mainPhoto : ""}
            alt="drawing-garden"
          ></img>
          <p className="text-center p-1 fw-bold"></p>
          <div className="d-flex justify-content-center">
            <Button variant="success" onClick={handleShow}>
              Découvrir
            </Button>
          </div>
        </div>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Taille des haies</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            src={performance ? "/uploads/" + performance.mainPhoto : ""}
            alt="drawing-garden"
          ></img>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
