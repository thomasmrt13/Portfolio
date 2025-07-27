function FooterSection() {
  return (
    <footer className="hidden md:flex flex-row gap-10 justify-center items-center p-6 mt-10 h-52 bg-test shadow-slate-100 shadow-lg">
      <div>
        <p>Conçu avec React & Tailwind. Fait avec ❤️</p>
        <p>© {new Date().getFullYear()} Thomas Martin. Tous droits réservés.</p>
      </div>
      <div className="flex flex-col h-4/5 pl-10 border-l-4 border-purple-900">
        <span className="text-3xl font-extrabold">Me contacter</span>
        <div className="mt-5">
          <div className="flex flex-row gap-2 items-center">
            <img className="w-5 h-5" src={"/images/footer/gmail-logo.svg"} />
            <span className="text-white w-48 block">
              thms.martin.dev@gmail.com
            </span>
          </div>
          <div className="flex flex-row gap-2 items-center">
            <img className="w-5 h-5" src={"/images/footer/phone.svg"} />
            <span className="text-white w-48 block">+33 785 72 27 89</span>
          </div>
          <div className="flex flex-row gap-2 items-center">
            <img className="w-5 h-5" src={"/images/footer/linkedin-logo.svg"} />
            <a href="https://www.linkedin.com/in/thomas-martin-6825611a0" className="text-white w-48 block hover:text-purple-700" target="_blank" rel="noopener noreferrer">Linkedin</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FooterSection;
