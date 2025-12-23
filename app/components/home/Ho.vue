<script setup>
import { Italic, Megaphone, Play, ShoppingBasket, Sparkles, Star } from 'lucide-vue-next'
import { onMounted, ref } from 'vue'

const features = ref([
  {
    title: 'JKF.net',
    description: '亞洲第一男性娛樂品牌',
    icon: Sparkles,
    img: 'https://www.ap-ea.asia/upload/images/2022_10_21_081045.jpg',
    url: 'https://jkf.net',
    color: 'from-red-600 to-red-800',
  },
  {
    title: 'JKForum.net',
    description: '全台最大男性娛樂論壇 台灣前百大網站',
    icon: Italic,
    img: 'https://www.ap-ea.asia/upload/images/2022_10_21_081045.jpg',
    url: 'https://jkforum.net',
    color: 'from-red-600 to-red-800',
  },
  {
    title: 'JKFace.net',
    description: '享受專屬男人的派對 最強粉絲福利',
    icon: Megaphone,
    img: 'https://www.ap-ea.asia/upload/images/2025_01_23_024957.jpg',
    url: 'https://jkface.net',
    color: 'from-red-500 to-rose-700',
  },

  {
    title: 'JKF AV+',
    description: '世界最快發片平台 台灣唯一全片商授權正版平台',
    icon: Play,
    img: 'https://www.ap-ea.asia/upload/images/2022_10_21_081404.jpg',
    url: 'https://av.jkforum.net',
    color: 'from-red-600 to-rose-800',
  },
  {
    title: 'JR24h.com',
    description: '人氣女郎周邊商品獨家販售',
    icon: ShoppingBasket,
    img: 'https://www.ap-ea.asia/upload/images/2022_10_21_081555.jpg',
    url: 'https://jr24h.com',
    color: 'from-rose-600 to-red-800',
  },
  {
    title: 'JVID.com',
    description: '亞洲第一線上寫真平台 海量高清視頻寫真',
    icon: Star,
    img: 'https://www.ap-ea.asia/upload/images/2022_10_21_081136.jpg',
    url: 'https://jvid.com',
    color: 'from-red-700 to-red-900',
  },
])

const isVisible = ref(false)

onMounted(() => {
  setTimeout(() => {
    isVisible.value = true
  }, 300)
})
</script>

