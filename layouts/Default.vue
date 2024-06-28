<template>
    <div :class="{ hidden: isLoading }">
      <Header />
      <!-- Slot para o conteúdo principal -->
      <main>
        <slot></slot>
      </main>
      <Footer />
    </div>
  </template>
  
  <script>
  import Header from '~/components/Header.vue'
  import Footer from '~/components/Footer.vue'
  
  export default {
    name: 'DefaultLayout',
    components: {
      Header,
      Footer
    },
    data() {
      return {
        isLoading: true
      }
    },
    mounted() {
      window.addEventListener('load', this.onLoad);
    },
    beforeDestroy() {
      window.removeEventListener('load', this.onLoad);
    },
    methods: {
      onLoad() {
        this.isLoading = false;
      }
    }
  }
  </script>
  
  <style scoped>
  .hidden {
    display: none;
  }
  </style>
  