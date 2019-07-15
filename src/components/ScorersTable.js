import React from 'react';


const ScorersTable = ({setHomeScore, setAwayScore, quarter, setQuarter}) => {
  const handleScoring = (team, typeOfScore) => {
    const touchdown = 7;
    const fieldGoal = 3;

    if (team.toLowerCase() === 'home') {
      if (typeOfScore.toLowerCase() === 'td') {
        setHomeScore(prevScore => prevScore + touchdown); 
      }
      if (typeOfScore.toLowerCase() === 'fg') {
        setHomeScore(prevScore => prevScore + fieldGoal); 
      }
    } else if (team.toLowerCase() === 'away') {
      if (typeOfScore.toLowerCase() === 'td') {
        setAwayScore(prevScore => prevScore + touchdown);
      }
      if (typeOfScore.toLowerCase() === 'fg') {
        setAwayScore(prevScore => prevScore + fieldGoal); 
      }
  }
};

const handleQuarter = () => {
  if (quarter === 4) {
    return;
  } else {
    setQuarter(prevQuarter => prevQuarter + 1)
  }
}

  return (
    <>
    <div>
      <button style={{borderRadius: '15px', marginTop: '25px', marginRight: '15px'}} onClick={handleQuarter}>
        Next Quarter
      </button>
    </div>
    <div className="homeButtons">
    <button className="homeButtons__touchdown" onClick={() => handleScoring('home', 'td')}>Home Touchdown</button>
    <button className="homeButtons__fieldGoal" onClick={() => handleScoring('home', 'fg')}>Home Field Goal</button>
  </div>
  <div className="awayButtons">
    <button className="awayButtons__touchdown" onClick={() => handleScoring('away', 'td')}>Away Touchdown</button>
    <button className="awayButtons__fieldGoal" onClick={() => handleScoring('away', 'fg')}>Away Field Goal</button>
  </div>
  </>
  )
}

export default ScorersTable
