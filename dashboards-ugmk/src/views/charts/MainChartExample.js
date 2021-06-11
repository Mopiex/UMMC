import React from "react";
import {
  CChartLine,
  CChartBar,
  CChartPie,
  CChartRadar,
  CChartDoughnut,
  CChartPolarArea,
  CChartHorizontalBar,
} from "@coreui/react-chartjs";
import { getStyle, hexToRgba } from "@coreui/utils";

import { useDispatch } from "react-redux";
import { FormattedMessage } from "react-intl";

const brandSuccess = getStyle("success") || "#4dbd74";
const brandInfo = getStyle("info") || "#20a8d8";
const brandDanger = getStyle("danger") || "#f86c6b";

const MainChartExample = (attributes) => {
  const random = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const defaultDatasets = (() => {
    let elements = 27;
    const data1 = [];
    const data2 = [];
    const data3 = [];
    for (let i = 0; i <= elements; i++) {
      data1.push(random(50, 200));
      data2.push(random(80, 100));
      data3.push(65);
    }
    return [
      {
        label: "My First dataset",
        backgroundColor: hexToRgba(brandInfo, 10),
        borderColor: brandInfo,
        pointHoverBackgroundColor: brandInfo,
        borderWidth: 2,
        data: data1,
      },
      {
        label: "My Second dataset",
        backgroundColor: "transparent",
        borderColor: brandSuccess,
        pointHoverBackgroundColor: brandSuccess,
        borderWidth: 2,
        data: data2,
      },
      {
        label: "My Third dataset",
        backgroundColor: "transpaent",
        borderColor: brandDanger,
        pointHoverBackgroundColor: brandDanger,
        borderWidth: 1,
        borderDash: [8, 5],
        data: data3,
      },
    ];
  })();

  const defaultOptions = (() => {
    return {
      maintainAspectRatio: false,
      legend: {
        display: false,
      },
      scales: {
        xAxes: [
          {
            gridLines: {
              drawOnChartArea: false,
            },
          },
        ],
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
              maxTicksLimit: 5,
              stepSize: Math.ceil(250 / 5),
              max: 250,
            },
            gridLines: {
              display: true,
            },
          },
        ],
      },
      elements: {
        point: {
          radius: 0,
          hitRadius: 10,
          hoverRadius: 4,
          hoverBorderWidth: 3,
        },
      },
    };
  })();

  const dispatch = useDispatch();

  console.log(attributes.day);
  // render
  return (
    <>
      <select
        value={attributes.charttype}
        onChange={(e) =>
          dispatch({
            type: "set-chart-type",
            chartType: e.target.value,
            id: attributes.id,
          })
        }
        className="chartTypeSelect"
      >
        <FormattedMessage id="chart.select.line-chart">
          {(option) => <option value="chart-line">{option}</option>}
        </FormattedMessage>
        <FormattedMessage id="chart.select.bar-chart">
          {(option) => <option value="chart-bar">{option}</option>}
        </FormattedMessage>
        <FormattedMessage id="chart.select.pie-chart">
          {(option) => <option value="chart-pie">{option}</option>}
        </FormattedMessage>
        <FormattedMessage id="chart.select.radar-chart">
          {(option) => <option value="chart-radar">{option}</option>}
        </FormattedMessage>
        <FormattedMessage id="chart.select.doughnut-chart">
          {(option) => <option value="chart-doughnut">{option}</option>}
        </FormattedMessage>
        <FormattedMessage id="chart.select.polar-area-chart">
          {(option) => <option value="chart-polar-area">{option}</option>}
        </FormattedMessage>
        <FormattedMessage id="chart.select.horizontal-bar-chart">
          {(option) => <option value="chart-horizontal-bar">{option}</option>}
        </FormattedMessage>
      </select>
      {console.log(attributes)}

      {attributes.charttype === "chart-line" ? (
        <CChartLine
          {...attributes} // margin-top
          datasets={[
            {
              label: "Data One",
              backgroundColor: "rgb(228,102,81,0.9)",
              data: [30, 39, 10, 50, 30, 70, 35],
            },
            {
              label: "Data Two",
              backgroundColor: "rgb(0,216,255,0.9)",
              data: [39, 80, 40, 35, 40, 20, 45],
            },
          ]}
          options={{
            tooltips: {
              enabled: true,
            },
            maintainAspectRatio: false,
          }}
          labels="months"
        />
      ) : attributes.charttype === "chart-bar" ? (
        <CChartBar
          {...attributes}
          datasets={[
            {
              label: "Industry",
              backgroundColor: "#f87979",
              data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11],
            },
          ]}
          options={{
            tooltips: {
              enabled: true,
            },
            maintainAspectRatio: false,
          }}
          labels={[
            "Mo",
            "Tu",
            "We",
            "Th",
            "Fr",
            "Sa",
            "Su" /* 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su' */,
          ]}
        />
      ) : attributes.charttype === "chart-pie" ? (
        <CChartPie
          {...attributes}
          datasets={[
            {
              backgroundColor: attributes.data.map(
                (item) =>
                  "#" + Math.floor(Math.random() * 16777215).toString(16)
              ),
              data: attributes.day
              ? attributes.data.map((item) => item.plan_day)
              : attributes.month
              ? attributes.data.map((item) => item.plan_month)
              : attributes.data.map((item) => item.plan_month_new),
            },
          ]}
          labels={attributes.data.map((item) => item.name_item)}
          options={{
            tooltips: {
              enabled: true,
            },
            maintainAspectRatio: false,
          }}
        />
      ) : attributes.charttype === "chart-radar" ? (
        <CChartRadar
          {...attributes}
          datasets={[
            {
              label: "2019",
              backgroundColor: "rgba(179,181,198,0.2)",
              borderColor: "rgba(179,181,198,1)",
              pointBackgroundColor: "rgba(179,181,198,1)",
              pointBorderColor: "#fff",
              pointHoverBackgroundColor: "#fff",
              pointHoverBorderColor: "rgba(179,181,198,1)",
              tooltipLabelColor: "rgba(179,181,198,1)",
              data: [65, 59, 90, 81, 56, 55, 40],
            },
            {
              label: "2020",
              backgroundColor: "rgba(255,99,132,0.2)",
              borderColor: "rgba(255,99,132,1)",
              pointBackgroundColor: "rgba(255,99,132,1)",
              pointBorderColor: "#fff",
              pointHoverBackgroundColor: "#fff",
              pointHoverBorderColor: "rgba(255,99,132,1)",
              tooltipLabelColor: "rgba(255,99,132,1)",
              data: [28, 48, 40, 19, 96, 27, 100],
            },
          ]}
          options={{
            aspectRatio: 1.5,
            tooltips: {
              enabled: true,
            },
            maintainAspectRatio: false,
          }}
          labels={[
            "Eating",
            "Drinking",
            "Sleeping",
            "Designing",
            "Coding",
            "Cycling",
            "Running",
          ]}
        />
      ) : attributes.charttype === "chart-doughnut" ? (
        <CChartDoughnut
          {...attributes}
          datasets={[
            {
              backgroundColor: attributes.data.map(
                (item) =>
                  "#" + Math.floor(Math.random() * 16777215).toString(16)
              ),
              data: attributes.day
                ? attributes.data.map((item) => item.plan_day)
                : attributes.month
                ? attributes.data.map((item) => item.plan_month)
                : attributes.data.map((item) => item.plan_month_new),
            },
          ]}
          labels={attributes.data.map((item) => item.name_item)}
          options={{
            tooltips: {
              enabled: true,
            },
            maintainAspectRatio: false,
          }}
        />
      ) : attributes.charttype === "chart-polar-area" ? (
        <CChartPolarArea
          {...attributes}
          datasets={defaultDatasets}
          options={defaultOptions}
          labels={[
            "Mo",
            "Tu",
            "We",
            "Th",
            "Fr",
            "Sa",
            "Su",
            "Mo",
            "Tu",
            "We",
            "Th",
            "Fr",
            "Sa",
            "Su",
            "Mo",
            "Tu",
            "We",
            "Th",
            "Fr",
            "Sa",
            "Su",
            "Mo",
            "Tu",
            "We",
            "Th",
            "Fr",
            "Sa",
            "Su",
          ]}
        />
      ) : (
        <CChartHorizontalBar
          {...attributes}
          datasets={[
            {
              label: "Frameworks",
              backgroundColor: ["#41B883", "#E46651", "#00D8FF", "#DD1B16"],
              data: [40, 20, 80, 10],
            },
          ]}
          labels={[attributes.data.map((item) => item.name_item)]}
          options={{
            tooltips: {
              enabled: true,
            },
            maintainAspectRatio: false,
          }}
        />
      )}
    </>
  );
};

export default MainChartExample;
