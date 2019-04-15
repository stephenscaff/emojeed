<template>
  <section class="articles">
    <div class="grid-lg">
      <!-- {{ $store.getters.topic }} -->
      <div class="articles__grid">
        <article
          v-for="(article, index) in articles"
          :key="index"
          class="article"
        >
          <a class="article__link" :href="article.url" target="_blank">
            <figure class="article__figure">
              <div
                class="article__img-bg"
                :style="{ backgroundImage: `url(${article.urlToImage})` }"
              ></div>
            </figure>
            <header class="article__header">
              <h4 class="article__title">
                <span class="article__source">{{ article.source.name }}</span>
                <span class="article__headline">{{ article.title }}</span>
              </h4>
              <div class="article__author">
                <img
                  class="article__author-avatar"
                  :src="article.source.name | getSourceAvatar"
                />
                <span class="article__author-name">
                  {{ article.author | capitalize }}
                </span>
              </div>
            </header>
          </a>
        </article>
      </div>
    </div>
  </section>
</template>

<script>
import _ from 'lodash'
import { mapGetters } from 'vuex'

export default {
  data: function() {
    return {
      articles: null
    }
  },

  /**
   * Watch store for updates via getter
   */
  computed: {
    ...mapGetters({
      topic: 'topic'
    })
  },

  watch: {
    topic: function(val) {
      // this.getPosts(this.topic)
      this.debouncedGetPosts()
    }
  },

  created: function() {
    this.debouncedGetPosts = _.debounce(function() {
      this.getPosts(this.topic)
    }, 200)
  },

  /**
   * Set Topic on Load
   */
  mounted: function() {
    this.getPosts('poop')
  },

  methods: {
    getPosts(query) {
      console.log('get posts')
      this.$axios
        .get('https://newsapi.org/v2/everything', {
          params: {
            q: query,
            apiKey: process.env.API_KEY
          }
        })
        .then(response => {
          this.articles = response.data.articles
        })
    }
  }
}
</script>

<style lang="scss">
.articles {
  position: relative;
  padding: $pad-sm 0 $pad-lg;

  &__grid {
    @include flex-row($col-pad: 1.5em);
    justify-content: space-between;
  }

  article:nth-of-type(1),
  article:nth-of-type(2) {
    @include flex-col(100%, 50%);
  }
}

.article {
  position: relative;
  padding-bottom: $pad;
  flex-grow: 1;

  &__link {
    position: relative;
  }

  &__figure {
    position: relative;
    height: 24em;
    margin-bottom: $pad-xs;
    background-color: $color-grey-light;
    @include box_shadow_hover();
  }

  &__img-bg {
    @include bg-img-abs();
  }

  &__title {
    font-family: $font-paragraph;
    font-weight: 400;
    font-size: 1em;
  }

  &__source {
    display: block;
    font-weight: 700;
    margin-bottom: 0.75em;
  }

  &__headline {
    display: block;
    max-width: 30em;
  }

  &__author {
    display: flex;
    align-items: center;
    margin-top: $pad-sm;
    font-family: $font-mono;
    font-size: 0.8em;
    color: #999;

    &-avatar {
      width: 2em;
      height: 2em;
      border-radius: 100%;
      margin-right: 1em;
    }

    &-name {
    }
  }
}
</style>
