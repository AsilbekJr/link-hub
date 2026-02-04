import React from 'react';

const SocialIcons: React.FC = () => {
    const icons = [
        { class: "fab fa-instagram", href: "#", color: "hover:text-[#E1306C]" },
        { class: "fab fa-twitter", href: "#", color: "hover:text-[#1DA1F2]" },
        { class: "fab fa-linkedin-in", href: "#", color: "hover:text-[#0077B5]" },
        { class: "fab fa-github", href: "#", color: "hover:text-black dark:hover:text-white" },
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
