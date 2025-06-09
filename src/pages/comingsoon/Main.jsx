import React, { useState } from "react";

export default function Main() {
  const [formData, setFormData] = useState({
    message: "",
    email: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Here you can add logic to send the data to an API or backend
  };
  return (
    <div className="text-center">
      <h1 className="text-[#D2FF14] text-9xl mt-48">COMING SOON</h1>
      <div className="text-white text-lg mt-16">
        <p>Türkiye merkezli bir yazılım ve dijital içerik stüdyosu olan Mivoll yakında sizlerle!</p>
        <p>Dijital dünyada fark yaratmaya hazırlanıyoruz. O zamana kadar bizimle mail </p>
        <p>üzerinden iletişime geçebilirsiniz. </p>
      </div>

      <div className="flex flex-row">
        <form onSubmit={handleSubmit}>
          <div>
            <label>
              Your Message:
              <textarea name="message" value={formData.message} onChange={handleChange} rows="4" cols="40" />
            </label>
          </div>
          <div>
            <label>
              Your Mail:
              <input type="email" name="email" value={formData.email} onChange={handleChange} required />
            </label>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
