<template>
  <div class=''>
    <line-chart 
      :chart-data='chartData'
      :chart-options='chartOptions'
      css-classes=''
      :height='200'
    ></line-chart>
  </div>
</template>

<script>
export default {
  name: 'ContribsChart',

  data() {
    return {
      chartData: {
        labels: [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ],
        datasets: [
          {
            fill: false,
            borderDash: [10, 5],
            borderColor: '#8bc34a',
            pointBackgroundColor: '#424242',
            pointBorderColor: '#9e9e9e',
            pointBorderWidth: 4,
            pointRadius: 6,
            data: [
              0,
              35,
              40,
              18,
              7,
              7,
              46,
              42,
              22,
              49,
              35,
              86,
            ]
          }
        ]
      },

      chartOptions: {
        scales: {
          yAxes: [{
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
}
</script>