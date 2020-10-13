import React from 'react'

import './PredictionTable.css'
import { columns } from '../../utils/constants'
import TableFilter from '../TableFilter/TableFilter'
import Loading from '../../loading.svg'

const PredictionTable = ({
  colleges, filters,
  setFilters,
}) => {
  const updateFilters = (key, val) => {
    const newFilters = {
      ...filters,
      [key]: val,
    }
    setFilters(newFilters)
  }

  return (
    <div className="college-table">
      <table>
        <colgroup>
          {columns.map((col) => (
            <col
              span="1"
              key={`col-span-${col.title}`}
              style={col.style}
            />
          ))}
        </colgroup>
        <thead>
          <tr>
            {columns.map((col) => (
              <TableFilter
                title={col.title}
                data={col.data}
                property={col.property}
                key={col.property}
                value={filters[col.key]}
                updateFilters={updateFilters}
              />
            ))}
          </tr>
        </thead>
        <img
          className="loading"
          src={Loading}
          alt="Loading"
        />
        <tbody>
          {colleges?.length ? (colleges).map((college, index) => (
            <tr key={`${index}-${college.institute}`}>
              <td title={college.institute}>
                {college.institute}
              </td>
              <td title={college.program}>
                {college.program}
              </td>
              <td title={college.quota}>
                {college.quota}
              </td>
              <td title={college.category}>
                {college.category}
              </td>
              <td title={college.seat}>
                {college.seat}
              </td>
              <td title={college.openingRank}>
                {college.openingRank}
              </td>
              <td title={college.closingRank}>
                {college.closingRank}
              </td>
              <td title={college.type}>
                {college.type}
              </td>
              <td title={college.courseDuration}>
                {college.courseDuration}
              </td>
            </tr>
          )) : (
            <tr>
              <td
                className="none-found"
                colSpan={columns.length}
              >
                No Colleges found as per filters applied.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default PredictionTable
