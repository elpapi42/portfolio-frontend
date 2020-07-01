<template>
  <div class="flex justify-center w-full">
    <!-- Limit the max width on large screens -->
    <div class="flex flex-col w-full max-w-4xl items-center">

      <!-- header -->
      <header-bar></header-bar>

      <main class="grid grid-cols-1 md:grid-cols-3 gap-4 px-4 py-2 w-full">

        <!-- Introduction -->
        <p class="md:col-span-3 text-center">
          Hello there! Welcome to the most simple online resume/portafolio,
          created with the most fancy/overkill tech stack possible. Why? Who cares, the fancier, the better!
        </p>

        <!-- Intro -->
        <main class="md:col-span-3 flex flex-col items-center">
          <div class="max-w-xl">
            <h1 class="text-2xl text-center font-medium">Im a Machine Learning Engineer</h1>
            <p class="text-justify">
              What that means? Well, it is a sort of combination beetween Backend Engineer 
              (For design and build APIs and Backend Architectures)
              and Data Scientist (Im mostly around Deep Learning stuff), as extra, im familiar with Frontend Engineering too,
              but not too much (Why you was thinking i wish to keep this portfolio simple?), and Soft DevOps,
              check the fancy words next here about what i know.
            </p>
          </div>
        </main>

        <!-- Skills -->
        <main class="md:col-span-3 flex flex-col items-center w-full">
          <ul class="flex flex-wrap flex-row justify-center space-x-2 max-w-xl">
            <li class="text-lg">Flask</li>
            <li class="text-lg">Tensorflow</li>
            <li class="text-lg">DJango</li>
            <li class="text-lg">Vue.js</li>
            <li class="text-lg">Nuxt.js</li>
            <li class="text-lg">Docker</li>
            <li class="text-lg">Python</li>
            <li class="text-lg">JavaScript</li>
            <li class="text-lg">Digital Ocean</li>
            <li class="text-lg">Heroku</li>
            <li class="text-lg">Unit Testing</li>
            <li class="text-lg">CI/CD</li>
            <li class="text-lg">Databases</li>
            <li class="text-lg">Rest</li>
            <li class="text-lg">GraphQL</li>
          </ul>
        </main>

        <!-- Contributions -->
        <main class='md:col-span-3'>
          <contribs/>
        </main>

        <!-- Repos -->
        <main class="md:col-span-2">
          <repos></repos>
        </main>

        <!-- Langs -->
        <main class="col-span-1">
          <langs></langs>
        </main>
      
      </main>

      <main class="grid grid-cols-1 sm:grid-cols-2 gap-4 px-4 py-2 w-full">

        <!-- Projects -->
        <main class="col-span-1">
          <h1 class="text-2xl text-center font-medium">Projects</h1>
        </main>

        <!-- Articles -->
        <main class="col-span-1">
          <stories></stories>
        </main>

        <!-- Contact -->
        <main class="sm:col-span-2">
          <h1 class="text-2xl text-center font-medium">Contact</h1>
        </main>

      </main>

    </div>
  </div>
</template>

<script>
export default {
}
</script>
