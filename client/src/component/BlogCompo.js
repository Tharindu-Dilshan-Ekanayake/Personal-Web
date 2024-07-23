import axios from 'axios';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import DOMPurify from 'dompurify';
import 'tailwindcss/tailwind.css';

export default function BlogCompo() {
  const [blogs, setBlogs] = useState([]);

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
    // Split content into paragraphs
    const paragraphs = content.split('</p>');

    // Process each paragraph
    const formattedParagraphs = paragraphs.map((p, index) => {
      if (p.trim()) {
        // Remove existing <p> tag if present
        const cleanP = p.replace(/<p>/g, '').trim();

        // Split into sentences
        const sentences = cleanP.split(/(?<=[.!?])\s+/);

        // Format sentences
        const formattedSentences = sentences.map((sentence, sentIndex) => 
          `<span class="sentence">${sentIndex + 1}. ${sentence}</span>`
        ).join(' ');

        // Return formatted paragraph
        return `<p class="paragraph">${index + 1}. ${formattedSentences}</p>`;
      }
      return '';
    });

    // Join paragraphs and sanitize
    const sanitizedContent = DOMPurify.sanitize(formattedParagraphs.join(''));

    return { __html: sanitizedContent };
  };

  return (
    <div className="container px-4 py-6 mx-auto">
      <h1 className="mb-8 text-4xl font-extrabold text-center">Blogs</h1>
      {blogs.length === 0 ? (
        <p className="text-center text-gray-500">No blogs found.</p>
      ) : (
        <div className="space-y-10">
          {blogs.map((blog, blogIndex) => (
            <article key={blog._id} className="overflow-hidden bg-white rounded-lg shadow-md">
              {blog.images && blog.images.length > 0 && (
                <img
                  src={blog.images[0]}
                  alt={blog.title}
                  className="object-cover w-full h-72"
                />
              )}
              <div className="p-8">
                <h2 className="mb-3 text-3xl font-bold">Blog #{blogIndex + 1}: {blog.title}</h2>
                <p className="mb-2 text-lg text-gray-600"><strong>Category:</strong> {blog.category}</p>
                <p className="mb-4 text-lg text-gray-800"><strong>Subject:</strong> {blog.subject}</p>
                <div
                  className="mb-4 prose lg:prose-xl max-w-none blog-content"
                  dangerouslySetInnerHTML={createMarkup(blog.description)}
                />
                <a
                  href={blog.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 text-white transition bg-blue-600 rounded hover:bg-blue-700"
                >
                  Read More
                </a>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
