import React, { useState } from "react";
import emailjs from "@emailjs/browser";

// PUBLIC_INTERFACE
function ContactSection() {
  // Don't commit personal config keys, use public/test keys in environment
  const emailjsServiceId = process.env.REACT_APP_EMAILJS_SERVICE_ID ?? "";
  const emailjsTemplateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID ?? "";
  const emailjsUserId = process.env.REACT_APP_EMAILJS_PUBLIC_KEY ?? "";

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null);

  // PUBLIC_INTERFACE
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  // PUBLIC_INTERFACE
  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus(null);

    if (!form.name || !form.email || !form.message) {
      setStatus({ type: "error", msg: "Please fill all fields." });
      return;
    }

    emailjs
      .send(
        emailjsServiceId,
        emailjsTemplateId,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        emailjsUserId
      )
      .then(
        () => {
          setStatus({ type: "success", msg: "Sent! I’ll get back to you soon." });
          setForm({ name: "", email: "", message: "" });
        },
        () => {
          setStatus({ type: "error", msg: "Failed to send. Try again later." });
        }
      );
  };

  return (
    <div className="contact-section">
      <div className="contact-title">Contact Me</div>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          name="name"
          autoComplete="name"
          type="text"
          required
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
        />
        <input
          name="email"
          autoComplete="email"
          type="email"
          required
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
        />
        <textarea
          name="message"
          required
          placeholder="How can I help?"
          value={form.message}
          onChange={handleChange}
          rows={5}
        />
        <button type="submit">Send Message</button>
        {status && (
          <div className={status.type === "success" ? "contact-success" : "contact-error"}>
            {status.msg}
          </div>
        )}
      </form>
    </div>
  );
}

export default ContactSection;
