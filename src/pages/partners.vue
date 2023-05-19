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
              for="survey-1"
              class="block font-medium text-black pb-2"
            >How many users are you managing?</label>
            <input
              id="survey-1"
              v-model="partnerForm.survey1"
              type="text"
              name="survey-1"
              class="mt-1 focus:ring-black focus:border-black block w-full shadow-sm border-gray-300 rounded-md"
            />
          </div>
          <div class="w-full">
            <label
              for="survey-2"
              class="block font-medium text-black pb-2"
            >Which VoIP provider(s) you use currently?</label>
            <input
              id="survey-2"
              v-model="partnerForm.survey2"
              type="text"
              name="survey-2"
              class="mt-1 focus:ring-black focus:border-black block w-full shadow-sm border-gray-300 rounded-md"
            />
          </div>
          <div class="w-full">
            <label
              for="survey-3"
              class="block font-medium text-black pb-2 whitespace-nowrap"
            >Any specific features or requests you're looking for?</label>
            <input
              id="survey-3"
              v-model="partnerForm.survey3"
              type="text"
              name="survey-3"
              class="mt-1 focus:ring-black focus:border-black block w-full shadow-sm border-gray-300 rounded-md"
            />
          </div>
        </div>
        <!-- Submit Button -->
        <div class="flex justify-center items-center py-12 -mt-6">
          <button type="button" class="text-lg max-w-84 w-full py-3 px-4 border-1 border-transparent bg-voxo-red text-sm border-voxo-red hover:border-voxo-gray-dark text-base hover:text-voxo-gray-dark hover:bg-white shadow-sm rounded-md text-white transition duration-200">
            Submit
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      partnerForm: {
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        survey1: '',
        survey2: '',
        survey3: '',
      },
    }
  },
}
</script>
