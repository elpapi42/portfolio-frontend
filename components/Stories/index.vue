<template>
  <div class="flex flex-col space-y-2">
    <h1 class="text-2xl text-center sm:text-right font-medium">Stories</h1>
    <stories-list></stories-list>
    <nuxt-link to="/stories" class="text-right font-medium italic">Continue to the Blog -></nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'Stories',
}
</script>