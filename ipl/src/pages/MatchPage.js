import React, { useEffect, useState } from 'react';
import MatchDetailCard from '../components/MatchDetailCard';
import { useParams } from 'react-router-dom';

export const MatchPage = () => {
  const [matches, setMatches] = useState([]);
  const { teamName, year } = useParams();

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        const response = await fetch(`http://localhost:8080/team/${teamName}/matches?year=${year}`);
        if (response.ok) {
          const data = await response.json();
          setMatches(data);
        } else {
          // Handle error if response is not ok (e.g., display an error message)
          console.error('Failed to fetch matches');
        }
      } catch (error) {
        console.error('An error occurred while fetching matches:', error);
      }
    };

    fetchMatches();
  }, [teamName, year]); // Specify dependencies here

  return (
    <div className='MatchPage'>
      <h1>Match Card</h1>
      {matches.map(match => (
        <MatchDetailCard key={match.id} teamName={teamName} match={match} />
      ))}
    </div>
  );
};
 export default MatchPage
