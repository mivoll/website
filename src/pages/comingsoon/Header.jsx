import mivollLogo from "../../assets/mivoll-logo.svg";
import buttonHamburger from "../../assets/button-hamburger.png";
import { useNotification } from "./store";
import { useState } from "react";
import { useWindowSize } from 'react-use'

export default function Header() {
  const isNotificationVisible = useNotification((state) => state.isNotificationVisible)
  const [isMobileScreen, setMobileScreen] = useState(true);
  const { width, height } = useWindowSize();
  const [isbuttonHamburderClicked, setButtonHamburderClicked] = useState(false)

  function handleClick() {
    setButtonHamburderClicked(prev => !prev);
  }

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

      <div>
        {/* desktop screen */}
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

        {/* mobile */}
        <div className="sm:hidden flex mt-12 justify-between w-screen fixed items-center ">
          <a href="https://mivoll.com">
            <img className="mx-7" src={mivollLogo} alt="mivol logo" width={65} />
          </a>
          {isbuttonHamburderClicked ?
            <button onClick={handleClick}>
              <div className="flex mx-7 items-center justify-center h-[35px] w-[35px] bg-[#d2ff14]
                shadow-2xl/30
                rounded-full ">
                <div className="h-[14px] w-[18px]">
                  <div className="h-[2px] w-[9px] bg-[#2a2a2a] rounded-full transition-transform duration-500 transform rotate-45" />
                  <div className="h-[2px] w-[18px] bg-[#2a2a2a] rounded-full mt-[4px] transition-transform duration-500 transform -rotate-45" />
                  <div className="flex">
                    <div className="h-[2px] w-[9px] bg-[#d2ff14] rounded-full mt-[4px]" />
                    <div className="h-[2px] w-[9px] bg-[#2a2a2a] rounded-full mt-[4px] transition-transform duration-500 transform rotate-45" />
                  </div>
                </div>
              </div>
            </button>
            :
            <button onClick={handleClick}>
              <div className="flex mx-7 items-center justify-center h-[35px] w-[35px] bg-[#d2ff14]
                shadow-2xl/30
                rounded-full transition-transform duration-500 transform rotate-0">
                <div className="h-[14px] w-[18px]">
                  <div className="h-[2px] w-[9px] bg-[#2a2a2a] rounded-full transition-transform duration-500 transform rotate-0" />
                  <div className="h-[2px] w-[18px] bg-[#2a2a2a] rounded-full mt-[4px] transition-transform duration-500 transform rotate-0" />
                  <div className="flex">
                    <div className="h-[2px] w-[9px] bg-[#d2ff14] rounded-full mt-[4px]" />
                    <div className="h-[2px] w-[9px] bg-[#2a2a2a] rounded-full mt-[4px] transition-transform duration-500 transform rotate-0" />
                  </div>
                </div>
              </div>
            </button>
          }
        </div>


        {/* desktop */}
        <div className="hidden lg:flex bg-black/7 border-t-0 text-[#cccccc] border border-[#D2FF1447]
          items-center justify-center mx-50 rounded-b-[45px] z-10 gap-40">
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
      </div >
    </>
  );
}
