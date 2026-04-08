export default function sitemap() {
  const base = 'https://www.insulasiatap.biz.id'
  const now = new Date()

  const blogSlugs = [
    'kenapa-rumah-panas',
    'cara-mengurangi-panas-atap',
    'perbandingan-insulasi',
    'apakah-insulasi-efektif',
    'atap-seng-panas',
    'gudang-panas',
    'harga-insulasi-2026',
    'cara-menghitung-kebutuhan',
    'distributor-klaten',
    'insulasi-vs-ac',
    'bubble-vs-foam',
    'faq-insulasi',
  ]

  const staticPages = [
    { url: base, priority: 1.0, changeFrequency: 'weekly' },
    { url: `${base}/jogja`, priority: 0.9, changeFrequency: 'weekly' },
    { url: `${base}/blog`, priority: 0.8, changeFrequency: 'weekly' },
  ]

  const blogPages = blogSlugs.map(slug => ({
    url: `${base}/blog/${slug}`,
    priority: 0.7,
    changeFrequency: 'monthly',
  }))

  return [...staticPages, ...blogPages].map(page => ({
    ...page,
    lastModified: now,
  }))
}
