import React from 'react';

const SocialIcons: React.FC = () => {
    const icons = [
        { icon: "fa-instagram", color: "hover:text-[#E1306C]" },
        { icon: "fa-twitter", color: "hover:text-[#1DA1F2]" },
        { icon: "fa-linkedin", color: "hover:text-[#0077B5]" },
        { icon: "fa-github", color: "hover:text-white" },
    ];

    return (
        <div className="mt-8 flex gap-6">
            {icons.map((item, index) => (
                <a 
                    key={index}
                    href="#" 
                    className={`
                        text-gray-500 transition-all duration-300 transform hover:scale-125 hover:drop-shadow-[0_0_10px_currentColor]
                        ${item.color} fade-in delay-800
                    `}
                >
                    <i className={`fab ${item.icon} text-2xl`}></i>
                </a>
            ))}
        </div>
    );
};

export default SocialIcons;
