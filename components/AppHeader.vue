<template>
  <header class="app-header">
    <div class="app-header__grid">
      <nav class="app-header__tools is-left">
        <span class="toggle-topics">Topics</span>
      </nav>
      <a class="app-header__brand">Nuesie</a>
      <nav class="app-header__tool is-right">
        <div class="weather">
          <span class="weather__icon">🌧️</span>
          <span class="weather__text">It's Shitty Out</span>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'AppHeader'
}
</script>

<style lang="scss">
.app-header {
  z-index: $z-app-header;
  position: fixed;
  display: flex;
  align-items: center;
  height: $header-height-sm;
  width: 100%;
  color: $color-alpha;
  background-color: $color-white;
  transition: background-color 0.2s ease;

  @media (min-width: $mq-med) {
    height: $header-height-lg;
  }

  &.is-fixed {
    position: fixed;
    height: $header-height-sm;
    background-color: $color-white;
    box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.1);
    animation: fade-down 0.5s $ease-cb-2;

    .menu-is-open & {
      background-color: $color-trans;
      box-shadow: none;
      transition: background-color 0.4s ease;
    }

    .menu-is-closing & {
      transition-delay: background-color 0.4s 0.4s ease;
    }
  }

  &__grid {
    display: flex;
    align-items: center;
    max-width: 95%;
    width: 95%;
    margin: 0 auto;
  }

  &__brand {
    position: absolute;
    left: 0;
    right: 0;
    width: 3em;
    margin: 0 auto;
    color: $color-grey-dark;

    svg path {
      fill: $color-alpha;
    }
  }

  &__tools {
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    color: $color-grey-dark;
    font-weight: 400;
  }
  &__tools.is-left {
    margin-right: auto;

    & > * {
      margin-right: 2em;
    }
  }

  &__tools.is-right {
    margin-left: auto;
    transition: opacity 0.4s 0.1s ease;

    & > * {
      margin-left: 2em;
    }
  }

  &__date,
  &__time {
    font-size: $font-sm;
    white-space: nowrap;
    line-height: 1;

    @media (max-width: $mq-sm) {
      display: none;
    }
  }

  &__date {
    font-weight: 700;
  }

  &__avatar-img {
    width: 2em;
    border-radius: 100%;

    @media (min-width: $mq-med) {
      width: 2.75em;
    }
  }

  &__cart {
    i {
      font-size: 1.3em;
    }
  }
}
.weather {
  display: flex;
  align-items: center;

  &__icon {
    filter: grayscale(100%);
  }
  &__text {
    margin-left: 0.5em;
    font-size: 0.7em;
    color: $color-grey-dark;
  }
}
</style>
