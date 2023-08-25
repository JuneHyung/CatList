// import {ApexChart} from 'apexcharts'
import { useEffect, useState } from 'react'
import ReactApexChart from 'react-apexcharts';

const RadarChart = ({customCategories , customSeries}) =>{
  const [series, setSeries] = useState([{
    name: 'Series 1',
    data: [],
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
      categories: [],
    }
  })
  
  useEffect(()=>{
    if(customCategories!==undefined) setOptions((prev)=>({...prev, xaxis: {
      ...prev.xaxis,
      categories: customCategories
    } }))
    if(customSeries!==undefined) setSeries((prev)=>([{...prev, data: customSeries}]))
  },[customCategories, customSeries])


  return (
    <div>
      <ReactApexChart options={options} series={series} type='radar' height={350}/>
    </div>
  )
}

export default RadarChart;