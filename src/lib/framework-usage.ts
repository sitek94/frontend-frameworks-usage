const frameworkUsage = [
  {
    year: 2016,
    data: {
      react: 53,
      angular: 20,
      ember: 14,
      vue: 10
    }
  },
  {
    year: 2017,
    data: {
      react: 62,
      angular: 29,
      ember: 11,
      vue: 22
    }
  },
  {
    year: 2018,
    data: {
      react: 72,
      angular: 58,
      ember: 11,
      vue: 32,
      preact: 8
    }
  },
  {
    year: 2019,
    data: {
      react: 80,
      angular: 58,
      ember: 12,
      vue: 47,
      preact: 12,
      svelte: 8
    }
  },
  {
    year: 2020,
    data: {
      react: 80,
      angular: 56,
      ember: 11,
      vue: 49,
      preact: 14,
      svelte: 15,
      lit: 5,
      alpine: 3,
      stimulus: 1
    }
  },
  {
    year: 2021,
    data: {
      react: 80,
      angular: 54,
      ember: 9,
      vue: 51,
      preact: 14,
      svelte: 20,
      lit: 7,
      alpine: 6,
      stimulus: 2,
      solid: 3
    }
  }
]

export default frameworkUsage.map(({ year, data }) => ({
  year,
  data: Object.entries(data).map(([name, percent]) => ({
    name,
    percent
  }))
}))
