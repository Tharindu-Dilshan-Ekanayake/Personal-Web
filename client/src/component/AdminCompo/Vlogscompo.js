import React, { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

export default function Vlogscompo() {
  const [formData, setFormData] = useState({
    category: '',
    title: '',
    subject: '',
    description: '',
    link: '',
    cover_image: ''
  });

  const categories = ['Education', 'Entertainment'];

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
      toast.success("Created vlog successfully");
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
      toast.error('Missing required field');
    }
  };

  return (
    <div className="max-w-2xl p-6 mx-auto rounded-lg shadow-md bg-blue-50">
      <h1 className="mb-6 text-3xl font-bold text-center text-blue-600">Post a New Vlog</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="category" className="block text-sm font-medium text-green-700">Category:</label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleInputChange}
            required
            className="block w-full mt-1 border-blue-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          >
            <option value="">Select a category</option>
            {categories.map((category) => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-green-700">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            required
            className="block w-full mt-1 border-blue-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          />
        </div>
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-green-700">Subject:</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleInputChange}
            required
            className="block w-full mt-1 border-blue-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          />
        </div>
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-green-700">Description:</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            className="block w-full h-32 mt-1 border-blue-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          />
        </div>
        <div>
          <label htmlFor="link" className="block text-sm font-medium text-green-700">Link:</label>
          <input
            type="text"
            id="link"
            name="link"
            value={formData.link}
            onChange={handleInputChange}
            required
            className="block w-full mt-1 border-blue-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          />
        </div>
        <div>
          <label htmlFor="cover_image" className="block text-sm font-medium text-green-700">Cover Image:</label>
          <input
            type="file"
            id="cover_image"
            name="cover_image"
            onChange={handleImageUpload}
            accept="image/*"
            className="block w-full mt-1 text-sm text-blue-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
          />
        </div>
        {formData.cover_image && (
          <img src={formData.cover_image} alt="Cover" className="max-w-xs mt-4 rounded shadow-md" />
        )}
        <button 
          type="submit" 
          className="w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Post Vlog
        </button>
      </form>
    </div>
  );
}