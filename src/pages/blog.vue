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
          <div v-for="post in posts" :key="post.title" class="flex flex-col overflow-hidden cursor-pointer" @click="viewArticle(post)">
            <div class="flex-shrink-0">
              <img class="h-72 w-full object-cover" :src="post.imageUrl" alt="" />
            </div>
            <div class="flex-1 bg-white p-6 flex flex-col justify-between">
              <div class="flex-1">
                <p
                  class="text-base font-einasemibold flex items-center"
                  :class="post.category.name === 'Article' ? 'text-voxo-purple' : 'text-voxo-red'"
                >
                  <img :src="post.category.name === 'Article' ? '/assets/images/icons/icon-blog-article.svg' : '/assets/images/icons/icon-blog-video.svg'" />
                  <a :href="post.category.href" class="hover:underline ml-2">
                    {{ post.category.name }}
                  </a>
                </p>
                <router-link :to="`/blogs/${encodeURIComponent(post.title)}`" class="block mt-2">
                  <p class="text-xl font-einabold">
                    {{ post.title }}
                  </p>
                  <p class="mt-3 text-lg text-voxo-gray">
                    {{ post.description }}
                  </p>
                </router-link>
              </div>
              <div class="mt-6 flex items-center border-tt-2 border-voxo-gray-medium pt-6">
                <div class="flex-shrink-0">
                  <a :href="post.author.href">
                    <span class="sr-only">{{ post.author.name }}</span>
                    <img class="h-10 w-10 rounded-full" :src="post.author.imageUrl" alt="" />
                  </a>
                </div>
                <div class="ml-3">
                  <p class="text-sm font-eina-semibold">
                    <a :href="post.author.href" class="hover:underline">
                      {{ post.author.name }}
                    </a>
                  </p>
                  <div class="flex space-x-1 text-sm text-voxo-gray">
                    <time :datetime="post.datetime">
                      {{ post.date }}
                    </time>
                    <span aria-hidden="true">
                      &middot;
                    </span>
                    <span> {{ post.readingTime }} read </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const posts = [
  {
    title: 'Boost your conversion rate',
    href: '#',
    category: { name: 'Article', href: '#' },
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    imageUrl:
      'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
    readingTime: '6 min',
    author: {
      name: 'Roel Aufderehar',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    title: 'How to use search engine optimization to drive sales',
    href: '#',
    category: { name: 'Video', href: '#' },
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo laudantium.',
    date: 'Mar 10, 2020',
    datetime: '2020-03-10',
    imageUrl:
      'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
    readingTime: '4 min',
    author: {
      name: 'Brenna Goyette',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    title: 'Improve your customer experience',
    href: '#',
    category: { name: 'Article', href: '#' },
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.',
    date: 'Feb 12, 2020',
    datetime: '2020-02-12',
    imageUrl:
      'https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
    readingTime: '11 min',
    author: {
      name: 'Daniela Metz',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
]

export default {
  setup() {
    const router = useRouter()
    const viewArticle = (post) => {
      console.log(post);
      router.push({
        path: `/blogs/${encodeURIComponent(post.title)}`,
        params: { ...post },
      })
    }

    return {
      posts,
      viewArticle,
    }
  },
}
</script>
