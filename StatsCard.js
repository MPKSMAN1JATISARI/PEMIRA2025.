import React from 'react';
import { Users, BarChart3, Vote, AlertCircle } from 'lucide-react';

const StatsCards = ({ totalVoters, leader }) => {
  const totalStudents = 500; // Asumsi total siswa

  return (
    <div className="grid md:grid-cols-4 gap-4 mb-6">
      <div className="bg-white rounded-lg shadow-lg p-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-600">Total Suara</p>
            <p className="text-2xl font-bold text-blue-600">{totalVoters}</p>
          </div>
          <Users className="text-blue-600" size={32} />
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-lg p-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-600">Partisipasi</p>
            <p className="text-2xl font-bold text-green-600">
              {((totalVoters/totalStudents)*100).toFixed(1)}%
            </p>
          </div>
          <BarChart3 className="text-green-600" size={32} />
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-600">Kandidat Terdepan</p>
            <p className="text-lg font-bold text-purple-600">
              {leader?.name || '-'}
            </p>
          </div>
          <Vote className="text-purple-600" size={32} />
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-600">Status</p>
            <p className="text-lg font-bold text-orange-600">Berlangsung</p>
          </div>
          <AlertCircle className="text-orange-600" size={32} />
        </div>
      </div>
    </div>
  );
};

export default StatsCards;