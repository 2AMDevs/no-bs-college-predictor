import React from 'react'

import './PredictionTable.css'
import { columns } from '../../utils/constants'
import TableFilter from '../TableFilter/TableFilter'

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
        <tbody>
          {colleges?.length ? (colleges).map((college, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <tr key={`${index}-college.institute`}>
              <td
                className="width150"
                title={college.institute}
              >
                {college.institute}
              </td>
              <td
                className="width150"
                title={college.program}
              >
                {college.program}
              </td>
              <td
                className="width100"
                title={college.quota}
              >
                {college.quota}
              </td>
              <td
                className="width100"
                title={college.category}
              >
                {college.category}
              </td>
              <td
                className="width100"
                title={college.seat}
              >
                {college.seat}
              </td>
              <td
                className="width100"
                title={college.openingRank}
              >
                {college.openingRank}
              </td>
              <td
                className="width100"
                title={college.closingRank}
              >
                {college.closingRank}
              </td>
              <td
                className="width100"
                title={college.type}
              >
                {college.type}
              </td>
              <td
                className="width100"
                title={college.courseDuration}
              >
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