<template>
  <div>
    <!-- 粒子背景 -->
    <ParticleBackground />

    <!-- 主要內容 -->
    <main class="relative z-10 flex flex-col overflow-hidden py-4 md:py-6">
      <!-- 標題區域 -->
      <div class="mb-4 flex-shrink-0 px-4 md:mb-6">
        <div
          class="mx-auto flex w-fit items-center gap-3 rounded-full bg-gradient-to-br from-white/90 to-gray-100/90 px-6 py-3 backdrop-blur-xl md:gap-4 md:px-8 md:py-4 dark:from-zinc-900/90 dark:to-black/90"
          :class="{ 'animate-fade-in': isVisible }"
        >
          <!-- JKF 標題框 -->
          <div class="relative">
            <!-- 標題文字 -->
            <h2 class="relative z-10 px-4 py-2 text-3xl font-bold md:px-6 md:py-3 md:text-4xl lg:text-5xl">
              <span class="text-gray-900 dark:text-white">JK</span><span class="text-red-500">F</span>
            </h2>
          </div>

          <!-- 副標題 -->
          <div class="relative">
            <p class="whitespace-nowrap text-sm text-gray-900 md:text-base lg:text-lg dark:text-white">
              亞洲第一男性娛樂品牌
            </p>
            <!-- 發光效果 -->
            <div
              class="absolute inset-0 animate-pulse bg-gradient-to-r from-red-500/10 via-red-200/10 to-red-500/10 blur-xl dark:from-red-500/20 dark:via-white/10 dark:to-red-500/20"
            />
          </div>
        </div>
      </div>

      <!-- 特色卡片網格 - 使用 flex-1 和 overflow-auto -->
      <div class="flex-1 overflow-y-auto px-4">
        <div class="mx-auto max-w-7xl">
          <div class="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div
              v-for="(item, index) in features" :key="item.title"
              class="group relative overflow-hidden rounded-2xl transition-all duration-500 hover:scale-105"
              :class="{ 'animate-slide-up': isVisible }" :style="{ 'animation-delay': `${index * 200}ms` }"
            >
              <!-- 液態玻璃外層 -->
              <div
                class="liquid-glass-card absolute inset-0 rounded-2xl border border-gray-200/30 bg-gradient-to-br from-white/80 via-gray-50/60 to-white/80 backdrop-blur-xl dark:border-white/10 dark:from-white/5 dark:via-black/40 dark:to-white/5"
              >
                <!-- 流動光澤 -->
                <div
                  class="animate-liquid-shimmer absolute inset-0 bg-gradient-to-tr from-transparent via-red-500/10 to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100 dark:via-white/10"
                />
              </div>

              <!-- 玻璃邊緣高光 -->
              <div
                class="absolute inset-0 rounded-2xl bg-gradient-to-br from-red-500/10 via-transparent to-red-500/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100 dark:from-white/20 dark:to-red-500/20"
              />

              <!-- 紅色發光邊框 -->
              <div
                class="absolute inset-0 rounded-2xl bg-gradient-to-r opacity-0 blur-sm transition-opacity duration-500 group-hover:opacity-30"
                :class="item.color"
              />

              <!-- 內層玻璃效果 -->
              <div
                class="absolute inset-[1px] rounded-2xl bg-gradient-to-br from-white/95 via-gray-50/95 to-white/95 backdrop-blur-sm dark:from-black/80 dark:via-zinc-900/80 dark:to-black/80"
              />

              <!-- 玻璃反射條紋 -->
              <div class="absolute left-0 top-0 h-full w-1/3 bg-gradient-to-r from-gray-200/20 to-transparent opacity-50 dark:from-white/5" />
              <div
                class="absolute right-0 top-0 h-full w-1/4 bg-gradient-to-l from-red-500/10 to-transparent opacity-30 dark:from-red-500/5"
              />

              <!-- 卡片內容 -->
              <div class="relative z-10 p-4">
                <!-- 上方魔法閃爍點 -->
                <div class="mb-3 flex justify-end">
                  <div class="flex space-x-1">
                    <div
                      class="h-1.5 w-1.5 animate-pulse rounded-full bg-red-500"
                      :style="{ 'animation-delay': `${index * 100}ms` }"
                    />
                    <div
                      class="h-1.5 w-1.5 animate-pulse rounded-full bg-white"
                      :style="{ 'animation-delay': `${index * 150}ms` }"
                    />
                    <div
                      class="h-1.5 w-1.5 animate-pulse rounded-full bg-red-400"
                      :style="{ 'animation-delay': `${index * 200}ms` }"
                    />
                  </div>
                </div>

                <!-- 圖標與文字區域 -->
                <a :href="item.url" class="block transition-transform duration-300 group-hover:translate-y-[-2px]">
                  <div class="mb-3 flex items-start gap-3">
                    <!-- 圖標 -->
                    <div class="relative flex-shrink-0">
                      <div
                        class="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r p-3 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110"
                        :class="item.color"
                      >
                        <component :is="item.icon" class="h-6 w-6 text-white" />
                      </div>
                      <!-- 圖標發光效果 -->
                      <div
                        class="absolute inset-0 rounded-full bg-gradient-to-r opacity-50 blur-lg transition-opacity duration-300 group-hover:opacity-75"
                        :class="item.color"
                      />
                    </div>

                    <!-- 標題與副標題 -->
                    <div class="flex-1">
                      <h3
                        class="mb-2 bg-gradient-to-r from-gray-900 to-red-600 bg-clip-text text-base font-bold text-transparent md:text-lg dark:from-white dark:to-red-200"
                      >
                        {{ item.title }}
                      </h3>
                      <p
                        class="text-xs leading-relaxed text-gray-600 transition-colors duration-300 group-hover:text-gray-800 md:text-sm dark:text-gray-400 dark:group-hover:text-gray-300"
                      >
                        {{ item.description }}
                      </p>
                    </div>
                  </div>

                  <!-- 圖片區域 -->
                  <div class="relative overflow-hidden rounded-lg">
                    <img
                      :src="item.img"
                      class="h-24 w-full object-cover transition-transform duration-500 group-hover:scale-110 md:h-28"
                      :alt="item.title"
                    >
                    <!-- 圖片遮罩效果 -->
                    <div
                      class="absolute inset-0 bg-gradient-to-t from-white/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:from-black/60"
                    />

                    <!-- 玻璃光澤移動效果 -->
                    <div
                      class="animate-glass-shine absolute inset-0 bg-gradient-to-r from-transparent via-red-500/30 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 dark:via-white/30"
                      style="transform: translateX(-100%)"
                    />
                  </div>
                </a>

                <!-- 底部裝飾線 -->
                <div
                  class="mt-2 h-px w-0 bg-gradient-to-r transition-all duration-500 group-hover:w-full"
                  :class="item.color"
                />
              </div>

              <!-- 懸浮粒子效果 -->
              <div class="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div class="absolute left-1/4 top-1/4 h-1 w-1 animate-ping rounded-full bg-red-500" />
                <div
                  class="absolute right-1/3 top-1/3 h-1 w-1 animate-ping rounded-full bg-red-300 dark:bg-white"
                  style="animation-delay: 0.5s"
                />
                <div
                  class="absolute bottom-1/3 left-1/3 h-1 w-1 animate-ping rounded-full bg-red-400"
                  style="animation-delay: 1s"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 底部裝飾 -->
      <div class="mt-3 flex flex-shrink-0 justify-center px-4 md:mt-4">
        <div class="relative">
          <!-- 液態玻璃分隔線 -->
          <div
            class="h-px w-48 overflow-hidden rounded-full bg-gradient-to-r from-transparent via-red-500 to-transparent md:w-64"
          >
            <!-- 流動光澤效果 -->
            <div
              class="animate-liquid-flow absolute inset-0 bg-gradient-to-r from-transparent via-red-300/50 to-transparent dark:via-white/50"
            />
          </div>
          <!-- 玻璃反射 -->
          <div class="absolute inset-0 bg-gradient-to-r from-transparent via-red-200/10 to-transparent blur-sm dark:via-white/10" />
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped>
/* 增強液態玻璃效果 */
.liquid-glass {
  position: relative;
  overflow: hidden;
}

.liquid-glass::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
  animation: rotateGlass 15s linear infinite;
}

@keyframes rotateGlass {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}

/* 卡片懸浮時的液態效果 */
.group:hover .liquid-glass-card {
  box-shadow:
    0 8px 32px 0 rgba(239, 68, 68, 0.15),
    0 16px 64px 0 rgba(239, 68, 68, 0.08),
    inset 0 1px 1px 0 rgba(255, 255, 255, 0.15),
    inset 0 -1px 1px 0 rgba(0, 0, 0, 0.1);
}

.dark .group:hover .liquid-glass-card {
  box-shadow:
    0 8px 32px 0 rgba(239, 68, 68, 0.2),
    0 16px 64px 0 rgba(239, 68, 68, 0.1),
    inset 0 1px 1px 0 rgba(255, 255, 255, 0.15),
    inset 0 -1px 1px 0 rgba(0, 0, 0, 0.3);
}

/* 玻璃光澤滾動效果 */
@keyframes glassScroll {
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0% 50%;
  }
}
</style>
