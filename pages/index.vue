<template>
  <main class="has-header-offset">
    <Mast>Read about some news <br />and learn your ass some 💩</Mast>
    <Search />
    <Results />
  </main>
</template>

<script>
import Mast from '~/components/Mast.vue'
import Search from '~/components/Search.vue'
import Results from '~/components/Results.vue'

export default {
  components: {
    Mast,
    Search,
    Results
  }
}
</script>
