<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="relative overflow-hidden">
    <!--    Stripes-->
    <div class="absolute -top-1 bg-white w-full">
      <img class="w-full" src="/public/assets/images/stripes.svg" alt="" />
    </div>

    <div class="relative z-10 pt-24 pb-12 bg-gradient-to-b from-voxo-gray-light">
      <!--      Hero Vector-->
      <div class="absolute right-0 top-0">
        <img src="/public/assets/images/home-hero-vector.svg" alt="" />
      </div>

      <!--      Hero Content-->
      <div class="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div class="lg:mx-auto lg:max-w-7xl lg:px-8 flex sm:justify-between relative z-10 flex-wrap">
          <div class="px-4 max-w-xl mx-auto sm:px-6 lg:max-w-none lg:mx-0 lg:px-0 lg:flex-none lg:w-1/3 ">
            <div>
              <h1 class="text-3xl text-voxo-gray-header tracking-tight md:text-6xl mt-2">
                Simply Communicate
              </h1>
              <p class="pt-6 pb-8 text-base">
                At VOXO, we know there is power in simplicity. We provide solutions that are straightforward and easy to
                manage, allowing your organization to collaborate with ease while optimizing business communication.
              </p>
              <div class="flex items-center">
                <button type="button" class="inline-flex items-center px-6 py-3 border border-black bg-black rounded-md shadow-sm flex-1">
                  <img src="/public/assets/images/apple-logo.png" alt="Apple App Store">
                </button>
                <button type="button" class="inline-flex items-center px-6 py-3 border border-google-blue rounded-md focus:outline-none ml-2 flex-1">
                  <img src="/public/assets/images/google-play-logo.png" alt="Google Play">
                </button>
              </div>
            </div>
          </div>
          <div class="hidden w-3/4 ml-24 lg:mt-0 lg:flex-1 lg:block lg:-mr-16">
            <img class="mxl-auto lg:w-auto" src="/public/assets/images/home-hero.svg" alt="Simply Communicate" />
          </div>
        </div>
      </div>
    </div>

    <!--    What We Do-->
    <div class="lg:mx-auto lg:max-w-7xl lg:px-8 flex items-center sm:justify-between relative z-10 flex-wrap pb-16 pt-16 lg:pt-16">
      <div class="w-3/4 lg:mt-0 lg:flex-1 lg:block lg:order-1 order-2 mx-auto">
        <img class="mx-auto lg:w-auto" src="/public/assets/images/what-we-do.png" alt="Simply Communicate" />
      </div>
      <div class="px-4 max-w-xl mx-auto sm:px-6 lg:max-w-none lg:mx-0 lg:px-0 lg:flex-none lg:w-96 lg:ml-24 lg:order-2 order-1">
        <div>
          <h1 class="text-3xl text-voxo-gray-header tracking-tight md:text-5xl mt-2">
            What We Do
          </h1>
          <p class="pt-6 lg:pb-8 text-base">
            We provide business telephone systems and call center software solutions built for mid to large-sized businesses.
            We develop and manage all of our software in-house, providing industry-leading customization to our clients.
            All of our services are offered on a no-contract basis.
          </p>
        </div>
      </div>
    </div>
  </div>
  <!--    Why We Do It-->
  <div class="relative bg-voxo-gray-light z-10">
    <div class="lg:mx-auto lg:max-w-7xl lg:px-8 flex items-center sm:justify-between relative z-10 flex-wrap py-8">
      <div class="px-4 max-w-xl mx-auto sm:px-6 lg:max-w-none lg:mx-0 lg:px-0 lg:flex-none lg:w-96">
        <div>
          <h1 class="text-3xl text-voxo-gray-header tracking-tight md:text-5xl mt-2">
            Why We Do It
          </h1>
          <p class="pt-6 pb-8 text-base">
            We want to make a difference. We imagine a world where people matter more than profit, where employees love
            to come to work, and where clients feel like they matter. We are governed by God’s principles, and above
            all else, we want to honor Him.
          </p>
        </div>
      </div>
      <div class="w-3/4 lg:mt-0 lg:flex-1 lg:block lg:ml-24 lg:-mr-16 mx-auto cursor-pointer" @click="open = true">
        <img class="mxl-auto lg:w-auto" src="/public/assets/images/video-placeholder.svg" alt="Simply Communicate" />
      </div>
    </div>
  </div>

  <!--    Our Clients-->
  <div class="bg-white py-8">
    <div class="lg:mx-auto lg:max-w-6xl lg:px-8 flex items-center sm:justify-between relative z-10 flex-wrap py-8">
      <div class="px-4 flex w-full items-center justify-center flex-wrap gap-24">
        <h1 class="text-2xl text-voxo-gray-dark flex-none mx-auto w-full text-center lg:flex-shrink lg:w-auto lg:mx-0">
          Our Clients
        </h1>
        <div class="block">
          <img class="mx-auto" src="/public/assets/images/logo-ntg.svg" alt="NTG Freight" />
        </div>
        <div class="block">
          <img class="mx-auto" src="/public/assets/images/logo-enc.svg" alt="Encompass Health" />
        </div>
        <div class="block">
          <img class="mx-auto" src="/public/assets/images/logo-jones.svg" alt="Jones Companies" />
        </div>
        <div class="block w-48">
          <img class="mx-auto" src="/public/assets/images/logo-stm.png" alt="Petroleum Wholesale" />
        </div>
      </div>
    </div>
  </div>

  <!--Video Modal-->
  <TransitionRoot as="template" :show="open">
    <Dialog as="div" class="fixed z-50 inset-0 overflow-y-auto" @close="open = false">
      <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <TransitionChild
          as="template"
          enter="ease-out duration-300"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="ease-in duration-200"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <DialogOverlay class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </TransitionChild>

        <!-- This element is to trick the browser into centering the modal contents. -->
        <span class="inline-block align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
        <TransitionChild
          as="template"
          enter="ease-out duration-300"
          enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          enter-to="opacity-100 translate-y-0 sm:scale-100"
          leave="ease-in duration-200"
          leave-from="opacity-100 translate-y-0 sm:scale-100"
          leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        >
          <div class="inline-block align-middle bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle max-w-7xl w-full sm:mb-0 mb-auto">
            <div class="aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.youtube.com/embed/kAryfEvlMgo?controls=1&rel=0"
                class="mx-auto"
                allowfullscreen
              />
            </div>
          </div>
        </TransitionChild>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script>
import { Dialog, DialogOverlay, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { XIcon } from '@heroicons/vue/outline'
import { ref } from 'vue'

export default {
  components: {
    Dialog,
    DialogOverlay,
    DialogTitle,
    TransitionRoot,
    TransitionChild,
    XIcon,
  },
  setup() {
    const open = ref(false)

    return {
      open,
    }
  },
}
</script>
