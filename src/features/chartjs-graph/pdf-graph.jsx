/* eslint-disable react/prop-types */
import LineGraph from "./line-graphs-wrapper";
import * as staticData from "../../config/pdf-graphs.constant";
import { faker } from "@faker-js/faker";

// eslint-disable-next-line react/prop-types
export function Bandwidth({ id, title, imgId }) {
  const datasets = [
    {
      label: "Received",
      data: staticData.received.map((data) => data / (1000 * 1000)),
      borderColor: "rgb(40, 194, 255)",
      backgroundColor: "rgba(40, 194, 255, 0.5)",
      fill: true,
      borderWidth: 1,
      pointRadius: 1,
    },
    {
      label: "Transmitted",
      data: staticData.transmitted.map((data) => data / (1000 * 1000)),
      borderColor: "rgb(125, 205, 133)",
      backgroundColor: "rgba(125, 205, 133, 0.5)",
      fill: true,
      borderWidth: 1,
      pointRadius: 1,
    },
    {
      label: "Total",
      data: staticData.transmitted.map(
        (data, i) => (data + staticData.received[i]) / (1000 * 1000)
      ),
      borderColor: "rgb(229, 122, 68)",
      backgroundColor: "rgba(229, 122, 68, 0.5)",
      fill: true,
      borderWidth: 1,
      pointRadius: 1,
    },
  ];

  return (
    <div className={`w-full h-80 ${imgId}`}>
      <LineGraph
        graphTitle={title}
        labels={staticData.time.map((time) => time * 1000)}
        datasets={datasets}
        id={id}
      />
    </div>
  );
}

export function CPUGraph({ id, title, imgId }) {
  const datasets = [
    {
      label: "Used",
      data: staticData.percent,
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
      fill: true,
      borderWidth: 1,
      pointRadius: 1,
    },
  ];

  return (
    <div className={`w-full h-80 ${imgId}`}>
      <LineGraph
        graphTitle={title}
        labels={staticData.time.map((time) => time * 1000)}
        datasets={datasets}
        id={id}
      />
    </div>
  );
}
export function CPULoad({ id, title, imgId }) {
  const datasets = [
    {
      label: "5 min",
      data: staticData.time.map(() => faker.number.float({ min: 0, max: 0.5 })),
      borderColor: "rgb(243, 146, 55)",
      backgroundColor: "rgba(243, 146, 55, 0.5)",
      fill: true,
      borderWidth: 1,
      pointRadius: 1,
    },
    {
      label: "15 min",
      data: staticData.time.map(() => faker.number.float({ min: 0, max: 2 })),
      borderColor: "rgb(28, 119, 195)",
      backgroundColor: "rgba(28, 119, 195, 0.5)",
      fill: true,
      borderWidth: 1,
      pointRadius: 1,
    },
    {
      label: "1 min",
      data: staticData.time.map(() => faker.number.float({ min: 0, max: 1 })),
      borderColor: "rgb(214, 50, 48)",
      backgroundColor: "rgba(214, 50, 48, 0.5)",
      fill: true,
      borderWidth: 1,
      pointRadius: 1,
    },
  ];

  return (
    <div className={`w-full h-80 ${imgId}`}>
      <LineGraph
        graphTitle={title}
        labels={staticData.time.map((time) => time * 1000)}
        datasets={datasets}
        id={id}
      />
    </div>
  );
}

