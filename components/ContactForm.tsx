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
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4 text-center">
          {successMessage}
        </div>
      )}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="name" type="text" required placeholder="Your Name" className="w-full p-3 border rounded" />
        <input name="email" type="email" required placeholder="Your Email" className="w-full p-3 border rounded" />
        <input name="phone" type="tel" required placeholder="Your Phone Number" className="w-full p-3 border rounded" />
        <textarea name="message" rows={4} placeholder="How can we help?" className="w-full p-3 border rounded" />
        <button type="submit" disabled={submitting} className="bg-blue-600 text-white py-3 px-6 rounded font-semibold hover:bg-blue-700">
          {submitting ? 'Sending...' : 'Send Request'}
        </button>
      </form>
    </>
  );
};

export default ContactForm;
