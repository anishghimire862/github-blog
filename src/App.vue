<template>
  <div class="flex h-screen">
    <div class="m-auto space-y-6">
      <div class="flex justify-center space-x-6">
        <RouterLink
          class="inline-flex items-center py-2 px-5 rounded-full text-sm border border-gray-500 font-medium hover:cursor-pointer"
          to="/"
        >
          Home
        </RouterLink>
        <RouterLink
          class="inline-flex items-center py-2 px-5 rounded-full text-sm border border-gray-500 font-medium hover:cursor-pointer"
          to="/about"
        >
          About
        </RouterLink>
        <RouterLink
          class="inline-flex items-center py-2 px-5 rounded-full text-sm border border-gray-500 font-medium hover:cursor-pointer"
          to="/blog"
        >
          Blog
        </RouterLink>
      </div>
      <div class="border-t border-gray-300" />
      <main>
        <router-view />
      </main>
      <div class="border-t border-gray-300" />
      <div class="flex justify-center space-x-4">
        <git-hub-icon
            class="w-5 h-auto text-black-500 hover:text-blue-500 hover:cursor-pointer"
        />
        <linkedin-icon
            class="w-5 h-auto text-black-500 hover:text-blue-500 hover:cursor-pointer"
        />
        <twitter-icon
            class="w-5 h-auto text-black-500 hover:text-blue-500 hover:cursor-pointer"
        />
      </div>
    </div>
  </div>
</template>
<script>
import { RouterView } from 'vue-router'
import GitHubIcon from '@/components/icons/GitHubIcon.vue'
import LinkedinIcon from '@/components/icons/LinkedinIcon.vue'
import TwitterIcon from '@/components/icons/TwitterIcon.vue'

export default {
  components: {
    RouterView,
    GitHubIcon,
    LinkedinIcon,
    TwitterIcon,
  }
}
</script>
