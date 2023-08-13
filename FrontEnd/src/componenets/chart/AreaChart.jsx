// import {ApexChart} from 'apexcharts'
import { useState } from 'react'
import ReactApexChart from 'react-apexcharts';

const AreaChart = () =>{

  const [series, setSeries] = useState([{
    name: 'series1',
    data: [31, 40, 28, 51, 42, 109, 100]
  }, {
    name: 'series2',
    data: [11, 32, 45, 32, 34, 52, 41]
  }]);
  const [xAxis, setXAxis] = useState(['01','02','03','04','05','06','07']);
  const options = {
    chart: {
      height: 350,
      type: 'area'
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth'
    },
  };

  return (
    <div>
        <ReactApexChart options={options} series={series} xAxis={xAxis} type={'area'} height={350}/>
    </div>
  )
}

export default AreaChart;