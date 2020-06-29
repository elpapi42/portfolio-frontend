<template>
  <div class="flex justify-center w-full">
    <!-- Limit the max width on large screens -->
    <div class="flex flex-col w-full max-w-4xl items-center">
      <!-- header -->
      <header class="flex flex-col md:flex-row justify-center px-4 py-2 w-full">
        <h1 class="text-4xl w-full text-center sm:text-left">Whitman Bohorquez</h1>
        <div class="flex flex-row flex-wrap sm:flex-no-wrap items-end space-x-4 w-full justify-center sm:justify-end">
          <nuxt-link to="/" class="text-xl">Resume</nuxt-link>
          <nuxt-link to="/stories" class="text-xl">Stories</nuxt-link>
        </div>
      </header>

      <stories-grid></stories-grid>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Stories',
}
</script>