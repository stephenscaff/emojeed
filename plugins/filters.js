import Vue from 'vue'

Vue.filter('capitalize', function(value) {
  if (!value) return ''
  value = value.toString()
  return value.charAt(0).toUpperCase() + value.slice(1)
})

Vue.filter('getSourceAvatar', function(value) {
  if (!value) return ''
  value = value
    .toString()
    .replace(/\s+/g, '-')
    .replace('.com', '')
    .replace('.net', '')
    .toLowerCase()
  // return `/_nuxt/assets/images/avatars/${value}.png`
  return require(`@/assets/images/avatars/${value}.png`)
})
