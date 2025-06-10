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
  };

  return (
    <main className="flex flex-col items-center justify-center text-center text-white px-4">
      <h1 className="font-rem text-[#D2FF14] text-[90px] sm:text-[120px] mt-48">COMING SOON</h1>

      <div className="font-rem text-[#f0f0f0] text-lg mt-5 leading-6">
        <p>
          Türkiye merkezli bir <span className="font-bold">yazılım ve dijital içerik</span> stüdyosu olan{" "}
          <span className="text-[#D2FF14] font-bold">Mivoll</span> yakında sizlerle!
        </p>
        <p>Dijital dünyada fark yaratmaya hazırlanıyoruz. O zamana kadar bizimle mail</p>
        <p>üzerinden iletişime geçebilirsiniz.</p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-8 mt-16">
        <input
          type="text"
          name="message"
          placeholder="Mesajınızı Giriniz"
          value={formData.message}
          onChange={handleChange}
          className="bg-[#101114] border-4 border-[#3a3a3a] text-white placeholder:text-[#7a7a7a] px-6 py-4 rounded-md w-72 focus:outline-none border-b-0 border-l-0"
        />
        <input
          type="email"
          name="email"
          placeholder="Mail Adresi"
          value={formData.email}
          onChange={handleChange}
          className="bg-[#101114] border-4 border-[#3a3a3a] text-white placeholder:text-[#7a7a7a] px-6 py-4 rounded-md w-72 focus:outline-none border-b-0 border-l-0"
        />

        <button
          type="submit"
          className="font-poppins border-4 border-[#3a3a3a] border-b-0 border-l-0 bg-[#101114]  text-[#D2FF14] px-6 py-4 rounded-md hover:bg-[#D2FF14] hover:text-[#101114]  transition-colors"
        >
          Gönder
        </button>
      </form>
    </main>
  );
}
