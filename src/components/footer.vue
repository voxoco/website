<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <footer class="relative z-20 bg-voxo-gray-header py-18" aria-labelledby="footer-heading">
    <h2 id="footer-heading" class="sr-only">
      Footer
    </h2>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="xl:grid xl:grid-cols-3 xl:gap-8">
        <div class="space-y-8 xl:col-span-1">
          <img class="h-10" src="/public/assets/images/logo-footer.svg" alt="VOXO" />
        </div>
        <div class="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
          <div class="md:grid md:grid-cols-2 md:gap-8">
            <div>
              <h1 class="text-sm text-voxo-gray-grad-dark tracking-wider uppercase">
                Solutions
              </h1>
              <ul role="list" class="mt-4 space-y-4">
                <li v-for="item in navigation.solutions" :key="item.name">
                  <router-link :to="item.href" class="text-base text-voxo-gray-footer-text">
                    {{ item.name }}
                  </router-link>
                </li>
              </ul>
            </div>
            <div class="mt-12 md:mt-0">
              <h1 class="text-sm text-voxo-gray-grad-dark tracking-wider uppercase">
                Support
              </h1>
              <ul role="list" class="mt-4 space-y-4">
                <li v-for="item in navigation.support" :key="item.name">
                  <router-link :to="item.href" class="text-base text-voxo-gray-footer-text">
                    {{ item.name }}
                  </router-link>
                </li>
              </ul>
            </div>
          </div>
          <div class="md:grid md:grid-cols-2 md:gap-8">
            <div>
              <h1 class="text-sm text-voxo-gray-grad-dark tracking-wider uppercase">
                Company
              </h1>
              <ul role="list" class="mt-4 space-y-4">
                <li v-for="item in navigation.company" :key="item.name">
                  <router-link :to="item.href" class="text-base text-voxo-gray-footer-text">
                    {{ item.name }}
                  </router-link>
                </li>
              </ul>
            </div>
            <div class="mt-12 md:mt-0">
              <h1 class="text-sm text-voxo-gray-grad-dark tracking-wider uppercase">
                Legal
              </h1>
              <ul role="list" class="mt-4 space-y-4">
                <li v-for="item in navigation.legal" :key="item.name">
                  <router-link :to="item.href" class="text-base text-voxo-gray-footer-text">
                    {{ item.name }}
                  </router-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-12 border-t border-voxo-gray-hr pt-8 items-center flex-wrap justify-center lg:flex">
        <div class="flex-none lg:flex-1 text-voxo-gray-footer-text text-center lg:text-left">
          &copy 2021 VOXO, Inc. All rights reserved.
        </div>
        <div class="flex space-x-4 justify-center flex-none lg:flex-1 my-2 lg:my-0">
          <a v-for="item in navigation.social" :key="item.name" :href="item.href" target="_blank" class="text-gray-400 hover:text-gray-500">
            <span class="sr-only">{{ item.name }}</span>
            <component :is="item.icon" class="h-6 w-6" aria-hidden="true" />
          </a>
        </div>
        <div class="flex-none lg:flex-1 flex items-center justify-center">
          <HeartIcon class="h-6 w-6 text-voxo-red lg:ml-auto mr-1" />
          <span class="text-voxo-gray-footer-text text-sm flex items-center">
            by VOXO using
            <a class="flex items-center" href="https://github.com/voxoco/website" target="blank">
              <span class="mx-1">
                Vite
              </span>
              <component :is="gitHubIcon" class="h-6 w-6" aria-hidden="true" />
            </a>
          </span>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import { defineComponent, h } from 'vue'
import { HeartIcon } from '@heroicons/vue/solid'

const navigation = {
  solutions: [
    { name: 'Call Center', href: '/product#call-center' },
    { name: 'Mobility', href: '/product#mobility' },
    { name: 'Desktop App', href: '/product#desktop-app' },
    { name: 'SIP Trunks', href: '/product#sip-trunks' },
    { name: 'Custom Dev', href: '/product#custom-development' },
  ],
  support: [
    { name: 'Email Us', href: 'mailto:support@voxo.co' },
    { name: 'Call Us', href: 'tel:6016025060' },
    { name: 'Documentation', href: 'https://api-docs.voxo.co' },
    { name: 'Support', href: 'https://support.voxo.co' },
    { name: 'API Status', href: '#' },
  ],
  company: [
    { name: 'About', href: '/team' },
    { name: 'Blog', href: '/blog' },
    { name: 'Our Team', href: '/team' },
    { name: 'Jobs', href: '#SHOW MODAL' },
    { name: 'Changelog', href: '#' },
  ],
  legal: [
    { name: 'Privacy', href: '/privacy-policy' },
    { name: 'Terms', href: '/terms-and-conditions' },
  ],
  social: [
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/voxoco',
      icon: defineComponent({
        render: () =>
          h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
            h('path', {
              'fill-rule': 'evenodd',
              'd':
                'M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z',
              'clip-rule': 'evenodd',
            }),
          ]),
      }),
    },
    {
      name: 'Twitter',
      href: 'https://twitter.com/voxollc',
      icon: defineComponent({
        render: () =>
          h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
            h('path', {
              d:
                'M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84',
            }),
          ]),
      }),
    },
    {
      name: 'GitHub',
      href: 'https://github.com/voxoco',
      icon: defineComponent({
        render: () =>
          h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
            h('path', {
              'fill-rule': 'evenodd',
              'd':
                'M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z',
              'clip-rule': 'evenodd',
            }),
          ]),
      }),
    },
  ],
}

const gitHubIcon = defineComponent({
  render: () =>
    h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
      h('path', {
        'fill-rule': 'evenodd',
        'd':
              'M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z',
        'clip-rule': 'evenodd',
      }),
    ]),
})

export default {
  components: {
    HeartIcon,
  },
  setup() {
    return {
      navigation,
      gitHubIcon,
    }
  },
}
</script>
