<template>
  <div class="bg-white">
    <div class="relative">
      <img class="w-full object-cover h-80" src="/public/assets/images/team-banner.jpg" alt="Our Team" />
      <h1 class="text-3xl md:text-7xl text-white absolute h-full w-full flex items-center justify-center z-10 top-0">
        Our Team
      </h1>
    </div>
    <div class="max-w-xl lg:max-w-7xl lg:px-8 mx-auto px-4 sm:px-6 py-16">
      <h1 class="text-3xl text-voxo-gray-header tracking-tight md:text-5xl text-center pb-6">
        About Us
      </h1>
      <p class="max-w-4xl mx-auto text-center">
        Changing the world through inspiration, challenging the status quo, forging new paths and solving problems. VOXO is the platform that fuels a deeper purpose and allows its team members to do the things that inspire them.
      </p>
      <p class="max-w-4xl mx-auto text-center py-4">
        When a new member joins the VOXO team it isn't because of their resume or talent but rather their character and purpose. It is more about their ability to believe in and embody the VOXO WHY.
      </p>
    </div>
  </div>

  <!--  Team Members-->
  <div class="max-w-xl lg:max-w-7xl lg:px-8 mx-auto px-4 sm:px-6 pb-24">
    <ul role="list" class="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8">
      <li v-for="person in people" :key="person.name">
        <div class="space-y-4">
          <div class="aspect-w-3 aspect-h-2">
            <img class="object-cover object-top shadow-lg rounded-lg" :src="person.imageUrl" :alt="person.name" />
          </div>
          <div class="space-y-2">
            <div class="text-2xl leading-6 font-medium space-y-1">
              <h2>{{ person.name }}</h2>
              <p class="text-lg font-poppinssemibold text-voxo-red">{{ person.role.toUpperCase() }}</p>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>

  <!--  Join Team Partial-->
  <JoinTeamPartial />
</template>

<script>

import JoinTeamPartial from '~/components/join-team-partial.vue'
import Team from '/public/cms/team.json'

export default {
  components: {
    JoinTeamPartial,
  },
  setup() {
    const people = [...Team.teamList]

    return {
      people,
    }
  },
}

</script>
