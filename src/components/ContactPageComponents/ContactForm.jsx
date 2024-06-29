"use client";
import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import Button from "../UI/Button/Button";

const ContactForm = () => {
  const [sending, setSending] = useState(false);

  const handleSendEmail = async (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const phoneNumber = form.phoneNumber.value;
    const subject = form.subject.value;
    const message = form.message.value;

    if (!name) {
      return toast.error("Name is required!");
    } else if (!email) {
      return toast.error("Email is required!");
    } else if (!name) {
      return toast.error("Name is required!");
    } else if (!subject) {
      return toast.error("Subject is required!");
    } else if (!message) {
      return toast.error("Message is required!");
    } else if (!phoneNumber) {
      return toast.error("Phone Number is required!");
    }

    setSending(true);
    const data = { name, email, phoneNumber, subject, message };

    const response = await axios.post(
      "http://localhost:3000/api/contactMail",
      data,
    );

    if (response.data?.status) {
      toast.success("Message sended successfully!");
      form.reset();
      setSending(false);
    }
  };
  return (
    <div className="relative rounded-sm bg-gray-900 p-5 lg:p-10">
      <form onSubmit={handleSendEmail} className="space-y-5">
        <div className="flex flex-col items-center gap-4 lg:flex-row">
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Full name"
            className="w-full rounded-sm border-none bg-gray-500 bg-opacity-15 py-3 pl-4 pr-10 outline-none"
          />
          <input
            type="email"
            name="firstName"
            id="email"
            placeholder="Email address"
            className="w-full rounded-sm border-none bg-gray-500 bg-opacity-15 py-3 pl-4 pr-10 outline-none"
          />
        </div>
        <div className="flex flex-col items-center gap-4 lg:flex-row">
          <input
            type="text"
            name="phoneNumber"
            id="phoneNumber"
            placeholder="Phone no"
            className="w-full rounded-sm border-none bg-gray-500 bg-opacity-15 py-3 pl-4 pr-10 outline-none"
          />
          <input
            type="text"
            name="subject"
            id="subject"
            placeholder="Subject"
            className="w-full rounded-sm border-none bg-gray-500 bg-opacity-15 py-3 pl-4 pr-10 outline-none"
          />
        </div>
        <textarea
          name="message"
          id="message"
          rows={5}
          className="w-full rounded-sm border-none bg-gray-500 bg-opacity-15 py-3 pl-4 pr-10 outline-none"
        ></textarea>
        <Button
          disabled={sending}
          type="submit"
          className="w-full rounded-sm bg-indigo-500"
        >
          {sending ? "Sending.." : "Send message"}
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
