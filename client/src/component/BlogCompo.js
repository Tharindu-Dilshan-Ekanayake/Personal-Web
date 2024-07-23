import axios from 'axios';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import DOMPurify from 'dompurify';
import 'tailwindcss/tailwind.css';

export default function BlogCompo() {
  const [blogs, setBlogs] = useState([]);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [enlargedImage, setEnlargedImage] = useState(null);

  const getBlogs = async () => {
    try {
      const response = await axios.get('/blog/getblogs');
      setBlogs(response.data);
    } catch (error) {
      console.error('Error fetching blogs:', error);
      toast.error('Failed to fetch blogs');
    }
  };

  useEffect(() => {
    getBlogs();
  }, []);

  const createMarkup = (content) => {
    const sanitizedContent = DOMPurify.sanitize(content);
    return { __html: sanitizedContent };
  };

  const handleViewBlog = (blog) => {
    setSelectedBlog(blog);
  };

  const handleClosePopup = () => {
    setSelectedBlog(null);
  };

  const handleEnlargeImage = (image) => {
    setEnlargedImage(image);
  };

  const handleCloseEnlargedImage = () => {
    setEnlargedImage(null);
  };

  return (
    <div className="container px-4 py-6 mx-auto ">
      <h1 className="mb-8 text-4xl font-extrabold text-center">Blogs</h1>
      <hr></hr>
      {blogs.length === 0 ? (
        <p className="text-center text-gray-500">No blogs found.</p>
      ) : (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <article key={blog._id} className="overflow-hidden border-orange-500 rounded-lg shadow-md bg-[#19191a31] border-[1.5px]">
              {blog.images && blog.images.length > 0 && (
                <img
                  src={blog.images[0]}
                  alt={blog.title}
                  className="object-cover w-full h-48 cursor-pointer"
                  onClick={() => handleEnlargeImage(blog.images[0])}
                />
              )}
              <div className="p-4 ">
                <h2 className="mb-2 text-xl font-bold">{blog.title}</h2>
                <p className="mb-2 text-sm text-gray-600"><strong>Category:</strong> {blog.category}</p>
                <p className="mb-4 text-sm text-gray-800"><strong>Subject:</strong> {blog.subject}</p>
                <button
                  onClick={() => handleViewBlog(blog)}
                  className="px-4 py-2 text-white bg-orange-500 rounded hover:bg-orange-600"
                >
                  View Details
                </button>
              </div>
            </article>
          ))}
        </div>
      )}

      {selectedBlog && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="p-6 mx-4 overflow-y-auto bg-white rounded-lg shadow-xl max-w-3xl max-h-[90vh]">
            <h2 className="mb-4 text-3xl font-bold">{selectedBlog.title}</h2>
            <p className="mb-2 text-lg text-gray-600"><strong>Category:</strong> {selectedBlog.category}</p>
            <p className="mb-4 text-lg text-gray-800"><strong>Subject:</strong> {selectedBlog.subject}</p>
            {selectedBlog.images && selectedBlog.images.length > 0 && (
              <div className="flex mb-4 space-x-2 overflow-x-auto">
                {selectedBlog.images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`${selectedBlog.title} - ${index + 1}`}
                    className="object-cover w-32 h-32 cursor-pointer"
                    onClick={() => handleEnlargeImage(image)}
                  />
                ))}
              </div>
            )}
            <div
              className="mb-4 prose text-justify lg:prose-xl max-w-none blog-content"
              dangerouslySetInnerHTML={createMarkup(selectedBlog.description)}
            />
            <button
              onClick={handleClosePopup}
              className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {enlargedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
          <div className="relative">
            <img
              src={enlargedImage}
              alt="Enlarged view"
              className="max-w-full max-h-[90vh] object-contain"
            />
            <button
              onClick={handleCloseEnlargedImage}
              className="absolute top-0 right-0 px-2 py-1 m-2 text-white bg-red-500 rounded hover:bg-red-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}