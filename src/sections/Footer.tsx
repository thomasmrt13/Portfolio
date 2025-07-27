function Footer() {
    return (
        <footer className="hidden md:flex flex-row gap-6 items-start p-6 mt-10 h-52 bg-test shadow-slate-100 shadow-lg">
            <span className="text-3xl font-extrabold">Me contacter</span>
            <div className="flex flex-col gap-4 items-center p-4 h-4/5 border-l-4 border-purple-800">
                <div className="flex flex-row gap-2 items-center">
                    <img className="w-5 h-5" src={"/images/footer/gmail-logo.svg"}/>    
                    <span className="text-white w-48 block">
                        thms.martin.dev@gmail.com
                    </span>
                </div>
                <div className="flex flex-row gap-2 items-center">
                    <img className="w-5 h-5" src={"/images/footer/phone.svg"}/>   
                    <span className="text-white w-48 block">
                        +33 785 72 27 89
                    </span>
                </div>
                <div className="flex flex-row gap-2 items-center">
                    <img className="w-5 h-5" src={"/images/footer/linkedin-logo.svg"}/>   
                    <span className="text-white w-48 block">
                        Linkedin
                    </span>
                </div>
            </div>
        </footer>
    )
}

export default Footer;