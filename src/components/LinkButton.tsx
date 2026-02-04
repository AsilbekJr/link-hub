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
            <div className="relative flex items-center justify-between w-full px-6 py-4 bg-card/80 backdrop-blur-md rounded-xl border border-border group-hover:bg-card transition-colors">
                <span className="text-lg font-semibold text-card-foreground">
                    {label}
                </span>
                <i className={`${iconClass} text-xl text-muted-foreground group-hover:text-primary transition-colors duration-300 group-hover:scale-110`}></i>
            </div>
        </a>
    );
};

export default LinkButton;
