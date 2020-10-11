import React from 'react';

import './PredictionTable.css';

const PredictionTable = ({ colleges }) => {
  return (
    <div className="college-table">
      <table>
        <thead>
          <tr>
            <th>Institute name</th>
            <th>Program</th>
            <th>Quota</th>
            <th>Category</th>
            <th>Opening Rank</th>
            <th>Closing Rank</th>
            <th>Type</th>
            <th>Course Duration</th>
          </tr>
        </thead>
        <tbody>
          {(colleges || []).map((college, index) => {
            return (
              <tr key={`${index}-college.institute`}>
                <td title={college.institute}>{college.institute}</td>
                <td title={college.program}>{college.program}</td>
                <td title={college.quota}>{college.quota}</td>
                <td title={college.category}>{college.category}</td>
                <td title={college.openingRank}>{college.openingRank}</td>
                <td title={college.closingRank}>{college.closingRank}</td>
                <td title={college.type}>{college.type}</td>
                <td title={college.courseDuration}>{college.courseDuration}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default PredictionTable;
