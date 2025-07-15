<template>
  <section
    id="join-family"
    class="relative min-h-screen flex items-center justify-center py-8 sm:py-12 lg:py-16 xl:py-20 px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16"
    style="background: #1a1a1a"
  >
    <!-- Background Effects -->
    <div
      class="absolute inset-0 opacity-20"
      style="background: linear-gradient(135deg, #8b0000, #dc2626)"
    ></div>

    <!-- Main Content -->
    <div class="relative z-10 w-full max-w-6xl mx-auto">
      <!-- Application Process -->
      <div
        class="bg-black bg-opacity-70 rounded-3xl p-8 lg:p-12 border-2 border-red-800 mb-16"
      >
        <div class="text-center mb-12">
          <h3
            class="text-3xl sm:text-4xl font-bold mb-4 text-white drop-shadow-lg"
            style="
              text-shadow:
                0 0 10px rgba(220, 38, 38, 0.5),
                0 0 20px rgba(220, 38, 38, 0.3);
            "
          >
            {{ $t('join.howToTitle') }}
          </h3>
          <p class="text-lg text-gray-300 mt-6">
            {{ $t('join.howToSubtitle') }}
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <!-- Application Steps -->
          <div class="space-y-6">
            <div v-for="idx in 5" :key="idx" class="flex items-start space-x-4">
              <div
                class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-red-600 to-red-700 rounded-full flex items-center justify-center border-2 border-yellow-500/50"
              >
                <span class="text-yellow-300 font-bold text-lg">{{ idx }}</span>
              </div>
              <div class="text-left">
                <h4
                  class="text-xl font-bold bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 bg-clip-text text-transparent mb-2"
                  style="text-shadow: 0 0 10px rgba(251, 191, 36, 0.3)"
                >
                  {{ $t(`join.steps.${idx - 1}.title`) }}
                </h4>
                <p class="text-gray-200 text-sm text-left">
                  {{ $t(`join.steps.${idx - 1}.desc`) }}
                </p>
              </div>
            </div>
          </div>

          <!-- Contact Information -->
          <div
            class="bg-gradient-to-br from-red-900/30 to-red-800/20 rounded-xl p-6 border border-red-700/30"
          >
            <h4
              class="bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 bg-clip-text text-transparent font-bold mb-6 text-left text-2xl"
              style="text-shadow: 0 0 10px rgba(251, 191, 36, 0.3)"
            >
              {{ $t('join.contactLeaders') }}
            </h4>

            <div class="space-y-4">
              <div
                class="flex items-center space-x-4 p-3 bg-red-800/20 rounded-lg border border-red-700/30"
              >
                <div
                  class="w-10 h-10 bg-yellow-500/20 rounded-full flex items-center justify-center"
                >
                  <span class="text-red-400">👑</span>
                </div>
                <div class="text-left">
                  <div class="text-gray-200 font-semibold">
                    {{ $t('join.leaders.pryda') }}
                  </div>
                  <div class="text-gray-400 text-sm">
                    {{ $t('join.inGame') }} ɴᴋPryda
                  </div>
                  <div class="text-gray-400 text-sm">
                    {{ $t('join.discord') }} awaken4398
                  </div>
                </div>
              </div>

              <div
                class="flex items-center space-x-4 p-3 bg-red-800/20 rounded-lg border border-red-700/30"
              >
                <div
                  class="w-10 h-10 bg-yellow-500/20 rounded-full flex items-center justify-center"
                >
                  <span class="text-red-400">⚖️</span>
                </div>
                <div class="text-left">
                  <div class="text-gray-200 font-semibold">
                    {{ $t('join.leaders.verso') }}
                  </div>
                  <div class="text-gray-400 text-sm">
                    {{ $t('join.inGame') }} Verso
                  </div>
                  <div class="text-gray-400 text-sm">
                    {{ $t('join.discord') }} emperiion
                  </div>
                </div>
              </div>

              <div
                class="flex items-center space-x-4 p-3 bg-red-800/20 rounded-lg border border-red-700/30"
              >
                <div
                  class="w-10 h-10 bg-yellow-500/20 rounded-full flex items-center justify-center"
                >
                  <span class="text-red-400">⚔️</span>
                </div>
                <div class="text-left">
                  <div class="text-gray-200 font-semibold">
                    {{ $t('join.leaders.nox') }}
                  </div>
                  <div class="text-gray-400 text-sm">
                    {{ $t('join.inGame') }} Nox
                  </div>
                  <div class="text-gray-400 text-sm">
                    {{ $t('join.discord') }} rene.klg22
                  </div>
                </div>
              </div>

              <div
                class="flex items-center space-x-4 p-3 bg-red-800/20 rounded-lg border border-red-700/30"
              >
                <div
                  class="w-10 h-10 bg-yellow-500/20 rounded-full flex items-center justify-center"
                >
                  <span class="text-red-400">🦅</span>
                </div>
                <div class="text-left">
                  <div class="text-gray-200 font-semibold">
                    {{ $t('join.leaders.suad') }}
                  </div>
                  <div class="text-gray-400 text-sm">
                    {{ $t('join.inGame') }} ɴᴋSuad
                  </div>
                  <div class="text-gray-400 text-sm">
                    {{ $t('join.discord') }} suad_14
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Epic Contact Buttons -->
        <div class="text-center mt-12">
          <h4
            class="bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 bg-clip-text text-transparent font-bold mb-8 text-2xl"
            style="text-shadow: 0 0 10px rgba(251, 191, 36, 0.3)"
          >
            {{ $t('join.readyToJoin') }}
          </h4>
          <div
            class="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <a
              href="https://t.me/+7ROpqc4W1eQ5MDYy"
              target="_blank"
              rel="noopener noreferrer"
              class="btn-neon-telegram group"
            >
              <div class="btn-content">
                <span class="btn-icon">📱</span>
                <span class="btn-text">{{ $t('join.telegram') }}</span>
              </div>
            </a>
            <a
              href="https://discord.gg/xsgPQJ5ZJS"
              target="_blank"
              rel="noopener noreferrer"
              class="btn-neon-discord group"
            >
              <div class="btn-content">
                <span class="btn-icon">💬</span>
                <span class="btn-text">{{ $t('join.discordBtn') }}</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  // No additional logic needed for this component
