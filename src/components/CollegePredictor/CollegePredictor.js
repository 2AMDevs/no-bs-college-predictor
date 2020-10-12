/* eslint-disable no-bitwise */
import React, { useState } from 'react'

import { getByCategory } from '../../utils/getData'
import PredictionTable from '../PredictionTable/PredictionTable'
import './CollegePredictor.css'

const CollegePredictor = () => {
  const [colleges, setColleges] = useState([])
  const [rank, setRank] = useState()
  const [exam, setExam] = useState('Advanced')
  const [filters, setFilters] = useState({ category: 'OPEN' })

  const filterData = (college, dataFilters) => {
    let finalVal = rank <= college.closingRank
    // This filter is hardcoded for IIT and Non-IIT
    // eslint-disable-next-line no-param-reassign
    dataFilters.type = exam === 'Advanced' ? 'IIT' : ['IIT']
    Object.keys(dataFilters)
      .forEach((filter) => {
        // All means skip filter
        if (dataFilters[filter] !== 'All') {
          if (dataFilters[filter] instanceof Array) {
            finalVal &= (!dataFilters[filter].includes(college[filter]))
          } else {
            finalVal &= (college[filter] === dataFilters[filter])
          }
        }
      })
    return finalVal
  }

  const filterColleges = (currentFilters = filters) => {
    const filteredColleges = getByCategory(currentFilters.category)
      .filter((c) => filterData(c, currentFilters))
    setColleges(filteredColleges)
  }

  return (
    <div className="college-predictor">
      <div className="filter-form">
        <span>
          JEE &nbsp;
          <select
            value={exam}
            onChange={(e) => setExam(e.target.value)}
          >
            <option
              key="mains"
              value="Mains"
            >
              Mains
            </option>
            <option
              key="adv"
              value="Advanced"
            >
              Advanced
            </option>
          </select>
          {' '}
          Rank
        </span>
        <input
          type="number"
          className="rank-input"
          value={rank}
          onChange={(e) => setRank(parseInt(e.target.value, 10))}
        />
        <button
          type="button"
          onClick={(_) => filterColleges()}
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
    </div>
  )
}

export default CollegePredictor
