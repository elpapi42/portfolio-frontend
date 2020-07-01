<template>
  <div class="flex flex-row flex-wrap sm:flex-no-wrap items-end space-x-4 w-full justify-center sm:justify-end">
    <nuxt-link to="/" class="text-xl">Resume</nuxt-link>
    <nuxt-link to="/stories" class="text-xl">Stories</nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'HeaderRoutes'
}
</script>