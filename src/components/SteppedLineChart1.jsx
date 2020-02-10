import React from "react";
import { connect } from "react-redux";
import { Chart } from "react-google-charts";



function SteppedLineChart() {

    let data = [
        ['',''],
        ['', 2000],
        ['', 3000],
        ['', 2000],
        ['', 3500],
        ['', 4500],
        ['', 5000],
        ['', 3000],
        ['', 2000],
        ['', 3000],
        ['', 4500],
        ['', 2000],
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
            colors:['black'],
        }}
        rootProps={{ 'data-testid': '1' }}
    />
);
}


const mapStateToProps = ({ literals }) => ({
    literals
});

export default connect(mapStateToProps)(SteppedLineChart);