'use client';

import { useState } from 'react';

const ContactForm = () => {
  const [submitting, setSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      message: formData.get('message'),
    };

    try {
      const res = await fetch('/api/submit-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setSuccessMessage('Thank you, a specialist will be contacting you shortly!');
        form.reset();

        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 3000);
      } else {
        alert('There was an error submitting your request.');
      }
    } catch (error) {
      console.error('Submission error:', error);
      alert('There was an error submitting your request.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      {successMessage && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4 text-center shadow-md">
          {successMessage}
        </div>
      )}
      <form
        onSubmit={handleSubmit}
        className="space-y-4 bg-blue-500/20 backdrop-blur-lg  shadow-sm shadow-blue-500 p-8 rounded-xl max-w-lg mx-auto"
      >
        <input
          name="name"
          type="text"
          required
          placeholder="Your Name"
          className="w-full p-3 border border-gray-300 rounded bg-gray-50/60 text-blue-950 placeholder-blue-950 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          name="email"
          type="email"
          required
          placeholder="Your Email"
          className="w-full p-3 border border-gray-300 rounded bg-gray-50/60 text-blue-950 placeholder-blue-950 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          name="phone"
          type="tel"
          required
          placeholder="Your Phone Number"
          className="w-full p-3 border border-gray-300 rounded bg-gray-50/60 text-blue-950 placeholder-blue-950 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <textarea
          name="message"
          rows={4}
          placeholder="How can we help?"
          className="w-full p-3 border border-gray-300 rounded bg-gray-50/60 text-blue-950 placeholder-blue-950 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          type="submit"
          disabled={submitting}
          className="bg-blue-900 text-gray-200 py-3 px-6 rounded font-semibold hover:bg-blue-700 transition-colors duration-300 shadow-sm shadow-blue-500"
        >
          {submitting ? 'Sending...' : 'Send Request'}
        </button>
      </form>
    </>
  );
  
  
};

export default ContactForm;
