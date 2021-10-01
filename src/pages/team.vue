<template>
  <div class="bg-white">
    <div class="relative">
      <img class="w-full" src="/public/assets/images/team-banner.jpg" alt="Our Team" />
      <h1 class="text-3xl md:text-7xl text-white absolute h-full w-full flex items-center justify-center z-10 top-0">
        Our Team
      </h1>
    </div>
    <div class="max-w-xl lg:max-w-7xl lg:px-8 mx-auto px-4 sm:px-6 py-16">
      <h1 class="text-3xl text-voxo-gray-header tracking-tight md:text-5xl text-center pb-6">
        About Us
      </h1>
      <p class="max-w-4xl mx-auto text-center">
        Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat
        veniam occaecat fugiat Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.
        Elit sunt amet fugiat aliqua.
      </p>
      <p class="max-w-4xl mx-auto text-center py-4">
        Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
        fugiat veniam occaecat fugiat aliqua aliqua ad ad non deserunt sunt.
      </p>
    </div>
  </div>

  <!--  Team Members-->
  <div class="max-w-xl lg:max-w-7xl lg:px-8 mx-auto px-4 sm:px-6 pb-24">
    <ul role="list" class="space-y-12 lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-10 lg:gap-y-16 lg:space-y-0">
      <li v-for="person in people" :key="person.name">
        <div class="space-y-4 sm:grid sm:grid-cols-4 sm:gap-6 sm:space-y-0 lg:gap-8">
          <div class="h-0 aspect-w-3 aspect-h-2 sm:aspect-w-3 sm:aspect-h-3 sm:col-span-2">
            <img class="object-cover" :src="person.imageUrl" :alt="person.name" />
          </div>
          <div class="sm:col-span-2">
            <div class="space-y-4">
              <div class="text-2xl leading-6 font-medium space-y-1">
                <h2>{{ person.name }}</h2>
                <p class="text-xl font-poppinssemibold text-voxo-red">
                  {{ person.role }}
                </p>
              </div>
              <div class="text-base">
                <p>
                  {{ person.bio }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>

  <!--  Join Team Partial-->
  <div class="mt-24">
    <div class="pt-1 bg-voxo-gray-light relative">
      <div class="transform skew-y-3 h-32 bg-voxo-gray-light -mt-22"></div>
      <div class="relative z-10">
        <div class="lg:mx-auto lg:max-w-7xl lg:px-8 flex items-center sm:justify-between relative z-10 flex-wrap pb-16 lg:pt-0">
          <div class="w-3/4 lg:mt-0 lg:flex-1 lg:block lg:order-1 order-2 mx-auto">
            <img class="mx-auto lg:w-auto" src="/public/assets/images/join-team-images.png" alt="Join Our Team" />
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
                Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus
                dui laoreet diam sed lacus, fames.
              </p>
              <div class="rounded-md">
                <a href="#" class=" my-10 font-einasemibold w-3/4 flex items-center justify-center px-8 py-3 border-transparent text-base font-medium rounded-lg text-white bg-voxo-red md:py-3 md:text-lg lg:mx-0">
                  Explore Open Positions
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

const people = [
  {
    name: 'Joe Mordica',
    role: 'Founder',
    imageUrl: '/assets/images/team/team-placeholder.png',
    bio: 'Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.',
  },
  {
    name: 'Whitney Francis',
    role: 'Copywriter',
    imageUrl: '/assets/images/team/team-placeholder.png',
    bio: 'Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.',
  },
  {
    name: 'Whitney Francis',
    role: 'Copywriter',
    imageUrl: '/assets/images/team/team-placeholder.png',
    bio: 'Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.',
  },
  {
    name: 'Whitney Francis',
    role: 'Copywriter',
    imageUrl: '/assets/images/team/team-placeholder.png',
    bio: 'Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.',
  },
  // More people...
]

export default {
  setup() {
    return {
      people,
    }
  },
}

</script>
