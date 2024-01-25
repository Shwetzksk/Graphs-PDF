import { Table } from "antd";
import React, { useEffect, useState } from "react";

/**
 * Transforms data into either a table or a list of card elements based on a condition.
 * @param {Object} props - The properties object.
 * @param {Array<Object>} props.columns - The columns for the table (if transformed into a table).
 * @param {Array<Object>} props.data - The data for the table or card elements.
 * @param {React.Component} props.CardElement - The React component for the card element.
 * @returns {JSX.Element} - The transformed table or card elements.
 */
function TableTranform(props) {
  const {
    columns,
    data,
    CardElement,
    cardLayoutBreakpoint,
    cardLayoutTransform,
  } = props;
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    setScreenWidth(window.screen.width);
    console.log(props);
    function updateOnResizeWindow() {
      setScreenWidth(window.screen.width);
    }
    window.addEventListener("resize", updateOnResizeWindow);

    return () => {
      window.removeEventListener("resize", updateOnResizeWindow);
    };
  }, []);

  if (cardLayoutTransform) {
    return (
      <div className="m-3 border">
        <h1>
          tranform into {screenWidth > cardLayoutBreakpoint ? "Table" : "Card"}
        </h1>
        {screenWidth > cardLayoutBreakpoint ? (
          <Table columns={columns} dataSource={data} />
        ) : (
          data.map((cardData) => (
            <CardElement key={cardData.key} {...cardData} />
          ))
        )}
      </div>
    );
  }
  return (
    <div className="m-3 border">
      <Table columns={columns} dataSource={data} />
    </div>
  );
}

export default TableTranform;
