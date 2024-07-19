<template>
  <!-- Blog e Aprenda Conosco -->
  <section class="min-vh-100 justify-content-center align-content-center" id="blog-index">
    <div class="container">
      <div class="row">
        <h2 class="text-center py-5">Blog</h2>
        <div class="col">
          <div class="row d-flex gscard">
            <article 
              v-for="article in articles" 
              :key="article.id" 
              class="col-12 col-sm-6 col-md-3"
            >
              <div class="row">
                <picture v-if="hasThumbnail(article)">
                  <source :srcset="getImageUrl(article.thumb.formats.thumbnail.url)">
                  <img :src="getImageUrl(article.thumb.formats.thumbnail.url)" class="img-fluid mb-2" :alt="article.titulo">
                </picture>
                <img v-else src="https://via.placeholder.com/400x400" class="img-fluid pb-2" alt="Default Image">
                <h4 class="mt-2">
                  <div class="mb-3">
                    <span v-html="article.category.title" class="article-category"></span>
                  </div>
                  <nuxt-link :to="`/artigos/${article.slug}`">{{ article.titulo }}</nuxt-link>
                </h4>
                <div v-html="article.content"></div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Blog e Aprenda Conosco -->
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters('articles', ['getArticles']),
    articles() {
      return this.getArticles;
    }
  },
  methods: {
    ...mapActions('articles', ['fetchArticles']),
    hasThumbnail(article) {
      return article.thumb 
        && article.thumb.formats 
        && article.thumb.formats.thumbnail;
    },
    getImageUrl(path) {
      const url = `${this.baseURL}${path}`;
      console.log('Generated image URL:', url); // Log para depuração
      return url;
    }
  },
  async created() {
    await this.fetchArticles();
    console.log('Base URL:', this.baseURL); // Log para verificar a baseURL
  },
  data() {
    return {
      baseURL: process.env.VITE_STRAPI_URL || 'http://localhost:1337' // Definir uma URL padrão para testes locais
    }
  }
}
</script>

<style scoped>
#blog-index a {
  font-size: 1rem !important;
  color: #000 !important;
  text-decoration: none;
}
#blog-index a:hover {
  font-size: 1rem !important;
  text-decoration: underline;
  color: #000 !important;
}
#blog-index {
  font-size: 12px;
  color: #7a7a7a;
}

.article-category {
  font-weight: normal;
  border-radius: 100px;
  border: 10px #000;
  font-size: 10px;
  padding: 3px 10px;
  background-color: #f4eaff;
  color: var(--color-secondary);
}
</style>
