import React, { useState } from 'react';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        alert('This form is just for practice—it doesn’t send messages yet.');
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <main className="contact">
            <section>
                <h2>Contact Me</h2>
                <p>Feel free to reach out using the form below!</p>
                <form onSubmit={handleSubmit} className="contact-form">
                    <label>
                        Name:
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </label>

                    <label>
                        Email:
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </label>

                    <label>
                        Message:
                        <textarea
                            name="message"
                            rows="5"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        />
                    </label>

                    <button type="submit">Send</button>
                </form>
            </section>
        </main>
    );
}

export default Contact;
