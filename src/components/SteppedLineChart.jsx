import React from "react";
import { connect } from "react-redux";
import { Chart } from "react-google-charts";



function SteppedLineChart() {

    let data = [
        ['Director (Year)','', '',''],
        ['Feb 19', 2,0, 0],
        ['Mar 19', 3,0, 0.06],
        ['Apr 19', 2,0, 0],
        ['May 19', 3,0, 0.06],
      ]

return (
    <Chart
        width={'500px'}
        height={'300px'}
        chartType="SteppedAreaChart"
        loader={<div>Loading Chart</div>}
        data={data}
        options={{
            title: "",
            vAxis: { title: '' },
            isStacked: true,
            colors:['white','red','#2A59FF'],
        }}
        rootProps={{ 'data-testid': '1' }}
    />
);
}


const mapStateToProps = ({ literals }) => ({
    literals
});

export default connect(mapStateToProps)(SteppedLineChart);