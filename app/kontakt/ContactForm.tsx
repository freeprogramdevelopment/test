"use client";

import { useState } from "react";

type Errors = { name?: string; email?: string; message?: string };

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(name: string, email: string, message: string): Errors {
  const err: Errors = {};
  if (!name.trim()) err.name = "Upišite ime i prezime";
  else if (name.trim().length < 2) err.name = "Ime mora imati najmanje 2 znaka";
  if (!email.trim()) err.email = "Upišite email adresu";
  else if (!emailRegex.test(email)) err.email = "Upišite ispravnu email adresu";
  if (!message.trim()) err.message = "Upišite poruku";
  else if (message.trim().length < 10) err.message = "Poruka mora imati najmanje 10 znakova";
  return err;
}

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const err = validate(formData.name, formData.email, formData.message);
    setErrors(err);
    if (Object.keys(err).length > 0) return;

    setStatus("sent");
  };

  const inputClass =
    "w-full rounded-lg border bg-zinc-50/50 px-4 py-3 text-zinc-900 placeholder:text-zinc-400 focus:bg-white focus:outline-none focus:ring-1 transition-colors";
  const inputError =
    "border-red-500 focus:border-red-500 focus:ring-red-500";
  const inputOk =
    "border-zinc-200 focus:border-[#2d7cff] focus:ring-[#2d7cff]";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="sr-only">
          Ime
        </label>
        <input
          id="name"
          type="text"
          placeholder="Ime i prezime"
          value={formData.name}
          onChange={(e) => {
            setFormData((p) => ({ ...p, name: e.target.value }));
            if (errors.name) setErrors((e) => ({ ...e, name: undefined }));
          }}
          className={`${inputClass} ${errors.name ? inputError : inputOk}`}
          disabled={status === "sent"}
        />
        {errors.name && (
          <p className="mt-1.5 text-sm text-red-600">
            {errors.name}
          </p>
        )}
      </div>
      <div>
        <label htmlFor="email" className="sr-only">
          Email
        </label>
        <input
          id="email"
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => {
            setFormData((p) => ({ ...p, email: e.target.value }));
            if (errors.email) setErrors((e) => ({ ...e, email: undefined }));
          }}
          className={`${inputClass} ${errors.email ? inputError : inputOk}`}
          disabled={status === "sent"}
        />
        {errors.email && (
          <p className="mt-1.5 text-sm text-red-600">
            {errors.email}
          </p>
        )}
      </div>
      <div>
        <label htmlFor="message" className="sr-only">
          Poruka
        </label>
        <textarea
          id="message"
          rows={4}
          placeholder="Poruka"
          value={formData.message}
          onChange={(e) => {
            setFormData((p) => ({ ...p, message: e.target.value }));
            if (errors.message) setErrors((e) => ({ ...e, message: undefined }));
          }}
          className={`${inputClass} resize-none ${errors.message ? inputError : inputOk}`}
          disabled={status === "sent"}
        />
        {errors.message && (
          <p className="mt-1.5 text-sm text-red-600">
            {errors.message}
          </p>
        )}
      </div>
      {status === "sent" && (
        <p className="text-sm text-green-600">
          Poruka je poslana. Javit ćemo vam se uskoro.
        </p>
      )}
      <button
        type="submit"
        disabled={status === "sent"}
        className="w-full rounded-full bg-zinc-900 px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-zinc-800 disabled:opacity-60"
      >
        {status === "sent" ? "Poslano" : "Pošalji"}
      </button>
    </form>
  );
}
