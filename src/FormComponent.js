import React, { useState } from "react";
import CommonInput from "./CommonInput";
import { toast } from "react-toastify";
import { jsPDF } from "jspdf"; // Import jsPDF
import "./FormComponent.css"; // Reference the updated CSS file

const FormComponent = () => {
  const [formData, setFormData] = useState({
    name: "",
    bio: "",
    phone: "",
    email: "",
    address: "",
    dateOfBirth: "",
    gender: "",
    terms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Log the formData to the console
    console.log("Form Data:", formData);

    // Create a new jsPDF instance
    const doc = new jsPDF();

    // Add content to the PDF (you can customize this)
    doc.text("Bio Data Form", 10, 10);
    doc.text(`Name: ${formData.name}`, 10, 20);
    doc.text(`Bio: ${formData.bio}`, 10, 30);
    doc.text(`Phone: ${formData.phone}`, 10, 40);
    doc.text(`Email: ${formData.email}`, 10, 50);
    doc.text(`Address: ${formData.address}`, 10, 60);
    doc.text(`Date of Birth: ${formData.dateOfBirth}`, 10, 70);
    doc.text(`Gender: ${formData.gender}`, 10, 80);
    doc.text(`Accepted Terms: ${formData.terms ? "Yes" : "No"}`, 10, 90);

    // Save the PDF
    doc.save("bio_data.pdf");

    toast.success("Form submitted successfully! PDF downloaded.");

    // Reset form data after submission
    setFormData({
      name: "",
      bio: "",
      phone: "",
      email: "",
      address: "",
      dateOfBirth: "",
      gender: "",
      terms: false,
    });
  };

  return (
    <div className="form-wrapper">
      <div className="bio-data-form">
        <form onSubmit={handleSubmit} className="form-container">
          <div className="heading-container">
            <h1>Bio Data Form</h1>
          </div>
          <CommonInput
            label="Name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            name="name"
            autoComplete="name"
          />
          <CommonInput
            label="Bio"
            type="textarea"
            value={formData.bio}
            onChange={handleChange}
            name="bio"
            autoComplete="off"
          />
          <CommonInput
            label="Phone Number"
            type="text"
            value={formData.phone}
            onChange={handleChange}
            name="phone"
            autoComplete="tel"
          />
          <CommonInput
            label="Email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            name="email"
            autoComplete="email"
          />
          <CommonInput
            label="Address"
            type="textarea"
            value={formData.address}
            onChange={handleChange}
            name="address"
            autoComplete="address-line1"
          />
          <CommonInput
            label="Date of Birth"
            type="date"
            value={formData.dateOfBirth}
            onChange={handleChange}
            name="dateOfBirth"
            autoComplete="bday"
          />
          <CommonInput
            label="Accept Terms"
            type="checkbox"
            checked={formData.terms}
            onChange={handleChange}
            name="terms"
            autoComplete="off"
          />
          <CommonInput
            label="Gender"
            type="radio"
            value={formData.gender}
            onChange={handleChange}
            name="gender"
            options={[
              { label: "Male", value: "male" },
              { label: "Female", value: "female" },
              { label: "Other", value: "other" },
            ]}
            autoComplete="gender"
          />
  
          <button type="submit">Submit</button>
  
          {/* Portfolio Link */}
          <div className="portfolio-link">
            <p>
              Check out my portfolio:{" "}
              <a
                href="https://mfaiz01.github.io/MyPortfolio/"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Portfolio
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
  
};

export default FormComponent;
