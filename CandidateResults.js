import React from 'react';

const CandidateResults = ({ candidates, votes, getPercentage, getLeader, totalVoters }) => {
  return (
    <div className="grid md:grid-cols-3 gap-6 mb-6">
      {candidates.map(candidate => (
        <div key={candidate.id} className="bg-white rounded-lg shadow-lg p-6">
          <div className="text-center mb-4">
            <div className="text-4xl mb-2">{candidate.photo}</div>
            <h3 className="text-xl font-bold">{candidate.name}</h3>
            <p className="text-gray-600 text-sm">{candidate.class}</p>
          </div>
          
          <div className="mb-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-2xl font-bold text-blue-600">{votes[candidate.id]}</span>
              <span className="text-lg font-semibold text-gray-700">{getPercentage(candidate.id)}%</span>
            </div>
            
            <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
              <div 
                className="bg-gradient-to-r from-blue-500 to-purple-600 h-full transition-all duration-1000 ease-out"
                style={{width: `${getPercentage(candidate.id)}%`}}
              ></div>
            </div>
          </div>

          {getLeader()?.id === candidate.id && totalVoters > 0 && (
            <div className="text-center">
              <span className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-semibold">
                👑 Sementara Terdepan
              </span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default CandidateResults;