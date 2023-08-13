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

  const [options, setOptions] = useState({
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
    xaxis: { categories: ['x01','x02','x03','x04','x05','x06','x07']}
  })
  
  const changeXAxis = () =>{
    setOptions((prev)=>({
      ...prev,
      xaxis: {
        ...prev.xaxis,
        categories: [...prev.xaxis.categories].reverse()
      }
    }))
  }

  return (
    <div>
      <button onClick={changeXAxis}>Reverse Categories</button>
        <ReactApexChart options={options} series={series} type={'area'} height={350}/>
    </div>
  )
}

export default AreaChart;