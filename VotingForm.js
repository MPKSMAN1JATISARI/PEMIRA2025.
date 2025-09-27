import React from 'react';
import { Vote, Users, CheckCircle } from 'lucide-react';
import CandidateCard from './CandidateCard';
import VoterDataForm from './VoterDataForm';

const VotingForm = ({ candidates, hasVoted, voterData, setVoterData, handleVote }) => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-lg mb-6">
        <h1 className="text-3xl font-bold flex items-center gap-3">
          <Vote size={32} />
          Pemilu Ketua OSIS 2024/2025
        </h1>
        <p className="mt-2">SMA Negeri 1 Karawang</p>
      </div>

      {!hasVoted && (
        <VoterDataForm 
          voterData={voterData}
          setVoterData={setVoterData}
        />
      )}

      <div className="grid md:grid-cols-3 gap-6">
        {candidates.map(candidate => (
          <CandidateCard
            key={candidate.id}
            candidate={candidate}
            hasVoted={hasVoted}
            onVote={handleVote}
          />
        ))}
      </div>

      {hasVoted && (
        <div className="mt-6 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg text-center">
          <div className="flex items-center justify-center gap-2">
            <CheckCircle size={20} />
            <span className="font-semibold">Terima kasih! Suara Anda telah berhasil dicatat.</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default VotingForm;