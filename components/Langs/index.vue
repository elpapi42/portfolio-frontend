<template>
  <div class="flex flex-col justify-between h-full">

    <langs-chart
      :langs="langs"
      :ocurrences="[5, 4, 1]"
    ></langs-chart>

    <h1 class="italic font-light text-center md:text-left">
      *The last two visualizations show my top github repos and most used languages/technologies
    </h1>

  </div>
</template>

<script>
export default {
  name: 'Langs',

  data () {
    return {
      langs: ['Python', 'JavaScript', 'Go'],
      ocurrences: [5, 4, 1],
    }
  },
}
</script>