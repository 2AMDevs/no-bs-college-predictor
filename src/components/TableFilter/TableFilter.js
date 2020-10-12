import React from 'react'

const TableFilter = ({
  title, property, value, data, updateFilters,
}) => (
  <th>
    {title}
    { data?.length && (
      <select
        id={property}
        name={title}
        value={value}
        onChange={(e) => updateFilters(property, e.target.value)}
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
    ) }
  </th>
)

export default TableFilter
