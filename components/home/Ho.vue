<script setup>
import { AreaChart, Hourglass, Link, Paintbrush, ServerOff, Sparkles } from 'lucide-vue-next'

const features = ref([
  {
    title: 'jkforum.net',
    description:
          '全台最大男性娛樂論壇 台灣前百大網站',
    icon: Link,
    img: 'https://www.ap-ea.asia/upload/images/2022_10_21_081045.jpg',
    url: 'https://jkforum.net',
  },
  {
    title: 'jkface',
    description:
          '享受專屬男人的派對 最強粉絲福利',
    icon: AreaChart,
    img: 'https://www.ap-ea.asia/upload/images/2025_01_23_024957.jpg',
    url: 'https://jkface.net',
  },
  {
    title: 'jvid',
    description:
          '亞洲第一線上寫真平台 海量高清視頻寫真',
    icon: ServerOff,
    img: 'https://www.ap-ea.asia/upload/images/2022_10_21_081136.jpg',
    url: 'https://jvid.com',
  },
  {
    title: 'JKF AV+',
    description:
          '世界最快發片平台 台灣唯一全片商授權正版平台',
    icon: Paintbrush,
    img: 'https://www.ap-ea.asia/upload/images/2022_10_21_081404.jpg',
    url: 'https://av.jkforum.net',
  },
  {
    title: 'JR24h',
    description:
          '人氣女郎周邊商品獨家販售',
    icon: Sparkles,
    img: 'https://www.ap-ea.asia/upload/images/2022_10_21_081555.jpg',
    url: 'https://jr24h.com',
  },

])
</script>

<template>
  <main class="pt-16 md:py-12">
    <div class="md:pb-12">
      <h2 class="text-4xl font-bold lg:text-5xl lg:tracking-tight">
        JKF
      </h2>
      <p class="my-8 text-lg md:m-0">
        亞洲第一男性娛樂品牌
      </p>
    </div>

    <div class="grid gap-8 md:gap-16 sm:grid-cols-2 md:grid-cols-3">
      <div
        v-for="item in features"
        :key="item.title"
        class="flex items-start gap-4"
      >
        <div class="w-8 h-8 p-2 mt-1 bg-black rounded-full shrink-0">
          <component
            :is="item.icon"
            class="w-4 h-4 text-white"
          />
        </div>
        <div>
          <a :href="item.url">
            <h3 class="text-lg font-semibold">
              {{ item.title }}
            </h3>
            <p class="mt-2 leading-relaxed text-slate-500">
              {{ item.description }}
            </p>
            <img :src="item.img" class=" h-32">
          </a>
        </div>
      </div>
    </div>
  </main>
</template>
