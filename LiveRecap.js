import React from 'react';
import { BarChart3, Eye, Clock } from 'lucide-react';
import StatsCards from './StatsCards';
import VoteChart from './VoteChart';
import CandidateResults from './CandidateResults';

const LiveRecap = ({ candidates, votes, totalVoters, getPercentage, getLeader }) => {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white p-6 rounded-lg mb-6">
        <h1 className="text-3xl font-bold flex items-center gap-3">
          <BarChart3 size={32} />
          Live Recap Pemilu OSIS
        </h1>
        <div className="mt-2 flex items-center gap-4">
          <span className="flex items-center gap-2">
            <Eye size={16} />
            Real-time Updates
          </span>
          <span className="flex items-center gap-2">
            <Clock size={16} />
            {new Date().toLocaleTimeString('id-ID')}
          </span>
        </div>
      </div>

      <StatsCards 
        totalVoters={totalVoters}
        leader={getLeader()}
      />

      <CandidateResults 
        candidates={candidates}
        votes={votes}
        getPercentage={getPercentage}
        getLeader={getLeader}
        totalVoters={totalVoters}
      />

      <VoteChart 
        candidates={candidates}
        votes={votes}
        getPercentage={getPercentage}
      />
    </div>
  );
};

export default LiveRecap;