/* eslint-disable react/prop-types */
import { StyleSheet, Text, View } from "@react-pdf/renderer";

const tableStyle = StyleSheet.create({
  table: {
    display: "table",
    width: "auto",
    borderStyle: "solid",
    borderWidth: 0.3,
    borderColor: "#000000",
    borderRightWidth: 0,
    borderBottomWidth: 0,
  },
  tableHead: {
    flexDirection: "row",
    backgroundColor: "#405572",
    color: "#fff",
  },
  tableHeadCol: {
    width: "20%",
    borderStyle: "solid",
    borderWidth: 0.3,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    borderColor: "#fff",
    padding: 3,
  },
  tableRow: {
    // margin: "auto",
    flexDirection: "row",
  },

  tableCol: {
    width: "20%",
    borderStyle: "solid",
    borderWidth: 0.3,
    borderTopWidth: 0,
    borderColor: "#000000",
    padding: 3,
    textAlign: "left",
  },
  tableOddColor: {
    backgroundColor: "#EFF0F4",
  },
  tableEvenColor: {
    backgroundColor: "#D3D6DB",
  },
  tableCell: {
    //  margin: "auto",
    fontSize: 8,
  },
});
export default function Table({ columns, rows }) {
  return (
    <View style={tableStyle.table}>
      {/* TABLE HEADER */}
      <View style={tableStyle.tableHead}>
        {columns.map((col, i) => (
          <View
            key={`table-head-${i}`}
            style={{
              ...tableStyle.tableHeadCol,
              width: col.width || `${100 / columns.length}%`,
            }}
          >
            <Text style={tableStyle.tableCell}>{col.title}</Text>
          </View>
        ))}
      </View>

      {/* TABLE BODY */}

      {rows.map((row, i) => (
        <View style={tableStyle.tableRow} key={`table-row-${i}`}>
          {columns.map((col, index) => {
            const isOdd = i % 2;
            return (
              <View
                key={`table-col--${index}-row-${i}`}
                style={{
                  ...tableStyle.tableCol,
                  width: col.width || `${100 / columns.length}%`,
                  backgroundColor: isOdd ? "#EFF0F4" : "#D3D6DB",
                }}
              >
                <Text style={tableStyle.tableCell}>{row[col.dataIndex]}</Text>
              </View>
            );
          })}
        </View>
      ))}
    </View>
  );
}
