import React from 'react';

const Profile: React.FC = () => {
    return (
        <div className="flex flex-col items-center mb-6 fade-in">
            <div className="relative w-32 h-32 mb-4 p-1 rounded-full bg-gradient-to-tr from-cyan-400 via-purple-500 to-pink-500 shadow-xl shadow-purple-500/20 fade-in delay-100 group">
                <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-black/50 bg-black">
                     <img 
                        src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="John Doe" 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                </div>
            </div>
            
            <h1 className="text-3xl font-black mb-2 text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400 drop-shadow-sm fade-in delay-200">
                John Doe
            </h1>
            
            <p className="text-gray-400 text-center text-sm font-medium tracking-wide fade-in delay-300">
                <span className="text-cyan-400">@</span> Raqamli Ijodkor & Dasturchi
            </p>
        </div>
    );
};

export default Profile;
