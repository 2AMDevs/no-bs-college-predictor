/* eslint-disable no-bitwise */
import React, { useState, useEffect } from 'react'

import { getByCategory } from '../../utils/getData'
import PredictionTable from '../PredictionTable/PredictionTable'
import './CollegePredictor.css'

const CollegePredictor = () => {
  const [colleges, setColleges] = useState([])
  const [rank, setRank] = useState()
  const [isLoading, setLoading] = useState(false)
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

  const getFilteredColleges = () => new Promise(((resolve, _reject) => {
    const filteredColleges = getByCategory(filters.category)
      .filter(filterData)

    // using this to prevent 1 second lag, loading is better than lag
    setTimeout(() => {
      resolve(filteredColleges)
    }, 1000)
  }))

  const filterColleges = () => {
    setLoading(true)
    getFilteredColleges().then((filteredColleges) => {
      setColleges(filteredColleges)
      setLoading(false)
    })
  }

  useEffect(() => {
    filterColleges()
  }, [exam, filters])

  return (
    <>
      <div className="filter-form">
        <div className="filter-form__inputs">
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
        <div className="dev-links">
          Made in Rajasthan by
          &nbsp;
          <a
            className="dev-link"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/2AMDevs/no-bs-college-predictor/"
          >
            2AM Devs
          </a>
        </div>
      </div>
      <PredictionTable
        colleges={colleges}
        filters={filters}
        setFilters={setFilters}
        isLoading={isLoading}
      />
    </>
  )
}

export default CollegePredictor
