<template>
  <section class="mast">
    <div class="grid-lg">
      <header class="mast__header">
        <h1 class="mast__title">
          <slot></slot>
        </h1>
      </header>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss">
.mast {
  position: relative;
  padding: $pad-lg 0 $pad-xs;

  &__title {
    margin-bottom: 0;
  }
}
</style>
