import './App.css';
import { ChartComponent } from './ChartComponent';
function getRandomValue(min, max) {
  return Math.random() * (max - min) + min;
}

// initialData를 생성하는 함수
function generateInitialData(startDate, endDate, min, max) {
  const initialData = [];
  let currentDate = new Date(startDate);
  const lastDate = new Date(endDate);

  while (currentDate <= lastDate) {
    const dateString = currentDate.toISOString().slice(0, 10);
    const value = getRandomValue(min, max);
    initialData.push({ time: dateString, value: parseFloat(value.toFixed(2)) });
    currentDate.setDate(currentDate.getDate() + 1);
  }

  return initialData;
}
export default function App(props) {
  const initialData = generateInitialData('2018-1-12', '2018-12-31', 20.00, 35.00);  for (const i of initialData) {
    console.log(i)
  }
	return (
		<ChartComponent {...props} data={initialData}></ChartComponent>
	);
}