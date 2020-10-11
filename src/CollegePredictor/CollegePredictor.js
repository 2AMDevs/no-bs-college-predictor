import React from 'react';

import PredictionTable from '../PredictionTable/PredictionTable'
import { collegeData } from './general-2019.js';
import './CollegePredictor.css';

const CollegePredictor = () => {
  const colleges = [
    {
        "institute": "Indian Institute  of Technology Bhubaneswar",
        "program": "Civil Engineering (4 Years, Bachelor of Technology)",
        "quota": "AI",
        "category": "OBC-NCL",
        "seat": "Gender-Neutral",
        "openingRank": 2486,
        "closingRank": 3095,
        "type": "IIT",
        "courseDuration": "4 Years",
        "year": 2019
    },
    {
        "institute": "Indian Institute  of Technology Bhubaneswar",
        "program": "Civil Engineering (4 Years, Bachelor of Technology)",
        "quota": "AI",
        "category": "OBC-NCL",
        "seat": "Female-Only",
        "openingRank": 4337,
        "closingRank": 6205,
        "type": "IIT",
        "courseDuration": "4 Years",
        "year": 2019
    },
    {
        "institute": "Indian Institute  of Technology Bhubaneswar",
        "program": "Civil Engineering (4 Years, Bachelor of Technology)",
        "quota": "AI",
        "category": "GEN-EWS",
        "seat": "Gender-Neutral",
        "openingRank": 936,
        "closingRank": 965,
        "type": "IIT",
        "courseDuration": "4 Years",
        "year": 2019
    },
  ]
  const filterColleges = (e) => {
    console.log(collegeData.length);
    console.log(e.target.value);
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
