<template>
  <div class=''>
    <line-chart 
      :chart-data='chartData'
      css-classes=''
      width=100%
      height=100%
    ></line-chart>
  </div>
</template>

<script>
export default {
  name: 'ContribsChart',

  data() {
    return {
      chartData: {
        labels: [ 1, 2, 3, 4, 5, 6, 7, 8 ],
        datasets: [
          {
            label: 'Test Data',
            backgroundColor: '#f87979',
            data: [ 5, 2, 3, 4, 5, 6, 7, 5 ]
          }
        ]
      },

      options: {
        responsive: true,
        maintainAspectRatio: false
      }
    }
  },
}
</script>