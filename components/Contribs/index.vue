<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">

    <contribs-chart></contribs-chart>

    <div class="flex flex-col text-center sm:text-left sm:justify-between">
      <h1 class="text-2xl font-medium">1500 Contribs Last Year</h1>
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
  name: 'Contribs'
}
</script>