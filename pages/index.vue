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
                          <source media="(min-width: )" srcset="~/static/icons/icon-design.svg">
                          <img src="~/static/icons/icon-design.svg" class="img-fluid p-3">
                        </picture>
                        <h3>Design</h3>
                        <a href="#none">Saiba mais</a>
                      </div>
                      <div class="col-4 gscard">
                        <picture>
                          <source media="(min-width: )" srcset="~/static/icons/icon-marketing.svg">
                          <img src="~/static/icons/icon-marketing.svg" class="img-fluid p-3">
                        </picture>
                        <h3>Marketing</h3>
                        <a href="#none">Saiba mais</a>
                      </div>
                      <div class="col-4 gscard ">
                        <picture>
                          <source media="(min-width: )" srcset="~/static/icons/icon-tecnologia.svg">
                          <img src="~/static/icons/icon-tecnologia.svg" class="img-fluid p-3">
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
  </DefaultLayout>
</template>

<script>
import DefaultLayout from '~/layouts/Default.vue'

export default {
  name: 'IndexPage',
  components: {
    DefaultLayout
  }
}
</script>

<style scoped>
#index {
  h1 {
  font-size: var(--texto-grande) ;
 }
 p {
  font-size: var(--texto-medio);
 }
}

#sobre img {
  width: 100px;
  
}
</style>
