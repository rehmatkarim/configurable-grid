import React, { useEffect, useState } from "react";
import List from "../List/List";
import { isTimestamp, getDisplayableDateString, IsNumeric } from "../../utils/utils";
import { gridPropTypes, columnTypes } from "./Grid.types";
import axios from "axios";
import "./Grid.css";

const Grid: React.FC<gridPropTypes> = ({
  columns,
  api,
  ListTitleColumn,
  ListSubTitleColumn,
  positiveColor,
  negativeColor
}) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(api)
      .then((response) => {
        const data = response.data.data;
        const processedData = data.map((item: any) => {
          const processedItem = {} as any;

          columns.forEach((column: columnTypes) => {
            processedItem[column.key] = item[column.key];
          });

          return processedItem;
        });

        setData(processedData);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [data, api, columns]);

  const getCellClassName = (value: any) => {
    if (IsNumeric(value)) {
      if (value < 0) {
        return 'green';
      } else if (value > 0) {
        return 'red';
      }
    }
    return '';
  };

  return (
    <div>
      {window.innerWidth > 720 ? (
        <table style={{ marginLeft: "auto", marginRight: "auto" }}>
          <thead>
            <tr>
              {columns.map((column, index) => {
                return <th key={index}>{column.label}</th>;
              })}
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => {
              return (
                <tr key={index}>
                  {columns.map((column, colIndex) => {
                    return (
                      <td key={colIndex} className={getCellClassName(item[column.key])}>
                        {isTimestamp(item[column.key])
                          ? getDisplayableDateString(item[column.key])
                          : item[column.key]}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <List
          title={ListTitleColumn}
          subTitle={ListSubTitleColumn}
          data={data}
        />
      )}
    </div>
  );
};

export default Grid;
