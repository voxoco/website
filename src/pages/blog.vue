<template>
  <div class="bg-white">
    <div class="">
      <!-- Header -->
      <div class="bg-gradient-to-b from-voxo-gray-light">
        <div class="pt-24 lg:pt-32 lg:pb-18">
          <div class="relative z-10 max-w-7xl mx-auto pl-4 pr-8 sm:px-6 lg:px-8 text-center">
            <h1 class="text-4xl font-extrabold tracking-tight text-warm-gray-900 sm:text-5xl lg:text-6xl">
              From the blog
            </h1>
            <p class="mt-6 text-xl text-warm-gray-500 max-w-3xl mx-auto">
              Vel nunc non ut montes, viverra tempor. Proin lectus nibh phasellus morbi non morbi. In elementum urna ut volutpat. Sagittis et vel et fermentum amet consequat.
            </p>
          </div>
        </div>
      </div>

      <div class="relative max-w-7xl mx-auto py-10">
        <div class="max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
          <div v-for="post in pagePosts" :key="post.title" class="flex flex-col overflow-hidden cursor-pointer" @click="viewArticle(post)">
            <div class="flex-shrink-0">
              <img class="h-72 w-full object-cover" :src="post.coverPhoto" alt="" />
            </div>
            <div class="flex-1 bg-white p-6 flex flex-col justify-between">
              <div class="flex-1">
                <p
                  class="text-base font-einasemibold flex items-center"
                  :class="post.category === 'Article' ? 'text-voxo-purple' : 'text-voxo-red'"
                >
                  <img :src="post.category === 'Article' ? '/assets/images/icons/icon-blog-article.svg' : '/assets/images/icons/icon-blog-video.svg'" />
                  <span class="hover:underline ml-2">
                    {{ post.category }}
                  </span>
                </p>
                <router-link :to="`/blogs/${post.slug}`" class="block mt-2">
                  <p class="text-xl font-einabold">
                    {{ post.title }}
                  </p>
                  <p class="mt-3 text-lg text-voxo-gray">
                    {{ post.summary }}
                  </p>
                </router-link>
              </div>
              <div class="mt-6 flex items-center border-tt-2 border-voxo-gray-medium pt-6">
                <div class="flex-shrink-0">
                  <div>
                    <span class="sr-only">{{ post.author }}</span>
                    <img class="h-10 w-10 rounded-full" :src="post.authorPhoto" alt="" />
                  </div>
                </div>
                <div class="ml-3">
                  <p class="text-sm font-eina-semibold">
                    <span class="hover:underline">
                      {{ post.author }}
                    </span>
                  </p>
                  <div class="flex space-x-1 text-sm text-voxo-gray">
                    <time :datetime="post.date">
                      {{ post.date }}
                    </time>
                    <span aria-hidden="true">
                      &middot;
                    </span>
                    <span> {{ post.readTime }} minute read </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!--      PAGINATION-->
      <nav v-if="maxPages > 1" class="border-t border-gray-200 px-4 pb-4 flex items-center justify-center sm:px-0">
        <div class="hidden md:-mt-px md:flex">
          <!-- Current: "border-indigo-500 text-indigo-600", Default: "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300" -->
          <div
            v-for="i in maxPages"
            :key="i"
            class="border-transparent text-voxo-gray-dark border-t-2 pt-4 px-4 inline-flex items-center text-base cursor-pointer"
            :class="i === currentPage ? 'border-voxo-red text-voxo-red' : ''"
            aria-current="page"
            @click="doPage(i)"
          >
            {{ i }}
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>

import Blog from '/public/cms/blog.json'

const posts = [...Blog.blogList]

export default {
  setup() {
    const router = useRouter()
    const viewArticle = (post) => {
      router.push({
        path: `/blogs/${post.slug}`,
      })
    }

    return {
      posts,
      viewArticle,
      postsPerPage: 9,
    }
  },
  data() {
    return {
      currentPage: 1,
      totalPages: 0,
      maxPages: 5,
      pagePosts: [],
    }
  },
  watch: {
    currentPage() {
      if (this.currentPage > 1) {
        const startPost = this.postsPerPage * (this.currentPage - 1) - 1
        const endPost = this.postsPerPage * this.currentPage - 1
        this.pagePosts = this.posts.slice(startPost, endPost)
      }
      else {
        this.pagePosts = this.posts.slice(0, this.postsPerPage)
      }
    },
  },
  mounted() {
    this.pagePosts = this.posts.slice(0, this.postsPerPage)
    this.totalPages = Math.ceil(this.posts.length / this.postsPerPage)

    if (this.totalPages < this.maxPages)
      this.maxPages = this.totalPages
  },
  methods: {
    doPage(pageNum) {
      this.currentPage = pageNum
      window.scrollTo(0, 0)
    },
  },
}
</script>
