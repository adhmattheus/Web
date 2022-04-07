
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bubble } from 'react-chartjs-2';
import Zoom from 'chartjs-plugin-zoom';

ChartJS.register(LinearScale, PointElement, Tooltip, Legend, Zoom);

const options = {
  plugins: {
    title: {
      display: true,
      text: 'Coordenadas GPS Nmea'
    },
    legend: {
      display: true,
      position: 'top'
    },
    zoom: {
      enabled: true,
      drag: true,
      mode: 'xy'
    },
    pan: {
      enabled: true,
      mode: 'xy'
    }
  },
  scales: {
    y: {
      beginAtZero: true
    },
  }
}

export const BarChart = ({ chartData }) => {

  console.log(chartData)
  return (
    <div>
      <Bubble
        data={chartData}
        options={options}
      />
    </div>
  )
}