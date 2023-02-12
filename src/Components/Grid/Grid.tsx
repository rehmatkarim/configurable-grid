import React, { useEffect, useState } from "react";
import List from "../List/List";
import { isTimestamp, getDisplayableDateString } from "../../utils/utils";
import { gridPropTypes, columnTypes } from "./Grid.types";
import axios from "axios";

const Grid: React.FC<gridPropTypes> = ({ columns, api }) => {
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
  }, [data]);

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
                      <td key={colIndex}>
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
        <List title="name" subTitle="amount" data={data} />
      )}
    </div>
  );
};

export default Grid;
