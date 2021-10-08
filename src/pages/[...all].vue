<template>
  <div class="min-h-screen pt-16 pb-12 flex flex-col bg-gradient-to-b from-voxo-gray-light to-transparent">
    <main class="flex-grow flex flex-col justify-center max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex-shrink-0 flex justify-center">
        <a href="/" class="inline-flex">
          <span class="sr-only">Workflow</span>
          <img class="h-72 w-auto" src="/public/assets/images/harold.png" alt="Harold" />
        </a>
      </div>
      <div class="py-16">
        <div class="text-center">
          <p class="text-sm font-semibold text-voxo-red uppercase tracking-wide">
            404 error
          </p>
          <h1 class="mt-2 text-4xl font-einabold tracking-tight sm:text-5xl">
            Page not found.
          </h1>
          <p class="mt-2 text-base">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <div class="mt-6">
            <router-link to="/" class="text-base font-einasemibold text-voxo-red hover:text-voxo-red-dark">
              Go back home<span aria-hidden="true"> &rarr;</span>
            </router-link>
          </div>
        </div>
      </div>
    </main>
    <footer class="flex-shrink-0 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
      <nav class="flex justify-center space-x-4">
        <a href="https://support.voxo.co" target="_blank" class="text-sm font-medium text-gray-500 hover:text-gray-600">Contact Support</a>
        <span class="inline-block border-l border-gray-300" aria-hidden="true" />
        <router-link to="/status" class="text-sm font-medium text-gray-500 hover:text-gray-600">
          Status
        </router-link>
        <span class="inline-block border-l border-gray-300" aria-hidden="true" />
        <a href="https://twitter.com/voxollc" target="_blank" class="text-sm font-medium text-gray-500 hover:text-gray-600">Twitter</a>
      </nav>
    </footer>
  </div>
</template>
