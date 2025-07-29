function FooterMobile() {
  return (
    <footer className="flex flex-col items-center justify-center gap-4 p-6 mt-10 bg-test shadow-slate-100 shadow-lg md:hidden w-full">
      <span className="text-2xl font-extrabold mb-2">Me contacter</span>
      <div className="flex flex-col gap-2 items-center w-full">
        <div className="flex flex-row gap-2 items-center">
          <img className="w-5 h-5" src={"/images/footer/gmail-logo.svg"} alt="Gmail" />
          <span className="text-white">thms.martin.dev@gmail.com</span>
        </div>
        <div className="flex flex-row gap-2 items-center">
          <img className="w-5 h-5" src={"/images/footer/phone.svg"} alt="Téléphone" />
          <span className="text-white">+33 785 72 27 89</span>
        </div>
        <div className="flex flex-row gap-2 items-center">
          <img className="w-5 h-5" src={"/images/footer/linkedin-logo.svg"} alt="Linkedin" />
          <a href="https://www.linkedin.com/in/thomas-martin-6825611a0" className="text-white hover:text-purple-700" target="_blank" rel="noopener noreferrer">Linkedin</a>
        </div>
      </div>
      <div className="mt-4 text-center text-xs text-slate-300">
        <p>Conçu avec React & Tailwind. Fait avec ❤️</p>
        <p>© {new Date().getFullYear()} Thomas Martin. Tous droits réservés.</p>
      </div>
    </footer>
  );
}

export default FooterMobile;