import mivollLogo from "../../assets/mivoll1.png";

export default function Header() {
  return (
    <>
      <style>
        {`
          @keyframes breathe {
            0%, 100% {
              transform: scale(0.75);
            }
            50% {
              transform: scale(1.0);
            }
          }
        `}
      </style>

      <div>
        <div className="fixed w-[666px] h-[666px] bg-[#D2FF14]/55 rounded-full left-[-200px] bottom-[-200px] blur-[300px] animate-[breathe_6s_ease-in-out_infinite] pointer-events-none z-0"></div>

        <div className="fixed w-[666px] h-[666px] bg-[#D2FF14]/55 rounded-full right-[-200px] top-[-200px] blur-[300px] animate-[breathe_6s_ease-in-out_infinite] pointer-events-none z-0"></div>

        <div className="bg-black/7 border-t-0 text-[#cccccc] flex border border-[#D2FF1447] items-center justify-center mx-50 rounded-b-4xl z-10 relative">
          <div className="flex items-center justify-center gap-40">
            <img src={mivollLogo} alt="mivoll logo" width="65px" />
            <div className="flex gap-40">
              <a href="/">
                <span className="font-montserrat font-bold">Ana Sayfa</span>
              </a>
              <a href="/">
                <span className="font-rem font-bold">Hakkımızda</span>
              </a>
              <a href="/">
                <span className="font-montserrat font-bold">Hizmetlerimiz</span>
              </a>
              <a href="/">
                <span className="font-montserrat font-bold">Portföy</span>
              </a>
            </div>

            <div className="font-montserrat font-bold text-[#D2FF14] border bg-[#1D1E2480] border-[#D2FF14] rounded-full px-5 shadow-black flex text-center shadow-md/40">
              <a href="/">İletişim</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
