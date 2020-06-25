<template>
  <div>
    <polar-chart
      :chart-data="chartData"
      :chart-options="chartOptions"
      :height="250"
    ></polar-chart>
  </div>
</template>

<script>
export default {
  name: 'LangsChart',

  props: [ 'langs', 'ocurrences'],

  data() {
    return {
      chartOptions: {
        scales: {
          yAxes: [{
            display: false,
            ticks: {
              beginAtZero: true
            },
            gridLines: {
              display: false
            }
          }],
          xAxes: [ {
            gridLines: {
              display: false
            }
          }]
        },
        legend: {
          display: false
        },
        maintainAspectRatio: false,
      }
    }
  },

  computed: {
    chartData() {
      return {
        labels: this.langs,
        datasets: [
          {
            data: this.ocurrences
          }
        ]
      }
    }
  }
}
</script>