export function Ram({ id, title, imgId }) {
  const datasets = [
    {
      label: "Used",
      data: staticData.time.map(() => faker.number.float({ min: 0, max: 100 })),
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
      fill: true,
      borderWidth: 1,
      pointRadius: 1,
    },
  ];

  return (
    <div className={`w-full h-80 ${imgId}`}>
      <LineGraph
        graphTitle={title}
        labels={staticData.time.map((time) => time * 1000)}
        datasets={datasets}
        id={id}
      />
    </div>
  );
}
export function FileSystem({ id, title, imgId }) {
  const datasets = [
    {
      label: "Used",
      data: staticData.time.map(() => faker.number.float({ min: 0, max: 100 })),
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
      fill: true,
      borderWidth: 1,
      pointRadius: 1,
    },
  ];

  return (
    <div className={`w-full h-80 ${imgId}`}>
      <LineGraph
        graphTitle={title}
        labels={staticData.time.map((time) => time * 1000)}
        datasets={datasets}
        id={id}
      />
    </div>
  );
}
export function NoOfThreads({ id, title, imgId }) {
  const datasets = [
    {
      label: "Threads",
      data: staticData.time.map(() => faker.number.float({ min: 0, max: 200 })),
      borderColor: "rgb(136, 80, 83)",
      backgroundColor: "rgba(136, 80, 83, 0.5)",
      fill: true,
      borderWidth: 1,
      pointRadius: 1,
    },
  ];

  return (
    <div className={`w-full h-80 ${imgId}`}>
      <LineGraph
        graphTitle={title}
        labels={staticData.time.map((time) => time * 1000)}
        datasets={datasets}
        id={id}
      />
    </div>
  );
}
export function DiskThroughput({ id, title, imgId }) {
  const datasets = [
    {
      label: "Read",
      data: staticData.received.map((data) => data / (1000 * 1000)),
      borderColor: "rgb(56, 134, 151)",
      backgroundColor: "rgba(56, 134, 151, 0.5)",
      fill: true,
      borderWidth: 1,
      pointRadius: 1,
    },
    {
      label: "Write",
      data: staticData.transmitted.map((data) => data / (1000 * 1000)),
      borderColor: "rgb(255, 232, 130)",
      backgroundColor: "rgba(255, 232, 130, 0.5)",
      fill: true,
      borderWidth: 1,
      pointRadius: 1,
    },
  ];

  return (
    <div className={`w-full h-80 ${imgId}`}>
      <LineGraph
        graphTitle={title}
        labels={staticData.time.map((time) => time * 1000)}
        datasets={datasets}
        id={id}
      />
    </div>
  );
}
export function DiskAvg({ id, title, imgId }) {
  const datasets = [
    {
      label: "Read",
      data: staticData.time.map(() => faker.number.float({ min: 0, max: 3 })),
      borderColor: "rgb(56, 134, 151)",
      backgroundColor: "rgba(56, 134, 151, 0.5)",
      fill: true,
      borderWidth: 1,
      pointRadius: 1,
    },
    {
      label: "Write",
      data: staticData.time.map(() => faker.number.float({ min: 0, max: 3 })),
      borderColor: "rgb(255, 232, 130)",
      backgroundColor: "rgba(255, 232, 130, 0.5)",
      fill: true,
      borderWidth: 1,
      pointRadius: 1,
    },
  ];

  return (
    <div className={`w-full h-80 ${imgId}`}>
      <LineGraph
        graphTitle={title}
        labels={staticData.time.map((time) => time * 1000)}
        datasets={datasets}
        id={id}
      />
    </div>
  );
}
export function DiskTops({ id, title, imgId }) {
  const datasets = [
    {
      label: "Read",
      data: staticData.time.map(() => faker.number.float({ min: 0, max: 1 })),
      borderColor: "rgb(56, 134, 151)",
      backgroundColor: "rgba(56, 134, 151, 0.5)",
      fill: true,
      borderWidth: 1,
      pointRadius: 1,
    },
    {
      label: "Write",
      data: staticData.time.map(() => faker.number.float({ min: 0, max: 1 })),
      borderColor: "rgb(255, 232, 130)",
      backgroundColor: "rgba(255, 232, 130, 0.5)",
      fill: true,
      borderWidth: 1,
      pointRadius: 1,
    },
  ];

  return (
    <div className={`w-full h-80 ${imgId}`}>
      <LineGraph
        graphTitle={title}
        labels={staticData.time.map((time) => time * 1000)}
        datasets={datasets}
        id={id}
      />
    </div>
  );
}

