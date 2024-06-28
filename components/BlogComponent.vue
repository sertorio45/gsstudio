<template>
    <!-- Blog e Aprenda Conosco -->
    <section class="min-vh-100 bg-light justify-content-center align-content-center" id="blog-index">
      <div class="container">
        <div class="row">
          <h2 class="text-center py-5">Blog</h2>
          <div class="col">
            <div class="row d-flex">
              <article 
                v-for="article in articles" 
                :key="article.id" 
                class="col-12 col-sm-6 col-md-3"
              >
                <div class="row">
                  <picture>
                    <source :srcset="article.imageUrl || 'https://via.placeholder.com/600x350'">
                    <img :src="article.imageUrl || 'https://via.placeholder.com/600x350'" class="img-fluid" :alt="article.titulo">
                  </picture>
                  <h4 class="pt-2">
                    <nuxt-link :to="`/artigos/${article.slug}`">{{ article.titulo }}</nuxt-link>
                  </h4>
                  <p>{{ article.excerpt }}</p>
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
      ...mapActions('articles', ['fetchArticles'])
    },
    async created() {
      await this.fetchArticles();
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
  </style>
  