</script>

<style scoped>
  /* Enhanced hover effects */
  .group:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(139, 0, 0, 0.3);
  }

  /* Text shadow for better readability */
  h2,
  h3 {
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
  }

  /* Smooth transitions */
  * {
    transition: all 0.3s ease-in-out;
  }

  /* Enhanced border glow */
  .border-red-800 {
    box-shadow: 0 0 20px rgba(139, 0, 0, 0.2);
  }

  /* Epic Neon Button Styles */
  @keyframes neon-pulse-blue {
    0%,
    100% {
      box-shadow:
        0 0 15px #0088ff,
        inset 0 0 15px rgba(0, 136, 255, 0.3);
    }
    50% {
      box-shadow:
        0 0 25px #0088ff,
        0 0 35px #0088ff,
        inset 0 0 15px rgba(0, 136, 255, 0.3);
    }
  }

  @keyframes neon-pulse-purple {
    0%,
    100% {
      box-shadow:
        0 0 15px #7289da,
        inset 0 0 15px rgba(114, 137, 218, 0.3);
    }
    50% {
      box-shadow:
        0 0 25px #7289da,
        0 0 35px #7289da,
        inset 0 0 15px rgba(114, 137, 218, 0.3);
    }
  }

  .btn-neon-telegram,
  .btn-neon-discord {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 16px 32px;
    font-size: 18px;
    font-weight: bold;
    text-decoration: none;
    border-radius: 12px;
    transition: all 0.3s ease;
    overflow: hidden;
    min-width: 200px;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  .btn-neon-telegram {
    background: linear-gradient(135deg, #8b0000, #dc2626);
    border: 2px solid #f59e0b;
    color: white;
    box-shadow: 0 4px 15px rgba(139, 0, 0, 0.3);
  }

  .btn-neon-discord {
    background: linear-gradient(135deg, #8b0000, #dc2626);
    border: 2px solid #f59e0b;
    color: white;
    box-shadow: 0 4px 15px rgba(139, 0, 0, 0.3);
  }

  .btn-neon-telegram:hover,
  .btn-neon-discord:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(139, 0, 0, 0.4);
    border-color: #fcd34d;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.8);
  }

  .btn-content {
    display: flex;
    align-items: center;
    gap: 12px;
    position: relative;
    z-index: 2;
  }

  .btn-icon {
    font-size: 24px;
  }

  .btn-text {
    font-weight: 700;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.8);
  }

  /* Button glow effect on focus */
  .btn-neon-telegram:focus,
  .btn-neon-discord:focus {
    outline: none;
    transform: translateY(-1px) scale(1.02);
    box-shadow: 0 6px 20px rgba(139, 0, 0, 0.4);
  }

  /* Responsive adjustments */
  @media (max-width: 640px) {
    .btn-neon-telegram,
    .btn-neon-discord {
      padding: 14px 24px;
      font-size: 16px;
      min-width: 180px;
    }

    .btn-icon {
      font-size: 20px;
    }
  }
</style>
