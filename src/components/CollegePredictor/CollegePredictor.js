import React, { useState } from 'react';

import PredictionTable from '../PredictionTable/PredictionTable';
import './CollegePredictor.css';
import { getByCategory } from '../../utils/getData';

const CollegePredictor = () => {
  const [colleges, setColleges] = useState([]);
  const [rank, setRank] = useState();
  const [exam, setExam] = useState("Advanced");
  const [filters, setFilters] = useState({ category: "OPEN" })

  const filterColleges = (currentFilters=filters) => {
    const filteredColleges = getByCategory(currentFilters.category)
                              .filter((c) => filterData(c, currentFilters));
    setColleges(filteredColleges);
  }

  const filterData = (college, filters) => {
    let finalVal = rank <= college.closingRank;
    // This filter is hardcoded for IIT and Non-IIT
    filters['type'] = exam === "Advanced" ? "IIT" : ['IIT'];
    Object.keys(filters)
      .forEach(filter => {
        if (filters[filter] !== "All") { // All means skip filter
          if (filters[filter] instanceof Array) {
            finalVal = finalVal & (!filters[filter].includes(college[filter]));
          } else {
            finalVal = finalVal & (college[filter] === filters[filter]);
          }
        }
      });
    return finalVal;
  }

  return (
    <>
      <div className="filter-form">
        JEE
        <select
          value={exam}
          onChange={(e) => setExam(e.target.value)}
          className="exam-type-select"
        >
          <option key="mains" value="Mains">Mains</option>
          <option key="adv" value="Advanced">Advanced</option>
        </select>
        Rank
        <input
          type="number"
          className="rank-input"
          placeholder="Enter your rank here"
          value={rank}
          onChange={(e) => setRank(parseInt(e.target.value, 10))}
        />
        <button
          onClick={(_e) => filterColleges()}
          className="submit-btn"
        >
          Get Predictions
        </button>
      </div>
      <PredictionTable
        colleges={colleges}
        filterColleges={filterColleges}
        filters={filters}
        setFilters={setFilters}
      />
    </>
  );
}

export default CollegePredictor;
