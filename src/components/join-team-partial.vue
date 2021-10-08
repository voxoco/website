<template>
  <!--  Join Team Partial-->
  <div class="mt-24">
    <div class="pt-1 bg-voxo-gray-light relative">
      <div class="transform skew-y-3 h-32 bg-voxo-gray-light -mt-22"></div>
      <div class="relative z-10">
        <div class="lg:mx-auto lg:max-w-7xl lg:px-8 flex items-center sm:justify-between relative z-10 flex-wrap pb-16 lg:pt-0">
          <div class="w-3/4 lg:mt-0 lg:flex-1 lg:block lg:order-1 order-2 mx-auto">
            <img class="mx-auto lg:w-auto" src="/public/assets/images/join-team.svg" alt="Join Our Team" />
          </div>
          <div class="px-4 max-w-xl mx-auto sm:px-6 lg:max-w-none lg:mx-0 lg:px-0 lg:flex-none lg:w-96 lg:ml-24 lg:order-2 order-1">
            <div>
              <h1 class="text-3xl text-voxo-gray-header tracking-tight md:text-5xl mt-2">
                Join Our
                <span class="text-voxo-red">
                  Team
                </span>
              </h1>
              <p class="pt-6 lg:pb-8 text-base">
                You will frequently hear of our commitment to building relationships. It's integral to who we are. And a key part of how we build relationships is by adding real value to the lives of everyone we touch, whether clients or team members we are committed to adding value.
              </p>
              <div class="rounded-md">
                <div class="cursor-pointer my-10 font-einasemibold w-3/4 flex items-center justify-center px-8 py-3 border-transparent text-base font-medium rounded-lg text-white bg-voxo-red md:py-3 md:text-lg lg:mx-0" @click="open = true">
                  Explore Open Positions
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <TransitionRoot as="template" :show="open">
    <Dialog as="div" class="fixed z-40 inset-0 overflow-y-auto" @close="open = false">
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
        <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
        <TransitionChild
          as="template"
          enter="ease-out duration-300"
          enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          enter-to="opacity-100 translate-y-0 sm:scale-100"
          leave="ease-in duration-200"
          leave-from="opacity-100 translate-y-0 sm:scale-100"
          leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        >
          <div class="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
            <div class="hidden sm:block absolute top-0 right-0 pt-4 pr-4">
              <button type="button" class="bg-white rounded-md text-voxo-gray-dark focus:outline-none" @click="open = false">
                <span class="sr-only">Close</span>
                <XIcon class="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div class="sm:flex sm:items-start">
              <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <DialogTitle as="h3" class="text-lg leading-6 font-medium text-gray-900">
                  Contact us
                </DialogTitle>
                <div class="mt-2">
                  <p class="text-sm voxo-text-gray">
                    Some copy here about submiting this form to request job info, .... etc
                  </p>
                </div>
              </div>
            </div>
            <div class="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse sm:justify-center">
              <div class="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8 ">
                <div>
                  <div class="mt-1 border-b border-gray-300 ">
                    <input
                      id="first-name"
                      v-model="employForm.firstName"
                      type="text"
                      name="first-name"
                      class="block w-full border-0 border-b border-transparent bg-transparent pl-0 focus:outline-none focus:ring-0"
                      placeholder="First Name"
                    />
                  </div>
                </div>
                <div>
                  <div class="mt-1 border-b border-gray-300 ">
                    <input
                      id="last-name"
                      v-model="employForm.lastName"
                      type="text"
                      name="last-name"
                      autocomplete="family-name"
                      class="block w-full border-0 border-b border-transparent bg-transparent pl-0 focus:outline-none focus:ring-0"
                      placeholder="Last Name"
                    />
                  </div>
                </div>
                <div>
                  <div class="mt-1 border-b border-gray-300 ">
                    <input
                      id="email"
                      v-model="employForm.email"
                      name="email"
                      type="email"
                      autocomplete="email"
                      class="block w-full border-0 border-b border-transparent bg-transparent pl-0 focus:outline-none focus:ring-0"
                      placeholder="Email"
                    />
                  </div>
                </div>
                <div>
                  <div class="mt-1 border-b border-gray-300 ">
                    <input
                      id="phone"
                      v-model="employForm.phone"
                      type="text"
                      name="phone"
                      autocomplete="tel"
                      class="block w-full border-0 border-b border-transparent bg-transparent pl-0 focus:outline-none focus:ring-0"
                      placeholder="Phone"
                    />
                  </div>
                </div>
                <div class="sm:col-span-2">
                  <select
                    id="position"
                    v-model="employForm.position"
                    name="position"
                    class="focus:border-voxo-gray cursor-pointer mt-1 block w-full pl-3 pr-10 py-2 text-base border-voxo-gray-dark focus:outline-none focus:ring-0 sm:text-sm rounded-md"
                  >
                    <option selected disabled value="">
                      Select position
                    </option>
                    <option>USA</option>
                    <option>EU</option>
                  </select>
                </div>
                <div class="sm:col-span-2">
                  <div class="flex justify-between">
                    <label for="message" class="block text-base">Message</label>
                    <span id="message-max" class="text-sm text-warm-gray-500">Max. 500 characters</span>
                  </div>
                  <div class="mt-1">
                    <textarea
                      id="message"
                      v-model="employForm.message"
                      name="message"
                      rows="4"
                      class="focus:shadow-none focus:outline-none focus:ring-0 focus:ring-white focus:border-voxo-gray py-3 px-4 block w-full text-voxo-gray border border-voxo-gray-dark rounded-md"
                      aria-describedby="message-max"
                    />
                  </div>
                </div>
                <div class="sm:col-span-2 sm:flex sm:justify-end">
                  <button
                    type="button"
                    class="font-einasemibold mt-2 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-lg text-white bg-voxo-red sm:w-auto"
                    @click="submitForm"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </TransitionChild>
      </div>
    </Dialog>
  </TransitionRoot>

  <!-- Global notification live region, render this permanently at the end of the document -->
  <div aria-live="assertive" class="fixed top-0 inset-0 flex items-end px-4 py-6 pointer-events-none sm:p-6 sm:items-start z-40">
    <div class="w-full flex flex-col items-center space-y-4 sm:items-end">
      <!-- Notification panel, dynamically insert this into the live region when it needs to be displayed -->
      <transition
        enter-active-class="transform ease-out duration-300 transition"
        enter-from-class="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
        enter-to-class="translate-y-0 opacity-100 sm:translate-x-0"
        leave-active-class="transition ease-in duration-100"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div v-if="show" class="max-w-sm w-full bg-white shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden">
          <div class="p-4">
            <div class="flex items-start">
              <div class="flex-shrink-0 pt-1">
                <CheckCircleIcon class="h-6 w-6 text-green-400" aria-hidden="true" />
              </div>
              <div class="ml-3 w-0 flex-1">
                <p class="text-base font-einabold">
                  Message submitted
                </p>
                <p class="mt-1 text-sm">
                  Thanks for reaching out to us!
                </p>
              </div>
              <div class="ml-4 flex-shrink-0 flex">
                <button class="bg-white rounded-md inline-flex text-voxo-gray-dark hover:text-gray-500 focus:outline-none" @click="show = false">
                  <span class="sr-only">Close</span>
                  <XIcon class="h-5 w-5" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>

  <!-- Global notification live region, render this permanently at the end of the document -->
  <div aria-live="assertive" class="fixed top-0 inset-0 flex items-end px-4 py-6 pointer-events-none sm:p-6 sm:items-start z-50">
    <div class="w-full flex flex-col items-center space-y-4 sm:items-end">
      <!-- Notification panel, dynamically insert this into the live region when it needs to be displayed -->
      <transition
        enter-active-class="transform ease-out duration-300 transition"
        enter-from-class="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
        enter-to-class="translate-y-0 opacity-100 sm:translate-x-0"
        leave-active-class="transition ease-in duration-100"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div v-if="showErrors" class="max-w-sm w-full bg-white shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden">
          <div class="p-4">
            <div class="flex items-start">
              <div class="flex-shrink-0 pt-1">
                <XIcon class="h-6 w-6 text-voxo-red" aria-hidden="true" />
              </div>
              <div class="ml-3 w-0 flex-1">
                <p class="text-lg font-einabold">
                  Form error
                </p>
                <p v-for="error of v$.$errors" :key="error.$uid" class="mt-1 text-sm">
                  <span>{{ error.$message }}</span>
                </p>
              </div>
              <div class="ml-4 flex-shrink-0 flex">
                <button class="bg-white rounded-md inline-flex text-voxo-gray-dark hover:text-gray-500 focus:outline-none" @click="showErrors = false">
                  <span class="sr-only">Close</span>
                  <XIcon class="h-5 w-5" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>

