<template>
  <DefaultLayout>
    <main>
      <!-- <section class="topo">
        <div class="container">
          <div class="row">
            <div class="col d-flex align-items-center">
              <NuxtLink to="/" class="m-1">Página Inicial</NuxtLink> / 
              <NuxtLink to="/blog" class="m-1">Blog</NuxtLink> / 
              <h1 v-html="article.titulo" class="m-1"></h1>
            </div>
          </div>
        </div>
      </section> -->
      <section class="my-5" id="article-detail">
        <div class="container my-5">
          <div class="row">
            <div class="col-2">
              <NuxtLink to="/blog" class="btn btn-primary-border">< Voltar</NuxtLink>
            </div>
            <div class="col-7">
              <div class="mb-3">
                <span v-html="article.category.title" class="article-category"></span>
                <span v-html="formatDate(article.published_at)" class="mx-5"></span>
              </div>
              <h1 v-html="article.titulo"></h1>
              <div class="my-4">
                <picture v-if="hasThumbnail(article)">
                  <source :srcset="getImageUrl(article.thumb.url)">
                  <img :src="getImageUrl(article.thumb.url)" class="img-fluid" :alt="article.titulo">
                </picture>
                <img v-else src="thumb_blog_gsstudio.webp" class="img-fluid" alt="Default Image">
              </div>
              <div v-html="article.content"></div>
            </div>
            <div class="col-3"></div>
          </div>
        </div>
      </section>
    </main>
  </DefaultLayout>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import DefaultLayout from '~/layouts/DefaultLayout.vue';

export default {
  components: {
    DefaultLayout
  },
  async asyncData({ $axios, params }) {
    try {
      const response = await $axios.$get(`/articles?slug=${params.slug}`);
      const article = response.length ? response[0] : null;
      return { article };
    } catch (error) {
      console.error('Error fetching article:', error);
      return { article: null };
    }
  },
  data() {
    return {
      baseURL: process.env.VITE_STRAPI_URL || 'http://localhost:1337',
      article: {}
    };
  },
  computed: {
    ...mapGetters('articles', ['getArticles']),
    articles() {
      return this.getArticles;
    }
  },
  methods: {
    ...mapActions('articles', ['fetchArticles']),
    hasThumbnail(article) {
      return article.thumb && article.thumb.url;
    },
    getImageUrl(path) {
      const url = new URL(path, this.baseURL).href;
      console.log('Generated image URL:', url);
      return url;
    },
    formatDate(date) {
      if (!date) return '';
      const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(date).toLocaleDateString('pt-BR', options);
    }
  },
  async created() {
    await this.fetchArticles();
    console.log('Base URL:', this.baseURL);
  },
  mounted() {
    window.scrollTo(0, 0);
  }
}
</script>

<style scoped>
#article-detail {
  padding: 2rem;
}
</style>
