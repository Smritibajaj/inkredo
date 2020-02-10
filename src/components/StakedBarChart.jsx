import React from "react";
import { connect } from "react-redux";
import { Chart } from "react-google-charts";

function StakedBarChart () {
  return(
    <Chart
  width={'500px'}
  height={'300px'}
  chartType="ColumnChart"
  loader={<div>Loading Chart</div>}
  data={[
    ['Jan 19', '7500', '4500','3000'],
    ['Jan 19', 7500, 0, 0],
    ['Feb 19', 7500, 4500, 3000],
    ['Mar 19', 7500, 0, 3000],
  ]}
  options={{
    title: 'Top auto debits ',
    chartArea: { width: '50%' },
    isStacked: true,
    colors: ['#2A59FF', '#5C80FF','#8DA6FC'],
    hAxis: {
      title: '',
      minValue: 0,
    },
    vAxis: {
      title: '',
    },
  }}
  // For tests
  rootProps={{ 'data-testid': '3' }}
/>
  )
}


const mapStateToProps = ({ literals }) => ({
  literals
});

export default connect(mapStateToProps)(StakedBarChart);