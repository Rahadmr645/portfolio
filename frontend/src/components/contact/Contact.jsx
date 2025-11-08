import React, { useState } from "react";
import { Mail, Github, Linkedin, Twitter, Send } from "lucide-react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submissionStatus, setSubmissionStatus] = useState("");

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmissionStatus("Sending...");
    setTimeout(() => {
      setFormData({ name: "", email: "", message: "" });
      setSubmissionStatus("Message sent successfully!");
      setTimeout(() => setSubmissionStatus(""), 3000);
    }, 1500);
  };

  const SocialLink = ({ Icon, href }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="social-link d-inline-flex align-items-center justify-content-center"
    >
      <Icon size={22} />
    </a>
  );

  return (
    <div className="contact-section text-light d-flex flex-column justify-content-center align-items-center min-vh-100">
      <div className="container py-5">
        <h1 className="gradient-text text-center fw-bold mb-5">
          Get In Touch
        </h1>
        <div className="row g-4 justify-content-center">
          <div className="col-lg-7">
            <div className="contact-card p-5 rounded-4 shadow-lg">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="form-control contact-input"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    className="form-control contact-input"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    rows="4"
                    className="form-control contact-input"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="btn btn-gradient w-100 py-3 fw-bold"
                  disabled={submissionStatus === "Sending..."}
                >
                  {submissionStatus === "Sending..." ? (
                    <span className="spinner-border spinner-border-sm me-2"></span>
                  ) : (
                    <Send className="me-2" size={18} />
                  )}
                  {submissionStatus === "Sending..."
                    ? "Sending..."
                    : "Send Message"}
                </button>

                {submissionStatus && (
                  <div className="status-msg text-center mt-3">
                    {submissionStatus}
                  </div>
                )}
              </form>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="info-card p-4 rounded-4 shadow float-card mb-4">
              <h4 className="fw-semibold mb-3">Connect With Me</h4>
              <p className="text-secondary mb-4">
                I'm open to new projects, ideas, or collaborations.
              </p>
              <div className="d-flex gap-3 justify-content-center">
                <SocialLink Icon={Linkedin} href="#" />
                <SocialLink Icon={Github} href="https://github.com/Rahadmr645" />
                <SocialLink Icon={Twitter} href="#" />
              </div>
            </div>

            <div className="info-card p-4 rounded-4 shadow float-card">
              <h6 className="text-uppercase text-info mb-2">Direct Email</h6>
              <div className="d-flex align-items-center mb-2">
                <Mail className="me-2 text-info" size={22} />
                <span className="fw-semibold">rahadmr645@gmail.com</span>
              </div>
              <button
                className="copy-btn text-info border-0 bg-transparent"
                onClick={() => {
                  navigator.clipboard.writeText("rahadmr645@gmail.com");
                  setSubmissionStatus("Email copied to clipboard!");
                  setTimeout(() => setSubmissionStatus(""), 3000);
                }}
              >
                (Click to Copy)
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
