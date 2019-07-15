import React from 'react'

const ScoreBoardTop = ({homeScore, awayScore}) => {
  return (
    <div className="topRow">
    <div className="home">
      <h2 className="home__name" style={{fontSize: homeScore > awayScore && '4.2rem'}}>Lions</h2>
      <div className="home__score">{homeScore}</div>
    </div>
    <div className="timer">00:03</div>
    <div className="away">
      <h2 className="away__name" style={{fontSize: awayScore > homeScore && '4.2rem'}}>Tigers</h2>
      <div className="away__score">{awayScore}</div>
    </div>
  </div>
  )
}

export default ScoreBoardTop
