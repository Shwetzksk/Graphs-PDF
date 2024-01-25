import * as Graphs from "../chartjs-graph/pdf-graph";

function ZoomviewGraphRender() {
  return (
    <main className="  overflow-y-auto ">
      <div className=" w-11/12 mx-auto gap-3 line-graph" id="line-graph-7">
        <Graphs.Bandwidth title="" imgId="pdf-graph" />
      </div>
    </main>
  );
}

export default ZoomviewGraphRender;
