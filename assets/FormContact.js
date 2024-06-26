import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import axios from "axios";

export default function FormContact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    text: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Données du formulaire", formData);
    addMessage();
  };

  const addMessage = () => {
    axios
      .post("http://127.0.0.1:8000/api/messages", formData, {
        headers: { "Content-Type": "application/ld+json" },
      })
      .then((response) => console.log("retour axios post :", response));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Votre nom</Form.Label>
        <Form.Control
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="votre nom"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Votre adresse Email</Form.Label>
        <Form.Control
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="nom@example.com"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPhone">
        <Form.Label>Votre numéro de téléphone</Form.Label>
        <Form.Control
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="0123456789"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea">
        <Form.Label>Votre message/Votre demande de devis</Form.Label>
        <Form.Control
          as="textarea"
          type="text"
          name="text"
          value={formData.text}
          onChange={handleChange}
          rows={3}
        />
      </Form.Group>
      <button type="submit">Envoyer</button>
    </Form>
  );
}
