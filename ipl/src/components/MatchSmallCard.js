import React from 'react'
import { Link } from 'react-router-dom';

export const MatchSmallCard = ({ match, teamName }) => {

  const otherTeam = match.team1 === teamName ? match.team2 : match.team1;
  if (!match) return null;

  const otherTeamRoute = `/teams/${otherTeam}`

  const isMatchWon = teamName === match.matchWinner;

  return (
    <div className={isMatchWon ? 'MatchSmallCard won-card' : 'MatchSmallCard lost-card'}>
      <h3><Link to={otherTeamRoute}>  {otherTeam}</Link></h3>
      <p>{match.matchWinner} won by {match.resultMargin} {match.result}</p>

    </div>
  )
}

