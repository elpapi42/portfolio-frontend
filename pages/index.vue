<template>
  <div class="flex justify-center w-full">
    <!-- Limit the max width on large screens -->
    <div class="flex flex-col w-full max-w-4xl items-center space-y-4">

      <!-- header -->
      <header class="flex flex-col sm:flex-row justify-center w-full">
        <h1 class="text-3xl w-full text-center sm:text-left">Whitman Bohorquez</h1>
        <div class="flex flex-row flex-wrap items-end justify-end space-x-4 w-full justify-center sm:justify-end">
          <h1 class="text-xl">Contribs</h1>
          <h1 class="text-xl">Projects</h1>
          <h1 class="text-xl">Articles</h1>
          <h1 class="text-xl">Contact</h1>
        </div>
      </header>

      <!-- Introduction -->
      <p class="text-center">
        Hello there! Welcome to the most simple online resume/portafolio,
        created with the most fancy/overkill tech stack possible. Why? Who cares, the fancier, the better!
      </p>

      <!-- Skills -->
      <main class="flex flex-row w-full max-w-xl space-x-3">
        <div class="text-right">
          Ok, lets start, you already know my name, but what i do?
          im a Machine Learning Engineer, what that means?
          Is it a sort of combination beetween Backend Engineer
          and Data Scientist (Im mostly around deep Learning stuff), as extra, im familiar with Frotend engineering too,
          but not too much (Why you was thinking i wish to keep this portfolio simple?),
          check the fancy words next here about what i know.
        </div>
        <ul>
          <li>Flask</li>
          <li>Tensorflow</li>
          <li>DJango</li>
          <li>Vue.js</li>
          <li>Nuxt.js</li>
          <li>Docker</li>
        </ul>
      </main>

    </div>
  </div>
</template>

<script>
export default {
}
</script>
