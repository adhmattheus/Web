
// const style = require('./App.scss');
import { useEffect, useState } from 'react';
import { api } from './api';
import style from './App.module.scss';
import { BarChart } from './components/BarChart';


function App() {
  const [positions, setPositions] = useState([]);
  const [chartData, setChartData] = useState();

  useEffect(() => {
    async function getPositions() {
      const listPositions = await api.get('/').then(response => response.data);
      console.log(listPositions);
      setPositions(listPositions.positions);
      setChartData({
        datasets: [
          {
            label: 'Position (Lat x Lng)',
            data: listPositions.positions.map(position => ({
              x: Math.ceil(position.lat),
              y: Math.ceil(position.lng),
              r: 5
            })),
            backgroundColor: 'rgba(53, 162, 235, 0.5)'

          }
        ]
      })
    }

    getPositions();

  }, [])


  return (
    <div className={style.main}>

      <h1>Coordenadas GPS</h1>

      <div>
        {chartData && <BarChart chartData={chartData} />}
      </div>
      <div>
        {positions &&
          <ul>
            {positions?.map(position => (
              <li>
                <a
                  href={`http://www.google.com/maps/place/${position.lat},- ${position.lng}/@${position.lat},-${position.lng},17z`}
                  target="_blank"
                >
                  {`http://www.google.com/maps/place/${position.lat},- ${position.lng}/@${position.lat},-${position.lng},17z`}
                </a>
              </li>
            ))}
          </ul>}
      </div>
    </div>
  );
}

export default App;
