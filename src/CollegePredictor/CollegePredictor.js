import React, { useState } from 'react';

import PredictionTable from '../PredictionTable/PredictionTable'
import { collegeData } from './general-2019.js';
import './CollegePredictor.css';

function CollegePredictor () {
  const [colleges, setColleges] = useState([]);

  const filterColleges = (e) => {
    const filteredColleges = collegeData.filter(
      (college) => parseInt(e.target.value, 10) <= college.closingRank);
    setColleges(filteredColleges);
  }

  return (
    <div className="college-predictor">
      <h3>Enter your rank</h3>
      <input
        type="number"
        className="rank-input"
        onChange={filterColleges}
      />
      {colleges.length > 0 && <PredictionTable colleges={colleges}/>}
    </div>
  );
}

export default CollegePredictor;
