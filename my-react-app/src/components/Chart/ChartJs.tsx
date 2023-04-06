import React from 'react'
import Chart from 'react-google-charts'

export const data = [
    ["Year", "Sales"],
    ["A", 1000],
    ["B", 1170],
    ["C", 660],
    ["D", 1030],
    ["E", 1030],
    ["F", 1030],
    ["G", 1030]
  ];

export const ChartJs = () => {
    
  return (
    <Chart chartType='Bar'  data={data} height={180} />
  )
}
