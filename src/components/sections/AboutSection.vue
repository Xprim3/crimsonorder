<template>
  <section id="about" class="relative min-h-screen flex items-center justify-center py-8 sm:py-12 lg:py-16 xl:py-20 px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16" style="background: #1A1A1A;">
    <!-- Background Effects -->
    <div class="absolute inset-0 opacity-20" style="background: linear-gradient(135deg, #8B0000, #DC2626);"></div>
    
    <!-- Main Content -->
    <div class="relative z-10 w-full max-w-6xl mx-auto">
      <!-- Section Title -->
      <div class="text-center mb-12 lg:mb-16">
        <h2 class="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-white">
          About Crimson Order
        </h2>
        <div class="w-32 h-1 mx-auto bg-gradient-to-r from-yellow-500 via-red-600 to-yellow-500 mt-4"></div>
      </div>

      <!-- Main Story Card -->
      <div class="bg-black bg-opacity-70 rounded-3xl p-8 lg:p-12 border-2 border-red-800 mb-16 relative overflow-hidden">
        <!-- Decorative Elements -->
        <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-500 to-red-600"></div>
        
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          <!-- Enhanced Story Text -->
          <div class="lg:col-span-2 text-center lg:text-left">
            <h3 class="text-2xl sm:text-3xl font-bold mb-6 text-white drop-shadow-lg" style="text-shadow: 0 0 10px rgba(220, 38, 38, 0.5), 0 0 20px rgba(220, 38, 38, 0.3);">
              The Legend of Crimson Order
            </h3>
            <p class="text-lg sm:text-xl leading-relaxed text-gray-200 mb-6">
              Born from the ashes of countless battles, <span class="text-red-400 font-semibold">Crimson Order</span> emerged as a beacon of hope in the chaotic world of Rise of Kingdoms. 
              What began as a small group of determined warriors has evolved into a legendary family that commands respect across the battlefield.
            </p>
            <p class="text-lg sm:text-xl leading-relaxed text-gray-200 mb-6">
              Our story is one of <span class="text-red-400 font-semibold">unbreakable bonds</span>, <span class="text-red-400 font-semibold">strategic brilliance</span>, and <span class="text-red-400 font-semibold">unwavering loyalty</span>. 
              We've faced the mightiest kingdoms and emerged victorious, not through sheer force, but through the power of unity and tactical excellence.
            </p>
            <p class="text-lg sm:text-xl leading-relaxed text-gray-200">
              Today, we stand as a testament to what can be achieved when individual strength combines with collective purpose. 
              We are not just warriors—we are a <span class="text-red-400 font-semibold">family forged in fire</span>.
            </p>
          </div>
          
          <!-- Enhanced Crimson Order Emblem -->
          <div class="flex justify-center lg:justify-end">
            <div class="relative group">
              <!-- Responsive Image Container - Clean Logo Only -->
              <div class="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80 relative">
                <!-- Responsive Image -->
                <img 
                  src="/logo/logo.png" 
                  alt="Crimson Order Emblem"
                  class="w-full h-full object-contain object-center transition-transform duration-300"
                  @error="handleImageError"
                />
                
                <!-- Fallback content if image fails to load -->
                <div class="absolute inset-0 items-center justify-center fallback-content hidden">
                  <div class="text-center">
                    <div class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white mb-2 group-hover:text-yellow-100 transition-colors duration-300">CO</div>
                    <div class="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-yellow-400 tracking-wider group-hover:text-yellow-300 transition-colors duration-300">FAMILY</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Enhanced Leadership -->
      <div class="bg-black bg-opacity-70 rounded-3xl p-8 lg:p-12 border-2 border-red-800 mb-16">
        <div class="text-center mb-10">
          <h3 class="text-2xl sm:text-3xl font-bold mb-4 text-white drop-shadow-lg" style="text-shadow: 0 0 10px rgba(220, 38, 38, 0.5), 0 0 20px rgba(220, 38, 38, 0.3);">
            Legendary Leadership
          </h3>
          <p class="text-lg text-gray-300">
            Commanders whose wisdom and experience guide our family to victory
          </p>
        </div>
        
        <!-- Main Leader - High Commander -->
        <div class="mb-12">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <!-- High Commander -->
            <div class="bg-gradient-to-br from-red-900/60 to-red-800/60 rounded-2xl p-8 border-2 border-yellow-500/50 text-center group hover:border-yellow-400/70 transition-all duration-300 hover:bg-gradient-to-br hover:from-red-800/70 hover:to-red-700/70 relative overflow-hidden">
              <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-500 to-red-600"></div>
              <div class="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-2xl">
                <span class="text-white text-3xl">👑</span>
              </div>
              <h4 class="text-3xl font-bold bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 bg-clip-text text-transparent mb-3 group-hover:from-yellow-300 group-hover:via-yellow-200 group-hover:to-yellow-400 transition-all duration-300" style="text-shadow: 0 0 10px rgba(251, 191, 36, 0.3);">Pryda</h4>
              <p class="text-lg text-gray-300 mb-4">Supreme Leader of Crimson Order</p>
              <div class="text-sm text-gray-400 mb-2">In-Game: Pryda#1234</div>
              <div class="text-sm text-gray-400 mb-2">Discord: Pryda#0001</div>
              <div class="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-3 mt-4">
                <span class="bg-red-500/20 text-red-400 px-3 py-1 rounded-full text-sm font-semibold border border-red-500/30">High Commander</span>
                <span class="bg-red-500/20 text-red-400 px-3 py-1 rounded-full text-sm font-semibold border border-red-500/30">⚔️ Crimson Paladins</span>
              </div>
            </div>
            
            <!-- Supreme Counselor -->
            <div class="bg-gradient-to-br from-red-900/60 to-red-800/60 rounded-2xl p-8 border-2 border-yellow-500/50 text-center group hover:border-yellow-400/70 transition-all duration-300 hover:bg-gradient-to-br hover:from-red-800/70 hover:to-red-700/70 relative overflow-hidden">
              <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-500 to-red-600"></div>
              <div class="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-2xl">
                <span class="text-white text-3xl">⚖️</span>
              </div>
              <h4 class="text-3xl font-bold bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 bg-clip-text text-transparent mb-3 group-hover:from-yellow-300 group-hover:via-yellow-200 group-hover:to-yellow-400 transition-all duration-300" style="text-shadow: 0 0 10px rgba(251, 191, 36, 0.3);">LundiX</h4>
              <p class="text-lg text-gray-300 mb-4">Chief Advisor of Crimson Order</p>
              <div class="text-sm text-gray-400 mb-2">In-Game: LundiX#5678</div>
              <div class="text-sm text-gray-400 mb-2">Discord: LundiX#0002</div>
              <div class="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-3 mt-4">
                <span class="bg-red-500/20 text-red-400 px-3 py-1 rounded-full text-sm font-semibold border border-red-500/30">Supreme Counselor</span>
                <span class="bg-red-500/20 text-red-400 px-3 py-1 rounded-full text-sm font-semibold border border-red-500/30">🦅 Crimson Eagles</span>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Other Leaders -->
        <div class="text-center mb-8">
          <h4 class="text-xl font-bold text-white drop-shadow-lg mb-2" style="text-shadow: 0 0 10px rgba(220, 38, 38, 0.5), 0 0 20px rgba(220, 38, 38, 0.3);">Alliance Commanders</h4>
          <p class="text-gray-300 text-sm">Elite leaders who guide our specialized forces</p>
        </div>
        
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div class="bg-gradient-to-br from-red-900/60 to-red-800/60 rounded-2xl p-8 border-2 border-yellow-500/50 text-center group hover:border-yellow-400/70 transition-all duration-300 hover:bg-gradient-to-br hover:from-red-800/70 hover:to-red-700/70 relative overflow-hidden">
            <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-500 to-red-600"></div>
            <div class="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-2xl">
              <span class="text-white text-3xl">⚔️</span>
            </div>
            <h4 class="text-3xl font-bold bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 bg-clip-text text-transparent mb-3 group-hover:from-yellow-300 group-hover:via-yellow-200 group-hover:to-yellow-400 transition-all duration-300" style="text-shadow: 0 0 10px rgba(251, 191, 36, 0.3);">WarLeader</h4>
            <p class="text-lg text-gray-300 mb-4">War Chief</p>
            <div class="text-sm text-gray-400 mb-2">In-Game: WarLeader#1111</div>
            <div class="text-sm text-gray-400 mb-2">Discord: WarLeader#0001</div>
            <div class="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-3 mt-4">
              <span class="bg-red-500/20 text-red-400 px-3 py-1 rounded-full text-sm font-semibold border border-red-500/30">War Chief</span>
              <span class="bg-red-500/20 text-red-400 px-3 py-1 rounded-full text-sm font-semibold border border-red-500/30">⚔️ Crimson Paladins</span>
            </div>
          </div>
          
          <div class="bg-gradient-to-br from-red-900/60 to-red-800/60 rounded-2xl p-8 border-2 border-yellow-500/50 text-center group hover:border-yellow-400/70 transition-all duration-300 hover:bg-gradient-to-br hover:from-red-800/70 hover:to-red-700/70 relative overflow-hidden">
            <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-500 to-red-600"></div>
            <div class="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-2xl">
              <span class="text-white text-3xl">🦅</span>
            </div>
            <h4 class="text-3xl font-bold bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 bg-clip-text text-transparent mb-3 group-hover:from-yellow-300 group-hover:via-yellow-200 group-hover:to-yellow-400 transition-all duration-300" style="text-shadow: 0 0 10px rgba(251, 191, 36, 0.3);">EagleLead</h4>
            <p class="text-lg text-gray-300 mb-4">Eagle Commander</p>
            <div class="text-sm text-gray-400 mb-2">In-Game: EagleLead#2222</div>
            <div class="text-sm text-gray-400 mb-2">Discord: EagleLead#0001</div>
            <div class="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-3 mt-4">
              <span class="bg-red-500/20 text-red-400 px-3 py-1 rounded-full text-sm font-semibold border border-red-500/30">Eagle Commander</span>
              <span class="bg-red-500/20 text-red-400 px-3 py-1 rounded-full text-sm font-semibold border border-red-500/30">🦅 Crimson Eagles</span>
            </div>
          </div>
          
          <div class="bg-gradient-to-br from-red-900/60 to-red-800/60 rounded-2xl p-8 border-2 border-yellow-500/50 text-center group hover:border-yellow-400/70 transition-all duration-300 hover:bg-gradient-to-br hover:from-red-800/70 hover:to-red-700/70 relative overflow-hidden">
            <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-500 to-red-600"></div>
            <div class="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-2xl">
              <span class="text-white text-3xl">📚</span>
            </div>
            <h4 class="text-3xl font-bold bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 bg-clip-text text-transparent mb-3 group-hover:from-yellow-300 group-hover:via-yellow-200 group-hover:to-yellow-400 transition-all duration-300" style="text-shadow: 0 0 10px rgba(251, 191, 36, 0.3);">SupportLead</h4>
            <p class="text-lg text-gray-300 mb-4">Council Advisor</p>
            <div class="text-sm text-gray-400 mb-2">In-Game: SupportLead#3333</div>
            <div class="text-sm text-gray-400 mb-2">Discord: SupportLead#0001</div>
            <div class="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-3 mt-4">
              <span class="bg-red-500/20 text-red-400 px-3 py-1 rounded-full text-sm font-semibold border border-red-500/30">Council Advisor</span>
              <span class="bg-red-500/20 text-red-400 px-3 py-1 rounded-full text-sm font-semibold border border-red-500/30">Both Alliances</span>
            </div>
          </div>
          
          <div class="bg-gradient-to-br from-red-900/60 to-red-800/60 rounded-2xl p-8 border-2 border-yellow-500/50 text-center group hover:border-yellow-400/70 transition-all duration-300 hover:bg-gradient-to-br hover:from-red-800/70 hover:to-red-700/70 relative overflow-hidden">
            <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-500 to-red-600"></div>
            <div class="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-2xl">
              <span class="text-white text-3xl">🛡️</span>
            </div>
            <h4 class="text-3xl font-bold bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 bg-clip-text text-transparent mb-3 group-hover:from-yellow-300 group-hover:via-yellow-200 group-hover:to-yellow-400 transition-all duration-300" style="text-shadow: 0 0 10px rgba(251, 191, 36, 0.3);">DefenseLead</h4>
            <p class="text-lg text-gray-300 mb-4">Defense Master</p>
            <div class="text-sm text-gray-400 mb-2">In-Game: DefenseLead#4444</div>
            <div class="text-sm text-gray-400 mb-2">Discord: DefenseLead#0001</div>
            <div class="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-3 mt-4">
              <span class="bg-red-500/20 text-red-400 px-3 py-1 rounded-full text-sm font-semibold border border-red-500/30">Defense Master</span>
              <span class="bg-red-500/20 text-red-400 px-3 py-1 rounded-full text-sm font-semibold border border-red-500/30">⚔️ Crimson Paladins</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Enhanced Alliance Structure -->
      <div class="mb-16">
        <div class="text-center mb-12">
          <h3 class="text-3xl sm:text-4xl font-bold mb-4 text-white drop-shadow-lg" style="text-shadow: 0 0 10px rgba(220, 38, 38, 0.5), 0 0 20px rgba(220, 38, 38, 0.3);">
            Our Elite Alliances
          </h3>
          <p class="text-lg text-gray-300 max-w-3xl mx-auto">
            Two legendary alliances working in perfect harmony to dominate kingdoms and create an unstoppable force
          </p>
        </div>
        
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <!-- Crimson Paladins -->
          <div class="bg-gradient-to-br from-red-900/60 to-red-800/60 rounded-3xl p-4 sm:p-6 lg:p-8 border-2 border-yellow-500/50 text-center group hover:border-yellow-400/70 transition-all duration-500 hover:transform hover:scale-105 relative overflow-hidden">
            <div class="absolute top-0 left-0 w-2 bg-gradient-to-r from-yellow-500 to-red-600"></div>
            
            <div class="flex justify-center items-center mb-6 group-hover:scale-110 transition-transform duration-300 h-40 sm:h-36 md:h-40 lg:h-44 xl:h-48">
              <img 
                src="/logo/crimsonpaladins.png" 
                alt="Crimson Paladins Logo"
                class="w-full h-full max-w-[16rem] sm:max-w-[14rem] md:max-w-[16rem] lg:max-w-[18rem] xl:max-w-[20rem] object-contain object-center mx-auto"
                @error="handleAllianceImageError"
              />
              <!-- Fallback emoji if image fails to load -->
              <div class="fallback-alliance-icon hidden text-[10rem] sm:text-9xl md:text-[10rem] items-center justify-center w-full h-full absolute left-0 top-0">⚔️</div>
            </div>
            <h4 class="text-3xl font-bold bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 bg-clip-text text-transparent mb-4 group-hover:from-yellow-300 group-hover:via-yellow-200 group-hover:to-yellow-400 transition-all duration-300" style="text-shadow: 0 0 10px rgba(251, 191, 36, 0.3);">Crimson Paladins</h4>
            <p class="text-gray-300 leading-relaxed mb-6 text-lg">
              The unbreakable shield of our family. These legendary defenders have mastered the art of protecting what matters most. 
              Their cities stand as impenetrable fortresses, their resources flow like rivers, and their support keeps the entire family strong.
            </p>
            
            <!-- Alliance Stats -->
            <div class="grid grid-cols-2 gap-4 mb-8">
              <div class="bg-red-800/30 rounded-xl p-4 border border-red-700/50">
                <div class="text-2xl font-bold text-yellow-300">50+</div>
                <div class="text-xs text-gray-400">Members</div>
              </div>
              <div class="bg-red-800/30 rounded-xl p-4 border border-red-700/50">
                <div class="text-2xl font-bold text-yellow-300">#1</div>
                <div class="text-xs text-gray-400">Rank</div>
              </div>
            </div>
            
            <div class="flex flex-wrap justify-center gap-2 text-xs text-gray-400 mb-8">
              <span class="bg-red-800/40 px-3 py-1 rounded-full border border-red-700/50">City Defense</span>
              <span class="bg-red-800/40 px-3 py-1 rounded-full border border-red-700/50">Resource Guard</span>
              <span class="bg-red-800/40 px-3 py-1 rounded-full border border-red-700/50">Alliance Support</span>
              <span class="bg-red-800/40 px-3 py-1 rounded-full border border-red-700/50">Territory Control</span>
            </div>
            
            <!-- Alliance Leadership -->
            <div class="text-left mb-6">
              <h5 class="bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 bg-clip-text text-transparent font-bold mb-4 text-center text-lg" style="text-shadow: 0 0 10px rgba(251, 191, 36, 0.3);">Alliance Leader</h5>
              <div class="bg-red-800/20 rounded-xl p-4 border border-red-700/50 mb-4">
                <div class="flex items-center justify-between">
                  <div>
                    <div class="text-gray-200 font-bold">Pryda</div>
                  </div>
                  <div class="text-right">
                    <div class="text-yellow-400 text-sm font-semibold">R5 Leader</div>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Alliance Officers -->
            <div class="text-left">
              <h5 class="bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 bg-clip-text text-transparent font-bold mb-4 text-center text-lg" style="text-shadow: 0 0 10px rgba(251, 191, 36, 0.3);">Alliance Officers</h5>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div class="flex items-center justify-between bg-red-800/20 rounded-lg p-3 border border-red-700/50">
                  <span class="text-gray-200 font-medium">WarLeader</span>
                  <span class="text-red-400 text-sm">War Chief</span>
                </div>
                <div class="flex items-center justify-between bg-red-800/20 rounded-lg p-3 border border-red-700/50">
                  <span class="text-gray-200 font-medium">DefenseLead</span>
                  <span class="text-red-400 text-sm">Defense Master</span>
                </div>
                <div class="flex items-center justify-between bg-red-800/20 rounded-lg p-3 border border-red-700/50">
                  <span class="text-gray-200 font-medium">Suad</span>
                  <span class="text-red-400 text-sm">Counselor</span>
                </div>
                <div class="flex items-center justify-between bg-red-800/20 rounded-lg p-3 border border-red-700/50">
                  <span class="text-gray-200 font-medium">Shiggio</span>
                  <span class="text-red-400 text-sm">Diplomat</span>
                </div>
                <div class="flex items-center justify-between bg-red-800/20 rounded-lg p-3 border border-red-700/50">
                  <span class="text-gray-200 font-medium">MeYou</span>
                  <span class="text-red-400 text-sm">Territorial Leader</span>
                </div>
                <div class="flex items-center justify-between bg-red-800/20 rounded-lg p-3 border border-red-700/50">
                  <span class="text-gray-200 font-medium">Officer6</span>
                  <span class="text-red-400 text-sm">Rally Master</span>
                </div>
                <div class="flex items-center justify-between bg-red-800/20 rounded-lg p-3 border border-red-700/50">
                  <span class="text-gray-200 font-medium">Officer7</span>
                  <span class="text-red-400 text-sm">Resource Manager</span>
                </div>
                <div class="flex items-center justify-between bg-red-800/20 rounded-lg p-3 border border-red-700/50">
                  <span class="text-gray-200 font-medium">Officer8</span>
                  <span class="text-red-400 text-sm">Training Officer</span>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Crimson Eagles -->
          <div class="bg-gradient-to-br from-red-900/60 to-red-800/60 rounded-3xl p-4 sm:p-6 lg:p-8 border-2 border-yellow-500/50 text-center group hover:border-yellow-400/70 transition-all duration-500 hover:transform hover:scale-105 relative overflow-hidden">
            <div class="absolute top-0 left-0 w-2 bg-gradient-to-r from-yellow-500 to-red-600"></div>
            
            <div class="flex justify-center items-center mb-6 group-hover:scale-110 transition-transform duration-300 h-40 sm:h-36 md:h-40 lg:h-44 xl:h-48">
              <img 
                src="/logo/crimsoneagles.png" 
                alt="Crimson Eagles Logo"
                class="w-full h-full max-w-[16rem] sm:max-w-[14rem] md:max-w-[16rem] lg:max-w-[18rem] xl:max-w-[20rem] object-contain object-center mx-auto"
                @error="handleAllianceImageError"
              />
              <!-- Fallback emoji if image fails to load -->
              <div class="fallback-alliance-icon hidden text-[10rem] sm:text-9xl md:text-[10rem] items-center justify-center w-full h-full absolute left-0 top-0">🦅</div>
            </div>
            <h4 class="text-3xl font-bold bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 bg-clip-text text-transparent mb-4 group-hover:from-yellow-300 group-hover:via-yellow-200 group-hover:to-yellow-400 transition-all duration-300" style="text-shadow: 0 0 10px rgba(251, 191, 36, 0.3);">Crimson Eagles</h4>
            <p class="text-gray-300 leading-relaxed mb-6 text-lg">
              The swift spear of our family. These elite attackers strike with precision and speed that leaves enemies in awe. 
              Their rally coordination is unmatched, their territory control is absolute, and their strategic strikes change the course of wars.
            </p>
            
            <!-- Alliance Stats -->
            <div class="grid grid-cols-2 gap-4 mb-8">
              <div class="bg-red-800/30 rounded-xl p-4 border border-red-700/50">
                <div class="text-2xl font-bold text-yellow-300">50+</div>
                <div class="text-xs text-gray-400">Members</div>
              </div>
              <div class="bg-red-800/30 rounded-xl p-4 border border-red-700/50">
                <div class="text-2xl font-bold text-yellow-300">#1</div>
                <div class="text-xs text-gray-400">Rank</div>
              </div>
            </div>
            
            <div class="flex flex-wrap justify-center gap-2 text-xs text-gray-400 mb-8">
              <span class="bg-red-800/40 px-3 py-1 rounded-full border border-red-700/50">Rally Masters</span>
              <span class="bg-red-800/40 px-3 py-1 rounded-full border border-red-700/50">Territory Control</span>
              <span class="bg-red-800/40 px-3 py-1 rounded-full border border-red-700/50">Strategic Strikes</span>
              <span class="bg-red-800/40 px-3 py-1 rounded-full border border-red-700/50">Speed Attacks</span>
            </div>
            
            <!-- Alliance Leadership -->
            <div class="text-left mb-6">
              <h5 class="bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 bg-clip-text text-transparent font-bold mb-4 text-center text-lg" style="text-shadow: 0 0 10px rgba(251, 191, 36, 0.3);">Alliance Leader</h5>
              <div class="bg-red-800/20 rounded-xl p-4 border border-red-700/50 mb-4">
                <div class="flex items-center justify-between">
                  <div>
                    <div class="text-gray-200 font-bold">LundiX</div>
                  </div>
                  <div class="text-right">
                    <div class="text-yellow-400 text-sm font-semibold">R5 Leader</div>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Alliance Officers -->
            <div class="text-left">
              <h5 class="bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 bg-clip-text text-transparent font-bold mb-4 text-center text-lg" style="text-shadow: 0 0 10px rgba(251, 191, 36, 0.3);">Alliance Officers</h5>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div class="flex items-center justify-between bg-red-800/20 rounded-lg p-3 border border-red-700/50">
                  <span class="text-gray-200 font-medium">EagleLead</span>
                  <span class="text-red-400 text-sm">Eagle Commander</span>
                </div>
                <div class="flex items-center justify-between bg-red-800/20 rounded-lg p-3 border border-red-700/50">
                  <span class="text-gray-200 font-medium">SupportLead</span>
                  <span class="text-red-400 text-sm">Council Advisor</span>
                </div>
                <div class="flex items-center justify-between bg-red-800/20 rounded-lg p-3 border border-red-700/50">
                  <span class="text-gray-200 font-medium">Officer3</span>
                  <span class="text-red-400 text-sm">Rally Master</span>
                </div>
                <div class="flex items-center justify-between bg-red-800/20 rounded-lg p-3 border border-red-700/50">
                  <span class="text-gray-200 font-medium">Officer4</span>
                  <span class="text-red-400 text-sm">Territory Master</span>
                </div>
                <div class="flex items-center justify-between bg-red-800/20 rounded-lg p-3 border border-red-700/50">
                  <span class="text-gray-200 font-medium">Officer5</span>
                  <span class="text-red-400 text-sm">Speed Commander</span>
                </div>
                <div class="flex items-center justify-between bg-red-800/20 rounded-lg p-3 border border-red-700/50">
                  <span class="text-gray-200 font-medium">Officer6</span>
                  <span class="text-red-400 text-sm">Strategy Officer</span>
                </div>
                <div class="flex items-center justify-between bg-red-800/20 rounded-lg p-3 border border-red-700/50">
                  <span class="text-gray-200 font-medium">Officer7</span>
                  <span class="text-red-400 text-sm">Intel Officer</span>
                </div>
                <div class="flex items-center justify-between bg-red-800/20 rounded-lg p-3 border border-red-700/50">
                  <span class="text-gray-200 font-medium">Officer8</span>
                  <span class="text-red-400 text-sm">Training Master</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Family Culture Section -->
      <div class="bg-black bg-opacity-70 rounded-3xl p-8 lg:p-12 border-2 border-red-800 mb-16">
        <div class="text-center mb-12">
          <h3 class="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-white drop-shadow-lg" style="text-shadow: 0 0 10px rgba(220, 38, 38, 0.5), 0 0 20px rgba(220, 38, 38, 0.3);">
            Our Family Culture
          </h3>
          <p class="text-lg text-gray-300 max-w-4xl mx-auto">
            Beyond the battlefield, Crimson Order is built on values that create lasting bonds and legendary achievements. 
            Our culture is the foundation of our success and the reason we remain undefeated.
          </p>
        </div>
        
        <!-- Core Values with Enhanced Styling -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 mb-8 lg:mb-12">
          <div class="group bg-gradient-to-br from-red-900/40 to-red-800/40 rounded-2xl p-4 lg:p-6 border border-red-700/50 hover:border-yellow-500/50 transition-all duration-300 hover:transform hover:scale-105">
            <div class="w-12 h-12 lg:w-16 lg:h-16 mx-auto mb-3 lg:mb-4 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <span class="text-xl lg:text-2xl">🤝</span>
            </div>
            <h4 class="bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 bg-clip-text text-transparent font-bold mb-2 lg:mb-3 text-center text-lg lg:text-xl" style="text-shadow: 0 0 10px rgba(251, 191, 36, 0.3);">Unity</h4>
            <p class="text-gray-300 text-xs lg:text-sm leading-relaxed text-center">
              We believe that individual strength is amplified when combined with collective purpose. 
              Every member contributes to our shared success.
            </p>
          </div>
          
          <div class="group bg-gradient-to-br from-red-900/40 to-red-800/40 rounded-2xl p-4 lg:p-6 border border-red-700/50 hover:border-yellow-500/50 transition-all duration-300 hover:transform hover:scale-105">
            <div class="w-12 h-12 lg:w-16 lg:h-16 mx-auto mb-3 lg:mb-4 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <span class="text-xl lg:text-2xl">🎯</span>
            </div>
            <h4 class="bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 bg-clip-text text-transparent font-bold mb-2 lg:mb-3 text-center text-lg lg:text-xl" style="text-shadow: 0 0 10px rgba(251, 191, 36, 0.3);">Strategy</h4>
            <p class="text-gray-300 text-xs lg:text-sm leading-relaxed text-center">
              Every battle is won before it begins. We value strategic thinking, careful planning, 
              and tactical execution over brute force.
            </p>
          </div>
          
          <div class="group bg-gradient-to-br from-red-900/40 to-red-800/40 rounded-2xl p-4 lg:p-6 border border-red-700/50 hover:border-yellow-500/50 transition-all duration-300 hover:transform hover:scale-105 md:col-span-2 lg:col-span-1">
            <div class="w-12 h-12 lg:w-16 lg:h-16 mx-auto mb-3 lg:mb-4 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <span class="text-xl lg:text-2xl">🏆</span>
            </div>
            <h4 class="bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 bg-clip-text text-transparent font-bold mb-2 lg:mb-3 text-center text-lg lg:text-xl" style="text-shadow: 0 0 10px rgba(251, 191, 36, 0.3);">Excellence</h4>
            <p class="text-gray-300 text-xs lg:text-sm leading-relaxed text-center">
              We strive for excellence in everything we do. From individual performance to alliance coordination, 
              we never settle for anything less than the best.
            </p>
          </div>
        </div>

        <!-- Family Rules & Principles with Enhanced Layout -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-8 lg:mb-12">
          <!-- Family Rules -->
          <div class="bg-gradient-to-br from-red-900/50 to-red-800/50 rounded-2xl p-6 lg:p-8 border border-red-700/50 hover:border-yellow-500/50 transition-all duration-300">
            <div class="flex items-center mb-4 lg:mb-6">
              <div class="w-10 h-10 lg:w-12 lg:h-12 bg-yellow-500/20 rounded-full flex items-center justify-center border border-yellow-500/50 mr-3 lg:mr-4">
                <span class="text-red-400 text-lg lg:text-xl">⚖️</span>
              </div>
              <h4 class="bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 bg-clip-text text-transparent font-bold text-xl lg:text-2xl" style="text-shadow: 0 0 10px rgba(251, 191, 36, 0.3);">Family Rules</h4>
            </div>
            <div class="space-y-3 lg:space-y-4">
              <div class="flex items-center space-x-3 lg:space-x-4 p-3 bg-red-800/20 rounded-lg border border-red-700/30">
                <span class="text-yellow-400 font-bold text-base lg:text-lg flex-shrink-0">1.</span>
                <div class="text-left">
                  <div class="text-gray-200 font-semibold text-sm lg:text-base">Prioritize Family Unity</div>
                  <div class="text-gray-400 text-xs lg:text-sm mt-1">Always put the family's success above individual glory</div>
                </div>
              </div>
              <div class="flex items-center space-x-3 lg:space-x-4 p-3 bg-red-800/20 rounded-lg border border-red-700/30">
                <span class="text-yellow-400 font-bold text-base lg:text-lg flex-shrink-0">2.</span>
                <div class="text-left">
                  <div class="text-gray-200 font-semibold text-sm lg:text-base">Follow Leadership</div>
                  <div class="text-gray-400 text-xs lg:text-sm mt-1">Execute leadership directives without question</div>
                </div>
              </div>
              <div class="flex items-center space-x-3 lg:space-x-4 p-3 bg-red-800/20 rounded-lg border border-red-700/30">
                <span class="text-yellow-400 font-bold text-base lg:text-lg flex-shrink-0">3.</span>
                <div class="text-left">
                  <div class="text-gray-200 font-semibold text-sm lg:text-base">Active Participation</div>
                  <div class="text-gray-400 text-xs lg:text-sm mt-1">Maintain consistent involvement in alliance activities</div>
                </div>
              </div>
              <div class="flex items-center space-x-3 lg:space-x-4 p-3 bg-red-800/20 rounded-lg border border-red-700/30">
                <span class="text-yellow-400 font-bold text-base lg:text-lg flex-shrink-0">4.</span>
                <div class="text-left">
                  <div class="text-gray-200 font-semibold text-sm lg:text-base">Respect All Members</div>
                  <div class="text-gray-400 text-xs lg:text-sm mt-1">Treat every family member with dignity regardless of rank</div>
                </div>
              </div>
              <div class="flex items-center space-x-3 lg:space-x-4 p-3 bg-red-800/20 rounded-lg border border-red-700/30">
                <span class="text-yellow-400 font-bold text-base lg:text-lg flex-shrink-0">5.</span>
                <div class="text-left">
                  <div class="text-gray-200 font-semibold text-sm lg:text-base">Maintain Secrecy</div>
                  <div class="text-gray-400 text-xs lg:text-sm mt-1">Never share family strategies with outsiders</div>
                </div>
              </div>
              <div class="flex items-center space-x-3 lg:space-x-4 p-3 bg-red-800/20 rounded-lg border border-red-700/30">
                <span class="text-yellow-400 font-bold text-base lg:text-lg flex-shrink-0">6.</span>
                <div class="text-left">
                  <div class="text-gray-200 font-semibold text-sm lg:text-base">Resource Sharing</div>
                  <div class="text-gray-400 text-xs lg:text-sm mt-1">Contribute to family support and resource distribution</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Our Principles -->
          <div class="bg-gradient-to-br from-red-900/50 to-red-800/50 rounded-2xl p-6 lg:p-8 border border-red-700/50 hover:border-yellow-500/50 transition-all duration-300">
            <div class="flex items-center mb-4 lg:mb-6">
              <div class="w-10 h-10 lg:w-12 lg:h-12 bg-yellow-500/20 rounded-full flex items-center justify-center border border-yellow-500/50 mr-3 lg:mr-4">
                <span class="text-red-400 text-lg lg:text-xl">💎</span>
              </div>
              <h4 class="bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 bg-clip-text text-transparent font-bold text-xl lg:text-2xl" style="text-shadow: 0 0 10px rgba(251, 191, 36, 0.3);">Our Principles</h4>
            </div>
            <div class="space-y-3 lg:space-y-4">
              <div class="flex items-center space-x-3 lg:space-x-4 p-3 bg-red-800/20 rounded-lg border border-red-700/30">
                <span class="text-yellow-400 font-bold text-base lg:text-lg flex-shrink-0">•</span>
                <div class="text-left">
                  <div class="text-gray-200 font-semibold text-sm lg:text-base">Collective Intelligence</div>
                  <div class="text-gray-400 text-xs lg:text-sm mt-1">We value the power of many minds over individual brilliance</div>
                </div>

              </div>
              <div class="flex items-center space-x-3 lg:space-x-4 p-3 bg-red-800/20 rounded-lg border border-red-700/30">
                <span class="text-yellow-400 font-bold text-base lg:text-lg flex-shrink-0">•</span>
                <div class="text-left">
                  <div class="text-gray-200 font-semibold text-sm lg:text-base">Every Member Matters</div>
                  <div class="text-gray-400 text-xs lg:text-sm mt-1">Each person contributes uniquely to our success</div>
                </div>
              </div>
              <div class="flex items-center space-x-3 lg:space-x-4 p-3 bg-red-800/20 rounded-lg border border-red-700/30">
                <span class="text-yellow-400 font-bold text-base lg:text-lg flex-shrink-0">•</span>
                <div class="text-left">
                  <div class="text-gray-200 font-semibold text-sm lg:text-base">Learn & Adapt</div>
                  <div class="text-gray-400 text-xs lg:text-sm mt-1">We grow stronger from every battle, win or lose</div>
                </div>
              </div>
              <div class="flex items-center space-x-3 lg:space-x-4 p-3 bg-red-800/20 rounded-lg border border-red-700/30">
                <span class="text-yellow-400 font-bold text-base lg:text-lg flex-shrink-0">•</span>
                <div class="text-left">
                  <div class="text-gray-200 font-semibold text-sm lg:text-base">Loyalty & Trust</div>
                  <div class="text-gray-400 text-xs lg:text-sm mt-1">These are the unbreakable bonds that make us strong</div>
                </div>
              </div>
              <div class="flex items-center space-x-3 lg:space-x-4 p-3 bg-red-800/20 rounded-lg border border-red-700/30">
                <span class="text-yellow-400 font-bold text-base lg:text-lg flex-shrink-0">•</span>
                <div class="text-left">
                  <div class="text-gray-200 font-semibold text-sm lg:text-base">Protect Our Own</div>
                  <div class="text-gray-400 text-xs lg:text-sm mt-1">We never abandon family members in need</div>
                </div>
              </div>
              <div class="flex items-center space-x-3 lg:space-x-4 p-3 bg-red-800/20 rounded-lg border border-red-700/30">
                <span class="text-yellow-400 font-bold text-base lg:text-lg flex-shrink-0">•</span>
                <div class="text-left">
                  <div class="text-gray-200 font-semibold text-sm lg:text-base">Dedication to Excellence</div>
                  <div class="text-gray-400 text-xs lg:text-sm mt-1">We achieve greatness through practice and commitment</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Family Traditions & Benefits -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          <!-- Family Traditions -->
          <div class="bg-gradient-to-br from-red-900/40 to-red-800/40 rounded-2xl p-4 lg:p-6 border border-red-700/50 hover:border-yellow-500/50 transition-all duration-300">
            <div class="flex items-center mb-3 lg:mb-4">
              <div class="w-8 h-8 lg:w-10 lg:h-10 bg-yellow-500/20 rounded-full flex items-center justify-center border border-yellow-500/50 mr-2 lg:mr-3">
                <span class="text-red-400 text-sm lg:text-base">🏛️</span>
              </div>
              <h4 class="bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 bg-clip-text text-transparent font-bold text-lg lg:text-xl" style="text-shadow: 0 0 10px rgba(251, 191, 36, 0.3);">Family Traditions</h4>
            </div>
            <div class="space-y-2 lg:space-y-3">
              <div class="flex items-center space-x-2 lg:space-x-3">
                <span class="text-yellow-400 text-sm lg:text-base">•</span>
                <span class="text-gray-300 text-xs lg:text-sm text-left">Daily training sessions and strategy meetings</span>
              </div>
              <div class="flex items-center space-x-2 lg:space-x-3">
                <span class="text-yellow-400 text-sm lg:text-base">•</span>
                <span class="text-gray-300 text-xs lg:text-sm text-left">Weekly recognition of outstanding members</span>
              </div>
              <div class="flex items-center space-x-2 lg:space-x-3">
                <span class="text-yellow-400 text-sm lg:text-base">•</span>
                <span class="text-gray-300 text-xs lg:text-sm text-left">Monthly family gatherings and celebrations</span>
              </div>
              <div class="flex items-center space-x-2 lg:space-x-3">
                <span class="text-yellow-400 text-sm lg:text-base">•</span>
                <span class="text-gray-300 text-xs lg:text-sm text-left">Knowledge sharing and mentorship programs</span>
              </div>
              <div class="flex items-center space-x-2 lg:space-x-3">
                <span class="text-yellow-400 text-sm lg:text-base">•</span>
                <span class="text-gray-300 text-xs lg:text-sm text-left">Seasonal tournaments and competitions</span>
              </div>
            </div>
          </div>

          <!-- Member Benefits -->
          <div class="bg-gradient-to-br from-red-900/40 to-red-800/40 rounded-2xl p-4 lg:p-6 border border-red-700/50 hover:border-yellow-500/50 transition-all duration-300">
            <div class="flex items-center mb-3 lg:mb-4">
              <div class="w-8 h-8 lg:w-10 lg:h-10 bg-yellow-500/20 rounded-full flex items-center justify-center border border-yellow-500/50 mr-2 lg:mr-3">
                <span class="text-red-400 text-sm lg:text-base">🎁</span>
              </div>
              <h4 class="bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 bg-clip-text text-transparent font-bold text-lg lg:text-xl" style="text-shadow: 0 0 10px rgba(251, 191, 36, 0.3);">Member Benefits</h4>
            </div>
            <div class="space-y-2 lg:space-y-3">
              <div class="flex items-center space-x-2 lg:space-x-3">
                <span class="text-yellow-400 text-sm lg:text-base">•</span>
                <span class="text-gray-300 text-xs lg:text-sm text-left">Access to elite training and strategies</span>
              </div>
              <div class="flex items-center space-x-2 lg:space-x-3">
                <span class="text-yellow-400 text-sm lg:text-base">•</span>
                <span class="text-gray-300 text-xs lg:text-sm text-left">24/7 support from experienced members</span>
              </div>
              <div class="flex items-center space-x-2 lg:space-x-3">
                <span class="text-yellow-400 text-sm lg:text-base">•</span>
                <span class="text-gray-300 text-xs lg:text-sm text-left">Priority access to alliance resources</span>
              </div>
              <div class="flex items-center space-x-2 lg:space-x-3">
                <span class="text-yellow-400 text-sm lg:text-base">•</span>
                <span class="text-gray-300 text-xs lg:text-sm text-left">Recognition and advancement opportunities</span>
              </div>
              <div class="flex items-center space-x-2 lg:space-x-3">
                <span class="text-yellow-400 text-sm lg:text-base">•</span>
                <span class="text-gray-300 text-xs lg:text-sm text-left">Global network of skilled players</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Handle image loading errors
const handleImageError = (event: Event) => {
  const target = event.target as HTMLImageElement;
  const fallbackContent = target.parentElement?.querySelector('.fallback-content') as HTMLElement;
  if (fallbackContent) {
    fallbackContent.classList.remove('hidden');
    fallbackContent.classList.add('flex');
  }
};

// Handle alliance image loading errors
const handleAllianceImageError = (event: Event) => {
  const target = event.target as HTMLImageElement;
  const fallbackContent = target.parentElement?.querySelector('.fallback-alliance-icon') as HTMLElement;
  if (fallbackContent) {
    fallbackContent.classList.remove('hidden');
    fallbackContent.classList.add('flex');
  }
};
</script>

<style scoped>
/* Enhanced hover effects */
.group:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(139, 0, 0, 0.3);
}

/* Text shadow for better readability */
h2, h3 {
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
</style> 