import React, {useState} from 'react'
import ScoreBoardTop from './ScoreBoardTop';
import ScoreBoardBottom from './ScoreBoardBottom';
import ScorersTable from './ScorersTable';

const ScoreBoard = () => {
  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);
  const [quarter, setQuarter] = useState(1);

  return (
    <>
    <section className="scoreboard">
    <ScoreBoardTop homeScore={homeScore} awayScore={awayScore}/>
      <ScoreBoardBottom quarter={quarter}/>
    </section>
    <section className="buttons">
    <ScorersTable setHomeScore={setHomeScore} setAwayScore={setAwayScore} setQuarter={setQuarter} quarter={quarter}/>
    </section>
    </>
  )
}

export default ScoreBoard
