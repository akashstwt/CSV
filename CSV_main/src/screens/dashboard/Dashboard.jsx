import React, { useCallback, useEffect, useState } from "react";
import Papa from "papaparse";
import { Radio } from "antd";
import { useSelector } from "react-redux";
import { getUniqueKeys, getProcessedStackBarData } from "../../utils/index";
import DropdownButton from "../../components/dropdownBtn/DropDown";
import StackedBarChart from "../../components/stackedBarChart/StackedBarChart";
import BarChart from "../../components/barChart/BarChart";
import LineChart from "../../components/lineChart/LineChart";
import DoughNutChart from "../../components/donutChart/DonutChart";

const ChartComponent = () => {
  const csvOptions = [
    { label: "Row", value: "Row" },
    { label: "Column", value: "Column" }
  ];

  const chartTypeOptions = [
    { label: "Bar Chart", value: "Bar Chart" },
    { label: "Line Chart", value: "Line Chart" },
    { label: "Donut Chart", value: "Donut Chart" }
  ];

  const csvData = useSelector((state) => state?.csvInfo?.csvData);

  const [isRowHeader, setIsRowHeader] = useState("Row");
  const [formattedData, setFormattedData] = useState([]);
  const [headers, setHeaders] = useState([]);
  const [selectedLabel, setSelectedLabel] = useState("");
  const [chartType, setSelectChartType] = useState("Bar Chart");
  const [chartData, setChartData] = useState([]);

  const handleCSVType = ({ target: { value } }) => {
    setIsRowHeader(value);
  };

  const handleChartType = ({ target: { value } }) => {
    setSelectChartType(value);
  };

  const parseCSV = useCallback(
    (csv) => {
      const parsedData = Papa.parse(csv, {
        header: isRowHeader === "Row", // Assume no headers initially
        skipEmptyLines: true
      });

      if (isRowHeader === "Row") {
        setFormattedData(parsedData.data);
      } else {
        let data = parsedData.data;
        const headers = data.map((row) => row[0]);
        data = data.map((row) => row.slice(1));
        const values = data[0].map((_, colIndex) =>
          data.map((row) => row[colIndex])
        );
        const updatedData = values.map((row) => {
          const rowData = {};
          headers.forEach((header, index) => {
            rowData[header.trim()] = row[index];
          });
          return rowData;
        });
        setFormattedData(updatedData);
      }
    },
    [isRowHeader]
  );

  useEffect(() => {
    parseCSV(csvData);
  }, [isRowHeader, csvData, parseCSV]);

  useEffect(() => {
    if (formattedData && formattedData.length > 0) {
      setHeaders(getUniqueKeys(formattedData));
    }
  }, [formattedData]);

  useEffect(() => {
    const stackBarData = getProcessedStackBarData(headers, formattedData);
    if (selectedLabel.length > 0 && selectedLabel !== "Default") {
      if (stackBarData?.entireData.hasOwnProperty(selectedLabel)) {
        const selectLabelInfo = {
          [selectedLabel]: stackBarData?.entireData[selectedLabel]
        };
        const selectChartData = Object.values(selectLabelInfo)[0];
        setChartData({
          labels: Object.keys(selectChartData),
          selectedlabel: selectedLabel,
          dataset: {
            data: Object.values(selectChartData)
          }
        });
      }
    } else {
      setChartData({
        labels: stackBarData.labels,
        datasets: stackBarData.stackedData
      });
    }
  }, [selectedLabel, formattedData, headers]);

  return (
    <div className="w-full h-full flex flex-col gap-4">
      <div className="flex flex-wrap items-center gap-4 p-4 font-bold">
        <p>In the uploaded CSV, the headers are in your first:</p>
        <Radio.Group
          options={csvOptions}
          onChange={handleCSVType}
          value={isRowHeader}
          optionType="button"
          buttonStyle="solid"
        />

        {selectedLabel.length > 0 && selectedLabel !== "Default" && (
          <>
            <p className="font-bold">Select the Chart Type:</p>
            <Radio.Group
              options={chartTypeOptions}
              onChange={handleChartType}
              value={chartType}
              optionType="button"
            />
          </>
        )}

        {headers && (
          <DropdownButton
            labels={["Default", ...headers]}
            sendSelectedLabel={(label) => setSelectedLabel(label)}
          />
        )}
      </div>
      <div className="flex-1 overflow-auto">
        {selectedLabel.length > 0 && selectedLabel !== "Default" ? (
          chartType === "Line Chart" ? (
            <LineChart chartData={chartData} />
          ) : chartType === "Donut Chart" ? (
            <DoughNutChart chartData={chartData} />
          ) : (
            <BarChart chartData={chartData} />
          )
        ) : (
          <StackedBarChart data={chartData} />
        )}
      </div>
    </div>
  );
};

export default ChartComponent;
