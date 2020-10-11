import React, { useState } from 'react';

import PredictionTable from '../PredictionTable/PredictionTable';
import './CollegePredictor.css';
import { getByCategory } from '../../utils/getData';

const CollegePredictor = () => {
  const [colleges, setColleges] = useState([]);
  const [advRank, setAdvRank] = useState(42);

  const filterColleges = (_e) => {
    const filteredColleges = getByCategory().filter(
      (college) => advRank <= college.closingRank);
    setColleges(filteredColleges);
  }

  return (
    <div className="college-predictor">
      <div>
        <span>JEE Advanced Rank</span>
        <input
          type="number"
          className="rank-input"
          value={advRank}
          onChange={(e) => setAdvRank(parseInt(e.target.value, 10))}
        />
        <button onClick={filterColleges}>Get Predictions</button>
      </div>
      {colleges.length > 0 && <PredictionTable colleges={colleges}/>}
    </div>
  );
}

export default CollegePredictor;
