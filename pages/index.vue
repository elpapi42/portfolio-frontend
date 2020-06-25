<template>
  <div class="flex justify-center w-full">
    <!-- Limit the max width on large screens -->
    <div class="flex flex-col w-full max-w-4xl items-center space-y-4">

      <!-- header -->
      <header class="flex flex-col md:flex-row justify-center w-full">
        <h1 class="text-4xl w-full text-center sm:text-left">Whitman Bohorquez</h1>
        <div class="flex flex-row flex-wrap sm:flex-no-wrap items-end space-x-4 w-full justify-center sm:justify-end">
          <nuxt-link to="/" class="text-xl">Resume</nuxt-link>
          <nuxt-link to="/" class="text-xl">Blog</nuxt-link>
        </div>
      </header>

      <main class="grid grid-cols-3 gap-4 p-2 w-full">

        <!-- Introduction -->
        <p class="col-span-3 text-center">
          Hello there! Welcome to the most simple online resume/portafolio,
          created with the most fancy/overkill tech stack possible. Why? Who cares, the fancier, the better!
        </p>

        <!-- Intro -->
        <main class="col-span-3 flex flex-col items-center">
          <div class="max-w-xl">
            <h1 class="text-2xl text-center font-medium">Im a Machine Learning Engineer</h1>
            <p class="text-center">
              What that means? Well, it is a sort of combination beetween Backend Engineer
              and Data Scientist (Im mostly around Deep Learning stuff), as extra, im familiar with Frontend Engineering too,
              but not too much (Why you was thinking i wish to keep this portfolio simple?),
              check the fancy words next here about what i know.
            </p>
          </div>
        </main>

        <!-- Skills -->
        <main class="col-span-3 flex flex-col items-center w-full">
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
        <main class='col-span-3'>
          <contribs/>
        </main>

        <!-- Repos -->
        <main class="col-span-2">
          <repos></repos>
        </main>

        <!-- Langs -->
        <main class="col-span-1">
          <h1 class="text-2xl text-center font-medium">Languages</h1>
        </main>
      
      </main>

      <main class="grid grid-cols-2 gap-4 p-2 w-full">

        <!-- Projects -->
        <main class="col-span-1">
          <h1 class="text-2xl text-center font-medium">Projects</h1>
        </main>

        <!-- Articles -->
        <main class="col-span-1">
          <h1 class="text-2xl text-center font-medium">Articles</h1>
        </main>

        <!-- story -->
        <main class="col-span-2">
          <h1 class="text-2xl text-center font-medium">Little story about me</h1><br>
          <p class="text-center">
            I will face it, I do everything wrong in the past. I don't follow the classic path for learning Software Development, 
            maybe that is the reason I struggling to find a job. Instead of HTML, CSS, and JS for pick up the basics of web development
            (I already have strong programming skills at that point due to hobby game development),
            I go straight to learn Deep Learning! (wtf).
          </p><br>
          <p class="text-center">
            That was not hard, I'm very interested in this field, 
            I picked it up (Including statistics, data analysis, data engineering, machine learning, and deep learning) in just a few months,
            I'm not the next Einstein, but whatever, I'm capable of solving problems that can be tackled with this outstanding tech 
            that is revolutionizing the way we think about the world, society, and ourselves as humans.
          </p><br>
          <p class="text-center">
            But sooner than later, I realized, just that knowledge will not be enough to add value to any organization. 
            So, I put my hands in the meal and started learning Backend Engineering, a lot of exciting and worthy stuff get into my head,
            But one of the most interesting parts for me was being able to see how all those complex systems can be broken down into more 
            manageable pieces of software, all that i learned to that point around Software Development and Deep Learning, 
            started to match perfectly magically!
          </p><br>
          <p class="text-center">
            From the start, I refused to learn Frontend Engineering, I was not attracted to this field, don't ask me why, 
            but I used to see it as an ugly thing. But the necessity arise! If I wish to populate my portfolio with meaningful projects 
            deployed and usable by everyone, I have no more option than developing the frontend of my applications my self, 
            no one will do it for me. That is how I come up with Vue, I learned the basics in two days, and started writing DeepPNG web page.
            At this point, i don't see it as something ugly anymore, I like it, not as much as building APIs, but you got the point.
          </p><br>
          <p class="text-center">
            In the end, I learned everything anyone else learns in their career warmup, but I do it in reverse order.
            Lot of nights I fall sleep wishing go back in time 5 years and do everything the correct way 
            (not only the learn order but a lot of other stuff i don't relate on this short story), 
            maybe that way I would have a job right now. But its time to look forward, and that is what I do during the daytime!
          </p>
        </main>

        <!-- Contact -->
        <main class="col-span-2">
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
