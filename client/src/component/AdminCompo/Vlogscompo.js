import React, { useState } from 'react';
import axios from 'axios';

export default function Vlogscompo() {
  const [formData, setFormData] = useState({
    category: '',
    title: '',
    subject: '',
    description: '',
    link: '',
    cover_image: ''
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, cover_image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/vlog/postvlog', formData);
      console.log(response.data);
      alert('Vlog posted successfully!');
      // Reset form after successful submission
      setFormData({
        category: '',
        title: '',
        subject: '',
        description: '',
        link: '',
        cover_image: ''
      });
    } catch (error) {
      console.error('Error posting vlog:', error);
      alert('Failed to post vlog. Please try again.');
    }
  };

  return (
    <div>
      <h1>Post a New Vlog</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="category">Category:</label>
          <input
            type="text"
            id="category"
            name="category"
            value={formData.category}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="subject">Subject:</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="link">Link:</label>
          <input
            type="text"
            id="link"
            name="link"
            value={formData.link}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="cover_image">Cover Image:</label>
          <input
            type="file"
            id="cover_image"
            name="cover_image"
            onChange={handleImageUpload}
            accept="image/*"
          />
        </div>
        {formData.cover_image && (
          <img src={formData.cover_image} alt="Cover" style={{ maxWidth: '200px' }} />
        )}
        <button type="submit">Post Vlog</button>
      </form>
    </div>
  );
}