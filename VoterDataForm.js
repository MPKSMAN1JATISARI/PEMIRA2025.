import React from 'react';
import { Users } from 'lucide-react';
import { classOptions } from '../data/classes';

const VoterDataForm = ({ voterData, setVoterData }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
      <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
        <Users size={20} />
        Data Pemilih
      </h2>
      <div className="grid md:grid-cols-3 gap-4">
        <input
          type="text"
          placeholder="Nama Lengkap"
          value={voterData.name}
          onChange={(e) => setVoterData(prev => ({...prev, name: e.target.value}))}
          className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          placeholder="NIS"
          value={voterData.studentId}
          onChange={(e) => setVoterData(prev => ({...prev, studentId: e.target.value}))}
          className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <select
          value={voterData.class}
          onChange={(e) => setVoterData(prev => ({...prev, class: e.target.value}))}
          className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Pilih Kelas</option>
          {classOptions.map(classOption => (
            <option key={classOption} value={classOption}>{classOption}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default VoterDataForm;