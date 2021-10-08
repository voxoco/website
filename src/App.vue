<template>
  <main v-if="$route.name !== 'admin'" class="bg-white overflow-x-hidden">
    <Header />
    <router-view />
    <Footer />
  </main>
  <main v-else>
    <router-view />
  </main>
</template>
