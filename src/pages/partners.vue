<template>
  <div class="relative bg-voxo-gray-grad-dark py-24">
    <!--    Stripes-->
    <div class="absolute -top-1 overflow-hidden h-full w-full">
      <img class="w-full object-cover h-full" src="/public/assets/images/stripes.svg" alt="" />
    </div>

    <div class="max-w-7xl mx-auto px-4 pb-24 relative">
      <!-- Card -->
      <div
        class="p-12 w-full bg-white rounded-2xl shadow-2xl"
      >
        <!-- Header and subheader section -->
        <div class="flex items-center justify-center flex-col max-w-3xl mx-auto py-12">
          <h1 class="text-6xl">
            VOXO Partner
          </h1>
          <p class="mt-6 text-lg text-warm-gray-500 max-w-3xl">
            Become a VOXO partner by filling out the information below.
          </p>
        </div>
        <!-- Form -->
        <form @submit.prevent="submitForm">
          <div class="grid grid-cols-1 lg:grid-cols-2 max-w-3xl mx-auto mt-5 gap-x-12 py-12 -mt-8 gap-y-8">
            <div class="w-full">
              <label
                for="first-name"
                class="block font-medium text-black pb-2"
              >First name</label>
              <input
                id="first-name"
                v-model="partnerForm.firstName"
                type="text"
                name="first-name"
                class="mt-1 focus:ring-black focus:border-black block w-full shadow-sm border-gray-300 rounded-md"
              />
            </div>
            <div class="w-full">
              <label
                for="last-name"
                class="block font-medium text-black pb-2"
              >Last name</label>
              <input
                id="last-name"
                v-model="partnerForm.lastName"
                type="text"
                name="last-name"
                class="mt-1 focus:ring-black focus:border-black block w-full shadow-sm border-gray-300 rounded-md"
              />
            </div>
            <div class="w-full">
              <label
                for="company-name"
                class="block font-medium text-black pb-2"
              >Company name</label>
              <input
                id="company-name"
                v-model="partnerForm.companyName"
                type="text"
                name="company-name"
                class="mt-1 focus:ring-black focus:border-black block w-full shadow-sm border-gray-300 rounded-md"
              />
            </div>
            <div class="w-full">
              <label
                for="email"
                class="block font-medium text-black pb-2"
              >Email</label>
              <input
                id="email"
                v-model="partnerForm.email"
                type="text"
                name="email"
                class="mt-1 focus:ring-black focus:border-black block w-full shadow-sm border-gray-300 rounded-md"
              />
            </div>
            <div class="w-full">
              <label
                for="phone-number"
                class="block font-medium text-black pb-2"
              >Phone Number</label>
              <input
                id="phone-number"
                v-model="partnerForm.phoneNumber"
                type="tel"
                name="phone-number"
                class="mt-1 focus:ring-black focus:border-black block w-full shadow-sm border-gray-300 rounded-md"
              />
            </div>
            <div class="w-full">
              <label
                for="manage-users"
                class="block font-medium text-black pb-2"
              >How many users are you managing?</label>
              <input
                id="manage-users"
                v-model="partnerForm.manageUsers"
                type="text"
                name="manage-users"
                class="mt-1 focus:ring-black focus:border-black block w-full shadow-sm border-gray-300 rounded-md"
              />
            </div>
            <div class="w-full">
              <label
                for="current-voip"
                class="block font-medium text-black pb-2"
              >Which VoIP provider(s) you use currently?</label>
              <input
                id="current-voip"
                v-model="partnerForm.currentVoip"
                type="text"
                name="current-voip"
                class="mt-1 focus:ring-black focus:border-black block w-full shadow-sm border-gray-300 rounded-md"
              />
            </div>
            <div class="w-full">
              <label
                for="specific-features"
                class="block font-medium text-black pb-2 whitespace-nowrap"
              >Any specific features or requests you're looking for?</label>
              <input
                id="specific-features"
                v-model="partnerForm.specificFeatures"
                type="text"
                name="specific-features"
                class="mt-1 focus:ring-black focus:border-black block w-full shadow-sm border-gray-300 rounded-md"
              />
            </div>
          </div>
          <!-- Submit Button -->
          <div class="flex justify-center items-center py-12 -mt-6">
            <button :disabled="isSubmitting" type="submit" class="text-lg max-w-84 w-full py-3 px-4 border-1 border-transparent bg-voxo-red text-sm border-voxo-red hover:border-voxo-gray-dark text-base hover:text-voxo-gray-dark hover:bg-white shadow-sm rounded-md text-white transition duration-200 disabled:bg-gray">
              {{ isSubmitting ? "Submitting..." : "Submit" }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
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
        <div v-if="submitError" class="max-w-sm w-full bg-white shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden">
          <div class="p-4">
            <div class="flex items-start">
              <div class="flex-shrink-0 pt-1">
                <XIcon class="h-6 w-6 text-voxo-red" aria-hidden="true" />
              </div>
              <div class="ml-3 w-0 flex-1">
                <p class="text-lg font-einabold">
                  Submit form error
                </p>
              </div>
              <div class="ml-4 flex-shrink-0 flex">
                <button class="bg-white rounded-md inline-flex text-voxo-gray-dark hover:text-gray-500 focus:outline-none" @click="submitError = false">
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
        <div v-if="submitSuccess" class="max-w-sm w-full bg-white shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden">
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
                <button class="bg-white rounded-md inline-flex text-voxo-gray-dark hover:text-gray-500 focus:outline-none" @click="submitSuccess = false">
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
import { CheckCircleIcon, XIcon } from '@heroicons/vue/outline'

export default {
  components: {
    CheckCircleIcon,
    XIcon,
  },
  data() {
    return {
      submitError: false,
      submitSuccess: false,
      isSubmitting: false,
      partnerForm: {
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        manageUsers: '',
        currentVoip: '',
        specificFeatures: '',
      },
    }
  },
  methods: {
    async submitForm() {
      this.isSubmitting = true
      try {
        const url = 'https://formspree.io/f/xdovjryr'
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(this.partnerForm),
        })
        if (!response.ok)
          throw new Error('Form submission error')

        this.clearForm()
        this.submitSuccess = true
        setTimeout(() => {
          this.submitSuccess = false
        }, 3000)
      }
      catch (error) {
        this.submitError = true
      }
      this.isSubmitting = false
    },
    clearForm() {
      this.partnerForm = {
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        manageUsers: '',
        currentVoip: '',
        specificFeatures: '',
      }
    },
  },
}
</script>
