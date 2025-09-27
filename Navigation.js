import React from 'react';
import { Vote } from 'lucide-react';

const Navigation = ({ currentView, setCurrentView }) => {
  return (
    <nav className="bg-white shadow-lg p-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-3">
          <Vote className="text-blue-600" size={28} />
          <span className="text-xl font-bold">Pemilu Digital</span>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => setCurrentView('voting')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              currentView === 'voting' 
              ? 'bg-blue-600 text-white' 
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Voting
          </button>
          <button
            onClick={() => setCurrentView('recap')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              currentView === 'recap' 
              ? 'bg-blue-600 text-white' 
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Live Recap
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;