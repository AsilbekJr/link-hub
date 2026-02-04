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
                transition-all duration-300 hover:shadow-lg hover:-translate-y-1
            `}
        >
            {/* Animated Gradient Border (visible on hover) */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-spin-slow"></div>
            
            {/* Button Content */}
            <div className="relative flex items-center justify-between w-full px-6 py-4 
                bg-white/80 dark:bg-black/60 backdrop-blur-md 
                rounded-xl border border-gray-200 dark:border-white/10 
                group-hover:bg-white dark:group-hover:bg-black/80 
                shadow-sm group-hover:shadow-md transition-all">
                <span className="text-lg font-semibold text-gray-800 dark:text-gray-200 group-hover:text-black dark:group-hover:text-white transition-colors">
                    {label}
                </span>
                <i className={`${iconClass} text-xl text-gray-400 dark:text-gray-400 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors duration-300 group-hover:scale-110`}></i>
            </div>
        </a>
    );
};

export default LinkButton;
