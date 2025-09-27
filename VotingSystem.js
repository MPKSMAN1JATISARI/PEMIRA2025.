import React, { useState, useEffect } from 'react';
import { Vote } from 'lucide-react';
import Navigation from './Navigation';
import VotingForm from './VotingForm';
import LiveRecap from './LiveRecap';
import { candidatesData } from '../data/candidates';

const VotingSystem = () => {
  const [currentView, setCurrentView] = useState('voting');
  const [hasVoted, setHasVoted] = useState(false);
  const [voterData, setVoterData] = useState({
    name: '',
    studentId: '',
    class: ''
  });
  
  const [candidates] = useState(candidatesData);
  const [votes, setVotes] = useState({
    1: 0,
    2: 0,
    3: 0
  });

  const [totalVoters, setTotalVoters] = useState(0);
  const [votedStudents, setVotedStudents] = useState([]);

  // Simulasi pembaruan data secara real-time
  useEffect(() => {
    const interval = setInterval(() => {
      // Simulasi vote baru dari siswa lain
      if (Math.random() > 0.7) {
        const randomCandidate = Math.floor(Math.random() * 3) + 1;
        setVotes(prev => ({
          ...prev,
          [randomCandidate]: prev[randomCandidate] + 1
        }));
        setTotalVoters(prev => prev + 1);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleVote = (candidateId) => {
    if (!voterData.name || !voterData.studentId || !voterData.class) {
      alert('Mohon lengkapi data pemilih terlebih dahulu!');
      return;
    }

    if (hasVoted) {
      alert('Anda sudah melakukan voting!');
      return;
    }

    // Check if student ID already voted
    if (votedStudents.includes(voterData.studentId)) {
      alert('NIS ini sudah digunakan untuk voting!');
      return;
    }

    setVotes(prev => ({
      ...prev,
      [candidateId]: prev[candidateId] + 1
    }));
    setTotalVoters(prev => prev + 1);
    setVotedStudents(prev => [...prev, voterData.studentId]);
    setHasVoted(true);
    
    // Otomatis pindah ke live recap setelah voting
    setTimeout(() => {
      setCurrentView('recap');
    }, 2000);
  };

  const getPercentage = (candidateId) => {
    if (totalVoters === 0) return 0;
    return ((votes[candidateId] / totalVoters) * 100).toFixed(1);
  };

  const getLeader = () => {
    const maxVotes = Math.max(...Object.values(votes));
    const leaderId = Object.keys(votes).find(key => votes[key] === maxVotes);
    return candidates.find(c => c.id === parseInt(leaderId));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <Navigation 
        currentView={currentView} 
        setCurrentView={setCurrentView} 
      />

      {currentView === 'voting' ? (
        <VotingForm 
          candidates={candidates}
          hasVoted={hasVoted}
          voterData={voterData}
          setVoterData={setVoterData}
          handleVote={handleVote}
        />
      ) : (
        <LiveRecap 
          candidates={candidates}
          votes={votes}
          totalVoters={totalVoters}
          getPercentage={getPercentage}
          getLeader={getLeader}
        />
      )}
    </div>
  );
};

export default VotingSystem;