import { ref } from 'vue'
import { Dialog, DialogOverlay, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { XIcon, CheckCircleIcon } from '@heroicons/vue/outline'
import { email, required, helpers } from '@vuelidate/validators'
import { useVuelidate } from '@vuelidate/core'

export default {
  components: {
    Dialog,
    DialogOverlay,
    DialogTitle,
    TransitionChild,
    TransitionRoot,
    XIcon,
    CheckCircleIcon,
  },
  setup() {
    const open = ref(false)
    const show = ref(false)
    const showErrors = ref(false)

    const v$ = useVuelidate({ $scope: 'none' })

    return {
      open,
      show,
      showErrors,
      v$,
    }
  },
  data() {
    return {
      employForm: {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        position: '',
        message: '',
      },
    }
  },
  validations() {
    return {
      employForm: {
        firstName: { required: helpers.withMessage('First name is required', required), $lazy: true },
        lastName: { required: helpers.withMessage('Last name is required', required), $lazy: true },
        message: { required: helpers.withMessage('Message is required', required), $lazy: true },
        email: { required: helpers.withMessage('Email is required', required), email: helpers.withMessage('Email field must be email', email), $lazy: true },
        position: { required: helpers.withMessage('Position is required', required), $lazy: true },
      },
    }
  },
  methods: {
    async submitForm() {
      console.log('submit contact form', this.employForm)
      // validate the form before posting to formspree

      this.v$.$reset()
      const validate = await this.v$.$validate()

      if (validate) {
        // post to formspree

        this.clearForm()
        this.open = false
        this.show = true
        setTimeout(() => {
          this.show = false
        }, 3000)
      }
      else {
        this.showErrors = true
        setTimeout(() => {
          this.showErrors = false
        }, 4000)
      }
    },
    clearForm() {
      this.employForm = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        position: '',
        message: '',
      }
    },
  },
}

</script>
