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
            data: this.ocurrences,
            backgroundColor: [
              '#689F38',
              '#757575',
              '#8BC34A',
              '#212121',
              '#DCEDC8',
              '#9E9E9E',
              '#212121'
            ],
          }
        ]
      }
    }
  }
}
</script>