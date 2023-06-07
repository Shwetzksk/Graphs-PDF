/* eslint-disable react/prop-types */
import {
  Text,
  View,
  Document,
  Page,
  Image,
  StyleSheet,
} from "@react-pdf/renderer";
import zybisysLogo from "../../assets/white-logo.png";
import {
  apps,
  city_wise,
  ip_comm,
  isp,
} from "../../config/pdf-table.constants";
import Table from "./table/table";
import html2canvas from "html2canvas";

const styles = StyleSheet.create({
  page: {
    backgroundColor: "#fff",
  },
  section: {
    marginTop: 15,
    padding: 12,
    flexGrow: 1,
  },
  details: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  header: {
    textAlign: "center",
    fontSize: "15px",
    fontWeight: 700,
  },
});

async function convertHTMLToImage(ele) {
  const htmlToCanva = await html2canvas(ele);
  const img = htmlToCanva.toDataURL("image/png");

  return img;
}
// Create Document Component
const MyDocument = () => {
  return (
    <Document size="A4">
      <Page size="A4" style={styles.page}>
        {/*----- PDF HEADER ----------*/}
        <View
          style={{
            backgroundColor: "#405572",
            padding: 12,
            paddingBottom: 5,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "flex-start",
            }}
          >
            <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 25 }}>
              Zoomview Report
            </Text>
            <Image src={zybisysLogo} alt="zybiys logo" style={{ width: 75 }} />
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "flex-end",
              justifyContent: "space-between",
              fontSize: 9,
              marginTop: 17,
              color: "#DAE8FB",
            }}
          >
            <View
              style={{ flexDirection: "row", alignItems: "flex-end", gap: 5 }}
            >
              <Text>From: 13-04-23 12:00:00 </Text>
              <Text>To: 14-04-23 12:00:00 </Text>
            </View>
            <Text>Generated on: 13-04-23 </Text>
          </View>
        </View>
        <View style={{ flexDirection: "row" }}>
          <View
            style={{ width: "33.33%", backgroundColor: "#61DFF0", height: 3 }}
          ></View>
          <View
            style={{ width: "33.33%", backgroundColor: "#E84F74", height: 3 }}
          ></View>
          <View
            style={{ width: "33.33%", backgroundColor: "#F1BD33", height: 3 }}
          ></View>
        </View>

        {/* ----------- PDF BODY ------------- */}

        <View style={styles.section}>
          <View>
            <Text style={{ fontSize: 14, textAlign: "center" }}>
              Instance Detail
            </Text>
          </View>
          {/* Instance Details */}
          <InstanceDetail />
          <View style={{ marginTop: 10 }}></View>
          <Header title="PERFORMANCE" />

          {/*------ GRAPH IMAGES --------*/}
          <View style={{ marginTop: 10, paddingLeft: 5, paddingRight: 5 }}>
            <Image
              src={convertHTMLToImage(document.getElementById("line-graph-1"))}
              alt="graph-set"
              style={{ marginBottom: 20 }}
            />
            <Image
              src={convertHTMLToImage(document.getElementById("line-graph-2"))}
              alt="graph-set"
            />
          </View>
        </View>
      </Page>
      {/* ------------------ PAGE 2 ------------- */}
      <Page size="A4" style={styles.page}>
        {/*------ GRAPH IMAGES --------*/}
        <View style={styles.section}>
          <View style={{ marginTop: 10, paddingLeft: 5, paddingRight: 5 }}>
            <Image
              src={convertHTMLToImage(document.getElementById("line-graph-3"))}
              alt="graph-set"
              style={{ marginBottom: 20 }}
            />
            <Image
              src={convertHTMLToImage(document.getElementById("line-graph-4"))}
              alt="graph-set"
              style={{ marginBottom: 20 }}
            />
            <Image
              src={convertHTMLToImage(document.getElementById("line-graph-5"))}
              alt="graph-set"
              style={{ marginBottom: 20 }}
            />
          </View>
        </View>
      </Page>
      {/* ------------------ PAGE 3 ------------- */}
      <Page size="A4" style={styles.page}>
        {/*------ GRAPH IMAGES --------*/}
        <View style={styles.section}>
          <View style={{ marginTop: 10, paddingLeft: 5, paddingRight: 5 }}>
            <Image
              src={convertHTMLToImage(document.getElementById("line-graph-6"))}
              alt="graph-set"
              style={{ marginBottom: 20 }}
            />
          </View>

          <Header title="INTERNET USAGE" />
          <View style={{ marginTop: 10, paddingLeft: 5, paddingRight: 5 }}>
            <Image
              src={convertHTMLToImage(document.getElementById("line-graph-7"))}
              alt="graph-set"
              style={{ marginBottom: 20 }}
            />
          </View>
          <View style={{ marginTop: 10, paddingTop: 10 }} wrap={false}>
            <Text style={{ fontSize: 12, marginBottom: 5, fontWeight: "bold" }}>
              External IP Communication
            </Text>
            <Table columns={ip_comm.columns} rows={ip_comm.rows} />
          </View>
          <View style={{ marginTop: 10, paddingTop: 10 }} wrap={false}>
            <Text style={{ fontSize: 12, marginBottom: 5, fontWeight: "bold" }}>
              App
            </Text>
            <Table columns={apps.columns} rows={apps.rows} />
          </View>
          <View style={{ marginTop: 10, paddingTop: 10 }} wrap={false}>
            <Text style={{ fontSize: 12, marginBottom: 5, fontWeight: "bold" }}>
              City Wise Traffic
            </Text>
            <Table columns={city_wise.columns} rows={city_wise.rows} />
          </View>
          <View style={{ marginTop: 10, paddingTop: 10 }} wrap={false}>
            <Text style={{ fontSize: 12, marginBottom: 5, fontWeight: "bold" }}>
              ISP Contribution
            </Text>
            <Table columns={isp.columns} rows={isp.rows} />
          </View>
        </View>
      </Page>
    </Document>
  );
};
export default MyDocument;

