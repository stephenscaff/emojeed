<template>
  <section class="search">
    <div class="grid-lg">
      <div class="search__main">
        <span class="search__prefix">
          <i class="search__icon">👀 </i>
        </span>
        <!-- <input v-model="topic" class="search__input" /> -->
        <input
          class="search__input"
          name="topic"
          @input="changed"
          placeholder="Seach for shit"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data: function() {
    return {
      topic: 'poop'
    }
  },

  methods: {
    changed: function(event) {
      this.$store.commit('change', event.target.value)
    }
  }
}
</script>

<style lang="scss">
.search {
  position: sticky;
  width: 100%;
  padding: $pad-sm 0;

  &__main {
    display: flex;
    width: 100%;
    border: 1px solid #ddd;
  }

  &__prefix {
    padding: 0.25em 1em;
    border-right: 1px solid #ddd;
  }

  &__icon {
    position: relative;
    margin: 0 auto;
    align-self: center;
    top: 4px;
    font-size: 2em;
    font-style: normal;
  }

  &__input {
    position: relative;
    display: block;
    border: 0;
    width: 100%;
    min-width: 15em;
    padding-left: 1em;
    font-family: $font-sans;
    font-size: 1.25em;

    @media (min-width: $mq-med) {
      width: 40%;
    }
  }
}
</style>
