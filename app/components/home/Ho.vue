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
    glow: 'rgba(220, 38, 38, 0.15)',
  },
  {
    title: 'JKForum.net',
    description: '全台最大男性娛樂論壇 台灣前百大網站',
    icon: Italic,
    img: 'https://www.ap-ea.asia/upload/images/2022_10_21_081045.jpg',
    url: 'https://jkforum.net',
    color: 'from-red-600 to-red-800',
    glow: 'rgba(220, 38, 38, 0.15)',
  },
  {
    title: 'JKFace.net',
    description: '享受專屬男人的派對 最強粉絲福利',
    icon: Megaphone,
    img: 'https://www.ap-ea.asia/upload/images/2025_01_23_024957.jpg',
    url: 'https://jkface.net',
    color: 'from-red-500 to-rose-700',
    glow: 'rgba(244, 63, 94, 0.15)',
  },
  {
    title: 'JKF AV+',
    description: '世界最快發片平台 台灣唯一全片商授權正版平台',
    icon: Play,
    img: 'https://www.ap-ea.asia/upload/images/2022_10_21_081404.jpg',
    url: 'https://av.jkforum.net',
    color: 'from-red-600 to-rose-800',
    glow: 'rgba(225, 29, 72, 0.15)',
  },
  {
    title: 'JR24h.com',
    description: '人氣女郎周邊商品獨家販售',
    icon: ShoppingBasket,
    img: 'https://www.ap-ea.asia/upload/images/2022_10_21_081555.jpg',
    url: 'https://jr24h.com',
    color: 'from-rose-600 to-red-800',
    glow: 'rgba(225, 29, 72, 0.15)',
  },
  {
    title: 'JVID.com',
    description: '亞洲第一線上寫真平台 海量高清視頻寫真',
    icon: Star,
    img: 'https://www.ap-ea.asia/upload/images/2022_10_21_081136.jpg',
    url: 'https://jvid.com',
    color: 'from-red-700 to-red-900',
    glow: 'rgba(185, 28, 28, 0.15)',
  },
])

const isVisible = ref(false)

onMounted(() => {
  setTimeout(() => {
    isVisible.value = true
  }, 100)
})

function handleMouseMove(e) {
  const card = e.currentTarget
  const rect = card.getBoundingClientRect()
  const x = e.clientX - rect.left
  const y = e.clientY - rect.top
  card.style.setProperty('--mouse-x', `${x}px`)
  card.style.setProperty('--mouse-y', `${y}px`)
}
</script>

