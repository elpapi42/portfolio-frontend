<template>
  <nuxt-link :to="baseRoute + '/' + id">
      <span class="flex flex-col h-full">
        <img v-if="imageUrl" :src="imageUrl" :alt="title" class="h-32 object-cover rounded-t-lg">

        <div :class="'flex flex-col space-y-1 p-2 border-b-2 border-r-2 border-l-2 rounded-b-lg border-green-700 border-dashed h-full' + topBorder">
          <h1 class="font-medium text-lg">{{ title }}</h1>
          <p class="text-justify text-sm">{{ body.substring(0, bodyLength) + '...' }}</p>
        </div>
      </span>
  </nuxt-link>
</template>

<script>
/* 
This is a generic clickable Card
for Posts like Articles and Projects
w/ an optional image
*/
export default {
  name: 'PostCard',
  props: [
    'title',
    'imageUrl',
    'body',
    'baseRoute',
    'id'
  ],

  computed: {
    bodyLength() {
      return this.imageUrl ? 150 : 525
    },

    topBorder() {
      return this.imageUrl ? '' : ' border-t-2 rounded-t-lg'
    }
  }
}
</script>