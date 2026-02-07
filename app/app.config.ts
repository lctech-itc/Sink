export default defineAppConfig({
  title: 'JKF.tw',
  // email: 'sink.cool@miantiao.me',
  // github: 'https://github.com/ccbikai/sink',
  // twitter: 'https://sink.cool/kai',
  // telegram: 'https://sink.cool/telegram',
  // mastodon: 'https://sink.cool/mastodon',
  description: 'jkf.tw 是一個短網址服務，分享精彩內容。',
  // image: 'https://jkf.tw/banner.png',
  previewTTL: 300, // 5 minutes
  slugRegex: /^[a-z0-9]+(?:-[a-z0-9]+)*$/i,
  reserveSlug: [
    'dashboard',
  ],
})
