<template>
    <div id="carouselSection">
      <div id="carouselExampleFade" class="carousel">
        <div class="carousel-inner">
          <div v-for="(imageSet, index) in chunkedImages" :key="index" :class="['carousel-item', { active: index === 0 }]">
            <div class="row">
              <div v-for="(image, subIndex) in imageSet" :key="subIndex" class="col-2">
                <img :src="image" class="d-block w-100" alt="...">
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="fade-left"></div>
      <div class="fade-right"></div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        images: [],
        intervalId: null,
        currentIndex: 0
      };
    },
    computed: {
      chunkedImages() {
        let chunks = [];
        for (let i = 0; i < this.images.length; i += 6) {
          chunks.push(this.images.slice(i, i + 6));
        }
        return chunks;
      }
    },
    methods: {
      importAll(r) {
        return r.keys().map(r);
      },
      startCarousel() {
        const carouselElement = document.querySelector('#carouselExampleFade');
        const items = carouselElement.querySelectorAll('.carousel-item');
  
        const nextSlide = () => {
          items[this.currentIndex].classList.remove('active');
          this.currentIndex = (this.currentIndex + 1) % items.length;
          items[this.currentIndex].classList.add('active');
        };
  
        this.intervalId = setInterval(nextSlide, 1500); // Ajuste o tempo para uma transição mais suave
      }
    },
    mounted() {
      const images = this.importAll(require.context('@/assets/img/parceiros', false, /\.(png|jpe?g|svg|webp)$/));
      this.images = images;
  
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.startCarousel();
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.5 });
  
      const carouselSection = document.querySelector('#carouselSection');
      observer.observe(carouselSection);
    },
    beforeDestroy() {
      clearInterval(this.intervalId);
    }
  }
  </script>
  
  <style>
  #carouselSection {
    position: relative;
    overflow: hidden;
  }
  
  .carousel-item {
    transition: transform 0.8s ease, opacity 0.8s ease;
  }
  
  .carousel-item.active {
    opacity: 1;
    transform: translateX(0);
  }
  
  .fade-left, .fade-right {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 15%;
    z-index: 2;
    pointer-events: none;
  }
  
  .fade-left {
    left: 0;
    background: linear-gradient(to right, white, transparent);
  }
  
  .fade-right {
    right: 0;
    background: linear-gradient(to left, white, transparent);
  }
  </style>
  