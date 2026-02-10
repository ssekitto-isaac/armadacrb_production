import { Mail, Clock, MapPin, ArrowRight } from "lucide-react";

const TopBar = () => {
  return (
    <div className="top-bar">
      <div className="container mx-auto px-8">
        <div className="flex items-center justify-center gap-8">
          <div className="flex items-center gap-6 text-sm font-normal">
            <a
              href="mailto:info@armadacrb.co.ug"
              className="flex items-center gap-2 hover:text-secondary transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>info@armadacrb.co.ug</span>
            </a>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>Mon-Fri 8am - 5pm (Weekend Closed)</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>29A, Lumumba Avenue Kampala, Uganda</span>
            </div>
          </div>
          
          <a
            href="https://app.armadacrb.com/login.aspx"
            className="justify-self-end flex items-center gap-2 bg-[#91CD95] hover:bg-[#7ab87d] text-white px-12 py-2 rounded font-semibold transition-all duration-300 whitespace-nowrap"
          >
            <span>Member Login</span>
            <ArrowRight className="w-4 h-4" />
          </a>

        </div>
      </div>
    </div>
  );
};

export default TopBar;
