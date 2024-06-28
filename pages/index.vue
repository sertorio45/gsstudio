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
                <div class="col-4 gscard gscard-border gscard gscard-border-border">
                  <picture>
                    <source srcset="@/static/icons/icon-design.svg">
                    <img src="@/static/icons/icon-design.svg" class="img-fluid p-3" alt="Design">
                  </picture>
                  <h3>Design</h3>
                  <a href="#none">Saiba mais</a>
                </div>
                <div class="col-4 gscard gscard-border">
                  <picture>
                    <source srcset="@/static/icons/icon-marketing.svg">
                    <img src="@/static/icons/icon-marketing.svg" class="img-fluid p-3" alt="Marketing">
                  </picture>
                  <h3>Marketing</h3>
                  <a href="#none">Saiba mais</a>
                </div>
                <div class="col-4 gscard gscard-border">
                  <picture>
                    <source srcset="@/static/icons/icon-tecnologia.svg">
                    <img src="@/static/icons/icon-tecnologia.svg" class="img-fluid p-3" alt="Tecnologia">
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
          <div class="col-12 col-sm-6 col-md-3">
            <div class="gscard gscard-border">
              <h3><em>+ de <em class="count" data-count="65">0</em></em></h3>
              <span>Sites produzidos</span>
            </div>
          </div>
          <div class="col-12 col-sm-6 col-md-3">
            <div class="gscard gscard-border">
              <h3><em>+ de <em class="count" data-count="250">0</em></em></h3>
              <span>Clientes ativos</span>
            </div>
          </div>
          <div class="col-12 col-sm-6 col-md-3">
            <div class="gscard gscard-border">
              <h3><em>+ de <em class="count" data-count="80">0</em></em></h3>
              <span>Marcas desenvolvidas</span>
            </div>
          </div>
          <div class="col-12 col-sm-6 col-md-3">
            <div class="gscard gscard-border">
              <h3><em>+ de <em class="count" data-count="7">0</em></em></h3>
              <span>Anos de mercado</span>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Conquistas -->
    
    <!-- Parceiros -->
    <section class="bg-light min-vh-50 align-content-center justify-content-center" id="parceiros">
      <div class="container text-center">
        <div class="row">
          <h2>Parceiros e clientes</h2>
          <div id="app">
            <div class="col">
              <carousel></carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Parceiros -->

    <!-- Solucoes e servicos -->
    <section class="min-vh-100 align-content-center justify-content-center" id="servicos">
      <div class="container text-center">
        <div class="row justify-content-center align-content-center">
          <h2>Soluções e serviços</h2>
          <p class="my-3">
            A GS STUDIO está comprometida com resultados. Acreditamos que a criatividade e o design, 
            alinhados com uma estratégia eficaz, geram resultados melhores e duradouros. 
          </p>
          <div class="row mt-3">
            <div class="col-12 col-sm-6 col-md-3">
              <div class="gscard gscard-border">
                <picture>
                  <source srcset="@/static/icons/servicos/sites.svg">
                  <img src="@/static/icons/servicos/sites.svg" class="img-fluid p-3" alt="Sites">
                </picture>
                <h3>Sites</h3>
                <span><a href="">Saiba mais</a></span>
              </div>
            </div>
            <div class="col-12 col-sm-6 col-md-3">
              <div class="gscard gscard-border">
                <picture>
                  <source srcset="@/static/icons/servicos/gestao_de_conteudo.svg">
                  <img src="@/static/icons/servicos/gestao_de_conteudo.svg" class="img-fluid p-3" alt="Redes sociais">
                </picture>
                <h3>Redes sociais</h3>
                <span><a href="#none">Saiba mais</a></span>
              </div>
            </div>
            <div class="col-12 col-sm-6 col-md-3">
              <div class="gscard gscard-border">
                <picture>
                  <source srcset="@/static/icons/servicos/lojas_virtuais.svg">
                  <img src="@/static/icons/servicos/lojas_virtuais.svg" class="img-fluid p-3" alt="Lojas virtuais">
                </picture>
                <h3>Lojas virtuais</h3>
                <span><a href="#none">Saiba mais</a></span>
              </div>
            </div>
            <div class="col-12 col-sm-6 col-md-3">
              <div class="gscard gscard-border">
                <picture>
                  <source srcset="@/static/icons/servicos/branding.svg">
                  <img src="@/static/icons/servicos/branding.svg" class="img-fluid p-3" alt="Marcas">
                </picture>
                <h3>Marcas</h3>
                <span><a href="#none">Saiba mais</a></span>
              </div>
            </div>
          </div>
          <div class="row mt-5">
            <div class="col"><a href="" class="btn btn-primary"> Veja mais serviços</a></div>
          </div>
        </div>
      </div>
    </section>
    <!-- Solucoes e servicos -->

    <!-- CTA -->
    <section class="min-vh-50 text-center gscard" id="cta">
      <div class="container justify-content-center align-content-center bg-cta">
        <div class="row">
          <div class="col text-light">
            <h2 class="text-light">Transforme Resultados com Design, Marketing e Tecnologia!</h2>
            <div class="subheadline d-flex justify-content-center py-2">
              <p>Potencialize seu negócio com soluções criativas e inovadoras. Nós entregamos resultados excepcionais através de estratégias personalizadas e tecnologia de ponta.</p>
            </div>
            <a href="#none" class="btn btn-white"><em>Começar orçamento</em></a>  
          </div>
        </div>
        </div>

    </section>
    <!-- CTA -->

    <!-- Blog e Aprenda Conosco -->
    <BlogComponent />
    <!-- Blog e Aprenda Conosco -->

  </DefaultLayout>
</template>

<script>
import DefaultLayout from '~/layouts/Default.vue'
import BlogComponent from '~/components/BlogComponent.vue'

export default {
  name: 'IndexPage',
  components: {
    DefaultLayout,
    BlogComponent
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
      threshold: 1 // Iniciar a contagem quando 100% da seção estiver visível
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

#conquistas .gscard gscard-border {
  height: 10rem !important;
}

/* parceiros  */
.carousel-item {
  transition: transform 0.5s ease, opacity 0.5s ease;
}
.carousel-fade .carousel-item {
  opacity: 0;
  transition-duration: 0.5s;
  transition-property: opacity;
}
.carousel-fade .carousel-item.active,
.carousel-fade .carousel-item-next.carousel-item-start,
.carousel-fade .carousel-item-prev.carousel-item-end {
  opacity: 1;
}
.carousel-fade .carousel-item-next,
.carousel-fade .carousel-item-prev,
.carousel-fade .carousel-item.active.carousel-item-start,
.carousel-fade .carousel-item.active.carousel-item-end {
  transform: translateX(0);
}
.carousel-item img {
  filter: blur(5px);
  transition: filter 0.5s ease;
}
.carousel-item.active img {
  filter: blur(0);
}

/* servicos  */
#servicos p {
  width: calc(1100px - 30%);
}

#servicos img {
  width: 50%;
}

#servicos .gscard {
  width: auto;
  margin: 1px;
  padding: 2rem !important;
  height: 100% !important;
}

#cta .container{
  height: 50vh ;
  border-radius: 10px;

}
#cta .col p{
  width: calc(900px - 20%);

}

#cta section h2 { color: #fff;}



</style>
