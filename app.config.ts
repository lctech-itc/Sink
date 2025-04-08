export default defineAppConfig({
  title: 'JKF.tw',
  // email: 'sink.cool@miantiao.me',
  // github: 'https://github.com/ccbikai/sink',
  // twitter: 'https://sink.cool/kai',
  // telegram: 'https://sink.cool/telegram',
  // mastodon: 'https://sink.cool/mastodon',
  // blog: 'https://sink.cool/blog',
  description: 'jkf.tw 是一個短網址服務，讓你可以縮短網址，方便分享。',
  image: 'https://sink.cool/banner.png',
  previewTTL: 300, // 5 minutes
  slugRegex: /^[a-z0-9]+(?:-[a-z0-9]+)*$/i,
  reserveSlug: [
    'dashboard',
  ],
})
