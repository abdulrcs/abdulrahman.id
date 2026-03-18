module.exports = {
  images: {
    domains: [
      'imagizer.imageshack.com',
      'i.imgur.com',
      'images.unsplash.com',
      'media.giphy.com',
      'cdn-images-1.medium.com',
      'github.com',
    ],
  },
  async rewrites() {
    return [
      {
        source: '/founders-playbook',
        destination: '/founders-playbook.html',
      },
    ]
  },
}
