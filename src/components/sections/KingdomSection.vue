<template>
  <section
    id="kingdom"
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
      <!-- Section Title -->
      <div class="text-center mb-12 lg:mb-16">
        <h2 class="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-white">
          Join Our Kingdom
        </h2>
        <div
          class="w-32 h-1 mx-auto bg-gradient-to-r from-yellow-500 via-red-600 to-yellow-500 mt-4"
        ></div>
        <p class="text-xl text-gray-300 mt-6 max-w-3xl mx-auto">
          Experience the pinnacle of Rise of Kingdoms with the most elite family
          in the game
        </p>
      </div>

      <!-- Kingdom Hero Banner -->
      <div
        class="bg-black bg-opacity-70 rounded-3xl p-8 lg:p-12 border-2 border-red-800 mb-16 relative overflow-hidden"
      >
        <div
          class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-500 to-red-600"
        ></div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <!-- Kingdom Stats -->
          <div class="text-center lg:text-left">
            <h3
              class="text-3xl sm:text-4xl font-bold mb-6 text-white drop-shadow-lg"
              style="
                text-shadow:
                  0 0 10px rgba(220, 38, 38, 0.5),
                  0 0 20px rgba(220, 38, 38, 0.3);
              "
            >
              The Ultimate Kingdom Experience
            </h3>
            <div class="grid grid-cols-2 gap-6 mb-8">
              <div
                class="bg-red-800/30 rounded-xl p-4 border border-red-700/50"
              >
                <div class="text-3xl font-bold text-yellow-300">#1</div>
                <div class="text-sm text-gray-400">Kingdom Rank</div>
              </div>
              <div
                class="bg-red-800/30 rounded-xl p-4 border border-red-700/50"
              >
                <div class="text-3xl font-bold text-yellow-300">50M+</div>
                <div class="text-sm text-gray-400">Total Power</div>
              </div>
              <div
                class="bg-red-800/30 rounded-xl p-4 border border-red-700/50"
              >
                <div class="text-3xl font-bold text-yellow-300">1000+</div>
                <div class="text-sm text-gray-400">Active Players</div>
              </div>
              <div
                class="bg-red-800/30 rounded-xl p-4 border border-red-700/50"
              >
                <div class="text-3xl font-bold text-yellow-300">24/7</div>
                <div class="text-sm text-gray-400">Active Events</div>
              </div>
            </div>
            <p class="text-lg text-gray-200 leading-relaxed">
              Join the most prestigious kingdom where legends are made.
              Experience non-stop action, strategic warfare, and a community
              that feels like family.
            </p>
          </div>

          <!-- Migration CTA -->
          <div class="text-center">
            <div
              class="bg-gradient-to-br from-yellow-500/20 to-red-600/20 rounded-2xl p-8 border-2 border-yellow-500/50"
            >
              <div class="text-6xl mb-4">🏰</div>
              <h4
                class="text-2xl font-bold bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 bg-clip-text text-transparent mb-4"
                style="text-shadow: 0 0 10px rgba(251, 191, 36, 0.3)"
              >
                Ready to Join the Elite?
              </h4>
              <p class="text-gray-200 mb-6">
                Migrate to Kingdom #1234 and become part of the legendary
                Nocturnal Legacy family
              </p>
              <div class="space-y-3">
                <button
                  class="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-bold py-3 px-6 rounded-lg hover:from-yellow-400 hover:to-yellow-500 transition-all duration-300 transform hover:scale-105"
                >
                  🚀 Start Migration Now
                </button>
                <button
                  class="w-full bg-gradient-to-r from-red-600 to-red-700 text-white font-bold py-3 px-6 rounded-lg hover:from-red-500 hover:to-red-600 transition-all duration-300 transform hover:scale-105"
                >
                  💬 Ask Questions
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Why Migrate Section -->
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
            Why Choose Our Kingdom?
          </h3>
          <p class="text-lg text-gray-300">
            Discover the advantages that make our kingdom the ultimate
            destination for serious players
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            class="bg-gradient-to-br from-red-900/60 to-red-800/60 rounded-2xl p-6 border-2 border-yellow-500/50 text-center group hover:border-yellow-400/70 transition-all duration-300"
          >
            <div class="text-4xl mb-4">⚔️</div>
            <h4
              class="text-xl font-bold bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 bg-clip-text text-transparent mb-3"
              style="text-shadow: 0 0 10px rgba(251, 191, 36, 0.3)"
            >
              Elite Protection
            </h4>
            <p class="text-gray-300 text-sm">
              Your cities are protected by the most skilled defenders in the
              game. Sleep soundly knowing your resources are safe.
            </p>
          </div>

          <div
            class="bg-gradient-to-br from-red-900/60 to-red-800/60 rounded-2xl p-6 border-2 border-yellow-500/50 text-center group hover:border-yellow-400/70 transition-all duration-300"
          >
            <div class="text-4xl mb-4">🎯</div>
            <h4
              class="text-xl font-bold bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 bg-clip-text text-transparent mb-3"
              style="text-shadow: 0 0 10px rgba(251, 191, 36, 0.3)"
            >
              Strategic Warfare
            </h4>
            <p class="text-gray-300 text-sm">
              Learn from battle-tested commanders and participate in coordinated
              attacks that dominate the battlefield.
            </p>
          </div>

          <div
            class="bg-gradient-to-br from-red-900/60 to-red-800/60 rounded-2xl p-6 border-2 border-yellow-500/50 text-center group hover:border-yellow-400/70 transition-all duration-300"
          >
            <div class="text-4xl mb-4">💰</div>
            <h4
              class="text-xl font-bold bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 bg-clip-text text-transparent mb-3"
              style="text-shadow: 0 0 10px rgba(251, 191, 36, 0.3)"
            >
              Resource Abundance
            </h4>
            <p class="text-gray-300 text-sm">
              Access to the richest territories and resource nodes. Grow faster
              than ever before.
            </p>
          </div>

          <div
            class="bg-gradient-to-br from-red-900/60 to-red-800/60 rounded-2xl p-6 border-2 border-yellow-500/50 text-center group hover:border-yellow-400/70 transition-all duration-300"
          >
            <div class="text-4xl mb-4">🏆</div>
            <h4
              class="text-xl font-bold bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 bg-clip-text text-transparent mb-3"
              style="text-shadow: 0 0 10px rgba(251, 191, 36, 0.3)"
            >
              Constant Victories
            </h4>
            <p class="text-gray-300 text-sm">
              Join a kingdom that consistently wins wars and events. Be part of
              a winning tradition.
            </p>
          </div>

          <div
            class="bg-gradient-to-br from-red-900/60 to-red-800/60 rounded-2xl p-6 border-2 border-yellow-500/50 text-center group hover:border-yellow-400/70 transition-all duration-300"
          >
            <div class="text-4xl mb-4">👥</div>
            <h4
              class="text-xl font-bold bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 bg-clip-text text-transparent mb-3"
              style="text-shadow: 0 0 10px rgba(251, 191, 36, 0.3)"
            >
              Active Community
            </h4>
            <p class="text-gray-300 text-sm">
              Join our vibrant Discord community with 24/7 activity, events, and
              friendly members.
            </p>
          </div>

          <div
            class="bg-gradient-to-br from-red-900/60 to-red-800/60 rounded-2xl p-6 border-2 border-yellow-500/50 text-center group hover:border-yellow-400/70 transition-all duration-300"
          >
            <div class="text-4xl mb-4">🎮</div>
            <h4
              class="text-xl font-bold bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 bg-clip-text text-transparent mb-3"
              style="text-shadow: 0 0 10px rgba(251, 191, 36, 0.3)"
            >
              Training & Support
            </h4>
            <p class="text-gray-300 text-sm">
              Get personalized training from experienced players and access to
              exclusive strategies.
            </p>
          </div>
        </div>
      </div>

      <!-- Kingdom Leadership -->
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
            Kingdom Leadership
          </h3>
          <p class="text-lg text-gray-300">
            Meet the rulers who guide our kingdom to greatness
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <!-- King -->
          <div
            class="bg-gradient-to-br from-yellow-500/20 to-yellow-600/20 rounded-2xl p-8 border-2 border-yellow-500/50 text-center group hover:border-yellow-400/70 transition-all duration-300"
          >
            <div
              class="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-2xl"
            >
              <span class="text-white text-4xl">👑</span>
            </div>
            <h4
              class="text-3xl font-bold bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 bg-clip-text text-transparent mb-3"
              style="text-shadow: 0 0 10px rgba(251, 191, 36, 0.3)"
            >
              King Alexander
            </h4>
            <p class="text-lg text-gray-300 mb-4">
              Supreme Ruler of Kingdom #1234
            </p>
            <div class="text-sm text-gray-400 mb-2">Power: 85M+</div>
            <div class="text-sm text-gray-400 mb-4">Experience: 3+ Years</div>
            <p class="text-gray-200 text-sm leading-relaxed">
              A legendary commander who has led our kingdom to countless
              victories. Known for his strategic brilliance and fair leadership.
            </p>
          </div>

          <!-- Queen -->
          <div
            class="bg-gradient-to-br from-red-500/20 to-red-600/20 rounded-2xl p-8 border-2 border-red-500/50 text-center group hover:border-red-400/70 transition-all duration-300"
          >
            <div
              class="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-2xl"
            >
              <span class="text-white text-4xl">👸</span>
            </div>
            <h4
              class="text-3xl font-bold bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 bg-clip-text text-transparent mb-3"
              style="text-shadow: 0 0 10px rgba(251, 191, 36, 0.3)"
            >
              Queen Isabella
            </h4>
            <p class="text-lg text-gray-300 mb-4">Royal Consort & Diplomat</p>
            <div class="text-sm text-gray-400 mb-2">Power: 72M+</div>
            <div class="text-sm text-gray-400 mb-4">Experience: 2+ Years</div>
            <p class="text-gray-200 text-sm leading-relaxed">
              Master diplomat who maintains peace between alliances and ensures
              the kingdom's prosperity through strategic partnerships.
            </p>
          </div>
        </div>

        <!-- Royal Council -->
        <div class="text-center mt-12">
          <h4
            class="text-2xl font-bold bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 bg-clip-text text-transparent mb-8"
            style="text-shadow: 0 0 10px rgba(251, 191, 36, 0.3)"
          >
            Royal Council
          </h4>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div
              class="bg-gradient-to-br from-red-900/60 to-red-800/60 rounded-xl p-6 border border-red-700/50"
            >
              <div class="text-2xl mb-3">⚖️</div>
              <h5
                class="text-lg font-bold bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 bg-clip-text text-transparent mb-2"
                style="text-shadow: 0 0 10px rgba(251, 191, 36, 0.3)"
              >
                Lord Chancellor
              </h5>
              <p class="text-gray-200 text-sm">Sir Marcus</p>
            </div>
            <div
              class="bg-gradient-to-br from-red-900/60 to-red-800/60 rounded-xl p-6 border border-red-700/50"
            >
              <div class="text-2xl mb-3">⚔️</div>
              <h5
                class="text-lg font-bold bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 bg-clip-text text-transparent mb-2"
                style="text-shadow: 0 0 10px rgba(251, 191, 36, 0.3)"
              >
                War Minister
              </h5>
              <p class="text-gray-200 text-sm">General Darius</p>
            </div>
            <div
              class="bg-gradient-to-br from-red-900/60 to-red-800/60 rounded-xl p-6 border border-red-700/50"
            >
              <div class="text-2xl mb-3">💰</div>
              <h5
                class="text-lg font-bold bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 bg-clip-text text-transparent mb-2"
                style="text-shadow: 0 0 10px rgba(251, 191, 36, 0.3)"
              >
                Treasurer
              </h5>
              <p class="text-gray-200 text-sm">Lady Victoria</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Kingdom Achievements -->
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
            Kingdom Achievements
          </h3>
          <p class="text-lg text-gray-300">
            Proof of our kingdom's dominance and success
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            class="bg-gradient-to-br from-red-900/60 to-red-800/60 rounded-2xl p-6 border-2 border-yellow-500/50 text-center group hover:border-yellow-400/70 transition-all duration-300"
          >
            <div class="text-4xl mb-4">🏆</div>
            <h4
              class="text-xl font-bold bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 bg-clip-text text-transparent mb-3"
              style="text-shadow: 0 0 10px rgba(251, 191, 36, 0.3)"
            >
              #1 Kingdom
            </h4>
            <p class="text-gray-200 text-sm">
              Consistently ranked as the top kingdom in our server cluster
            </p>
          </div>

          <div
            class="bg-gradient-to-br from-red-900/60 to-red-800/60 rounded-2xl p-6 border-2 border-yellow-500/50 text-center group hover:border-yellow-400/70 transition-all duration-300"
          >
            <div class="text-4xl mb-4">⚔️</div>
            <h4
              class="text-xl font-bold bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 bg-clip-text text-transparent mb-3"
              style="text-shadow: 0 0 10px rgba(251, 191, 36, 0.3)"
            >
              War Champions
            </h4>
            <p class="text-gray-200 text-sm">
              Winners of 15+ consecutive kingdom wars and events
            </p>
          </div>

          <div
            class="bg-gradient-to-br from-red-900/60 to-red-800/60 rounded-2xl p-6 border-2 border-yellow-500/50 text-center group hover:border-yellow-400/70 transition-all duration-300"
          >
            <div class="text-4xl mb-4">🏆</div>
            <h4
              class="text-xl font-bold bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 bg-clip-text text-transparent mb-3"
              style="text-shadow: 0 0 10px rgba(251, 191, 36, 0.3)"
            >
              Event Masters
            </h4>
            <p class="text-gray-200 text-sm">
              Dominant performance in all kingdom events and competitions
            </p>
          </div>

          <div
            class="bg-gradient-to-br from-red-900/60 to-red-800/60 rounded-2xl p-6 border-2 border-yellow-500/50 text-center group hover:border-yellow-400/70 transition-all duration-300"
          >
            <div class="text-4xl mb-4">🤝</div>
            <h4
              class="text-xl font-bold bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 bg-clip-text text-transparent mb-3"
              style="text-shadow: 0 0 10px rgba(251, 191, 36, 0.3)"
            >
              Alliance Unity
            </h4>
            <p class="text-gray-200 text-sm">
              Perfect coordination between all alliances in the kingdom
            </p>
          </div>

          <div
            class="bg-gradient-to-br from-red-900/60 to-red-800/60 rounded-2xl p-6 border-2 border-yellow-500/50 text-center group hover:border-yellow-400/70 transition-all duration-300"
          >
            <div class="text-4xl mb-4">📈</div>
            <h4
              class="text-xl font-bold bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 bg-clip-text text-transparent mb-3"
              style="text-shadow: 0 0 10px rgba(251, 191, 36, 0.3)"
            >
              Rapid Growth
            </h4>
            <p class="text-gray-200 text-sm">
              Fastest growing kingdom with 200+ new members monthly
            </p>
          </div>

          <div
            class="bg-gradient-to-br from-red-900/60 to-red-800/60 rounded-2xl p-6 border-2 border-yellow-500/50 text-center group hover:border-yellow-400/70 transition-all duration-300"
          >
            <div class="text-4xl mb-4">⭐</div>
            <h4
              class="text-xl font-bold bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 bg-clip-text text-transparent mb-3"
              style="text-shadow: 0 0 10px rgba(251, 191, 36, 0.3)"
            >
              Community Excellence
            </h4>
            <p class="text-gray-200 text-sm">
              Award-winning community with 24/7 support and events
            </p>
          </div>
        </div>
      </div>

      <!-- Migration Guide -->
      <div
        class="bg-black bg-opacity-70 rounded-3xl p-8 lg:p-12 border-2 border-red-800"
      >
        <div class="text-center mb-12">
          <h3
            class="text-white drop-shadow-lg font-bold mb-4 text-3xl sm:text-4xl"
            style="
              text-shadow:
                0 0 10px rgba(220, 38, 38, 0.5),
                0 0 20px rgba(220, 38, 38, 0.3);
            "
          >
            How to Join Our Kingdom
          </h3>
          <p class="text-lg text-gray-300">
            Follow these simple steps to become part of the legendary Nocturnal
            Legacy family
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div class="text-center">
            <div
              class="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center text-2xl font-bold text-white"
            >
              1
            </div>
            <h4
              class="text-xl font-bold bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 bg-clip-text text-transparent mb-3"
              style="text-shadow: 0 0 10px rgba(251, 191, 36, 0.3)"
            >
              Contact Us
            </h4>
            <p class="text-gray-200 text-sm">
              Get in touch with our leadership team for questions and guidance
            </p>
          </div>

          <div class="text-center">
            <div
              class="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center text-2xl font-bold text-white"
            >
              2
            </div>
            <h4
              class="text-xl font-bold bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 bg-clip-text text-transparent mb-3"
              style="text-shadow: 0 0 10px rgba(251, 191, 36, 0.3)"
            >
              Kingdom Details
            </h4>
            <p class="text-gray-200 text-sm">
              Learn more about our kingdom's history, achievements, and culture
            </p>
          </div>

          <div class="text-center">
            <div
              class="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center text-2xl font-bold text-white"
            >
              3
            </div>
            <h4
              class="text-xl font-bold bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 bg-clip-text text-transparent mb-3"
              style="text-shadow: 0 0 10px rgba(251, 191, 36, 0.3)"
            >
              Migrate
            </h4>
            <p class="text-gray-200 text-sm">
              Step-by-step guide to migrate to our kingdom safely and
              efficiently
            </p>
          </div>

          <div class="text-center">
            <div
              class="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center text-2xl font-bold text-white"
            >
              4
            </div>
            <h4
              class="text-xl font-bold bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 bg-clip-text text-transparent mb-3"
              style="text-shadow: 0 0 10px rgba(251, 191, 36, 0.3)"
            >
              Join Alliance
            </h4>
            <p class="text-gray-200 text-sm">
              Apply to join one of our elite alliances and start your journey
            </p>
          </div>
        </div>

        <!-- Final CTA -->
        <div class="text-center mt-12">
          <h4
            class="text-2xl font-bold bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 bg-clip-text text-transparent mb-6"
            style="text-shadow: 0 0 10px rgba(251, 191, 36, 0.3)"
          >
            Ready to Join?
          </h4>
          <div
            class="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
          >
            <button
              class="bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-bold py-4 px-8 rounded-lg hover:from-yellow-400 hover:to-yellow-500 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
            >
              <span>💬</span>
              <span>Join Discord</span>
            </button>
            <button
              class="bg-gradient-to-r from-red-600 to-red-700 text-white font-bold py-4 px-8 rounded-lg hover:from-red-500 hover:to-red-600 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
            >
              <span>📱</span>
              <span>Join Telegram</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  // No additional logic needed for this section
</script>

<style scoped>
  /* Custom animations and effects */
  .group:hover .group-hover\:scale-110 {
    transform: scale(1.1);
  }

  .group:hover .group-hover\:scale-105 {
    transform: scale(1.05);
  }
</style>
