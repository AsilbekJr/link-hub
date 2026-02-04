import React from 'react';

interface LinkButtonProps {
    href: string;
    label: string;
    iconClass: string;
    delayClass: string;
}

const LinkButton: React.FC<LinkButtonProps> = ({ href, label, iconClass, delayClass }) => {
    return (
        <a 
            href={href} 
            target="_blank" 
            rel="noopener noreferrer"
            className={`
                relative w-full group p-[1px] rounded-xl overflow-hidden fade-in ${delayClass}
                transition-all duration-300 hover:shadow-[0_0_20px_rgba(176,38,255,0.4)] hover:-translate-y-1
            `}
        >
            {/* Animated Gradient Border */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-spin-slow"></div>
            
            {/* Button Content */}
            <div className="relative flex items-center justify-between w-full px-6 py-4 bg-black/60 backdrop-blur-md rounded-xl border border-white/10 group-hover:bg-black/80 transition-colors">
                <span className="text-lg font-semibold text-gray-200 group-hover:text-white transition-colors">
                    {label}
                </span>
                <i className={`${iconClass} text-xl text-gray-400 group-hover:text-cyan-400 transition-colors duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(0,243,255,0.5)]`}></i>
            </div>
        </a>
    );
};

export default LinkButton;
