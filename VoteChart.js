import React from 'react';

const VoteChart = ({ candidates, votes, getPercentage }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h3 className="text-lg font-bold mb-4">Grafik Perolehan Suara</h3>
      <div className="space-y-3">
        {candidates.map(candidate => (
          <div key={candidate.id} className="flex items-center gap-4">
            <div className="w-24 text-sm font-medium">{candidate.name}</div>
            <div className="flex-1 bg-gray-200 rounded-full h-6 overflow-hidden">
              <div 
                className="bg-gradient-to-r from-blue-500 to-purple-600 h-full transition-all duration-1000 ease-out flex items-center justify-end pr-2"
                style={{width: `${Math.max(getPercentage(candidate.id), 5)}%`}}
              >
                <span className="text-white text-xs font-bold">
                  {votes[candidate.id]} ({getPercentage(candidate.id)}%)
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VoteChart;