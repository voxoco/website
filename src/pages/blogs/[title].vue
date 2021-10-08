
<script setup>

import Blog from '/public/cms/blog.json'
import marked from 'marked'

const title = ref('')
const props = defineProps({
  title: String,
})
const router = useRouter()

// find the matching blog from the blog list based on title
const currentBlog = Blog.blogList.find(item => item.slug === props.title)

</script>

<template>
  <div class="relative overflow-hidden">
    <!--    Stripes-->
    <div class="absolute -top-1 bg-white w-full">
      <img class="w-full" src="/public/assets/images/stripes.svg" alt="" />
    </div>

    <div class="max-w-xl sm:max-w-7xl mx-auto relative z-10 px-4 sm:px-6">
      <div>
        <button
          class="btn text-sm my-8 bg-voxo-red text-white hover:bg-voxo-red focus:outline-none"
          @click="router.back()"
        >
          Back
        </button>
      </div>
      <h2 class="text-2xl font-einasemibold text-voxo-red">
        Introducing
      </h2>
      <h1 class="font-einabold text-3xl pt-1">
        {{ currentBlog.title }}
      </h1>
      <div class="flex space-x-1 text-sm text-voxo-gray">
        <time :datetime="currentBlog.date">
          {{ currentBlog.date }}
        </time>
        <span aria-hidden="true">
          &middot;
        </span>
        <span> {{ currentBlog.readTime }} minute read </span>
      </div>
      <div v-html="marked(currentBlog.content)" class="pt-6 pb-24">
      </div>
    </div>
  </div>
</template>
