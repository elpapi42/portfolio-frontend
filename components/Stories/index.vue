<template>
  <div class="flex flex-col space-y-2">
    <h1 class="text-2xl text-center sm:text-right font-medium">Stories</h1>
    <post-card image-url="http://lorempixel.com/output/nature-q-c-640-480-5.jpg"></post-card>
    <post-card :image-url="null"></post-card>
  </div>
</template>

<script>
export default {
  name: 'Stories',
}
</script>