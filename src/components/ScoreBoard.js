import React, {useState} from 'react'
import ScoreBoardTop from './ScoreBoardTop';
import ScoreBoardBottom from './ScoreBoardBottom';
import ScorersTable from './ScorersTable';

const ScoreBoard = () => {
  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);

  return (
    <>
    <section className="scoreboard">
    <ScoreBoardTop homeScore={homeScore} awayScore={awayScore}/>
      <ScoreBoardBottom/>
    </section>
    <section className="buttons">
    <ScorersTable setHomeScore={setHomeScore} setAwayScore={setAwayScore} />
    </section>
    </>
  )
}

export default ScoreBoard
