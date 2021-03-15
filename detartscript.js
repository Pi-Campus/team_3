const dataSet = {
  id: null,
  dataset: {
    id:
      "d3976c00-0763-4494-9ac1-140b8f8ae586-MYSQL-f97e5f82-4ed3-440d-b842-590b6e7c2f48",
    name: "Covid-19 US Counties",
    icon: "https://askdata-prod.s3.amazonaws.com/dataset/gjkVMelR_400x400.png",
  },
  connection: "",
  executedSQLQuery:
    "SELECT DATE(STR_TO_DATE(`date`, '%Y-%m-%d')) AS `DAYS`, SUM(`cases`) AS `cases` FROM `innaas-dev`.covid_us_counties WHERE (`state` IN ('New York') AND STR_TO_DATE(`date`, '%Y-%m-%d %H:%i:%s') >= STR_TO_DATE('2020-11-01 00:00:00', '%Y-%m-%d %H:%i:%s') AND STR_TO_DATE(`date`, '%Y-%m-%d %H:%i:%s') <= STR_TO_DATE('2020-11-30 23:59:59', '%Y-%m-%d %H:%i:%s')) GROUP BY `DAYS` ORDER BY `DAYS` DESC",
  schema: [
    {
      id: "d3976c00-0763-4494-9ac1-140b8f8ae586-ENTITY_TYPE-DATE",
      dataset:
        "d3976c00-0763-4494-9ac1-140b8f8ae586-MYSQL-f97e5f82-4ed3-440d-b842-590b6e7c2f48",
      type: "ENTITY_TYPE",
      code: "DATE",
      name: "DAYS",
      aggregation: "",
      icon: null,
      format: "",
      locale: "",
      dataType: "text",
      internalDataType: "STRING",
      measurementUnit: null,
      searchable: false,
      measure: false,
      dimension: true,
    },
    {
      id: "d3976c00-0763-4494-9ac1-140b8f8ae586-MEASURE-CASES",
      dataset:
        "d3976c00-0763-4494-9ac1-140b8f8ae586-MYSQL-f97e5f82-4ed3-440d-b842-590b6e7c2f48",
      type: "MEASURE",
      code: "CASES",
      name: "Total Cases",
      aggregation: "SUM",
      icon: null,
      format: "###,##0",
      locale: "en",
      dataType: "bigint",
      internalDataType: "NUMERIC",
      measurementUnit: null,
      searchable: false,
      measure: true,
      dimension: false,
    },
  ],
  data: [
    {
      cells: [
        { rawValue: "2020-11-30", value: "2020-11-30" },
        { rawValue: "652,748", value: "652,748" },
      ],
    },
    {
      cells: [
        { rawValue: "2020-11-29", value: "2020-11-29" },
        { rawValue: "645,932", value: "645,932" },
      ],
    },
    {
      cells: [
        { rawValue: "2020-11-28", value: "2020-11-28" },
        { rawValue: "639,200", value: "639,200" },
      ],
    },
    {
      cells: [
        { rawValue: "2020-11-27", value: "2020-11-27" },
        { rawValue: "633,140", value: "633,140" },
      ],
    },
    {
      cells: [
        { rawValue: "2020-11-26", value: "2020-11-26" },
        { rawValue: "624,961", value: "624,961" },
      ],
    },
    {
      cells: [
        { rawValue: "2020-11-25", value: "2020-11-25" },
        { rawValue: "618,023", value: "618,023" },
      ],
    },
    {
      cells: [
        { rawValue: "2020-11-24", value: "2020-11-24" },
        { rawValue: "611,756", value: "611,756" },
      ],
    },
    {
      cells: [
        { rawValue: "2020-11-23", value: "2020-11-23" },
        { rawValue: "606,878", value: "606,878" },
      ],
    },
    {
      cells: [
        { rawValue: "2020-11-22", value: "2020-11-22" },
        { rawValue: "600,967", value: "600,967" },
      ],
    },
    {
      cells: [
        { rawValue: "2020-11-21", value: "2020-11-21" },
        { rawValue: "595,581", value: "595,581" },
      ],
    },
    {
      cells: [
        { rawValue: "2020-11-20", value: "2020-11-20" },
        { rawValue: "589,605", value: "589,605" },
      ],
    },
    {
      cells: [
        { rawValue: "2020-11-19", value: "2020-11-19" },
        { rawValue: "584,128", value: "584,128" },
      ],
    },
    {
      cells: [
        { rawValue: "2020-11-18", value: "2020-11-18" },
        { rawValue: "578,826", value: "578,826" },
      ],
    },
    {
      cells: [
        { rawValue: "2020-11-17", value: "2020-11-17" },
        { rawValue: "573,544", value: "573,544" },
      ],
    },
    {
      cells: [
        { rawValue: "2020-11-16", value: "2020-11-16" },
        { rawValue: "568,450", value: "568,450" },
      ],
    },
    {
      cells: [
        { rawValue: "2020-11-15", value: "2020-11-15" },
        { rawValue: "564,952", value: "564,952" },
      ],
    },
    {
      cells: [
        { rawValue: "2020-11-14", value: "2020-11-14" },
        { rawValue: "561,308", value: "561,308" },
      ],
    },
    {
      cells: [
        { rawValue: "2020-11-13", value: "2020-11-13" },
        { rawValue: "555,917", value: "555,917" },
      ],
    },
    {
      cells: [
        { rawValue: "2020-11-12", value: "2020-11-12" },
        { rawValue: "550,516", value: "550,516" },
      ],
    },
    {
      cells: [
        { rawValue: "2020-11-11", value: "2020-11-11" },
        { rawValue: "545,718", value: "545,718" },
      ],
    },
    {
      cells: [
        { rawValue: "2020-11-10", value: "2020-11-10" },
        { rawValue: "540,897", value: "540,897" },
      ],
    },
    {
      cells: [
        { rawValue: "2020-11-09", value: "2020-11-09" },
        { rawValue: "536,933", value: "536,933" },
      ],
    },
    {
      cells: [
        { rawValue: "2020-11-08", value: "2020-11-08" },
        { rawValue: "533,784", value: "533,784" },
      ],
    },
    {
      cells: [
        { rawValue: "2020-11-07", value: "2020-11-07" },
        { rawValue: "530,354", value: "530,354" },
      ],
    },
    {
      cells: [
        { rawValue: "2020-11-06", value: "2020-11-06" },
        { rawValue: "526,767", value: "526,767" },
      ],
    },
    {
      cells: [
        { rawValue: "2020-11-05", value: "2020-11-05" },
        { rawValue: "523,559", value: "523,559" },
      ],
    },
    {
      cells: [
        { rawValue: "2020-11-04", value: "2020-11-04" },
        { rawValue: "520,557", value: "520,557" },
      ],
    },
    {
      cells: [
        { rawValue: "2020-11-03", value: "2020-11-03" },
        { rawValue: "518,431", value: "518,431" },
      ],
    },
    {
      cells: [
        { rawValue: "2020-11-02", value: "2020-11-02" },
        { rawValue: "516,114", value: "516,114" },
      ],
    },
    {
      cells: [
        { rawValue: "2020-11-01", value: "2020-11-01" },
        { rawValue: "514,482", value: "514,482" },
      ],
    },
  ],
  filters: null,
  sortedBy: null,
  page: 0,
  limit: 1000,
  totalRecords: 30,
  queryId: "q1",
};

const date = [];
datasets = [];

//create a new array of value1
dataSet.data.map((e) => {
  date.push(e.cells[0].value);
});

//create a new array of values2 and convert string to numbers
dataSet.data.map((e) => {
  datasets.push(parseFloat(e.cells[1].value.replace(",", ".")));
});

var ctx = document.getElementById("myChart").getContext("2d");
var chart = new Chart(ctx, {
  // The type of chart we want to create
  type: "line",

  // The data for our dataset
  data: {
    labels: date,
    datasets: [
      {
        label: "Covid-19 US Counties",
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
        data: datasets,
      },
    ],
  },

  // Configuration options go here
  options: {},
});
