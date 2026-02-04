
import Profile from './components/Profile';
import LinkButton from './components/LinkButton';
import SocialIcons from './components/SocialIcons';

function App() {
  const links = [
    { href: "#", label: "Mening Vebsaytim", iconClass: "fas fa-globe", delayClass: "delay-400" },
    { href: "#", label: "Portfolio", iconClass: "fas fa-briefcase", delayClass: "delay-500" },
    { href: "#", label: "Telegram Kanalim", iconClass: "fab fa-telegram", delayClass: "delay-600" },
    { href: "#", label: "YouTube", iconClass: "fab fa-youtube", delayClass: "delay-700" },
    { href: "#", label: "Bog'lanish", iconClass: "fas fa-envelope", delayClass: "delay-800" },
  ];

  return (
    <div className="relative min-h-screen flex items-center justify-center p-4 overflow-hidden">
        
        {/* Background Blobs */}
        <div className="blob bg-purple-600 w-96 h-96 rounded-full top-0 left-[-100px] mix-blend-screen"></div>
        <div className="blob bg-cyan-600 w-96 h-96 rounded-full bottom-0 right-[-100px] mix-blend-screen animation-delay-2000"></div>
        <div className="blob bg-pink-600 w-80 h-80 rounded-full top-[40%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 opacity-30"></div>

      <div className="glass-container w-full max-w-md rounded-3xl p-8 flex flex-col items-center relative z-10 border border-white/5 shadow-2xl fade-in">
        <Profile />
        <div className="w-full space-y-4 flex flex-col items-center mt-6">
          {links.map((link, index) => (
            <LinkButton 
              key={index}
              href={link.href}
              label={link.label}
              iconClass={link.iconClass}
              delayClass={link.delayClass}
            />
          ))}
        </div>
        <SocialIcons />
      </div>
    </div>
  );
}

export default App;
