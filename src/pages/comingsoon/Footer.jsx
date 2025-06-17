import mivollMascot from "../../assets/mivoll-maskot.webp";
import logoInstagram from "../../assets/instagram.svg";
import logoFacebook from "../../assets/facebook.svg";
import logoLinkedin from "../../assets/linkedin.svg";

export default function Footer() {
  return (
    <div className="h-full my-0 text-center">

      {/* social media */}
      <div className="mt-12 w-screen flex items-center justify-center gap-8">
        <a href="https://www.instagram.com/mivoll.tr?igsh=Yjl2YjlidHFpYmp4" target="_blank">
          <img src={logoInstagram} alt="instagram logo" width="31" />

        </a>
        <a href="https://www.facebook.com/people/Mivoll/61577316533568/" target="_blank">
          <img src={logoFacebook} alt="facebook logo" width="31" />
        </a>

        <a href="https://www.linkedin.com/company/mivoll/" target="_blank">
          <img src={logoLinkedin} alt="linkedin logo" width="31" />
        </a>
      </div>

      <div className="border border-[#48484d] h-0 border-b-0 border-l-0 border-r-0">
        <img
          className="hidden lg:fixed lg:bottom-10 lg:-right-2 lg:block"
          src={mivollMascot}
          alt="mivoll mascot"
          width="160px"
        />
      </div>
      <p className="text-[#a5a5a7] mt-3 sm:mt-[1rem]">
        © 2025 Mivoll Dijital. Tüm hakları saklıdır.
      </p>
    </div>
  );
}
