<script>
import { PolarArea, mixins } from 'vue-chartjs'
const { reactiveProp } = mixins

export default {
  name: 'LineChart',
  extends: PolarArea,

  mixins: [reactiveProp],
  props: ['chartOptions'],

  mounted () {
    this.renderChart(this.chartData, this.chartOptions)
  },
}
</script>