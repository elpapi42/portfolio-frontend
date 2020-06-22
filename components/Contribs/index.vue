<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">

    <contribs-chart
      :months="months"
      :contribs="contribs"
    ></contribs-chart>

    <div class="flex flex-col text-center sm:text-left sm:justify-between">
      <h1 class="text-2xl font-medium">{{ total }} Contribs Last Year</h1>
      <p>
        Im very active on Github, adding stuff to my own personal projects, or sometimes,
        helping with Tensorflow Repo Issues.
      </p>
      <p class="italic font-light">
        *This data was fetched from Github v4 (GraphQL) API, and preprocessed on the Django Backend for easy consumption.
      </p>
    </div>

  </div>                     
</template>

<script>
export default {
  name: 'Contribs',

  data () {
    return {
      months: [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ],
      contribs: [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
      total: 0,
    }
  },

  async mounted() {
    this.months = [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ]
    this.contribs = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]
    this.total = 0
    /*
    const data = await this.$axios.$get('http://localhost:8000/api/contribs/')

    this.months = data.months
    this.contribs = data.contribs
    this.total = data.total
    
    return {
      months: data.months,
      contribs: data.contribs,
      total: data.total,
    }*/
  },

  watch: {
    contribs() {
      console.log(this.contribs)
    }
  }
}
</script>