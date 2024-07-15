import React, { useState, useEffect } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export default function BlogsCompo() {
  const [blogs, setBlogs] = useState([]);
  const [formData, setFormData] = useState({
    category: '',
    title: '',
    subject: '',
    description: '',
    link: '',
    images: [],
  });
  const [editingId, setEditingId] = useState(null);

  const categories = ['Technology', 'Lifestyle', 'Travel', 'Food']; // Add more categories as needed

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const response = await axios.get('http://localhost:5000/blog/getblogs');
      setBlogs(response.data);
    } catch (error) {
      console.error('Error fetching blogs:', error);
      toast.error('Failed to fetch blogs');
    }
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    Promise.all(files.map(file => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(file);
      });
    }))
    .then(results => {
      setFormData(prevState => ({
        ...prevState,
        images: [...prevState.images, ...results]
      }));
    })
    .catch(error => toast.error('Failed to process images'));
  };

  const handleRemoveImage = (index) => {
    setFormData(prevState => ({
      ...prevState,
      images: prevState.images.filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingId) {
        await axios.put(`http://localhost:5000/blog/updateblog/${editingId}`, formData);
        toast.success('Blog updated successfully');
      } else {
        await axios.post('http://localhost:5000/blog/create', formData);
        toast.success('Blog created successfully');
      }
      setFormData({ category: '', title: '', subject: '', description: '', link: '', images: [] });
      setEditingId(null);
      fetchBlogs();
    } catch (error) {
      console.error('Error with blog:', error);
      toast.error('Error processing blog');
    }
  };

  const handleEdit = (blog) => {
    setFormData(blog);
    setEditingId(blog._id);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/blog/deleteblog/${id}`);
      toast.success('Blog deleted successfully');
      fetchBlogs();
    } catch (error) {
      console.error('Error deleting blog:', error);
      toast.error('Failed to delete blog');
    }
  };

  const handleDescriptionChange = (content) => {
    setFormData((prevData) => ({
      ...prevData,
      description: content,
    }));
  };

  const modules = {
    toolbar: [
      ['bold', 'italic', 'underline'],
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
    ],
  };

  return (
    <div className="max-w-4xl p-6 mx-auto bg-gray-100 rounded-lg shadow-lg">
      <h1 className="mb-6 text-3xl font-bold text-center text-blue-600">Blog Management</h1>
      <form onSubmit={handleSubmit} className="p-6 mb-8 space-y-4 bg-white rounded-lg shadow-md">
        <div>
          <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category:</label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleInputChange}
            required
            className="block w-full mt-1 border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          >
            <option value="">Select a category</option>
            {categories.map((category) => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            required
            className="block w-full mt-1 border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject:</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleInputChange}
            required
            className="block w-full mt-1 border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">
            Description:
          </label>
          <ReactQuill
            id="description"
            value={formData.description}
            onChange={handleDescriptionChange}
            modules={modules}
            className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            style={{ height: '200px' }}
          />
        </div>
        <div className='pt-12'>
          <label htmlFor="link" className="block text-sm font-medium text-gray-700">Link:</label>
          <input
            type="text"
            id="link"
            name="link"
            value={formData.link}
            onChange={handleInputChange}
            required
            className="block w-full mt-1 border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
        <div>
          <label htmlFor="images" className="block text-sm font-medium text-gray-700">Images:</label>
          <input
            type="file"
            id="images"
            name="images"
            onChange={handleImageUpload}
            accept="image/*"
            multiple
            className="block w-full mt-1 text-sm text-gray-500 border file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-gray-50 file:text-blue-700 hover:file:bg-gray-100"
          />
        </div>
        <div className="flex flex-wrap mt-2">
          {formData.images.map((image, index) => (
            <div key={index} className="relative m-2">
              <img src={image} alt={`uploaded-${index}`} className="object-cover w-24 h-24 rounded" />
              <button
                type="button"
                onClick={() => handleRemoveImage(index)}
                className="absolute top-0 right-0 flex items-center justify-center w-6 h-6 text-white bg-red-500 rounded-full hover:bg-red-600"
              >
                X
              </button>
            </div>
          ))}
        </div>
        <button 
          type="submit" 
          className="w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          {editingId ? 'Update Blog' : 'Create Blog'}
        </button>
      </form>

      <h2 className="mb-4 text-2xl font-bold text-center text-blue-600">Existing Blogs</h2>
      <div className="space-y-4">
        {blogs.map((blog) => (
          <div key={blog._id} className="p-4 bg-white rounded-lg shadow">
            <h3 className="mb-2 text-xl font-semibold">{blog.title}</h3>
            <p className="mb-2 text-gray-600">{blog.subject}</p>
            <p className="mb-2 text-sm text-gray-500">Category: {blog.category}</p>
            <div className="flex flex-wrap mb-2">
              {blog.images.map((image, index) => (
                <img key={index} src={image} alt={`blog-${index}`} className="object-cover w-20 h-20 m-1 rounded" />
              ))}
            </div>
            <div className="flex space-x-2">
              <button
                onClick={() => handleEdit(blog)}
                className="px-3 py-1 text-sm text-white bg-green-500 rounded hover:bg-green-600"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(blog._id)}
                className="px-3 py-1 text-sm text-white bg-red-500 rounded hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}