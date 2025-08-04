<template>
  <div class="migration-page">
    <!-- Hero Section - Attractive Intro -->
    <section class="hero-section relative overflow-hidden">
      <!-- Animated Background -->
      <div class="absolute inset-0 bg-gradient-to-br from-crimson-900/40 via-black/60 to-gold-900/40"></div>
      <div class="absolute inset-0 bg-pattern opacity-15"></div>
      
      <!-- Floating Elements -->
      <div class="absolute top-20 left-10 w-32 h-32 bg-gold-500/10 rounded-full blur-xl animate-pulse"></div>
      <div class="absolute bottom-20 right-10 w-40 h-40 bg-crimson-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>
      
      <div class="container mx-auto px-4 py-20 relative z-10">
        <div class="max-w-[1152px] mx-auto text-center">
          <!-- Hero Badge -->
          <div class="mb-8">
            <div class="inline-flex items-center space-x-3 bg-gradient-to-r from-gold-500/20 via-crimson-600/20 to-gold-500/20 rounded-full px-8 py-4 border-2 border-gold-500/40 backdrop-blur-sm">
              <span class="text-gold-400 text-xl animate-bounce">⚡</span>
              <span class="text-white font-bold text-lg tracking-wider font-orbitron">ELITE MIGRATION PROGRAM</span>
              <span class="text-gold-400 text-xl animate-bounce delay-500">⚡</span>
            </div>
          </div>
          
          <!-- Main Title -->
          <h1 class="text-6xl md:text-8xl lg:text-9xl font-black mb-8 leading-tight font-orbitron">
            <span class="bg-gradient-to-r from-gold-400 via-crimson-500 to-gold-400 bg-clip-text text-transparent animate-glow">
              MIGRATE
            </span>
            <br>
            <span class="bg-gradient-to-r from-crimson-400 via-gold-400 to-crimson-400 bg-clip-text text-transparent animate-glow delay-1000">
              TO LEGEND
            </span>
          </h1>
          
          <!-- Hero Description -->
          <p class="text-2xl md:text-3xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed font-inter">
            Join the most prestigious kingdom in Rise of Kingdoms. 
            <span class="text-gold-400 font-bold">Become part of the elite.</span>
            <br>
            <span class="text-crimson-400 font-semibold">Command your destiny.</span>
          </p>
          
          <!-- Live Stats Banner -->
          <div class="bg-gradient-to-r from-black/60 to-gray-900/60 rounded-2xl p-8 backdrop-blur-sm border border-gold-500/30">
            <div class="grid grid-cols-3 gap-6 text-center">
              <div>
                <div class="text-3xl font-bold text-gold-400 font-orbitron">1,247</div>
                <div class="text-gray-300 text-sm">Active Members</div>
              </div>
              <div>
                <div class="text-3xl font-bold text-crimson-400 font-orbitron">67</div>
                <div class="text-gray-300 text-sm">Victories</div>
              </div>
              <div>
                <div class="text-3xl font-bold text-blue-400 font-orbitron">24/7</div>
                <div class="text-gray-300 text-sm">Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Kingdom Stats & King Info -->
    <section class="kingdom-section py-16 bg-gradient-to-r from-black/80 to-gray-900/80">
      <div class="container mx-auto px-4">
        <div class="max-w-[1152px] mx-auto">
          <div class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl font-black mb-6 bg-gradient-to-r from-gold-400 to-crimson-600 bg-clip-text text-transparent font-orbitron">
              KINGDOM OVERVIEW
            </h2>
            <p class="text-xl text-gray-300 max-w-3xl mx-auto font-inter">
              Discover the power and prestige of our legendary kingdom
            </p>
          </div>
          
          <div class="grid lg:grid-cols-2 gap-12 items-center">
            <!-- Kingdom Stats -->
            <div class="space-y-8">
              <div class="grid grid-cols-2 gap-6">
                <div class="stat-card">
                  <div class="stat-icon">👑</div>
                  <div class="stat-number text-gold-400 font-orbitron">Kingdom #247</div>
                  <div class="stat-label">Elite Ranking</div>
                </div>
                <div class="stat-card">
                  <div class="stat-icon">⚔️</div>
                  <div class="stat-number text-crimson-400 font-orbitron">15.2B</div>
                  <div class="stat-label">Total Power</div>
                </div>
                <div class="stat-card">
                  <div class="stat-icon">🏆</div>
                  <div class="stat-number text-blue-400 font-orbitron">67</div>
                  <div class="stat-label">Victories</div>
                </div>
                <div class="stat-card">
                  <div class="stat-icon">🤝</div>
                  <div class="stat-number text-green-400 font-orbitron">4</div>
                  <div class="stat-label">Alliances</div>
                </div>
              </div>
            </div>
            
            <!-- King Information -->
            <div class="king-info">
              <div class="king-card">
                <div class="king-avatar">
                  <span class="text-6xl">👑</span>
                </div>
                <div class="king-details">
                  <h3 class="text-2xl font-bold text-gold-400 mb-2 font-orbitron">King Crimson</h3>
                  <p class="text-gray-300 mb-4 font-inter">Supreme Commander of Nocturnal Legacy</p>
                  <div class="king-stats">
                    <div class="king-stat">
                      <span class="label">Power:</span>
                      <span class="value text-gold-400">2.8B</span>
                    </div>
                    <div class="king-stat">
                      <span class="label">Experience:</span>
                      <span class="value text-crimson-400">3+ Years</span>
                    </div>
                    <div class="king-stat">
                      <span class="label">Leadership:</span>
                      <span class="value text-blue-400">Elite</span>
                    </div>
                  </div>
                  <p class="text-gray-300 mt-4 italic font-inter">
                    "Through unity and strategy, we forge legends. Join the Crimson Family and become part of something greater than yourself."
                  </p>
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
          <div class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl font-black mb-6 bg-gradient-to-r from-gold-400 to-crimson-600 bg-clip-text text-transparent font-orbitron">
              CRIMSON FAMILY
            </h2>
            <p class="text-xl text-gray-300 max-w-3xl mx-auto font-inter">
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
    <section class="benefits-section py-16 bg-gradient-to-r from-crimson-900/20 to-gold-900/20">
      <div class="container mx-auto px-4">
        <div class="max-w-[1152px] mx-auto">
          <div class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl font-black mb-6 bg-gradient-to-r from-gold-400 to-crimson-600 bg-clip-text text-transparent font-orbitron">
              BENEFITS & RULES
            </h2>
            <p class="text-xl text-gray-300 max-w-3xl mx-auto font-inter">
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
    <section class="eligibility-section py-16 bg-gradient-to-r from-black/80 to-gray-900/80">
      <div class="container mx-auto px-4">
        <div class="max-w-[1152px] mx-auto">
          <div class="text-center mb-12">
            <h2 class="text-4xl md:text-5xl font-black mb-6 bg-gradient-to-r from-gold-400 to-crimson-600 bg-clip-text text-transparent font-orbitron">
              ELIGIBILITY CHECK
            </h2>
            <p class="text-xl text-gray-300 max-w-3xl mx-auto font-inter">
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
          <div class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl font-black mb-6 bg-gradient-to-r from-gold-400 to-crimson-600 bg-clip-text text-transparent font-orbitron">
              JOIN THE FAMILY
            </h2>
            <p class="text-xl text-gray-300 max-w-3xl mx-auto font-inter">
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
    <section class="top-members-section py-16 bg-gradient-to-r from-crimson-900/20 to-gold-900/20">
      <div class="container mx-auto px-4">
        <div class="max-w-[1152px] mx-auto">
          <div class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl font-black mb-6 bg-gradient-to-r from-gold-400 to-crimson-600 bg-clip-text text-transparent font-orbitron">
              TOP MEMBERS
            </h2>
            <p class="text-xl text-gray-300 max-w-3xl mx-auto font-inter">
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
    <section class="quote-section py-16 bg-gradient-to-r from-black/80 to-gray-900/80">
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
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Inter:wght@300;400;500;600;700&display=swap');

