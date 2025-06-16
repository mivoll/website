import mivollMascot from "../../assets/mivoll-maskot.png";

export default function Footer() {
  return (
    <div className="h-full mt-5 text-center">
      <img className="fixed bottom-10 lg:bottom-50 right-0 " src={mivollMascot} alt="mivoll mascot" width="160px" />
      <div className="border border-[#48484d] h-0 border-b-0 border-l-0 border-r-0"></div>
      <p className="text-[#a5a5a7] mb-[4rem] sm:mt-[1rem]">
        © 2025 Mivoll Dijital. Tüm hakları saklıdır.
      </p>
    </div>
  );
}