export function TcpConnection({ id, title, imgId }) {
  const datasets = [
    {
      label: "Established",
      data: staticData.time.map(() => faker.number.float({ min: 0, max: 50 })),
      borderColor: "rgb(115, 113, 252)",
      backgroundColor: "rgba(115, 113, 252, 0.5)",
      fill: true,
      borderWidth: 1,
      pointRadius: 1,
    },
    {
      label: "Listen",
      data: staticData.time.map(() => faker.number.float({ min: 0, max: 50 })),
      borderColor: "rgb(151, 223, 252)",
      backgroundColor: "rgba(151, 223, 252, 0.5)",
      fill: true,
      borderWidth: 1,
      pointRadius: 1,
    },
    {
      label: "Time Await",
      data: staticData.time.map(() => faker.number.float({ min: 0, max: 50 })),
      borderColor: "rgb(142, 166, 4)",
      backgroundColor: "rgba(142, 166, 4, 0.5)",
      fill: true,
      borderWidth: 1,
      pointRadius: 1,
    },
  ];

  return (
    <div className={`w-full h-80 ${imgId}`}>
      <LineGraph
        graphTitle={title}
        labels={staticData.time.map((time) => time * 1000)}
        datasets={datasets}
        id={id}
      />
    </div>
  );
}

export function InterfaceBandwidth({ id, title, imgId }) {
  const datasets = [
    {
      label: "Bandwidth(in)",
      data: staticData.received.map((data) => data / (1000 * 1000)),
      borderColor: "rgb(93, 253, 203)",
      backgroundColor: "rgba(93, 253, 203, 0.5)",
      fill: true,
      borderWidth: 1,
      pointRadius: 1,
    },
    {
      label: "Bandwidth(out)",
      data: staticData.transmitted.map((data) => data / (1000 * 1000)),
      borderColor: "rgb(144, 215, 255)",
      backgroundColor: "rgba(144, 215, 255, 0.5)",
      fill: true,
      borderWidth: 1,
      pointRadius: 1,
    },
  ];

  return (
    <div className={`w-full h-80 ${imgId}`}>
      <LineGraph
        graphTitle={title}
        labels={staticData.time.map((time) => time * 1000)}
        datasets={datasets}
        id={id}
      />
    </div>
  );
}
export function InterfacePacket({ id, title, imgId }) {
  const datasets = [
    {
      label: "Multicast (in)",
      data: staticData.received.map((data) => data / (1000 * 1000)),
      borderColor: "rgb(185, 227, 198)",
      backgroundColor: "rgba(185, 227, 198, 0.5)",
      fill: true,
      borderWidth: 1,
      pointRadius: 1,
    },
    {
      label: "Multicast (out)",
      data: staticData.transmitted.map((data) => data / (1000 * 1000)),
      borderColor: "rgb(89, 201, 165)",
      backgroundColor: "rgba(89, 201, 165, 0.5)",
      fill: true,
      borderWidth: 1,
      pointRadius: 1,
    },
    {
      label: "Unicast (in)",
      data: staticData.received.map((data) => data / (1000 * 1000)),
      borderColor: "rgb(105, 3, 117)",
      backgroundColor: "rgba(105, 3, 117, 0.5)",
      fill: true,
      borderWidth: 1,
      pointRadius: 1,
    },
    {
      label: "Unicast (out)",
      data: staticData.transmitted.map((data) => data / (1000 * 1000)),
      borderColor: "rgb(203, 66, 159)",
      backgroundColor: "rgba(203, 66, 159, 0.5)",
      fill: true,
      borderWidth: 1,
      pointRadius: 1,
    },
  ];

  return (
    <div className={`w-full h-80 ${imgId}`}>
      <LineGraph
        graphTitle={title}
        labels={staticData.time.map((time) => time * 1000)}
        datasets={datasets}
        id={id}
      />
    </div>
  );
}
