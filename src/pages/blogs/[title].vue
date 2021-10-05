
<script setup lang="ts">
const title = ref('')
const props = defineProps<{ title: string; date: string }>()
const router = useRouter()
</script>

<template>
  <div>
    <button
      class="btn m-3 text-sm mt-8"
      @click="router.back()"
    >
      Back
    </button>
  </div>
  <div>
    {{ props.title }}
  </div>
</template>
