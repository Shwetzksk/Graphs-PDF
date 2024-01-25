import React, { useState, useEffect, useMemo } from "react";
import { Error } from "../../UI/indicator/error";
import {
  RECEIVED_COLOR,
  TRANSMITTED_COLOR,
  TEXT_COLOR,
  DESKTOP_SCREEN_SM,
  DESKTOP_SCREEN_MD,
} from "../../../utils/constants.util.js";
import {
  Chart as ChartJS,
  CategoryScale,
  Filler,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  TimeScale,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { CircularProgress, alpha } from "@mui/material";
import { Empty } from "features/UI/indicator/empty.jsx";
import warnSound from "assets/audio/alert-add.mp3";
import critSound from "assets/audio/Street Fighter Start.mp3";
import { TrendDown, TrendUp } from "phosphor-react";
import "chartjs-adapter-moment";
import * as graphConfig from "config/graph.config.js";
import { SOCKET_STATUS } from "config/socket-status.js";
import Loader from "../components/loader";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  TimeScale
);

const windowWidth = window.innerWidth;

//================ AUDIOS =============\
const warnAudio = new Audio(warnSound);
const critAudio = new Audio(critSound);

//============= COLORS ==============
const RECEIVED = "#6F1AB6";
const RECEIVED_BORDER = "#E3ACF9";
const TRANSMITTED = "#3C79F5";
const TRANSMITTED_BORDER = "#BFEAF5";
const TOTAL = "#379237";
const TOTAL_BORDER = "#89D289 ";

//========== CONVERT BITS TO Mbps ===========
function convertMbps(value) {
  const kb = 1000;
  return ((value * 8) / (kb * kb)).toFixed(2);
}

//================ MAINTAIN FONTSIZE OF GRAPHS SCALE =============
function scaleFontSize() {
  if (windowWidth > DESKTOP_SCREEN_SM && windowWidth <= DESKTOP_SCREEN_MD) {
    return 12;
  }
  if (windowWidth > DESKTOP_SCREEN_MD) {
    return 18;
  }
  return 10;
}

//============== OPTIONS FOR GRAPH ================
export const options = {
  responsive: true,
  maintainAspectRatio: false,
  color: TEXT_COLOR(1),
  interaction: {
    intersect: false,
    mode: "index",
  },
  pointRadius: 0.8,
  scales: {
    x: {
      type: "time",
      time: {
        displayFormats: graphConfig.timeDisplayformat,
      },
      grid: {
        color: TEXT_COLOR(0.1),
      },
      ticks: {
        color: TEXT_COLOR(1),
        font: {
          size: scaleFontSize(),
        },
      },

      title: {
        display: false,
        // text: "Time",
        size: 70,
        color: TEXT_COLOR(1),
      },
    },
    y: {
      grid: {
        color: TEXT_COLOR(0.1),
      },
      ticks: {
        color: TEXT_COLOR(1),
        font: {
          size: scaleFontSize(),
        },

        // Include a dollar sign in the ticks
        callback: function (value) {
          // return "$" + value;
          value = value * 8;
          let megabitdata = value / 1000000; // covert bit to Megabit
          return megabitdata;
        },
      },
      title: {
        display: true,
        text: " Mega Bits per second",
        color: TEXT_COLOR(1),
      },
    },
  },
  plugins: {
    legend: {
      display: false,
      position: "bottom",
      align: "end",
      labels: {
        boxWidth: 15,
        boxHeight: 15,
      },
    },
    title: {
      display: false,
    },
    subtitle: {
      display: false,
    },
    tooltip: {
      callbacks: {
        label: function (context) {
          let label = context.dataset.label || "";

          if (label) {
            label += ": ";
          }
          if (context.parsed.y !== null) {
            let value = context.parsed.y * 8;
            let magabitdata = value / 1000000; // covert bit to Megabit
            value = parseFloat(magabitdata.toFixed(2)) + " Mbps";
            label += value;
          }
          return label;
        },
      },
    },
  },
  layout: {
    autoPadding: false,
  },
};

//------------------- GRAPGH ----------------
export default function LineGraph(props) {
  const { data, status, error, datacenter } = props;
  const { inbound, outbound, time, total } = data;

  

  

  const dataset = {
    labels: time,
    datasets: [
      {
        segment: { borderWidth: 1 },
        label: "In",
        data: inbound,
        borderColor: RECEIVED_BORDER,
        backgroundColor: alpha(RECEIVED, 0.3),
        fill: true,
      },
      {
        segment: { borderWidth: 1 },
        label: "Out",
        data: outbound,
        borderColor: TRANSMITTED_BORDER,
        backgroundColor: alpha(TRANSMITTED, 0.3),
        fill: true,
      },
      {
        segment: { borderWidth: 1 },
        label: "Total",
        data: total,
        borderColor: TOTAL_BORDER,
        backgroundColor: alpha(TOTAL, 0.4),
        fill: true,
      },
    ],
  };

  return (
    <div className={` h-80`}>
      <Line options={options} data={dataset} />
    </div>
  );
}


