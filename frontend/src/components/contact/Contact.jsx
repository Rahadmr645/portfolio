import React, { useState } from "react";
import { Mail, Github, Linkedin, Send, Copy, Check } from "lucide-react";
import { SiUpwork } from "react-icons/si";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submissionStatus, setSubmissionStatus] = useState("");
  const [copied, setCopied] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmissionStatus("Sending...");
    
    try {
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000/api/contact';
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setFormData({ name: "", email: "", message: "" });
        setSubmissionStatus("success");
      } else {
        setSubmissionStatus(data.message || "Failed to send message.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setSubmissionStatus("Network error. Make sure the backend server is running.");
    }
    
    // Reset status after a few seconds
    setTimeout(() => setSubmissionStatus(""), 4000);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("rahadmr645@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const SocialLink = ({ Icon, href }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="social-link d-inline-flex align-items-center justify-content-center"
    >
      <Icon size={20} />
    </a>
  );

  return (
    <div className="contact-section text-light d-flex flex-column justify-content-center align-items-center min-vh-100" id="contact">
      <div className="container py-5">
        
        {/* Glow backdrop ornament */}
        <div className="contact-glow-orb"></div>

        <div className="text-center mb-5">
          <h2 className="gradient-text fw-bold display-5">Get In Touch</h2>
          <p className="text-secondary mt-2">Have a project in mind or want to collaborate? Drop me a line.</p>
        </div>

        <div className="row g-4 justify-content-center">
          
          {/* Form Card */}
          <div className="col-lg-7">
            <div className="contact-card p-4 p-md-5 glass-card">
              <form onSubmit={handleSubmit}>
                <div className="form-group-custom mb-4">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    className="form-control-custom"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  <label htmlFor="name" className="form-label-custom">Your Name</label>
                </div>

                <div className="form-group-custom mb-4">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    className="form-control-custom"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  <label htmlFor="email" className="form-label-custom">Your Email</label>
                </div>

                <div className="form-group-custom mb-5">
                  <textarea
                    name="message"
                    id="message"
                    required
                    rows="4"
                    className="form-control-custom textarea-custom"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                  <label htmlFor="message" className="form-label-custom">Your Message</label>
                </div>

                <button
                  type="submit"
                  className="btn btn-submit-glow w-100 py-3 fw-bold d-flex align-items-center justify-content-center"
                  disabled={submissionStatus === "Sending..."}
                >
                  {submissionStatus === "Sending..." ? (
                    <>
                      <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                      Transmitting...
                    </>
                  ) : (
                    <>
                      Send Message <Send className="ms-2" size={16} />
                    </>
                  )}
                </button>

                {/* Display Success / Error Alerts */}
                {submissionStatus && submissionStatus !== "Sending..." && (
                  <div className={`status-msg-box mt-4 text-center p-3 rounded-3 ${submissionStatus === "success" ? "status-success" : "status-error"}`}>
                    {submissionStatus === "success" 
                      ? "Transmission successful. Message saved in database. I will get back to you shortly." 
                      : submissionStatus
                    }
                  </div>
                )}
              </form>
            </div>
          </div>

          {/* Info Cards */}
          <div className="col-lg-4 d-flex flex-column gap-4">
            
            {/* Connect Card */}
            <div className="info-card p-4 glass-card d-flex flex-column align-items-center text-center">
              <h4 className="fw-bold mb-3 text-white">Connect With Me</h4>
              <p className="text-secondary mb-4 small" style={{ lineHeight: '1.6' }}>
                I am open to contract roles, full-time positions, and interesting AI/MERN collaborations.
              </p>
              <div className="d-flex gap-3 justify-content-center w-100">
                <SocialLink Icon={Linkedin} href="https://www.linkedin.com/in/md-rahad-patwary-4b326a237" />
                <SocialLink Icon={Github} href="https://github.com/Rahadmr645" />
                <SocialLink Icon={SiUpwork} href="https://www.upwork.com/freelancers/~018825ac66df4d612c" />
              </div>
            </div>

            {/* Direct Email Card */}
            <div className="info-card p-4 glass-card d-flex flex-column align-items-center text-center">
              <h6 className="text-uppercase text-info tracking-wider mb-3 font-mono small">Direct Channel</h6>
              <div className="email-icon-box mb-2">
                <Mail className="text-info" size={24} />
              </div>
              <span className="fw-semibold text-white mb-3 small">rahadmr645@gmail.com</span>
              
              <button
                className="copy-email-btn d-flex align-items-center gap-2"
                onClick={handleCopyEmail}
              >
                {copied ? (
                  <>
                    <Check size={14} /> Copied!
                  </>
                ) : (
                  <>
                    <Copy size={14} /> Copy Address
                  </>
                )}
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
