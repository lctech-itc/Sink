<script setup>
import { onMounted, onUnmounted, ref } from 'vue'

const canvas = ref(null)
const _colorMode = useColorMode()
let ctx = null
let animationId = null
let particles = []

class Particle {
  constructor(x, y) {
    this.x = x
    this.y = y
    this.vx = (Math.random() - 0.5) * 0.5
    this.vy = (Math.random() - 0.5) * 0.5
    this.life = Math.random() * 60 + 60
    this.decay = Math.random() * 0.015 + 0.005
    this.size = Math.random() * 3 + 1
    this.opacity = 1
    // 黑紅白配色：紅色調 (0-30度) 和白色
    this.hue = Math.random() > 0.3 ? Math.random() * 30 : 0
    this.saturation = Math.random() > 0.3 ? 100 : 0 // 紅色或白色
  }

  update() {
    this.x += this.vx
    this.y += this.vy
    this.life--
    this.opacity -= this.decay

    // 添加一些飄動效果
    this.vx += (Math.random() - 0.5) * 0.02
    this.vy += (Math.random() - 0.5) * 0.02

    // 限制速度
    this.vx *= 0.98
    this.vy *= 0.98
  }

  draw(ctx) {
    ctx.save()
    ctx.globalAlpha = Math.max(0, this.opacity)

    // 根據主題選擇顏色
    const isDark = document.documentElement.classList.contains('dark')

    // 創建發光效果
    const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size * 2)

    if (isDark) {
      // Dark mode: 紅色和白色
      const lightness = this.saturation === 0 ? 90 : 60
      gradient.addColorStop(0, `hsla(${this.hue}, ${this.saturation}%, ${lightness}%, ${this.opacity})`)
      gradient.addColorStop(0.5, `hsla(${this.hue}, ${this.saturation}%, ${lightness * 0.7}%, ${this.opacity * 0.5})`)
      gradient.addColorStop(1, `hsla(${this.hue}, ${this.saturation}%, 30%, 0)`)
    }
    else {
      // Light mode: 柔和的紅色和淺灰色
      const lightness = this.saturation === 0 ? 70 : 85 // 淺灰或淺紅
      const saturation = this.saturation === 0 ? 0 : 60 // 降低飽和度
      gradient.addColorStop(0, `hsla(${this.hue}, ${saturation}%, ${lightness}%, ${this.opacity * 0.6})`)
      gradient.addColorStop(0.5, `hsla(${this.hue}, ${saturation}%, ${lightness * 0.9}%, ${this.opacity * 0.3})`)
      gradient.addColorStop(1, `hsla(${this.hue}, ${saturation}%, 80%, 0)`)
    }

    ctx.fillStyle = gradient
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.size * 2, 0, Math.PI * 2)
    ctx.fill()

    // 核心亮點
    if (isDark)
      ctx.fillStyle = `hsla(${this.hue}, ${this.saturation}%, 95%, ${this.opacity})`
    else
      ctx.fillStyle = `hsla(${this.hue}, ${this.saturation === 0 ? 0 : 70}%, 75%, ${this.opacity * 0.8})`

    ctx.beginPath()
    ctx.arc(this.x, this.y, this.size * 0.3, 0, Math.PI * 2)
    ctx.fill()

    ctx.restore()
  }

  isDead() {
    return this.life <= 0 || this.opacity <= 0
  }
}

class ConnectionLine {
  constructor(p1, p2, distance) {
    this.p1 = p1
    this.p2 = p2
    this.distance = distance
    this.maxDistance = 120
  }

  draw(ctx) {
    const opacity = Math.max(0, (this.maxDistance - this.distance) / this.maxDistance) * 0.3
    if (opacity > 0.01) {
      const isDark = document.documentElement.classList.contains('dark')
      ctx.save()
      ctx.globalAlpha = opacity

      // 根據主題選擇連接線顏色
      if (isDark)
        ctx.strokeStyle = `hsla(240, 100%, 60%, ${opacity})`
      else
        ctx.strokeStyle = `hsla(0, 70%, 60%, ${opacity * 0.5})` // Light mode 使用淺紅色

      ctx.lineWidth = 0.5
      ctx.beginPath()
      ctx.moveTo(this.p1.x, this.p1.y)
      ctx.lineTo(this.p2.x, this.p2.y)
      ctx.stroke()
      ctx.restore()
    }
  }
}

