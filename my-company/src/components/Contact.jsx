import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Message sent by ${formData.name}`);
    // You can extend this to actually send data
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h2 style={{ color: '#333' }}>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          style={{ display: 'block', marginBottom: '10px', padding: '8px', width: '300px' }}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          style={{ display: 'block', marginBottom: '10px', padding: '8px', width: '300px' }}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          style={{ display: 'block', marginBottom: '10px', padding: '8px', width: '300px', height: '100px' }}
        />
        <button
          type="submit"
          style={{ backgroundColor: 'blue', color: 'white', padding: '10px 20px', border: 'none' }}
        >
          Send
        </button>
      </form>
    </div>
  );
}

export default Contact;