.migration-page {
  min-height: 100vh;
  background: linear-gradient(135deg, #0A0A0F 0%, #1A1A2E 50%, #16213E 100%);
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

/* Kingdom Section */
.stat-card {
  @apply bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-6 border-2 border-gold-500/30 backdrop-blur-sm text-center;
}

.stat-icon {
  @apply text-3xl mb-3;
}

.stat-number {
  @apply text-2xl font-bold mb-1;
}

.stat-label {
  @apply text-gray-300 text-sm;
}

.king-card {
  @apply bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-8 border-2 border-gold-500/30 backdrop-blur-sm;
}

.king-avatar {
  @apply text-center mb-6;
}

.king-details {
  @apply text-center;
}

.king-stats {
  @apply grid grid-cols-3 gap-4 mb-4;
}

.king-stat {
  @apply text-center;
}

.king-stat .label {
  @apply text-gray-400 text-sm block;
}

.king-stat .value {
  @apply font-bold block;
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

/* Background Pattern */
.bg-pattern {
  background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FFD700' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
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

/* Custom colors */
.text-gold-400 { color: #FFD700; }
.text-gold-500 { color: #FFD700; }
.text-gold-600 { color: #FFD700; }
.bg-gold-500 { background-color: #FFD700; }
.bg-gold-600 { background-color: #FFD700; }
.border-gold-400 { border-color: #FFD700; }
.border-gold-500 { border-color: #FFD700; }

.text-crimson-400 { color: #DC143C; }
.text-crimson-500 { color: #DC143C; }
.text-crimson-600 { color: #DC143C; }
.bg-crimson-500 { background-color: #DC143C; }
.bg-crimson-600 { background-color: #DC143C; }
.bg-crimson-700 { background-color: #B22222; }
.border-crimson-500 { border-color: #DC143C; }
.border-crimson-600 { border-color: #DC143C; }

.bg-crimson-900 { background-color: rgba(220, 20, 60, 0.1); }
.bg-gold-900 { background-color: rgba(255, 215, 0, 0.1); }
</style> 