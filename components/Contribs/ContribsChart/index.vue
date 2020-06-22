<template>
  <div>
    <line-chart 
      :chart-data="chartData"
      :chart-options="chartOptions"
      :height="180"
    ></line-chart>
  </div>
</template>

<script>
export default {
  name: 'ContribsChart',

  props: [ 'months', 'contribs'],

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
        animation: {
            duration: 0
        },
        hover: {
            animationDuration: 0
        },
        responsiveAnimationDuration: 0,
        maintainAspectRatio: false,
      }
    }
  },

  computed: {
    chartData() {
      return {
        labels: this.months,
        datasets: [
          {
            fill: false,
            borderDash: [10, 5],
            borderColor: '#8bc34a',
            pointBackgroundColor: '#424242',
            pointBorderColor: '#9e9e9e',
            pointBorderWidth: 4,
            pointRadius: 6,
            pointHoverRadius: 7,
            data: this.contribs
          }
        ]
      }
    }
  }
}
</script>