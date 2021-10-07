<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <Popover class="relative bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
      <div class="flex justify-between items-center py-6 md:space-x-10">
        <div class="flex justify-start lg:w-0 lg:flex-1">
          <router-link to="/">
            <img class="h-8 sm:h-10 min-w-min" src="/public/assets/images/header-logo.svg" alt="" />
          </router-link>
        </div>
        <div class="-mr-2 -my-2 lg:hidden">
          <PopoverButton class="bg-white rounded-md p-2 inline-flex items-center justify-center text-voxo-gray hover:text-voxo-gray-dark hover:bg-gray-10 focus:outline-none ml-auto">
            <span class="sr-only">Open menu</span>
            <MenuIcon class="h-6 w-6" aria-hidden="true" />
          </PopoverButton>
        </div>
        <PopoverGroup as="nav" class="hidden lg:flex space-x-10">
          <!--          <router-link
            to="/"
            class="text-base p-1 block font-semibold"
            :class="$route.name === 'index' ? 'font-semibold text-voxo-gray-dark' : 'font-normal text-voxo-gray'"
          >
            Home
          </router-link>-->

          <router-link
            to="/product"
            class="text-base p-1 block"
            :class="$route.name === 'product' ? 'font-einasemibold text-voxo-gray-dark' : 'font-eina'"
          >
            Product
          </router-link>

          <router-link
            to="/team"
            class="text-base p-1 block"
            :class="$route.name === 'team' ? 'font-einasemibold text-voxo-gray-dark' : 'font-eina'"
          >
            Team
          </router-link>

          <Popover v-slot="{ open }" class="relative">
            <PopoverButton ref="flyoutMenu" :class="[open ? '' : '', 'group bg-white rounded-md inline-flex items-center text-base focus:outline-none font-eina p-1']">
              <span>Locations</span>
              <ChevronDownIcon :class="[open ? '' : '', 'ml-2 h-4 w-4 font-eina']" aria-hidden="true" />
            </PopoverButton>

            <transition
              enter-active-class="transition ease-out duration-200"
              enter-from-class="opacity-0 translate-y-1"
              enter-to-class="opacity-100 translate-y-0"
              leave-active-class="transition ease-in duration-150"
              leave-from-class="opacity-100 translate-y-0"
              leave-to-class="opacity-0 translate-y-1"
            >
              <PopoverPanel ref="mobileMenu" class="absolute z-30 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0 lg:max-w-3xl">
                <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                  <div class="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8 lg:grid-cols-2">
                    <router-link
                      v-for="item in locations"
                      :key="item.name"
                      :to="item.href"
                      class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 transition ease-in-out duration-150"
                      @click="hideFlyoutMenu"
                    >
                      <div class="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md text-white sm:h-12 sm:w-12">
                        <img :src="item.icon" :alt="item.name" />
                      </div>
                      <div class="ml-4">
                        <p class="text-base font-einasemibold">
                          {{ item.name }}
                        </p>
                        <p class="mt-1 text-sm text-gray-500">
                          {{ item.description }}
                        </p>
                      </div>
                    </router-link>
                  </div>
                </div>
              </PopoverPanel>
            </transition>
          </Popover>

          <router-link
            to="/contact"
            class="text-base p-1 block"
            :class="$route.name === 'contact' ? 'font-einasemibold text-voxo-gray-dark' : 'font-eina'"
          >
            Contact
          </router-link>

          <router-link
            to="/blog"
            class="text-base p-1 block"
            :class="$route.name === 'blog' ? 'font-einasemibold text-voxo-gray-dark' : 'font-eina'"
          >
            Blog
          </router-link>
        </PopoverGroup>
        <div class="hidden lg:flex items-center justify-end lg:flex-1 lg:w-0">
          <a href="https://app.voxo.co" target="_blank" class="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border-2 border-voxo-red rounded-md text-base font-einasemibold bg-transparent text-voxo-red">
            Login
          </a>
        </div>
      </div>
    </div>

    <transition
      enter-active-class="duration-200 ease-out"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="duration-100 ease-in"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      <PopoverPanel focus class="absolute top-0 left-1 inset-x-0 pl-2 pt-2 pr-5 transition transform origin-top-right lg:hidden z-30">
        <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
          <div class="pt-5 pb-6 px-5">
            <div class="flex items-center justify-between">
              <div>
                <img class="h-8 w-auto" src="/public/assets/images/header-logo.svg" alt="VOXO" />
              </div>
              <div class="-mr-2">
                <PopoverButton ref="menuClose" class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100">
                  <span class="sr-only">Close menu</span>
                  <XIcon class="h-6 w-6" aria-hidden="true" />
                </PopoverButton>
              </div>
            </div>
            <div class="mt-6">
              <nav class="grid gap-y-2">
                <router-link
                  to="/"
                  class="text-base p-1 block"
                  :class="$route.name === 'index' ? 'font-einasemibold text-voxo-gray-dark' : 'font-eina'"
                  @click="hideMenu"
                >
                  Home
                </router-link>

                <router-link
                  to="/product"
                  class="text-base p-1 block"
                  :class="$route.name === 'product' ? 'font-einasemibold text-voxo-gray-dark' : 'font-eina'"
                  @click="hideMenu"
                >
                  Product
                </router-link>

                <router-link
                  to="/team"
                  class="text-base p-1 block"
                  :class="$route.name === 'team' ? 'font-einasemibold text-voxo-gray-dark' : 'font-eina'"
                  @click="hideMenu"
                >
                  Team
                </router-link>

                <router-link
                  to="/contact"
                  class="text-base p-1 block"
                  :class="$route.name === 'contact' ? 'font-einasemibold text-voxo-gray-dark' : 'font-eina'"
                  @click="hideMenu"
                >
                  Contact
                </router-link>

                <router-link
                  to="/blog"
                  class="text-base p-1 block"
                  :class="$route.name === 'blog' ? 'font-einasemibold text-voxo-gray-dark' : 'font-eina'"
                  @click="hideMenu"
                >
                  Blog
                </router-link>
              </nav>
            </div>
          </div>
          <div class="py-6 px-5 space-y-6">
            <div class="grid grid-cols-2 gap-y-3 gap-x-8">
              <router-link v-for="item in locations" :key="item.name" :to="item.href" class="text-base flex items-center" @click="hideMenu">
                <div class="flex-shrink-0 flex items-center justify-center h-8 w-8 rounded-md text-white sm:h-12 sm:w-12">
                  <img :src="item.icon" :alt="item.name" />
                </div>
                <span class="px-2">{{ item.name }}</span>
              </router-link>
            </div>
            <div>
              <a href="https://app.voxo.co" target="" class="w-full flex items-center justify-center px-4 py-2 border-2 border-voxo-red rounded-md shadow-sm text-voxo-red font-einasemibold">
                Login
              </a>
            </div>
          </div>
        </div>
      </PopoverPanel>
    </transition>
  </Popover>
