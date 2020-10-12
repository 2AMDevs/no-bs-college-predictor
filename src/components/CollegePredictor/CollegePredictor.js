/* eslint-disable no-bitwise */
import React, { useState, useEffect } from 'react'

import { getByCategory } from '../../utils/getData'
import PredictionTable from '../PredictionTable/PredictionTable'
import './CollegePredictor.css'

const CollegePredictor = () => {
  const [colleges, setColleges] = useState([])
  const [rank, setRank] = useState()
  const [exam, setExam] = useState('Advanced')
  const [filters, setFilters] = useState({ category: 'OPEN' })

  const filterData = (college) => {
    let finalVal = rank <= college.closingRank
    // This filter is hardcoded for IIT and Non-IIT
    // eslint-disable-next-line no-param-reassign
    const dataFilters = {
      ...filters,
      type: exam === 'Advanced' ? 'IIT' : ['IIT'],
    }

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

  const filterColleges = () => {
    const filteredColleges = getByCategory(filters.category)
      .filter(filterData)
    setColleges(filteredColleges)
  }

  useEffect(() => {
    filterColleges()
  }, [exam, filters])

  return (
    <>
      <div className="filter-form">
        JEE
        <select
          value={exam}
          onChange={(e) => setExam(e.target.value)}
          className="exam-type-select"
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
        Rank
        <input
          type="number"
          className="rank-input"
          placeholder="Enter your rank here"
          value={rank}
          onChange={(e) => setRank(parseInt(e.target.value, 10))}
        />
        <button
          type="button"
          onClick={(_e) => filterColleges()}
          className="submit-btn"
        >
          Get Predictions
        </button>
      </div>
      <PredictionTable
        colleges={colleges}
        filters={filters}
        setFilters={setFilters}
      />
    </>
  )
}

export default CollegePredictor
