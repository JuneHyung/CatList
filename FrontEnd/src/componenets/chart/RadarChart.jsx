// import {ApexChart} from 'apexcharts'
import { useState } from 'react'
import ReactApexChart from 'react-apexcharts';

const AreaChart = () =>{

  const [series, setSeries] = useState([{
    name: 'Series 1',
    data: [80, 50, 30, 40, 100, 20],
  }]);

  const [options, setOptions] = useState({
    chart: {
      height: 350,
      type: 'radar',
    },
    title: {
      text: 'Basic Radar Chart'
    },
    xaxis: {
      categories: ['January', 'February', 'March', 'April', 'May', 'June']
    }
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
        <ReactApexChart options={options} series={series} type='radar' height={350}/>
    </div>
  )
}

export default AreaChart;