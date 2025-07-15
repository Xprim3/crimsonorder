<template>
  <section
    id="dev-team"
    class="relative py-16 px-4 sm:px-8 bg-black bg-opacity-80"
  >
    <div class="max-w-5xl mx-auto text-center">
      <h2
        class="text-4xl sm:text-5xl font-bold text-yellow-400 mb-2 drop-shadow-lg"
      >
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
            <div
              class="w-20 h-20 rounded-full bg-yellow-500/20 flex items-center justify-center text-3xl font-bold text-yellow-400 border-2 border-yellow-500/40 shadow-md"
            >
              <span>{{
                member.name
                  .split(' ')
                  .map((n: string) => n[0])
                  .join('')
              }}</span>
            </div>
          </div>
          <h3 class="text-xl font-bold text-white mb-1">{{ member.name }}</h3>
          <div class="text-yellow-300 font-semibold mb-2">
            {{ member.role }}
          </div>
          <p class="text-gray-300 text-sm mb-3">{{ member.bio }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { useI18n } from 'vue-i18n'

  type DevTeamMember = {
    name: string
    role: string
    bio: string
  }

  const { tm } = useI18n()
  const devTeamMembers = tm('devTeam.members') as DevTeamMember[]
</script>

<style scoped>
  @media (max-width: 640px) {
    #dev-team h2 {
      font-size: 2rem;
    }
  }
</style>