<template>
  <div
    class="
      h-screen overflow-hidden bg-white transition-colors duration-500
      dark:bg-[#050505]
    "
  >
    <!-- 粒子背景 -->
    <ParticleBackground />

    <!-- 主要內容 -->
    <main
      class="
        relative z-10 flex h-full flex-col px-4 py-4
        md:py-6 mt-8
      "
    >
      <!-- 標題區域 -->
      <header
        class="
          mb-6 flex-shrink-0 text-center
          md:mb-8
        "
        :class="[isVisible ? 'translate-y-0 opacity-100' : `
          translate-y-4 opacity-0
        `]"
        style="transition: all 1s cubic-bezier(0.22, 1, 0.36, 1);"
      >
        <div class="inline-block">
          <div class="relative mb-2">
            <h1
              class="
                text-5xl font-black tracking-tighter
                sm:text-6xl
                md:text-7xl
                lg:text-8xl
              "
            >
              <span
                class="
                  text-black
                  dark:text-white
                "
              >JK</span><span
                class="text-red-600"
              >F</span>
            </h1>
            <!-- 背景發光 -->
            <div
              class="
                absolute -inset-x-8 -inset-y-4 -z-10 bg-red-600/10 blur-[60px]
                dark:bg-red-600/20
              "
            />
          </div>
          <div class="flex items-center justify-center gap-3">
            <div
              class="
                h-px w-5 bg-red-600/50
                md:w-8
              "
            />
            <p
              class="
                text-[9px] font-bold tracking-[0.3em] text-gray-500 uppercase
                md:text-[10px]
                dark:text-gray-400
              "
            >
              亞洲第一男性娛樂品牌
            </p>
            <div
              class="
                h-px w-5 bg-red-600/50
                md:w-8
              "
            />
          </div>
        </div>
      </header>

      <!-- 特色卡片網格 - 滾動區域 -->
      <div class="custom-scrollbar flex-1 overflow-y-auto px-2 pb-6">
        <div class="mx-auto w-full max-w-6xl">
          <div
            class="
              grid gap-4
              sm:grid-cols-1
              md:grid-cols-2
              lg:grid-cols-3
            "
          >
            <a
              v-for="(item, index) in features"
              :key="item.title"
              :href="item.url"
              target="_blank"
              class="
                group relative flex flex-col overflow-hidden rounded-[1.5rem]
                border border-gray-200 bg-white/40 p-1 transition-all
                duration-500
                hover:-translate-y-1 hover:border-red-500/30
                hover:shadow-[0_10px_30px_rgba(220,38,38,0.1)]
                dark:border-white/5 dark:bg-zinc-900/40
                dark:hover:border-red-500/20
              "
              :class="[isVisible ? 'translate-y-0 opacity-100' : `
                translate-y-8 opacity-0
              `]"
              :style="{ transitionDelay: `${index * 100}ms`, transitionDuration: '0.8s', transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)' }"
              @mousemove="handleMouseMove"
            >
              <!-- 圖片容器 - 更加扁平 -->
              <div
                class="relative aspect-[16/6] overflow-hidden rounded-[1.2rem]"
              >
                <img
                  :src="item.img"
                  :alt="item.title"
                  class="
                    h-full w-full object-cover transition-transform
                    duration-1000 ease-out
                    group-hover:scale-110
                  "
                >
                <!-- 圖片遮罩 -->
                <div
                  class="
                    absolute inset-0 bg-gradient-to-t from-black/80 via-black/20
                    to-transparent opacity-60 transition-opacity duration-500
                    group-hover:opacity-40
                  "
                />

                <!-- 圖標懸浮 - 更加緊湊 -->
                <div
                  class="
                    absolute bottom-3 left-3 flex h-8 w-8 items-center
                    justify-center rounded-lg bg-white/10 p-2 shadow-2xl
                    backdrop-blur-xl transition-all duration-500
                    group-hover:scale-110 group-hover:bg-red-600
                  "
                >
                  <component
                    :is="item.icon" class="
                      h-full w-full text-white transition-colors duration-300
                    "
                  />
                </div>
              </div>

              <!-- 文字內容 - 緊湊佈局 -->
              <div class="flex flex-1 flex-col px-4 py-3">
                <div class="mb-1 flex items-center justify-between">
                  <h3
                    class="
                      text-base font-bold tracking-tight text-gray-900
                      dark:text-white
                    "
                  >
                    {{ item.title }}
                  </h3>
                  <div
                    class="
                      h-1 w-1 rounded-full bg-red-600 opacity-0
                      transition-opacity duration-500
                      group-hover:opacity-100
                    "
                  />
                </div>
                <p
                  class="
                    text-[11px] leading-snug text-gray-500
                    dark:text-gray-400
                  "
                >
                  {{ item.description }}
                </p>

                <!-- 底部互動提示 -->
                <div class="mt-auto pt-2">
                  <div
                    class="
                      flex items-center text-[8px] font-black tracking-[0.2em]
                      text-red-600 uppercase opacity-0 transition-all
                      duration-500
                      group-hover:translate-x-1 group-hover:opacity-100
                    "
                  >
                    Explore
                    <svg xmlns="http://www.w3.org/2000/svg" class="ml-1 h-2 w-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>

              <!-- 鼠標跟隨發光效果 -->
              <div
                class="
                  pointer-events-none absolute inset-0 z-0 opacity-0
                  transition-opacity duration-500
                  group-hover:opacity-100
                "
                :style="{
                  background: `radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), ${item.glow} 0%, transparent 80%)`,
                }"
              />
            </a>
          </div>

          <!-- 底部裝飾 -->
          <footer class="mt-12 flex flex-col items-center gap-4 text-center">
            <div
              class="
                h-px w-16 bg-gradient-to-r from-transparent via-red-600/30
                to-transparent
              "
            />
            <p
              class="
                text-[9px] font-medium tracking-[0.4em] text-gray-400 uppercase
                dark:text-gray-600
              "
            >
              © 2025 JKF Entertainment. All Rights Reserved.
            </p>
          </footer>
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped>
.custom-scrollbar::-webkit-scrollbar {
  width: 4px;
}

.custom-scrollbar::-webkit-scrollbar-track {
  background: transparent;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background: rgba(220, 38, 38, 0.1);
  border-radius: 10px;
}

.dark .custom-scrollbar::-webkit-scrollbar-thumb {
  background: rgba(220, 38, 38, 0.2);
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: rgba(220, 38, 38, 0.3);
}
</style>