function initCanvas() {
  if (!canvas.value)
    return

  ctx = canvas.value.getContext('2d')
  resizeCanvas()

  // 初始粒子 - 更多從中間區域生成
  const centerX = canvas.value.width / 2
  const centerY = canvas.value.height / 2

  for (let i = 0; i < 50; i++) {
    let x, y

    // 80% 的初始粒子從中間區域生成
    if (Math.random() < 0.8) {
      const rangeX = canvas.value.width * 0.4
      const rangeY = canvas.value.height * 0.4
      x = centerX + (Math.random() - 0.5) * rangeX * 2
      y = centerY + (Math.random() - 0.5) * rangeY * 2
    }
    else {
      x = Math.random() * canvas.value.width
      y = Math.random() * canvas.value.height
    }

    particles.push(new Particle(x, y))
  }
}

function resizeCanvas() {
  if (!canvas.value)
    return

  canvas.value.width = window.innerWidth
  canvas.value.height = window.innerHeight
}

function animate() {
  if (!ctx || !canvas.value)
    return

  // 根據主題選擇背景顏色
  const isDark = document.documentElement.classList.contains('dark')

  // 清除畫布，使用半透明顏色創建拖尾效果
  if (isDark)
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)' // Dark mode: 黑色
  else
    ctx.fillStyle = 'rgba(255, 255, 255, 0.08)' // Light mode: 白色

  ctx.fillRect(0, 0, canvas.value.width, canvas.value.height)

  // 更新粒子
  particles = particles.filter((particle) => {
    particle.update()
    particle.draw(ctx)
    return !particle.isDead()
  })

  // 繪製連接線
  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const dx = particles[i].x - particles[j].x
      const dy = particles[i].y - particles[j].y
      const distance = Math.sqrt(dx * dx + dy * dy)

      if (distance < 120) {
        const connection = new ConnectionLine(particles[i], particles[j], distance)
        connection.draw(ctx)
      }
    }
  }

  // 隨機添加新粒子
  if (Math.random() < 0.3 && particles.length < 80) {
    let x, y

    // 70% 的機率從畫面中間區域生成，30% 從邊緣生成
    if (Math.random() < 0.7) {
      // 從畫面中間區域生成（中心 60% 的範圍）
      const centerX = canvas.value.width / 2
      const centerY = canvas.value.height / 2
      const rangeX = canvas.value.width * 0.3
      const rangeY = canvas.value.height * 0.3

      x = centerX + (Math.random() - 0.5) * rangeX * 2
      y = centerY + (Math.random() - 0.5) * rangeY * 2
    }
    else {
      // 從邊緣生成
      const edge = Math.floor(Math.random() * 4)

      switch (edge) {
        case 0: // 上邊
          x = Math.random() * canvas.value.width
          y = 0
          break
        case 1: // 右邊
          x = canvas.value.width
          y = Math.random() * canvas.value.height
          break
        case 2: // 下邊
          x = Math.random() * canvas.value.width
          y = canvas.value.height
          break
        case 3: // 左邊
          x = 0
          y = Math.random() * canvas.value.height
          break
      }
    }

    particles.push(new Particle(x, y))
  }

  animationId = requestAnimationFrame(animate)
}

onMounted(() => {
  initCanvas()
  window.addEventListener('resize', resizeCanvas)
  animate()
})

onUnmounted(() => {
  if (animationId) {
    cancelAnimationFrame(animationId)
  }
  window.removeEventListener('resize', resizeCanvas)
})
</script>

<template>
  <div class="particle-container">
    <canvas ref="canvas" class="particle-canvas" />
  </div>
</template>

<style scoped>
.particle-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: -1;
  background: #000;
}

.dark .particle-container {
  background: #000;
}

:root:not(.dark) .particle-container {
  background: #fff;
}

.particle-canvas {
  width: 100%;
  height: 100%;
}
</style>
