const fakeDB = [
  {
    id:1,
    title: {
      text: "Delfos",
    },
    xAxis: {
      categories: [
        "Jan",
        "Fev",
        "Mar",
        "Abr",
        "Mai",
        "Jun",
        "Jul",
        "Ago",
        "Set",
        "Out",
        "Nov",
        "Dez",
      ],
    },
    series: [
      {
        name: "2022",
        data: [200, 100, 400, 400, 800, 700],
      },
    ],
  },
  {
    id:2,
    title: {
      text: "Arthemis",
    },
    xAxis: {
      categories: [
        "Jan",
        "Fev",
        "Mar",
        "Abr",
        "Mai",
        "Jun",
        "Jul",
        "Ago",
        "Set",
        "Out",
        "Nov",
        "Dez",
      ],
    },
    series: [
      {
        name: "2022",
        data: [250, 750, 300, 500, 200, 500, 600, 650, 700, 900, 1200],
      },
    ],
  },
  {
    id:3,
    title: {
      text: "Helio",
    },
    xAxis: {
      categories: [
        "Jan",
        "Fev",
        "Mar",
        "Abr",
        "Mai",
        "Jun",
        "Jul",
        "Ago",
        "Set",
        "Out",
        "Nov",
        "Dez",
      ],
    },
    series: [
      {
        name: "2022",
        data: [100, 150,  1050, 900, 1200],
      },
    ],
  },
];

export default fakeDB;
