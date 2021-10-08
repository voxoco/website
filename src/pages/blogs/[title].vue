
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

    <div class="bg-gradient-to-b from-voxo-gray-light to-transparent relative z-10">
      <div class="max-w-prose mx-auto px-4 sm:px-6">
        <h1 class="pt-16">
          <span class="block text-base text-center text-voxo-red font-einasemibold tracking-wide uppercase">Introducing</span>
          <span class="mt-2 block text-3xl text-center leading-8 font-einabold tracking-tight sm:text-4xl">{{ currentBlog.title }}</span>
        </h1>
        <div class="mt-6 flex items-center pb-6">
          <div class="flex-shrink-0">
            <div>
              <span class="sr-only">{{ currentBlog.author }}</span>
              <img class="h-10 w-10 rounded-full" :src="currentBlog.authorPhoto" alt="" />
            </div>
          </div>
          <div class="ml-3">
            <p class="text-sm font-eina-semibold mb-0">
              <span class="hover:underline">
                {{ currentBlog.author }}
              </span>
            </p>
            <div class="flex space-x-1 text-sm text-voxo-gray">
              <time :datetime="currentBlog.date">
                {{ currentBlog.date }}
              </time>
              <span aria-hidden="true">
                &middot;
              </span>
              <span> {{ currentBlog.readTime }} minute read </span>
            </div>
          </div>
        </div>
        <div class="aspect-w-16 aspect-h-9">
          <img :src="currentBlog.coverPhoto" alt="" />
        </div>
        <div id="blog-post" class="pt-6 pb-10" v-html="marked(currentBlog.content)">
        </div>
        <div>
          <button
            class="hover:bg-voxo-red-dark shadow-md w-full flex items-center justify-center px-8 py-3 border-transparent text-base font-medium rounded-lg text-white bg-voxo-red md:py-3 md:text-lg mb-10"
            @click="router.back()"
          >
            Back
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
