<script>
import { Line, mixins } from 'vue-chartjs'
const { reactiveProp } = mixins

export default {
  name: 'LineChart',
  extends: Line,

  mixins: [reactiveProp],
  props: ['chartOptions'],

  mounted () {
    this.renderChart(this.chartData, this.chartOptions)
  },

  watch: {
    chartData() {
      console.log(this.chartData)
    }
  }
}
</script>