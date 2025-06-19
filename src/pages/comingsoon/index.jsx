import mivollLogo from "../../assets/mivoll-logo.svg";
import { useState } from "react";
import { useWindowSize } from "react-use";
import { useNotification } from "./store";
import Confetti from "react-confetti";
import mivollMascot from "../../assets/mivoll-maskot.webp";
import logoInstagram from "../../assets/instagram.svg";
import logoFacebook from "../../assets/facebook.png";
import logoLinkedin from "../../assets/linkedin.svg";

export default function Index() {
  const [formData, setFormData] = useState({
    message: "",
    email: "",
  });

  const { screenWidth, screenHeight } = useWindowSize();
  const [isbuttonHamburderClicked, setButtonHamburderClicked] = useState(false)
  const isNotificationVisible = useNotification((state) => state.isNotificationVisible)
  const setNotificationVisible = useNotification((state) => state.setNotificationVisible);
  const isErrorNotificationVisible = useNotification((state) => state.isErrorNotificationVisible);
  const setErrorNotificationVisible = useNotification((state) => state.setErrorNotificationVisible);

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
  function handleClick() {
    setButtonHamburderClicked(prev => !prev);
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <>
      <style>
        {`
    @keyframes breathe {
      0%, 100% {
        transform: scale(0.75);
      }
      30% {
        transform: scale(1.0);
      }
    }

    @keyframes heartbeat {
          0% {
            transform: scale(1.2);
          }
          14% {
            transform: scale(1.3);
          }
          28% {
            transform: scale(1.2);
          }
          42% {
            transform: scale(1.3);
          }
          70%, 100% {
            transform: scale(1.2);
          }
        }

    @keyframes heartbeat-text {
          0% {
            transform: scale(1.0);
          }
          14% {
            transform: scale(1.05);
          }
          28% {
            transform: scale(1.0);
          }
          42% {
            transform: scale(1.05);
          }
          70%, 100% {
            transform: scale(1.0);
          }
        }
  `}
      </style>

      <div className={`fixed lg:w-[666px] lg:h-[666px] sm:w-[555px] sm:h-[555px]
          ${isNotificationVisible ?
          'animate-[heartbeat_1.5s_ease-in-out_infinite]' :
          'animate-[breathe_6s_ease-in-out_infinite]'}
          bg-[#D2FF14]/55 rounded-full left-[-200px]
          bottom-[-200px] blur-[300px] 
          pointer-events-none z-0`} />

      <div className={`fixed lg:w-[666px] lg:h-[666px] sm:w-[555px] sm:h-[555px]
          ${isNotificationVisible ?
          'animate-[heartbeat_1.5s_ease-in-out_infinite]' :
          'animate-[breathe_6s_ease-in-out_infinite]'}
          bg-[#D2FF14]/55 rounded-full right-[-200px]
          top-[-200px] blur-[300px] 
          pointer-events-none z-0`} />


      {/* mobile screen  */}
      <div className="sm:hidden">
        <div className={`fixed w-[200px] h-[300px]
          ${isNotificationVisible ?
            'animate-[heartbeat_1.5s_ease-in-out_infinite]' :
            'animate-[breathe_6s_ease-in-out_infinite]'}
          bg-[#D2FF14] rounded-full 
          left-[-150px]
          bottom-[-50px]
          blur-[150px] 
          pointer-events-none z-0`} />

        <div className={`fixed w-[200px] h-[300px]
          ${isNotificationVisible ?
            'animate-[heartbeat_1.5s_ease-in-out_infinite]' :
            'animate-[breathe_6s_ease-in-out_infinite]'}
          bg-[#D2FF14] rounded-full 
          right-[20px]
          top-[-180px]
          blur-[150px] 
          pointer-events-none z-0`} />

        <div className={`fixed w-[200px] h-[300px]
          ${isNotificationVisible ?
            'animate-[heartbeat_1.5s_ease-in-out_infinite]' :
            'animate-[breathe_6s_ease-in-out_infinite]'}
          bg-[#D2FF14] rounded-full 
          right-[-200px]
          top-[300px]
          blur-[150px] 
          pointer-events-none z-0`} />
      </div>
      <div className="bg-[#1D1E24] h-screen overflow-hidden">

        <div className="h-screen">

          {/* mail sent confirmation notification */}
          {
            isNotificationVisible && (
              <div>
                <Confetti width={screenWidth} height={screenHeight} gravity={0.08} />
                {/* <div className="bg-black text-[#cccccc] fixed top-1/8 tranform translate-x-[-50%] border border-[#D2FF1447] items-center justify-center rounded-4xl"> */}
                {/*   <h3 className="font-rem font-bold text-3xl px-4 pt-6">Teşekkürler!</h3> */}
                {/*   <p className="font-rem text-2xl px-4 leading-7">Mailiniz gönderilmiştir 🚀 </p> */}
                {/*   <p className="font-rem text-xl px-4 pb-6">Size en kısa zamanda dönüş sağlayacağız.</p> */}
                {/* </div> */}
              </div>
            )
          }
          {
            isErrorNotificationVisible && (
              <div className="bg-black/7 text-[#cccccc] fixed top-1/8 border border-[#D2FF1447] items-center justify-center rounded-4xl ">
                <p className="font-rem text-2xl px-4 py-6">Bir şeyler ters gitti.. Lütfen daha sonra tekrar deneyin.</p>
              </div>
            )
          }

          {/* padding */}
          <div className="w-screen min-h-5 md:min-h-0">
          </div>

          {/* header */}
          {/* mivoll logo + hamburger button */}
          <div className="flex justify-between w-screen h-1/12">

            {/* mivoll logo */}
            <div className="
            {/* default screen */}
              flex items-center justify-center h-full max-w-30 ml-7
            {/* >=md */}
              md:hidden
            "
            >
              <a href="https://mivoll.com">
                <img src={mivollLogo} alt="mivol logo" width={65} />
              </a>
            </div>

            {/* header bar */}
            <div className="flex items-center justify-center w-screen">
              <div className="
                hidden 
                // sm
                md:flex md:w-screen md:h-20
                md:bg-black/10 md:border-t-0 md:text-[#cccccc] md:border md:border-[#D2FF1447]
                md:items-center md:justify-center md:mx-25 md:rounded-b-[45px] md:gap-40 max-w-300
              ">

                <div className="flex flex-row justify-between items-center w-screen px-10">
                  <a href="https://mivoll.com">
                    <img className="my-7" src={mivollLogo} alt="mivoll logo" border width="65px" />
                  </a>
                  <a href="/">
                    <span className="font-montserrat text-[18px] font-bold">
                      Ana Sayfa
                    </span>
                  </a>
                  <a href="/">
                    <span className="font-rem text-[18px] font-bold">
                      Hakkımızda
                    </span>
                  </a>
                  <a href="/">
                    <span className="font-rem text-[18px] font-bold">
                      Hizmetlerimiz
                    </span>
                  </a>
                  <a href="/">
                    <span className="font-montserrat text-[18px]  font-bold">
                      Portföy
                    </span>
                  </a>

                  <div className="font-montserrat font-bold text-[#D2FF14] border bg-[#1D1E2480] border-[#D2FF14] rounded-full px-5 shadow-black flex text-center shadow-md/40">
                    <a href="/">İletişim</a>
                  </div>
                </div>
              </div>
            </div>

            {/* hamburger button */}
            <div className="
            {/* default screen */}
              flex items-center justify-center h-full max-w-30 mr-7
            {/* >=md */}
              md:hidden
            ">
              {isbuttonHamburderClicked ?
                <button onClick={handleClick}>
                  <div className="flex items-center justify-center h-[50px] w-[50px] bg-[#d2ff14]
                shadow-2xl/30
                rounded-full transition-transform duration-500 transform rotate-0">
                    <div className="h-[20px] w-[33px]">
                      <div className="h-[3px] w-[19px] mt-[2.5px] bg-[#2a2a2a] rounded-full transition-transform duration-500 transform rotate-225" />
                      <div className="h-[3px] w-[36px] bg-[#2a2a2a] -mx-[1px] mt-[4px] rounded-full transition-transform duration-500 transform -rotate-45" />
                      <div className="flex">
                        <div className="h-[3px] w-[15px] bg-[#d2ff14] rounded-full mt-[5px]" />
                        <div className="h-[3px] w-[18px] bg-[#2a2a2a] rounded-full mt-[4px] transition-transform duration-500 transform rotate-405" />
                      </div>
                    </div>
                  </div>
                </button>
                :
                <button onClick={handleClick}>
                  <div className="flex items-center justify-center h-[50px] w-[50px] bg-[#d2ff14]
                shadow-2xl/30
                rounded-full transition-transform duration-500 transform rotate-0">
                    <div className="h-[20px] w-[30px]">
                      <div className="h-[3px] w-[15px] mt-[1px] bg-[#2a2a2a] rounded-full transition-transform duration-500 transform rotate-0" />
                      <div className="h-[3px] w-[30px] bg-[#2a2a2a] mt-[5px] rounded-full transition-transform duration-500 transform rotate-0" />
                      <div className="flex">
                        <div className="h-[3px] w-[15px] bg-[#d2ff14] rounded-full mt-[5px]" />
                        <div className="h-[3px] w-[15px] bg-[#2a2a2a] rounded-full mt-[5px] transition-transform duration-500 transform rotate-0" />
                      </div>
                    </div>
                  </div>
                </button>
              }
            </div>

          </div>


          {/* Main.jsx */}
          <div className="
          {/* default screen */}
          hidden
          {/* >= sm */}
          sm:flex sm:w-screen h-1/12
          {/* >= md */}
          {/* >= lg */}
        " />

          {/* Çok Yakında */}
          <div className="flex items-center justify-center w-screen h-1/9">
            <h1 className={`
            ${isNotificationVisible ? 'animate-[heartbeat-text_1.5s_ease-in-out_infinite]' : "animate-pulse"}
            {/* default screen */}
              font-rem text-[#D2FF14] text-[38px] font-semibold 
            {/* >= sm */}
              sm:font-normal sm:text-[90px]
            {/* >= md */}
              md:font-normal md:text-[90px]
            {/* >= lg */}
              lg:font-normal lg:text-[100px]
          `}>
              ÇOK YAKINDA
            </h1>
          </div>

          {/* description */}
          <div className=" flex items-center justify-center text-center w-screen h-2/9 ">
            <p className="
            {/* default screen */}
              text-[14px] mx-11 text-white max-w-4xl
            {/* >= sm */}
              sm:text-[20px]
            {/* >= md */}
              md:text-[24px]
            ">
              Türkiye merkezli bir <span className="font-bold">yazılım ve dijital içerik</span> stüdyosu olan{" "}
              <span className="text-[#D2FF14] font-bold">Mivoll</span> yakında sizlerle!
              Dijital dünyada fark yaratmaya hazırlanıyoruz. O zamana kadar bizimle mail
              üzerinden iletişime geçebilirsiniz.
            </p>
          </div>

          {/* Form */}
          <div className="flex w-screen h-3/9 justify-center items-start mt-10">
            <form onSubmit={handleSubmit} className="
            {/* default screen */}
              flex flex-col items-center gap-1
            {/* >= sm */}
              sm:gap-1 sm:flex-row 
            {/* >= md */}
              md:gap-4 md:flex-row 
            {/* >= lg */}
              lg:gap-8 lg:flex-row 
            ">
              <input
                className="
                {/* default screen */}
                  bg-[#101114] w-75 border-4 border-[#3a3a3a] text-white placeholder:text-[#7a7a7a] placeholder:text-xs
                  px-3 py-1 rounded-xl focus:outline-none border-b-0 border-l-0 
                {/* >= sm */}
                sm:w-72 sm:placeholder:text-lg h-10
                {/* >= md */}
                  md:w-72 md:py-4 
                {/* >= lg */}
                  lg:w-72 lg:py-4 
              "
                type="email"
                name="email"
                placeholder="Mail Adresi"
                value={formData.email}
                onChange={handleChange}
              />

              <textarea
                className="
              {/* default screen */}
                bg-[#101114] w-75 border-4 border-[#3a3a3a] text-white placeholder:text-[#7a7a7a] placeholder:text-xs
                px-3 pb-8 pt-1 rounded-xl focus:outline-none border-b-0 border-l-0 resize-none
              {/* >= sm */}
                sm:w-72 sm:placeholder:text-lg h-10
              {/* >= md */}
                md:py-1 md:w-72 
              {/* >= lg */}
                lg:py-1 lg:w-72 
              "
                type="text"
                name="message"
                placeholder="Mesajınızı Giriniz"
                value={formData.message}
                onChange={handleChange}
              />

              <button
                className="
              {/* default screen */}
              font-poppins border-4 border-[#3a3a3a] border-b-0 border-l-0 bg-[#101114] text-[#D2FF14] text-xs
              px-6 py-1 rounded-md hover:bg-[#D2FF14] hover:text-[#101114] transition-colors
              {/* >= sm */}
              sm:py-2.5 sm:px-6
              {/* >= md */}
              {/* >= lg */}
              "
                type="submit"
              >
                Gönder
              </button>
            </form>

          </div>

          {/* footer */}
          <div className="w-screen h-screen">

            {/* social media */}
            <div className="mb-2 w-screen flex items-center justify-center gap-8 ">
              <a href="https://www.instagram.com/mivoll.tr?igsh=Yjl2YjlidHFpYmp4" target="_blank">
                <img src={logoInstagram} alt="instagram logo" width="32" />

              </a>
              <a href="https://www.facebook.com/people/Mivoll/61577316533568/" target="_blank">
                <img src={logoFacebook} alt="facebook logo" width="32" />
              </a>

              <a href="https://www.linkedin.com/company/mivoll/" target="_blank">
                <img src={logoLinkedin} alt="linkedin logo" width="32" />
              </a>

              <img
                className="
            {/* default screen */}
                w-30 fixed -right-5 mb-15

                {/* >= sm */}
                sm:w-35 sm:mb-19 sm:right-10
                {/* >= md */}
                md:w-40 md:mb-24 md:right-10
                {/* >= lg */}
                lg:w-50 lg:mb-33
                "
                src={mivollMascot}
                alt="mivoll mascot"
              />


            </div>

            <div className="border border-[#48484d] h-0 border-b-0 border-l-0 border-r-0">
            </div>
            <p className="text-[#a5a5a7] mt-3 sm:mt-[1rem] text-center">
              © 2025 Mivoll Dijital. Tüm hakları saklıdır.
            </p>
          </div>
        </div>
      </div >
    </>
  );
}
