<template>
  <a :href="repoData.url">
    <span class="flex flex-col border-2 rounded border-green-600 border-dashed p-2 h-full">
      <h1 class="font-medium text-lg text-center">{{ repoData.name }}</h1>
      <p class="text-center">{{ repoData.description }}</p>
    </span>
  </a>
</template>

<script>
export default {
  name: 'RepoCard',

  props: ['repoData'],
}
</script>