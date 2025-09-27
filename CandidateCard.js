import React from 'react';
import { CheckCircle } from 'lucide-react';

const CandidateCard = ({ candidate, hasVoted, onVote }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
      <div className="text-center mb-4">
        <div className="text-6xl mb-3">{candidate.photo}</div>
        <h3 className="text-xl font-bold">{candidate.name}</h3>
        <p className="text-gray-600">{candidate.class}</p>
      </div>
      <div className="mb-4">
        <p className="text-sm text-gray-700 italic">"{candidate.vision}"</p>
      </div>
      {hasVoted ? (
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 text-green-600">
            <CheckCircle size={20} />
            <span>Terima kasih sudah memilih!</span>
          </div>
        </div>
      ) : (
        <button
          onClick={() => onVote(candidate.id)}
          className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all transform hover:scale-105"
        >
          Pilih Kandidat
        </button>
      )}
    </div>
  );
};

export default CandidateCard;