// ------------------ COMPOENENT ----------------
function Header({ title }) {
  return (
    <View
      style={{
        backgroundColor: "#405572",
        height: 26,
        fontSize: 12,
        fontWeight: "bold",
        position: "relative",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <View
        style={{
          backgroundColor: "#2F87FF",
          width: 4,
          height: "100%",
          position: "absolute",
          left: 0,
        }}
      ></View>
      <View style={{ color: "#fff", marginLeft: 10 }}>
        <Text>{title}</Text>
      </View>
    </View>
  );
}
function InstanceDetail() {
  return (
    <View
      style={{
        width: "50%",
        fontSize: 10,
        display: "table",
        margin: "auto",
        marginTop: 20,
        marginBottom: 10,
      }}
    >
      <View
        style={{
          margin: "auto",
          flexDirection: "row",
          justifyContent: "center",
          padding: 3,
        }}
      >
        <View style={{ width: "30%" }}>
          <Text>Hostname: </Text>
        </View>
        <View style={{ width: "70%" }}>
          <Text>MCR42VM-TJ-FO-BSE-MCX-ADPTR</Text>
        </View>
      </View>
      <View
        style={{
          margin: "auto",
          flexDirection: "row",
          padding: 3,
        }}
      >
        <View style={{ width: "30%" }}>
          <Text>Private IP: </Text>
        </View>
        <View style={{ width: "70%" }}>
          <Text>10.192.1.182</Text>
        </View>
      </View>
      <View
        style={{
          margin: "auto",
          flexDirection: "row",
          padding: 3,
        }}
      >
        <View style={{ width: "30%" }}>
          <Text>Public IP: </Text>
        </View>
        <View style={{ width: "70%" }}>
          <Text>154.83.3.172</Text>
        </View>
      </View>
      <View
        style={{
          margin: "auto",
          flexDirection: "row",
          padding: 3,
        }}
      >
        <View style={{ width: "30%" }}>
          <Text>Capacity: </Text>
        </View>
        <View style={{ width: "70%" }}>
          <Text>Core: 4 | RAM: 4 GB | Disk Space: 100 GB</Text>
        </View>
      </View>
      <View
        style={{
          margin: "auto",
          flexDirection: "row",
          padding: 3,
        }}
      >
        <View style={{ width: "30%" }}>
          <Text>OS: </Text>
        </View>
        <View style={{ width: "70%" }}>
          <Text>CentOS 7 (64-bit)</Text>
        </View>
      </View>
    </View>
  );
}
