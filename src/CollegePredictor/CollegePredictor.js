import React, { useState } from 'react';

import PredictionTable from '../PredictionTable/PredictionTable'
import { collegeData } from './general-2019.js';
import './CollegePredictor.css';

function CollegePredictor () {
  const [colleges, setColleges] = useState([]);

  const filterColleges = (e) => {
    const filteredColleges = collegeData.filter(
      (college) => college.closingRank <=parseInt(e.target.value, 10));
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
      <PredictionTable colleges={colleges}/>
    </div>
  );
}

export default CollegePredictor;
