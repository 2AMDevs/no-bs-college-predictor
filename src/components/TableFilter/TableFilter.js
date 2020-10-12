import React from 'react'

import './TableFilter.css'

const TableFilter = ({
  title, property, value, data, updateFilters,
}) => (
  <th>
    {title}
    {data?.length && (
      <select
        id={property}
        name={title}
        value={value}
        onChange={(e) => updateFilters(property, e.target.value)}
        className="table-filter"
      >
        {data.map((d) => (
          <option
            key={d}
            value={d}
          >
            {d}
          </option>
        ))}
      </select>
    )}
  </th>
)

export default TableFilter
