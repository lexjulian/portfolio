import { useState } from "react";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const emailjs = "";

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs
            .send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", formData, "YOUR_USER_ID")
            .then((response) => {
                console.log("SUCCESS!", response.status, response.text);
                // Reset form after successful submission
                setFormData({ name: "", email: "", message: "" });
            })
            .catch((err) => {
                console.log("FAILED...", err);
            });
    };

    return (
        <div className="container">
            <h1 className="title">Contact</h1>
            <p>Feel free to reach out to me through any of the platforms below:</p>
            <div className="social-links">
                <a
                    href="https://www.linkedin.com/in/your-profile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                >
                    LinkedIn
                </a>
                <a
                    href="https://twitter.com/your-profile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                >
                    Twitter
                </a>
                <a
                    href="https://github.com/your-profile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                >
                    GitHub
                </a>
            </div>

            <form onSubmit={handleSubmit} className="contact-form">
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                />
                <button type="submit">Send Message</button>
            </form>
        </div>
    );
};

export default Contact;
