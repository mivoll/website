import React, { useState } from "react";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";

export default function Main() {
  const [formData, setFormData] = useState({
    message: "",
    email: "",
  });

  const { screenWidth, screenHeight } = useWindowSize();

  const [isNotificationVisible, setNotificationVisible] = useState(false);
  const [isErrorNotificationVisible, setErrorNotificationVisible] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://formsubmit.co/ajax/info@mivoll.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.success === "true") {
        // ✅ Mail was sent successfully
        setNotificationVisible(true);
      } else {
        // ❌ Something went wrong
        console.error("FormSubmit error:", result);
        setErrorNotificationVisible(true);
      }
    } catch (error) {
      console.error("Network or server error:", error);
      // alert("A network error occurred. Please try again.");
      setErrorNotificationVisible(true);
    }
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

      {/* mail sent confirmation notification */}
      {isNotificationVisible && (
        <div>
          <Confetti width={screenWidth} height={screenHeight} gravity={0.03} />
          <div className="bg-black/7 text-[#cccccc] fixed top-1/8 tranform translate-x-[-50%] border border-[#D2FF1447] items-center justify-center rounded-4xl">
            <h3 className="font-rem font-bold text-3xl px-4 pt-6">Teşekkürler!</h3>
            <p className="font-rem text-2xl px-4 leading-7">Mailiniz gönderilmiştir 🚀 </p>
            <p className="font-rem text-xl px-4 pb-6">Size en kısa zamanda dönüş sağlayacağız.</p>
          </div>
        </div>
      )}
      {isErrorNotificationVisible && (
        <div className="bg-black/7 text-[#cccccc] fixed top-1/8 border border-[#D2FF1447] items-center justify-center rounded-4xl ">
          <p className="font-rem text-2xl px-4 py-6">Bir şeyler ters gitti.. Lütfen daha sonra tekrar deneyin.</p>
        </div>
      )}
    </main>
  );
}
