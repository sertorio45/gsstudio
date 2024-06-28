<template>
  <DefaultLayout>
    <!-- Topo -->
    <section class="d-flex align-items-center min-vh-100" id="index">
      <div class="container text-center">
        <div class="row">
          <div class="col">
            <h1>Aumente a <em>performance</em> da sua <em>empresa.</em></h1>
            <p class="my-4">Destaque sua empresa à frente de seus concorrentes com estratégias de branding, marketing e tecnologia.</p>
            <div class="d-flex justify-content-center">
              <a href="#" class="btn btn-primary">Nos conheça um pouco</a>
              <a href="#" class="btn btn-primary-border">Entre em contato rapidamente</a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Topo -->

    <!-- Quem somos -->
    <section class="d-flex align-items-center bg-light py-5" id="sobre">
      <div class="container">
        <div class="row">
          <div class="col-5">
            <h2>Somos especialistas</h2>
            <p class="my-3 d-block">
              Design publicitário, marketing online/offline e websites.
              Na GS STUDIO, combinamos criatividade e estratégias comprovadas para desenvolver campanhas de marketing eficazes e impactantes.
              Nossos especialistas em tecnologia oferecem soluções personalizadas para maximizar a eficiência do seu negócio.
            </p>
            <a href="#" class="btn btn-primary">Nos conheça um pouco</a>
          </div>

          <div class="col-7 text-center align-content-center content-justify-center px-5">
            <div>
              <div class="d-flex">
                <div class="col-4 gscard">
                  <picture>
                    <source srcset="@/static/icons/icon-design.svg">
                    <img src="@/static/icons/icon-design.svg" class="img-fluid p-3">
                  </picture>
                  <h3>Design</h3>
                  <a href="#none">Saiba mais</a>
                </div>
                <div class="col-4 gscard">
                  <picture>
                    <source srcset="@/static/icons/icon-marketing.svg">
                    <img src="@/static/icons/icon-marketing.svg" class="img-fluid p-3">
                  </picture>
                  <h3>Marketing</h3>
                  <a href="#none">Saiba mais</a>
                </div>
                <div class="col-4 gscard">
                  <picture>
                    <source srcset="@/static/icons/icon-tecnologia.svg">
                    <img src="@/static/icons/icon-tecnologia.svg" class="img-fluid p-3">
                  </picture>
                  <h3>Tecnologia</h3>
                  <a href="#none">Saiba mais</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Quem somos -->

<!-- Conquistas -->
<section class="py-5 text-center" id="conquistas">
  <div class="container">
    <div class="row">
      <div class="col-12 col-sm-6 col-md-3 ">
        <div class="gscard">
          <h3><em>+ de <em class="count" data-count="65">0</em> </em></h3>
          <span>Sites produzidos</span>
        </div>
      </div>
      <div class="col-12 col-sm-6 col-md-3">
        <div class="gscard">
          <h3><em>+ de <em class="count" data-count="250">0</em> </em></h3>
          <span>Clientes ativos</span>
        </div>
      </div>
      <div class="col-12 col-sm-6 col-md-3">
        <div class="gscard">
          <h3><em>+ de <em class="count" data-count="80">0</em> </em></h3>
          <span>Marcas desenvolvidas</span>
        </div>
      </div>
      <div class="col-12 col-sm-6 col-md-3">
        <div class="gscard">
          <h3><em>+ de <em class="count" data-count="7">0</em> </em></h3>
          <span>Anos de mercado</span>
        </div>
      </div>
    </div>
  </div>
</section>
<!-- Conquistas -->




  </DefaultLayout>
</template>

<script>
import DefaultLayout from '~/layouts/Default.vue'

export default {
  name: 'IndexPage',
  components: {
    DefaultLayout
  },
  mounted() {
    const counters = document.querySelectorAll('.count');
    const speed = 9000; // Tempo de execução em milissegundos

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          startCounting();
          observer.unobserve(entry.target); // Desobservar após a contagem iniciar
        }
      });
    }, {
      threshold: 1 // Iniciar a contagem quando 50% da seção estiver visível
    });

    const target = document.getElementById('conquistas');
    if (target) {
      observer.observe(target);
    }

    function startCounting() {
      counters.forEach(counter => {
        const updateCount = () => {
          const target = +counter.getAttribute('data-count');
          const count = +counter.innerText;

          const increment = target / (speed / 100); // Incremento para o tempo total

          if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(updateCount, 10); // Atualizar a cada 10ms
          } else {
            counter.innerText = target;
          }
        };

        updateCount();
      });
    }
  }
}

</script>

<style scoped>
#index {
  h1 {
    font-size: var(--texto-grande);
  }
  p {
    font-size: var(--texto-medio);
  }
}

#sobre img {
  width: 100px;
}

#conquistas .gscard {
   height: 10rem !important;
}
</style>
