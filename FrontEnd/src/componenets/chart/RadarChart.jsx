// import {ApexChart} from 'apexcharts'
import { useEffect, useState } from 'react'
import ReactApexChart from 'react-apexcharts';

const RadarChart = ({customCategories , customSeries}) =>{
  const [series, setSeries] = useState([{
    name: '',
    data: [],
  }]);

  const [options, setOptions] = useState({
    chart: {
      type: 'radar',
    },
    title: {
      text: "Cat's Charctor Info"
    },
    xaxis: {
      categories: [],
      labels:{
        style:{
          colors: ['#000000', '#000000', '#000000', '#000000', '#000000', '#000000']
        }
      }
    },
    stroke: {
      show: true,
      width: 2,
      colors: Array.from({length:6},()=> '#6F4E37'),
      dashArray: 0
    },
    fill: {
      opacity: 0.5,
      colors: Array.from({length:6},()=> '#6F4E37')
    },
    markers: {
      size: 3,
      colors: Array.from({length:6},()=> '#6F4E37'),
      hover: {
        size: 5
      }
    },
    plotOptions: {
      radar: {
        polygons: {
          fill: {
              colors: ['#B7A684']
          }
        }
      }
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
    <div className="chart-wrap-box">
      <ReactApexChart options={options} series={series} type='radar' className="chart-info-box"/>
    </div>
  )
}

export default RadarChart;