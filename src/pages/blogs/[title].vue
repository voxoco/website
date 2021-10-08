
<script setup>

import Blog from '/public/cms/blog.json'

const title = ref('')
const props = defineProps({
  title: String,
})
const router = useRouter()

// find the matching blog from the blog list based on title
const currentBlog = Blog.blogList.find(item => item.slug === props.title)

</script>

<template>
  <div>
    <button
      class="btn m-3 text-sm mt-8"
      @click="router.back()"
    >
      Back
    </button>
  </div>
  <h2 class="text-2xl font-einasemibold text-voxo-red">
    Introducing
  </h2>
  <div class="flex space-x-1 text-sm text-voxo-gray">
    <time :datetime="currentBlog.date">
      {{ currentBlog.date }}
    </time>
    <span aria-hidden="true">
      &middot;
    </span>
    <span> {{ currentBlog.readingTime }} read </span>
  </div>
  <h1 class="font-einabold text-3xl">
    {{ currentBlog.title }}
  </h1>
  <div>
    {{ currentBlog.content }}
  </div>
</template>
