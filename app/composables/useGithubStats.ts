import { useAppConfig, useFetch } from '#imports'
import { computed, ref } from 'vue'

export function useGithubStats() {
  const { github } = useAppConfig()
  const repo = github?.replace?.(/^https:\/\/github\.com\//, '') ?? ''

  if (!repo) {
    const stats = computed(() => ({ stars: '0', forks: '0' }))
    return { stats, status: ref('idle') as Ref<'idle' | 'pending' | 'success' | 'error'> }
  }

  const { data, status } = useFetch(
    `https://api.github.com/repos/${repo}`,
    {
      key: 'github-stats',
      server: false,
      lazy: true,
      dedupe: 'defer',
      transform: (res: { stargazers_count: number, forks_count: number }) => ({
        stars: res.stargazers_count,
        forks: res.forks_count,
      }),
      getCachedData: (key, nuxtApp) => nuxtApp.payload?.data?.[key] ?? nuxtApp.static?.data?.[key],
      onResponseError: ({ response }) => {
        // Silently handle GitHub API errors (rate limit, network issues, etc.)
        console.warn(`[useGithubStats] GitHub API error: ${response.status}`)
      },
    },
  )

  const rawStats = computed(() => ({
    stars: data.value?.stars ?? 6000,
    forks: data.value?.forks ?? 4000,
  }))

  const formattedStats = computed(() => ({
    stars: formatNumber(rawStats.value.stars, locale.value),
    forks: formatNumber(rawStats.value.forks, locale.value),
  }))

  return { stats: formattedStats, rawStats, status }
}