</template>

<script>
import { Popover, PopoverButton, PopoverGroup, PopoverPanel } from '@headlessui/vue'
import {
  MenuIcon,
  XIcon,
} from '@heroicons/vue/outline'
import { ChevronDownIcon } from '@heroicons/vue/solid'

const locations = [
  {
    name: 'Hattiesburg, MS',
    description: 'We are at 7127 US-98 Suite 40',
    href: '/hattiesburg',
    icon: '/assets/images/icons/flag-hattiesburg.svg',
  },
  {
    name: 'Houston, TX',
    description: 'We are at 9595 Six Pines Dr. Suite 8210',
    href: '/texas',
    icon: '/assets/images/icons/flag-tx.svg',
  },
  {
    name: 'Mobile, AL',
    description: 'We are at 30s Congress Street',
    href: 'mobile',
    icon: '/assets/images/icons/flag-mobile.svg',
  },
  {
    name: 'Nashville, TN',
    description: 'We are at 4100 Smith School Rd.',
    href: '/nashville',
    icon: '/assets/images/icons/flag-nashville.svg',
  },
  {
    name: 'Lancaster, PA',
    description: 'We are at 800 New Holland Avenue',
    href: '/lancaster',
    icon: '/assets/images/icons/flag-pa.svg',
  },
  {
    name: 'Dublin, UK',
    description: '',
    href: '/dublin',
    icon: '/assets/images/icons/flag-wi.svg',
  },
]

export default {
  components: {
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
    ChevronDownIcon,
    MenuIcon,
    XIcon,
  },
  setup() {
    return {
      locations,
    }
  },
  methods: {
    hideMenu() {
      this.$refs.menuClose.handleClick()
    },
    hideFlyoutMenu() {
      this.$refs.flyoutMenu.handleClick()
    },
  },
}
</script>
