'use client';

import React, { useState } from 'react';

const ContactUsPage = () => {
  const [values, setValues] = useState({
    topic: '',
    email: '',
    name: '',
    postalCode: '',
    phone: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const validate = () => {
    let tempErrors = {};
    if (!values.topic) tempErrors.topic = "Topic is required.";
    if (!values.email) {
      tempErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      tempErrors.email = "Email is not valid.";
    }
    if (!values.name) tempErrors.name = "Full Name is required.";
    if (!values.postalCode) tempErrors.postalCode = "ZIP/Postal Code is required.";
    if (!values.phone) tempErrors.phone = "Phone Number is required.";
    if (!values.message) tempErrors.message = "Message is required.";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        const mergedMessage = `
        ${values.message}
        

        Email Address: ${values.email}
        Full Name: ${values.name}
        ZIP/Postal Code: ${values.postalCode}
        Phone Number: ${values.phone}
        `;
  
        const requestOptions = {
          method: 'POST',
          headers: {
            'x-rapidapi-key': '2cd655e0dcmsh050a224f3d4447ep1bdedbjsn82a49cb6d4b7',
            'x-rapidapi-host': 'mail-sender-api1.p.rapidapi.com',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            sendto: 'reign021b@gmail.com',
            name: values.name,
            replyTo: values.email,
            ishtml: 'false',
            title: `ScrapCyclePH Website - ${values.topic}`,
            body: mergedMessage,
          }),
        };
  
        const response = await fetch('https://mail-sender-api1.p.rapidapi.com/', requestOptions);
  
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
  
        const result = await response.text();
        console.log(result);
  
        alert('Email sent successfully!');
      } catch (error) {
        console.error('Error sending email:', error);
        alert('Failed to send email');
      }
    } else {
      alert('Please fill out all required fields correctly.');
    }
  };
  

  return (
    <div className="px-5 md:px-0 flex flex-col items-center mt-20 mb-60 container mx-auto max-w-xl">
      <h1 className="text-3xl md:text-4xl font-semibold">Contact Us</h1>
      <p className="text-center mt-7 mb-10 text-slate-500">
        Need to reach us? Call or message our phone number (+63) 966-902-8659 or
        fill up the form and our team will get back to you within 24 hours.
      </p>
      <form onSubmit={onSubmit} className="space-y-4 w-full">
        {/* Topic */}
        <h2 className="self-start mb-2 font-semibold">Topic</h2>
        <select
          name="topic"
          value={values.topic}
          onChange={handleChange}
          className="form-select w-full px-4 py-3 rounded-xl mb-7 focus:border-green-600 focus:ring focus:ring-green-600 focus:ring-opacity-40"
        >
          <option value="">- Select Option -</option>
          <option value="Customer Service">Customer Service</option>
          <option value="Business Partnership">Business Partnership / Investment</option>
          <option value="Public Relations">Public Relations - media and press inquiries only</option>
          <option value="Strategic Alliance">Strategic Alliance and National Partnerships</option>
          <option value="Technical Issues">Technical Issues</option>
        </select>
        {errors.topic && <p className="text-red-500">{errors.topic}</p>}

        {/* Email */}
        <h2 className="self-start mb-2 font-semibold">Email Address</h2>
        <input
          type="email"
          name="email"
          placeholder="Your Email Address"
          value={values.email}
          onChange={handleChange}
          className="form-input w-full px-4 py-3 rounded-xl mb-7 focus:border-green-600 focus:ring focus:ring-green-600 focus:ring-opacity-40"
        />
        {errors.email && <p className="text-red-500">{errors.email}</p>}

        {/* Full Name */}
        <h2 className="self-start mb-2 font-semibold">Full Name</h2>
        <input
          type="text"
          name="name"
          placeholder="Your Full Name"
          value={values.name}
          onChange={handleChange}
          className="form-input w-full px-4 py-3 rounded-xl mb-7 focus:border-green-600 focus:ring focus:ring-green-600 focus:ring-opacity-40"
        />
        {errors.name && <p className="text-red-500">{errors.name}</p>}

        {/* ZIP/Postal Code */}
        <h2 className="self-start mb-2 font-semibold">ZIP/Postal Code</h2>
        <input
          type="text"
          name="postalCode"
          placeholder="ZIP/Postal Code"
          value={values.postalCode}
          onChange={handleChange}
          className="form-input w-full px-4 py-3 rounded-xl mb-7 focus:border-green-600 focus:ring focus:ring-green-600 focus:ring-opacity-40"
        />
        {errors.postalCode && <p className="text-red-500">{errors.postalCode}</p>}

        {/* Phone */}
        <h2 className="self-start mb-2 font-semibold">Phone Number</h2>
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={values.phone}
          onChange={handleChange}
          className="form-input w-full px-4 py-3 rounded-xl mb-7 focus:border-green-600 focus:ring focus:ring-green-600 focus:ring-opacity-40"
        />
        {errors.phone && <p className="text-red-500">{errors.phone}</p>}

        {/* Message */}
        <h2 className="self-start mb-2 font-semibold">Your Message</h2>
        <textarea
          name="message"
          placeholder="Your Message"
          value={values.message}
          onChange={handleChange}
          className="form-textarea w-full px-4 py-3 rounded-xl mb-7 focus:border-green-600 focus:ring focus:ring-green-600 focus:ring-opacity-40"
        ></textarea>
        {errors.message && <p className="text-red-500">{errors.message}</p>}

        {/* Submit button */}
        <button
          type="submit"
          className="px-10 py-3 mt-6 w-full rounded-2xl font-medium bg-green-600 text-white hover:bg-green-800 transition duration-300"
        >
          Submit Message
        </button>
      </form>
    </div>
  );
};

export default ContactUsPage;
