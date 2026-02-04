import React from 'react';

const SocialIcons: React.FC = () => {
    const icons = [
        { class: "fab fa-instagram", href: "#", color: "hover:text-pink-500 hover:drop-shadow-[0_0_10px_rgba(236,72,153,0.8)]" },
        { class: "fab fa-twitter", href: "#", color: "hover:text-blue-400 hover:drop-shadow-[0_0_10px_rgba(96,165,250,0.8)]" },
        { class: "fab fa-linkedin-in", href: "#", color: "hover:text-blue-600 hover:drop-shadow-[0_0_10px_rgba(37,99,235,0.8)]" },
        { class: "fab fa-github", href: "#", color: "hover:text-white dark:hover:text-white hover:text-black hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.8)] dark:hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.8)] hover:drop-shadow-[0_0_10px_rgba(0,0,0,0.5)]" },
    ];

    return (
        <div className="flex space-x-6">
            {icons.map((icon, index) => (
                <a 
                    key={index} 
                    href={icon.href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`
                        text-2xl text-muted-foreground transition-all duration-300 transform hover:scale-125
                        ${icon.color}
                    `}
                >
                    <i className={icon.class}></i>
                </a>
            ))}
        </div>
    );
};

export default SocialIcons;
