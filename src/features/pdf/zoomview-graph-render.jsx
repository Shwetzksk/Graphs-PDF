import * as Graphs from "../chartjs-graph/pdf-graph";

function ZoomviewGraphRender() {
  return (
    <main className="opacity- ">
      <div
        className="grid grid-cols-2 w-11/12 mx-auto gap-3 line-graph"
        id="line-graph-1"
      >
        <Graphs.CPUGraph title="CPU Utilization" imgId="pdf-graph" />
        <Graphs.CPULoad title="CPU Load | 4 Core" imgId="pdf-graph" />
      </div>
      <div
        className="grid grid-cols-2 w-11/12 mx-auto gap-3 line-graph"
        id="line-graph-2"
      >
        <Graphs.Ram title="RAM Performance" imgId="pdf-graph" />
        <Graphs.FileSystem title="filesystem d:/" imgId="pdf-graph" />
      </div>
      <div
        className="grid grid-cols-2 w-11/12 mx-auto gap-3 line-graph"
        id="line-graph-3"
      >
        <Graphs.FileSystem title="filesystem /boot" imgId="pdf-graph" />
        <Graphs.NoOfThreads title="No. of Threads" imgId="pdf-graph" />
      </div>
      <div
        className="grid grid-cols-2 w-11/12 mx-auto gap-3 line-graph"
        id="line-graph-4"
      >
        <Graphs.DiskThroughput title="Disk Throughput" imgId="pdf-graph" />
        <Graphs.DiskAvg title="Disk Average Time Await" imgId="pdf-graph" />
      </div>
      <div
        className="grid grid-cols-2 w-11/12 mx-auto gap-3 line-graph"
        id="line-graph-5"
      >
        <Graphs.DiskTops title="Disk IOPS" imgId="pdf-graph" />
        <Graphs.TcpConnection title="TCP Connections" imgId="pdf-graph" />
      </div>
      <div
        className="grid grid-cols-2 w-11/12 mx-auto gap-3 line-graph"
        id="line-graph-6"
      >
        <Graphs.InterfaceBandwidth
          title="interface | TJ-LAN-502-Bandwidth"
          imgId="pdf-graph"
        />
        <Graphs.InterfacePacket
          title="interface | TJ-LAN-502-Packets"
          imgId="pdf-graph"
        />
      </div>
      <div className=" w-11/12 mx-auto gap-3 line-graph" id="line-graph-7">
        <Graphs.Bandwidth title="Bandwidth" imgId="pdf-graph" />
      </div>
    </main>
  );
}

export default ZoomviewGraphRender;
