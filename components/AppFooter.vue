<template>
  <footer class="app-footer">
    <div class="app-header__grid">
      <nav class="app-header__tools is-left">
        <span class="menu-toggle"></span>
      </nav>
      <a class="app-header__brand">Nuesie</a>
      <nav class="app-header__tool is-right"></nav>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter'
}
</script>

<style lang="scss">
.app-footer {
  position: relative;
  padding: $pad-lg 0;
}
</style>
