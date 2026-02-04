import Profile from './components/Profile';
import LinkButton from './components/LinkButton';
import SocialIcons from './components/SocialIcons';
import Skills from './components/Skills';
import Projects from './components/Projects';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"
import { ModeToggle } from "@/components/mode-toggle"

function App() {
  const links = [
    { href: "#", label: "Mening Vebsaytim", iconClass: "fas fa-globe", delayClass: "delay-400" },
    { href: "#", label: "Telegram Kanalim", iconClass: "fab fa-telegram", delayClass: "delay-600" },
    { href: "#", label: "YouTube", iconClass: "fab fa-youtube", delayClass: "delay-700" },
    { href: "#", label: "Bog'lanish", iconClass: "fas fa-envelope", delayClass: "delay-800" },
  ];

  return (
    <div className="relative min-h-screen flex items-center justify-center p-4 overflow-hidden bg-background selection:bg-purple-500/30 transition-colors duration-300">
        
        {/* Background Blobs (Visible in Dark Mode mainly, but kept for vibe) */}
        <div className="blob bg-purple-600 w-96 h-96 rounded-full top-0 left-[-100px] mix-blend-multiply filter blur-3xl opacity-20 dark:mix-blend-screen dark:opacity-40 animate-blob"></div>
        <div className="blob bg-cyan-600 w-96 h-96 rounded-full bottom-0 right-[-100px] mix-blend-multiply filter blur-3xl opacity-20 dark:mix-blend-screen dark:opacity-40 animate-blob animation-delay-2000"></div>

        {/* Toggle Button */}
        <div className="absolute top-4 right-4 z-50">
            <ModeToggle />
        </div>

      <div className="glass-container w-full max-w-lg rounded-3xl p-1 flex flex-col relative z-10 border border-border shadow-2xl fade-in overflow-hidden bg-background/50 backdrop-blur-md">
        <ScrollArea className="h-[85vh] w-full p-6">
            <Profile />
            
            <Tabs defaultValue="links" className="w-full mt-6">
                <TabsList className="grid w-full grid-cols-2 mb-6">
                    <TabsTrigger value="links">Havolalar</TabsTrigger>
                    <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
                </TabsList>

                <TabsContent value="links" className="space-y-6 animate-in slide-in-from-bottom-5 duration-500">
                    <Skills />
                    <div className="w-full space-y-4 flex flex-col items-center">
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
                </TabsContent>
                
                <TabsContent value="portfolio" className="animate-in slide-in-from-bottom-5 duration-500">
                    <Projects />
                </TabsContent>
            </Tabs>

            <div className="flex justify-center mt-8 mb-4">
                <SocialIcons />
            </div>
        </ScrollArea>
      </div>
    </div>
  );
}

export default App;
