import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  TimeScale,
} from "chart.js";
import { Line } from "react-chartjs-2";
import "chartjs-adapter-moment";

ChartJS.register(
  TimeScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

/**
 *
 * @param {Object} props
 *  @param {String } props.graphTitle
 * @param {String | Number} props.id
 * @param {Array} props.labels - Array for x-axis
 * @param {Array.<{label:String,data:Array,borderColor:String,backgroundColor:String,fill:Boolean}>} props.datasets - Array for y-axis
 * @returns
 */
// eslint-disable-next-line react/prop-types
export default function LineGraph({ id, labels, datasets, graphTitle }) {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          boxWidth: 25,
          boxHeight: 1,
        },
      },
      title: {
        display: true,
        text: graphTitle,
      },
    },
    scales: {
      x: {
        type: "time",
        time: {
          displayFormats: {
            millisecond: "HH:mm:ss",
            second: "HH:mm:ss",
            minute: "HH:mm",
            hour: "DD MMM, HH:mm",
            day: "DD MMM",
            quarter: "MMM YYYY",
          },
        },
      },
    },
  };
  return <Line options={options} data={{ labels, datasets }} id={id} />;
}
