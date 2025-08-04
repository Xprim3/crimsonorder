<template>
  <div class="migration-page">
    <!-- Hero Section - Attractive Intro -->
    <section class="hero-section relative overflow-hidden">
      <!-- Background Layer - Same as Home page -->
      <div class="absolute inset-0 z-0">
        <!-- Background Image -->
        <div class="absolute inset-0 bg-gradient-to-br from-gray-900 via-red-900 to-gray-800">
          <!-- Fire particles - same as Home page -->
          <div class="absolute inset-0 overflow-hidden">
            <div
              v-for="i in 10"
              :key="i"
              class="fire-particle absolute w-2 h-2 bg-orange-500 rounded-full opacity-60"
              :style="{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`,
              }"
              aria-hidden="true"
            ></div>
          </div>

          <!-- Crimson banners overlay - same as Home page -->
          <div class="absolute top-0 left-0 w-full h-full opacity-20" aria-hidden="true">
            <div class="absolute top-10 left-10 w-32 h-48 bg-gradient-to-b from-red-800 to-red-600 transform -rotate-12"></div>
            <div class="absolute top-20 right-20 w-24 h-36 bg-gradient-to-b from-red-700 to-red-500 transform rotate-6"></div>
            <div class="absolute bottom-20 left-1/4 w-28 h-40 bg-gradient-to-b from-red-800 to-red-600 transform -rotate-3"></div>
          </div>
        </div>

        <!-- Dark overlay for text readability - same as Home page -->
        <div class="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>
      
      <div class="container mx-auto px-4 py-20 relative z-10">
        <div class="max-w-[1152px] mx-auto text-center">

          
          <!-- Main Title -->
          <h1 class="text-6xl md:text-8xl lg:text-9xl font-black mb-8 leading-tight font-orbitron">
            <span class="bg-gradient-to-r from-gold-400 via-crimson-500 to-gold-400 bg-clip-text text-transparent animate-glow">
              CRIMSON
            </span>
            <br>
            <span class="bg-gradient-to-r from-crimson-400 via-gold-400 to-crimson-400 bg-clip-text text-transparent animate-glow delay-1000">
              FAMILY
            </span>
          </h1>
          
          <!-- Hero Description -->
          <p class="text-2xl md:text-3xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed font-inter">
            Join the Elite Brotherhood. 
            <span class="text-gold-400 font-bold">Where champions unite.</span>
            <br>
            <span class="text-crimson-400 font-semibold">One family, one destiny.</span>
          </p>
          
          <!-- Enhanced Family Stats Banner -->
          <div class="bg-gradient-to-r from-black/60 to-gray-900/60 rounded-2xl p-8 backdrop-blur-sm border-2 border-gold-500/30 shadow-2xl">
            <div class="text-center mb-6">
              <h3 class="text-xl font-bold text-gold-400 font-orbitron mb-2">CRIMSON FAMILY STATS</h3>
              <div class="w-24 h-1 bg-gradient-to-r from-gold-500 to-crimson-600 mx-auto rounded-full"></div>
            </div>
            <div class="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
              <div class="stat-item">
                <div class="stat-icon">👥</div>
                <div class="stat-number text-gold-400 font-orbitron">1,440</div>
                <div class="stat-label">Family Members</div>
                <div class="stat-subtitle">Across All Alliances</div>
              </div>
              <div class="stat-item">
                <div class="stat-icon">⚔️</div>
                <div class="stat-number text-crimson-400 font-orbitron">4</div>
                <div class="stat-label">Alliances</div>
                <div class="stat-subtitle">Crimson Family</div>
              </div>
              <div class="stat-item">
                <div class="stat-icon">👑</div>
                <div class="stat-number text-blue-400 font-orbitron">#3866</div>
                <div class="stat-label">Kingdom</div>
                <div class="stat-subtitle">Elite Ranking</div>
              </div>
              <div class="stat-item">
                <div class="stat-icon">💪</div>
                <div class="stat-number text-green-400 font-orbitron">15.2B</div>
                <div class="stat-label">Total Power</div>
                <div class="stat-subtitle">Combined Strength</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Kingdom Stats -->
    <section class="kingdom-section py-16 bg-gradient-to-r from-gray-900/80 via-red-900/60 to-gray-800/80">
      <div class="container mx-auto px-4">
        <div class="max-w-[1152px] mx-auto">
          <div class="text-center mb-12 lg:mb-16">
            <h2 class="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-white">
              KINGDOM STATS
            </h2>
            <div class="w-32 h-1 mx-auto bg-gradient-to-r from-yellow-500 via-red-600 to-yellow-500 mt-4"></div>
            <p class="text-xl text-gray-300 max-w-3xl mx-auto font-inter mt-6">
              Meet the legendary leaders who rule our kingdom
            </p>
          </div>
          
          <!-- Kingdom Pyramid -->
          <div class="kingdom-pyramid">
            <!-- Pyramid Background -->
            <div class="pyramid-background">
              <div class="pyramid-layer layer-1"></div>
              <div class="pyramid-layer layer-2"></div>
              <div class="pyramid-layer layer-3"></div>
              <div class="pyramid-layer layer-4"></div>
            </div>
            
            <!-- Top Tier: Royalty (Crown) -->
            <div class="pyramid-tier royal-tier">
              <div class="tier-label">ROYAL COMMAND</div>
              <div class="tier-cards">
                <!-- King -->
                <div class="pyramid-card royal-card">
                  <div class="card-rank">👑</div>
                  <div class="card-avatar">👑</div>
                  <div class="card-info">
                    <h3 class="card-name">King Crimson</h3>
                    <div class="card-title">Supreme Commander</div>
                    <div class="card-power">2.8B Power</div>
                    <div class="card-quote">"Through unity and strategy, we forge legends."</div>
                  </div>
                </div>
                
                <!-- Queen -->
                <div class="pyramid-card royal-card">
                  <div class="card-rank">👸</div>
                  <div class="card-avatar">👸</div>
                  <div class="card-info">
                    <h3 class="card-name">Queen Crimson</h3>
                    <div class="card-title">Royal Commander</div>
                    <div class="card-power">2.1B Power</div>
                    <div class="card-quote">"Strength and grace define our legacy."</div>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Middle Tier: Leadership -->
            <div class="pyramid-tier leadership-tier">
              <div class="tier-label">KINGDOM LEADERSHIP</div>
              <div class="tier-cards">
                <!-- Warlord -->
                <div class="pyramid-card leadership-card warlord-card">
                  <div class="card-rank">⚔️</div>
                  <div class="card-avatar">⚔️</div>
                  <div class="card-info">
                    <h3 class="card-name">Warlord</h3>
                    <div class="card-title">Battle Master</div>
                    <div class="card-power">1.9B Power</div>
                    <div class="card-quote">"Victory is our only option."</div>
                  </div>
                </div>
                
                <!-- Counselor -->
                <div class="pyramid-card leadership-card counselor-card">
                  <div class="card-rank">🧠</div>
                  <div class="card-avatar">🧠</div>
                  <div class="card-info">
                    <h3 class="card-name">Counselor</h3>
                    <div class="card-title">Strategic Advisor</div>
                    <div class="card-power">1.7B Power</div>
                    <div class="card-quote">"Wisdom guides our path to victory."</div>
                  </div>
                </div>
                
                <!-- Diplomat -->
                <div class="pyramid-card leadership-card diplomat-card">
                  <div class="card-rank">🤝</div>
                  <div class="card-avatar">🤝</div>
                  <div class="card-info">
                    <h3 class="card-name">Diplomat</h3>
                    <div class="card-title">Alliance Manager</div>
                    <div class="card-power">1.5B Power</div>
                    <div class="card-quote">"Unity through diplomacy."</div>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Base Tier: Commanders -->
            <div class="pyramid-tier commander-tier">
              <div class="tier-label">ALLIANCE COMMANDERS</div>
              <div class="tier-cards">
                <!-- Top 1 - Flame -->
                <div class="pyramid-card commander-card">
                  <div class="card-rank">#1</div>
                  <div class="card-avatar">🔥</div>
                  <div class="card-info">
                    <h3 class="card-name">Flame</h3>
                    <div class="card-title">Elite Commander</div>
                    <div class="card-power">1.9B Power</div>
                    <div class="card-quote">"Fire and fury lead to victory."</div>
                  </div>
                </div>
                
                <!-- Top 2 - Pryda -->
                <div class="pyramid-card commander-card">
                  <div class="card-rank">#2</div>
                  <div class="card-avatar">⚡</div>
                  <div class="card-info">
                    <h3 class="card-name">Pryda</h3>
                    <div class="card-title">Strategic Commander</div>
                    <div class="card-power">1.7B Power</div>
                    <div class="card-quote">"Strategy wins battles, unity wins wars."</div>
                  </div>
                </div>
                
                <!-- Top 3 - Kenny -->
                <div class="pyramid-card commander-card">
                  <div class="card-rank">#3</div>
                  <div class="card-avatar">🌙</div>
                  <div class="card-info">
                    <h3 class="card-name">Kenny</h3>
                    <div class="card-title">Battle Commander</div>
                    <div class="card-power">1.5B Power</div>
                    <div class="card-quote">"In darkness, we find our strength."</div>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Foundation: Kingdom Stats -->
            <div class="pyramid-foundation">
              <div class="foundation-label">KINGDOM FOUNDATION</div>
              <div class="foundation-stats">
                <div class="stat-item">
                  <span class="stat-icon">🏰</span>
                  <span class="stat-label">Kingdom #3866</span>
                  <span class="stat-value">Elite Ranking</span>
                </div>
                <div class="stat-item">
                  <span class="stat-icon">💪</span>
                  <span class="stat-label">Total Power</span>
                  <span class="stat-value">15.2B</span>
                </div>
                <div class="stat-item">
                  <span class="stat-icon">🏆</span>
                  <span class="stat-label">Victories</span>
                  <span class="stat-value">67</span>
                </div>
                <div class="stat-item">
                  <span class="stat-icon">⚔️</span>
                  <span class="stat-label">Alliances</span>
                  <span class="stat-value">4</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Crimson Family Alliances -->
    <section class="alliances-section py-16">
      <div class="container mx-auto px-4">
        <div class="max-w-[1152px] mx-auto">
          <div class="text-center mb-12 lg:mb-16">
            <h2 class="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-white">
              CRIMSON FAMILY
            </h2>
            <div class="w-32 h-1 mx-auto bg-gradient-to-r from-yellow-500 via-red-600 to-yellow-500 mt-4"></div>
            <p class="text-xl text-gray-300 max-w-3xl mx-auto font-inter mt-6">
              Choose your path within our legendary alliance family
            </p>
          </div>
          
          <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <!-- Main Alliance -->
            <div class="alliance-card main-alliance">
              <div class="alliance-icon">🔥</div>
              <h3 class="text-2xl font-bold text-gold-400 mb-3 font-orbitron">Crimson Division</h3>
              <p class="text-gray-300 mb-4 font-inter">The elite core of our family. Top-tier players with unmatched coordination.</p>
              <div class="alliance-stats">
                <div class="stat">Power: 8.5B</div>
                <div class="stat">Members: 450</div>
                <div class="stat">Status: Elite</div>
              </div>
              <div class="alliance-badge">MAIN ALLIANCE</div>
            </div>
            
            <!-- Sub Alliances -->
            <div class="alliance-card">
              <div class="alliance-icon">⚡</div>
              <h3 class="text-2xl font-bold text-crimson-400 mb-3 font-orbitron">Crimson Rising</h3>
              <p class="text-gray-300 mb-4 font-inter">Rising stars and ambitious players. Perfect for growing warriors.</p>
              <div class="alliance-stats">
                <div class="stat">Power: 3.2B</div>
                <div class="stat">Members: 380</div>
                <div class="stat">Status: Active</div>
              </div>
            </div>
            
            <div class="alliance-card">
              <div class="alliance-icon">🌙</div>
              <h3 class="text-2xl font-bold text-crimson-400 mb-3 font-orbitron">Crimson Wanders</h3>
              <p class="text-gray-300 mb-4 font-inter">Strategic players and tactical experts. Masters of the battlefield.</p>
              <div class="alliance-stats">
                <div class="stat">Power: 2.8B</div>
                <div class="stat">Members: 320</div>
                <div class="stat">Status: Strategic</div>
              </div>
            </div>
            
            <div class="alliance-card">
              <div class="alliance-icon">❄️</div>
              <h3 class="text-2xl font-bold text-crimson-400 mb-3 font-orbitron">Crimson Blizzards</h3>
              <p class="text-gray-300 mb-4 font-inter">Fierce warriors and battle-hardened veterans. Unstoppable force.</p>
              <div class="alliance-stats">
                <div class="stat">Power: 2.7B</div>
                <div class="stat">Members: 290</div>
                <div class="stat">Status: Fierce</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Benefits & Rules -->
    <section class="benefits-section py-16 bg-gradient-to-r from-gray-900/60 via-red-900/40 to-gray-800/60">
      <div class="container mx-auto px-4">
        <div class="max-w-[1152px] mx-auto">
          <div class="text-center mb-12 lg:mb-16">
            <h2 class="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-white">
              BENEFITS & RULES
            </h2>
            <div class="w-32 h-1 mx-auto bg-gradient-to-r from-yellow-500 via-red-600 to-yellow-500 mt-4"></div>
            <p class="text-xl text-gray-300 max-w-3xl mx-auto font-inter mt-6">
              Discover what makes Nocturnal Legacy the ultimate destination for elite players
            </p>
          </div>
          
          <div class="grid lg:grid-cols-2 gap-12">
            <!-- Benefits -->
            <div class="benefits-content">
              <h3 class="text-3xl font-bold text-gold-400 mb-8 font-orbitron">🎯 ALLIANCE BENEFITS</h3>
              <div class="space-y-6">
                <div class="benefit-item">
                  <div class="benefit-icon">👑</div>
                  <div class="benefit-content">
                    <h4 class="text-xl font-bold text-gold-400 mb-2 font-orbitron">Elite Status</h4>
                    <p class="text-gray-300 font-inter">Join the top 1% of players. Our kingdom is ranked among the most prestigious in the game.</p>
                  </div>
                </div>
                
                <div class="benefit-item">
                  <div class="benefit-icon">⚔️</div>
                  <div class="benefit-content">
                    <h4 class="text-xl font-bold text-gold-400 mb-2 font-orbitron">Strategic Excellence</h4>
                    <p class="text-gray-300 font-inter">Proven battle strategies and coordination that have led us to countless victories.</p>
                  </div>
                </div>
                
                <div class="benefit-item">
                  <div class="benefit-icon">🏆</div>
                  <div class="benefit-content">
                    <h4 class="text-xl font-bold text-gold-400 mb-2 font-orbitron">Championship Wins</h4>
                    <p class="text-gray-300 font-inter">Multiple kingdom championships and alliance victories under our belt.</p>
                  </div>
                </div>
                
                <div class="benefit-item">
                  <div class="benefit-icon">🤝</div>
                  <div class="benefit-content">
                    <h4 class="text-xl font-bold text-gold-400 mb-2 font-orbitron">Strong Community</h4>
                    <p class="text-gray-300 font-inter">Active Discord community with 24/7 support and mentorship programs.</p>
                  </div>
                </div>
                
                <div class="benefit-item">
                  <div class="benefit-icon">💰</div>
                  <div class="benefit-content">
                    <h4 class="text-xl font-bold text-gold-400 mb-2 font-orbitron">Exclusive Rewards</h4>
                    <p class="text-gray-300 font-inter">Special events, giveaways, and exclusive rewards for our members.</p>
                  </div>
                </div>
                
                <div class="benefit-item">
                  <div class="benefit-icon">🚀</div>
                  <div class="benefit-content">
                    <h4 class="text-xl font-bold text-gold-400 mb-2 font-orbitron">Fast Growth</h4>
                    <p class="text-gray-300 font-inter">Accelerated progression with our proven strategies and support system.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Rules -->
            <div class="rules-content">
              <h3 class="text-3xl font-bold text-crimson-400 mb-8 font-orbitron">📋 KINGDOM RULES</h3>
              <div class="space-y-6">
                <div class="rule-item">
                  <div class="rule-number">01</div>
                  <div class="rule-content">
                    <h4 class="text-xl font-bold text-crimson-400 mb-2 font-orbitron">Activity Requirements</h4>
                    <p class="text-gray-300 font-inter">Minimum 3-5 hours daily activity. Participate in all alliance events and wars.</p>
                  </div>
                </div>
                
                <div class="rule-item">
                  <div class="rule-number">02</div>
                  <div class="rule-content">
                    <h4 class="text-xl font-bold text-crimson-400 mb-2 font-orbitron">Power Requirements</h4>
                    <p class="text-gray-300 font-inter">Minimum 50M power for main alliance. 30M+ for sub-alliances.</p>
                  </div>
                </div>
                
                <div class="rule-item">
                  <div class="rule-number">03</div>
                  <div class="rule-content">
                    <h4 class="text-xl font-bold text-crimson-400 mb-2 font-orbitron">Communication</h4>
                    <p class="text-gray-300 font-inter">Must join Discord and follow leadership instructions during events.</p>
                  </div>
                </div>
                
                <div class="rule-item">
                  <div class="rule-number">04</div>
                  <div class="rule-content">
                    <h4 class="text-xl font-bold text-crimson-400 mb-2 font-orbitron">Loyalty</h4>
                    <p class="text-gray-300 font-inter">No switching alliances without permission. Loyalty to the Crimson Family.</p>
                  </div>
                </div>
                
                <div class="rule-item">
                  <div class="rule-number">05</div>
                  <div class="rule-content">
                    <h4 class="text-xl font-bold text-crimson-400 mb-2 font-orbitron">Respect</h4>
                    <p class="text-gray-300 font-inter">Respect all members and leadership. No toxic behavior or harassment.</p>
                  </div>
                </div>
                
                <div class="rule-item">
                  <div class="rule-number">06</div>
                  <div class="rule-content">
                    <h4 class="text-xl font-bold text-crimson-400 mb-2 font-orbitron">Growth</h4>
                    <p class="text-gray-300 font-inter">Continuous power growth required. Regular check-ins with leadership.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Eligibility Checker -->
    <section class="eligibility-section py-16 bg-gradient-to-r from-gray-900/80 via-red-900/60 to-gray-800/80">
      <div class="container mx-auto px-4">
        <div class="max-w-[1152px] mx-auto">
          <div class="text-center mb-12 lg:mb-16">
            <h2 class="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-white">
              ELIGIBILITY CHECK
            </h2>
            <div class="w-32 h-1 mx-auto bg-gradient-to-r from-yellow-500 via-red-600 to-yellow-500 mt-4"></div>
            <p class="text-xl text-gray-300 max-w-3xl mx-auto font-inter mt-6">
              See if you qualify to join the Crimson Family
            </p>
          </div>
          
          <div class="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-8 border-2 border-gold-500/30 backdrop-blur-sm">
            <div class="grid md:grid-cols-2 gap-8">
              <div>
                <label class="block text-gold-400 font-bold mb-3 font-orbitron">Current Power Level</label>
                <select v-model="migrationData.powerLevel" class="w-full p-4 bg-gray-800/50 border border-gold-500/30 rounded-lg text-white focus:border-gold-400 focus:outline-none">
                  <option value="">Select Power Level</option>
                  <option value="0-10M">0-10M Power</option>
                  <option value="10M-30M">10M-30M Power</option>
                  <option value="30M-50M">30M-50M Power</option>
                  <option value="50M-100M">50M-100M Power</option>
                  <option value="100M+">100M+ Power</option>
                </select>
              </div>
              
              <div>
                <label class="block text-gold-400 font-bold mb-3 font-orbitron">Activity Level</label>
                <select v-model="migrationData.activityLevel" class="w-full p-4 bg-gray-800/50 border border-gold-500/30 rounded-lg text-white focus:border-gold-400 focus:outline-none">
                  <option value="">Select Activity Level</option>
                  <option value="casual">Casual (1-2 hours/day)</option>
                  <option value="active">Active (3-5 hours/day)</option>
                  <option value="hardcore">Hardcore (6+ hours/day)</option>
                </select>
              </div>
            </div>
            
            <div class="mt-8 text-center">
              <button @click="checkEligibility" class="px-8 py-4 bg-gradient-to-r from-crimson-600 to-crimson-700 text-white font-bold rounded-lg hover:from-crimson-500 hover:to-crimson-600 transition-all duration-300 transform hover:scale-105 font-orbitron">
                CHECK ELIGIBILITY
              </button>
            </div>
            
            <!-- Results Display -->
            <div v-if="eligibilityResult" class="mt-8 p-6 rounded-xl" :class="eligibilityResult.eligible ? 'bg-green-900/30 border-green-500/30' : 'bg-red-900/30 border-red-500/30'">
              <div class="text-center">
                <div class="text-2xl font-bold mb-2" :class="eligibilityResult.eligible ? 'text-green-400' : 'text-red-400'">
                  {{ eligibilityResult.eligible ? '✅ ELIGIBLE FOR MIGRATION!' : '❌ NOT ELIGIBLE YET' }}
                </div>
                <p class="text-gray-300 mb-4">{{ eligibilityResult.message }}</p>
                <div v-if="eligibilityResult.eligible" class="space-y-2 text-sm text-gray-300">
                  <div>🎯 Recommended Alliance: {{ eligibilityResult.alliance }}</div>
                  <div>⚡ Expected Benefits: {{ eligibilityResult.benefits }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Form -->
    <section class="contact-section py-16">
      <div class="container mx-auto px-4">
        <div class="max-w-[1152px] mx-auto">
          <div class="text-center mb-12 lg:mb-16">
            <h2 class="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-white">
              JOIN THE FAMILY
            </h2>
            <div class="w-32 h-1 mx-auto bg-gradient-to-r from-yellow-500 via-red-600 to-yellow-500 mt-4"></div>
            <p class="text-xl text-gray-300 max-w-3xl mx-auto font-inter mt-6">
              Ready to become part of the Crimson Family? Contact us through your preferred platform.
            </p>
          </div>
          
          <div class="grid md:grid-cols-2 gap-8">
            <!-- Discord -->
            <div class="contact-card discord-card">
              <div class="contact-icon">💬</div>
              <h3 class="text-2xl font-bold text-indigo-400 mb-4 font-orbitron">Discord</h3>
              <p class="text-gray-300 mb-6 font-inter">Join our Discord community for instant communication, strategy discussions, and 24/7 support.</p>
              <a href="https://discord.gg/xsgPQJ5ZJS" target="_blank" class="contact-btn discord-btn">
                <span class="font-orbitron">JOIN DISCORD</span>
              </a>
            </div>
            
            <!-- Telegram -->
            <div class="contact-card telegram-card">
              <div class="contact-icon">📱</div>
              <h3 class="text-2xl font-bold text-blue-400 mb-4 font-orbitron">Telegram</h3>
              <p class="text-gray-300 mb-6 font-inter">Connect via Telegram for quick updates, announcements, and direct messaging with leadership.</p>
              <a href="https://t.me/+7ROpqc4W1eQ5MDYy" target="_blank" class="contact-btn telegram-btn">
                <span class="font-orbitron">JOIN TELEGRAM</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Top Members Stats -->
    <section class="top-members-section py-16 bg-gradient-to-r from-gray-900/60 via-red-900/40 to-gray-800/60">
      <div class="container mx-auto px-4">
        <div class="max-w-[1152px] mx-auto">
          <div class="text-center mb-12 lg:mb-16">
            <h2 class="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-white">
              TOP MEMBERS
            </h2>
            <div class="w-32 h-1 mx-auto bg-gradient-to-r from-yellow-500 via-red-600 to-yellow-500 mt-4"></div>
            <p class="text-xl text-gray-300 max-w-3xl mx-auto font-inter mt-6">
              Meet the legendary players who lead our kingdom to victory
            </p>
          </div>
          
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div class="member-card">
              <div class="member-rank">#1</div>
              <div class="member-avatar">👑</div>
              <div class="member-info">
                <h3 class="text-xl font-bold text-gold-400 font-orbitron">King Crimson</h3>
                <div class="member-power text-crimson-400 font-orbitron">2.8B Power</div>
                <div class="member-alliance text-gray-300 font-inter">Crimson Division</div>
              </div>
            </div>
            
            <div class="member-card">
              <div class="member-rank">#2</div>
              <div class="member-avatar">⚔️</div>
              <div class="member-info">
                <h3 class="text-xl font-bold text-gold-400 font-orbitron">ShadowKnight</h3>
                <div class="member-power text-crimson-400 font-orbitron">1.9B Power</div>
                <div class="member-alliance text-gray-300 font-inter">Crimson Division</div>
              </div>
            </div>
            
            <div class="member-card">
              <div class="member-rank">#3</div>
              <div class="member-avatar">🏆</div>
              <div class="member-info">
                <h3 class="text-xl font-bold text-gold-400 font-orbitron">CrimsonQueen</h3>
                <div class="member-power text-crimson-400 font-orbitron">1.7B Power</div>
                <div class="member-alliance text-gray-300 font-inter">Crimson Rising</div>
              </div>
            </div>
            
            <div class="member-card">
              <div class="member-rank">#4</div>
              <div class="member-avatar">🌙</div>
              <div class="member-info">
                <h3 class="text-xl font-bold text-gold-400 font-orbitron">NightStalker</h3>
                <div class="member-power text-crimson-400 font-orbitron">1.5B Power</div>
                <div class="member-alliance text-gray-300 font-inter">Crimson Wanders</div>
              </div>
            </div>
            
            <div class="member-card">
              <div class="member-rank">#5</div>
              <div class="member-avatar">❄️</div>
              <div class="member-info">
                <h3 class="text-xl font-bold text-gold-400 font-orbitron">FrostGiant</h3>
                <div class="member-power text-crimson-400 font-orbitron">1.3B Power</div>
                <div class="member-alliance text-gray-300 font-inter">Crimson Blizzards</div>
              </div>
            </div>
            
            <div class="member-card">
              <div class="member-rank">#6</div>
              <div class="member-avatar">🔥</div>
              <div class="member-info">
                <h3 class="text-xl font-bold text-gold-400 font-orbitron">FlameLord</h3>
                <div class="member-power text-crimson-400 font-orbitron">1.2B Power</div>
                <div class="member-alliance text-gray-300 font-inter">Crimson Division</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Kingdom Quote -->
    <section class="quote-section py-16 bg-gradient-to-r from-gray-900/80 via-red-900/60 to-gray-800/80">
      <div class="container mx-auto px-4">
        <div class="max-w-[1152px] mx-auto text-center">
          <div class="quote-card">
            <div class="quote-icon">💎</div>
            <blockquote class="quote-text">
              "In the Crimson Family, we don't just play the game - we dominate it. Every member is a legend in the making, every battle a story of triumph. Together, we are unstoppable. Together, we are Nocturnal Legacy."
            </blockquote>
            <div class="quote-author">
              <span class="author-name font-orbitron">King Crimson</span>
              <span class="author-title font-inter">Supreme Commander</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'

// Define types
interface EligibilityResult {
  eligible: boolean
  message: string
  alliance?: string
  benefits?: string
}

// Migration data
const migrationData = reactive({
  powerLevel: '',
  activityLevel: ''
})

// Eligibility result
const eligibilityResult = ref<EligibilityResult | null>(null)

// Check eligibility function
const checkEligibility = () => {
  if (!migrationData.powerLevel || !migrationData.activityLevel) {
    eligibilityResult.value = {
      eligible: false,
      message: 'Please fill in all fields to check eligibility.'
    }
    return
  }

  // Enhanced eligibility logic
  const powerLevels: Record<string, number> = {
    '0-10M': 1,
    '10M-30M': 2,
    '30M-50M': 3,
    '50M-100M': 4,
    '100M+': 5
  }

  const activityLevels: Record<string, number> = {
    'casual': 1,
    'active': 2,
    'hardcore': 3
  }

  const powerScore = powerLevels[migrationData.powerLevel]
  const activityScore = activityLevels[migrationData.activityLevel]
  const totalScore = powerScore + activityScore

  if (totalScore >= 5) {
    eligibilityResult.value = {
      eligible: true,
      message: 'Congratulations! You are eligible to join the Crimson Family.',
      alliance: powerScore >= 4 ? 'Crimson Division' : 'Crimson Rising',
      benefits: activityScore >= 2 ? 'Full benefits package' : 'Standard benefits package'
    }
  } else if (totalScore >= 3) {
    eligibilityResult.value = {
      eligible: true,
      message: 'You qualify for a sub-alliance. Contact us for placement.',
      alliance: 'Crimson Wanders or Crimson Blizzards',
      benefits: 'Basic benefits package'
    }
  } else {
    eligibilityResult.value = {
      eligible: false,
      message: 'You need to increase your power level or activity to qualify. Contact us for guidance!'
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&family=Cinzel:wght@400;500;600;700;800;900&family=Inter:wght@300;400;500;600;700;800;900&family=Rajdhani:wght@300;400;500;600;700&display=swap');

.migration-page {
  min-height: 100vh;
  background-color: #0f172a;
  font-family: 'Inter', sans-serif;
}

.font-orbitron {
  font-family: 'Orbitron', monospace;
}

.font-inter {
  font-family: 'Inter', sans-serif;
}

/* Hero Section */
.hero-section {
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding-top: 6rem;
}

/* Enhanced Stats Section */
.stat-item {
  @apply p-4 rounded-xl bg-gradient-to-br from-gray-800/30 to-gray-900/30 border border-gold-500/20 backdrop-blur-sm;
  transition: all 0.3s ease;
}

.stat-item:hover {
  @apply border-gold-400/40 transform scale-105;
  box-shadow: 0 8px 32px rgba(255, 215, 0, 0.2);
}

.stat-icon {
  @apply text-3xl mb-3;
}

.stat-number {
  @apply text-2xl font-bold mb-1;
}

.stat-label {
  @apply text-gray-300 text-sm font-semibold mb-1;
}

.stat-subtitle {
  @apply text-gray-400 text-xs;
}

/* Kingdom Section - Leader Cards */
.leader-card {
  @apply bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-6 border-2 border-gold-500/30 backdrop-blur-sm text-center relative;
  transition: all 0.3s ease;
}

.leader-card:hover {
  @apply border-gold-400/50 transform scale-105;
  box-shadow: 0 8px 32px rgba(255, 215, 0, 0.2);
}

.king-card {
  @apply border-gold-400/50;
  box-shadow: 0 8px 32px rgba(255, 215, 0, 0.3);
}

.queen-card {
  @apply border-pink-400/50;
  box-shadow: 0 8px 32px rgba(236, 72, 153, 0.3);
}

.top-leader {
  @apply border-crimson-400/50;
  box-shadow: 0 8px 32px rgba(220, 20, 60, 0.2);
}

.stats-summary {
  @apply border-blue-400/50;
  box-shadow: 0 8px 32px rgba(59, 130, 246, 0.2);
}

.warlord-card {
  @apply border-red-400/50;
  box-shadow: 0 8px 32px rgba(239, 68, 68, 0.2);
}

.counselor-card {
  @apply border-purple-400/50;
  box-shadow: 0 8px 32px rgba(147, 51, 234, 0.2);
}

.diplomat-card {
  @apply border-green-400/50;
  box-shadow: 0 8px 32px rgba(34, 197, 94, 0.2);
}

.leader-rank {
  @apply absolute top-4 left-4 w-8 h-8 bg-gradient-to-br from-gold-500 to-crimson-600 rounded-full flex items-center justify-center text-black font-bold text-sm;
}

.queen-card .leader-rank {
  @apply bg-gradient-to-br from-pink-500 to-purple-600;
}

.top-leader .leader-rank {
  @apply bg-gradient-to-br from-crimson-500 to-red-600;
}

.stats-summary .leader-rank {
  @apply bg-gradient-to-br from-blue-500 to-indigo-600;
}

.warlord-card .leader-rank {
  @apply bg-gradient-to-br from-red-500 to-red-600;
}

.counselor-card .leader-rank {
  @apply bg-gradient-to-br from-purple-500 to-purple-600;
}

.diplomat-card .leader-rank {
  @apply bg-gradient-to-br from-green-500 to-green-600;
}

/* Kingdom Pyramid Styles */
.kingdom-pyramid {
  @apply relative;
  min-height: 800px;
}

/* Pyramid Background */
.pyramid-background {
  @apply absolute inset-0 flex flex-col justify-end;
  pointer-events: none;
}

.pyramid-layer {
  @apply w-full;
  background: linear-gradient(135deg, rgba(255, 215, 0, 0.1) 0%, rgba(220, 20, 60, 0.1) 100%);
  border: 1px solid rgba(255, 215, 0, 0.2);
}

.layer-1 {
  height: 200px;
  clip-path: polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%);
}

.layer-2 {
  height: 180px;
  clip-path: polygon(25% 0%, 75% 0%, 100% 100%, 0% 100%);
}

.layer-3 {
  height: 160px;
  clip-path: polygon(30% 0%, 70% 0%, 100% 100%, 0% 100%);
}

.layer-4 {
  height: 140px;
  clip-path: polygon(35% 0%, 65% 0%, 100% 100%, 0% 100%);
}

/* Pyramid Tiers */
.pyramid-tier {
  @apply relative z-10 text-center mb-8;
}

.tier-label {
  @apply text-lg font-bold text-gold-400 mb-6 font-orbitron tracking-wider;
  text-shadow: 0 0 10px rgba(255, 215, 0, 0.5);
}

.tier-cards {
  @apply grid gap-6;
}

.royal-tier .tier-cards {
  @apply grid-cols-1 md:grid-cols-2 max-w-2xl mx-auto;
}

.leadership-tier .tier-cards {
  @apply grid-cols-1 md:grid-cols-3 max-w-4xl mx-auto;
}

.commander-tier .tier-cards {
  @apply grid-cols-1 md:grid-cols-3 max-w-4xl mx-auto;
}

.pyramid-card {
  @apply bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-6 border-2 backdrop-blur-sm text-center relative;
  transition: all 0.3s ease;
}

.pyramid-card:hover {
  @apply transform scale-105;
  box-shadow: 0 8px 32px rgba(255, 215, 0, 0.3);
}

.royal-card {
  @apply border-gold-400/50;
  box-shadow: 0 8px 32px rgba(255, 215, 0, 0.3);
}

.leadership-card {
  @apply border-gray-400/50;
  box-shadow: 0 8px 32px rgba(156, 163, 175, 0.2);
}

.commander-card {
  @apply border-amber-600/50;
  box-shadow: 0 8px 32px rgba(217, 119, 6, 0.2);
}

.card-rank {
  @apply absolute top-4 left-4 w-8 h-8 rounded-full flex items-center justify-center text-black font-bold text-sm;
}

.royal-card .card-rank {
  @apply bg-gradient-to-br from-gold-500 to-yellow-600;
}

.leadership-card .card-rank {
  @apply bg-gradient-to-br from-gray-500 to-gray-600;
}

.commander-card .card-rank {
  @apply bg-gradient-to-br from-amber-600 to-orange-600;
}

.card-avatar {
  @apply text-4xl mb-4;
}

.card-info {
  @apply space-y-2;
}

.card-name {
  @apply text-xl font-bold text-gold-400 font-orbitron;
}

.card-title {
  @apply text-gold-400 font-inter text-sm;
}

.card-power {
  @apply text-crimson-400 font-orbitron text-lg font-bold;
}

.card-quote {
  @apply text-gray-300 italic font-inter text-xs leading-relaxed;
}

/* Pyramid Foundation */
.pyramid-foundation {
  @apply relative z-10 bg-gradient-to-r from-gray-800/30 to-gray-900/30 rounded-2xl p-8 border-2 border-gold-500/30 backdrop-blur-sm;
}

.foundation-label {
  @apply text-lg font-bold text-gold-400 mb-6 font-orbitron tracking-wider text-center;
  text-shadow: 0 0 10px rgba(255, 215, 0, 0.5);
}

.foundation-stats {
  @apply grid grid-cols-2 md:grid-cols-4 gap-6;
}

.foundation-stats .stat-item {
  @apply flex flex-col items-center space-y-2 text-center;
}

.foundation-stats .stat-icon {
  @apply text-2xl;
}

.foundation-stats .stat-label {
  @apply text-gray-300 text-sm font-inter;
}

.foundation-stats .stat-value {
  @apply text-gold-400 font-bold font-orbitron text-lg;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .pyramid-layer {
    display: none;
  }
  
  .kingdom-pyramid {
    min-height: auto;
  }
}

.leader-avatar {
  @apply text-5xl mb-4;
}

.leader-info {
  @apply space-y-2;
}

.leader-title {
  @apply text-lg font-semibold;
}

.leader-power {
  @apply text-xl font-bold;
}

.leader-experience {
  @apply text-sm;
}

.leader-quote {
  @apply text-xs leading-relaxed;
}

.stats-grid {
  @apply space-y-2 mt-4;
}

.stat-item-summary {
  @apply flex justify-between items-center;
}

.stat-label-summary {
  @apply text-gray-400 text-sm;
}

.stat-value-summary {
  @apply font-bold text-lg;
}

/* Alliances Section */
.alliance-card {
  @apply bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-8 border-2 border-gold-500/30 backdrop-blur-sm text-center relative;
  transition: all 0.3s ease;
}

.alliance-card:hover {
  @apply border-gold-400/50 transform scale-105;
  box-shadow: 0 8px 32px rgba(255, 215, 0, 0.2);
}

.main-alliance {
  @apply border-gold-400/50;
  box-shadow: 0 8px 32px rgba(255, 215, 0, 0.3);
}

.alliance-icon {
  @apply text-4xl mb-4;
}

.alliance-stats {
  @apply space-y-2 text-sm text-gray-300;
}

.alliance-badge {
  @apply absolute top-4 right-4 bg-gold-500 text-black text-xs font-bold px-3 py-1 rounded-full;
}

/* Benefits & Rules */
.benefit-item, .rule-item {
  @apply flex items-start space-x-4 p-6 bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-xl border border-gold-500/20;
}

.benefit-icon, .rule-number {
  @apply w-12 h-12 bg-gradient-to-br from-gold-500/20 to-crimson-600/20 rounded-full flex items-center justify-center text-xl flex-shrink-0 border-2 border-gold-500/30;
}

.rule-number {
  @apply text-gold-400 font-bold text-lg;
}

.benefit-content, .rule-content {
  @apply flex-1;
}

/* Contact Section */
.contact-card {
  @apply bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-8 border-2 border-gold-500/30 backdrop-blur-sm text-center;
  transition: all 0.3s ease;
}

.contact-card:hover {
  @apply border-gold-400/50 transform scale-105;
}

.contact-icon {
  @apply text-5xl mb-4;
}

.contact-btn {
  @apply inline-block px-8 py-4 font-bold rounded-xl transition-all duration-300 transform hover:scale-105 border-2;
}

.discord-btn {
  @apply bg-indigo-600 text-white border-indigo-500 hover:bg-indigo-500;
}

.telegram-btn {
  @apply bg-blue-600 text-white border-blue-500 hover:bg-blue-500;
}

/* Top Members */
.member-card {
  @apply bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-6 border-2 border-gold-500/30 backdrop-blur-sm relative;
  transition: all 0.3s ease;
}

.member-card:hover {
  @apply border-gold-400/50 transform scale-105;
}

.member-rank {
  @apply absolute top-4 left-4 w-8 h-8 bg-gradient-to-br from-gold-500 to-crimson-600 rounded-full flex items-center justify-center text-black font-bold text-sm;
}

.member-avatar {
  @apply text-4xl mb-4 text-center;
}

.member-info {
  @apply text-center;
}

.member-power {
  @apply text-lg font-bold mb-1;
}

.member-alliance {
  @apply text-sm;
}

/* Quote Section */
.quote-card {
  @apply bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-12 border-2 border-gold-500/30 backdrop-blur-sm;
}

.quote-icon {
  @apply text-6xl mb-6;
}

.quote-text {
  @apply text-2xl md:text-3xl text-gray-200 italic mb-8 leading-relaxed font-inter;
}

.quote-author {
  @apply space-y-1;
}

.author-name {
  @apply text-gold-400 text-xl font-bold block;
}

.author-title {
  @apply text-gray-400 text-sm block;
}

/* Responsive adjustments */
@media (min-width: 1024px) {
  .hero-section {
    padding-top: 7rem;
  }
}

/* Fire particle animation - same as Home page */
.fire-particle {
  animation: float-up 3s ease-in-out infinite;
  will-change: transform, opacity;
}

@keyframes float-up {
  0% {
    transform: translateY(100vh) scale(0);
    opacity: 0;
  }
  10% {
    opacity: 0.6;
  }
  90% {
    opacity: 0.6;
  }
  100% {
    transform: translateY(-100px) scale(1);
    opacity: 0;
  }
}

/* Responsive adjustments for fire particles */
@media (max-width: 640px) {
  .fire-particle {
    animation-duration: 2s;
  }
}

/* Reduced motion support */
@media (prefers-reduced-motion: reduce) {
  .fire-particle {
    animation: none;
  }
}

/* Animations */
@keyframes glow {
  0%, 100% { 
    text-shadow: 0 0 20px rgba(255, 215, 0, 0.5);
  }
  50% { 
    text-shadow: 0 0 40px rgba(255, 215, 0, 0.8), 0 0 60px rgba(220, 20, 60, 0.6);
  }
}

.animate-glow {
  animation: glow 3s ease-in-out infinite;
}

.delay-1000 {
  animation-delay: 1s;
}

.delay-500 {
  animation-delay: 0.5s;
}

/* Custom colors using CSS variables from Home page */
.text-gold-400 { color: var(--accent-gold); }
.text-gold-500 { color: var(--accent-gold); }
.text-gold-600 { color: var(--accent-gold-dark); }
.bg-gold-500 { background-color: var(--accent-gold); }
.bg-gold-600 { background-color: var(--accent-gold-dark); }
.border-gold-400 { border-color: var(--accent-gold); }
.border-gold-500 { border-color: var(--accent-gold); }

.text-crimson-400 { color: var(--accent-primary); }
.text-crimson-500 { color: var(--accent-primary); }
.text-crimson-600 { color: var(--accent-secondary); }
.bg-crimson-500 { background-color: var(--accent-primary); }
.bg-crimson-600 { background-color: var(--accent-secondary); }
.bg-crimson-700 { background-color: var(--accent-muted); }
.border-crimson-500 { border-color: var(--accent-primary); }
.border-crimson-600 { border-color: var(--accent-secondary); }

.bg-crimson-900 { background-color: rgba(220, 38, 38, 0.1); }
.bg-gold-900 { background-color: rgba(251, 191, 36, 0.1); }
</style> 