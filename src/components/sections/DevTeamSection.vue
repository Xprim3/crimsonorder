<template>
  <section id="dev-team" class="relative py-16 px-4 sm:px-8 bg-black bg-opacity-80">
    <div class="max-w-5xl mx-auto text-center">
      <h2 class="text-4xl sm:text-5xl font-bold text-yellow-400 mb-2 drop-shadow-lg">
        {{ $t('devTeam.title') }}
      </h2>
      <p class="text-lg text-gray-300 mb-10">
        {{ $t('devTeam.subtitle') }}
      </p>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <div
          v-for="(member, idx) in devTeamMembers"
          :key="idx"
          class="bg-gradient-to-br from-red-900/40 to-red-800/30 rounded-2xl p-8 border-2 border-yellow-700/40 shadow-lg flex flex-col items-center hover:border-yellow-400/80 transition-all duration-300"
        >
          <div class="mb-4">
            <!-- Avatar Placeholder: Use initials in a styled circle -->
            <div class="w-20 h-20 rounded-full bg-yellow-500/20 flex items-center justify-center text-3xl font-bold text-yellow-400 border-2 border-yellow-500/40 shadow-md">
              <span>{{ member.name.split(' ').map(n => n[0]).join('') }}</span>
            </div>
          </div>
          <h3 class="text-xl font-bold text-white mb-1">{{ member.name }}</h3>
          <div class="text-yellow-300 font-semibold mb-2">{{ member.role }}</div>
          <p class="text-gray-300 text-sm mb-3">{{ member.bio }}</p>
          <a
            v-if="member.github"
            :href="member.github"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-1 text-blue-400 hover:text-yellow-400 font-semibold transition"
          >
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.74-1.56-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .98-.31 3.2 1.18a11.1 11.1 0 0 1 2.92-.39c.99 0 1.99.13 2.92.39 2.22-1.49 3.2-1.18 3.2-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.41-5.27 5.7.42.36.79 1.09.79 2.2 0 1.59-.01 2.87-.01 3.26 0 .31.21.68.8.56C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z"/></svg>
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { tm } = useI18n()
const devTeamMembers = tm('devTeam.members') as DevTeamMember[];
</script>

<style scoped>
@media (max-width: 640px) {
  #dev-team h2 {
    font-size: 2rem;
  }
}
</style> 