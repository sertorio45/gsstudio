<template>
  <DefaultLayout>
    <!-- Fale conosco -->
    <section class="topo">
      <div class="container">
        <div class="row">
          <div class="col d-flex align-items-center">
            <NuxtLink to="/" class="m-1">Página inicial</NuxtLink> / <h1 class="m-1">Contato</h1>
          </div>
        </div>
      </div>
    </section>
    <section id="contato">
      <div class="container py-5 my-5">
        <div class="row align-items-center">
          <div class="col-4">
            <h2>Fale conosco</h2>
            <p>
              Preencha o formulário ou entre em contato em algum dos nossos canais e em breve vamos entrar em contato.
            </p>
            <div class="mt-4">
              <div class="contact-item">
                <div class="icon-circle">
                  <span class="material-icons">phone</span>
                </div>
                <span>Telefone: (xx) xxxx-xxxx</span>
              </div>
              <div class="contact-item">
                <div class="icon-circle">
                  <span class="material-icons">location_on</span>
                </div>
                <span>Localização: Rua Exemplo, 123</span>
              </div>
            </div>
          </div>
          <div class="col-8">
            <Form />
          </div>
        </div>
      </div>
    </section>
    <!-- Fale conosco -->
  </DefaultLayout>
</template>

<script>
import DefaultLayout from '~/layouts/DefaultLayout.vue'
import Form from '~/components/Form.vue'
import TypebotContact from '~/components/TypebotContact.vue'

export default {
  components: {
    DefaultLayout,
    Form,
    TypebotContact
  },
  data() {
    return {
      currentComponent: null
    }
  },
  methods: {
    showComponent(component) {
      this.currentComponent = component;
    },
    resetComponent() {
      this.currentComponent = null;
    }
  }
}
</script>

<style scoped>
.topo .col {
  display: flex;
  align-items: center;
}

.topo .col h1 {
  margin-left: 5px;
  display: inline;
  font-weight: normal !important;
  color: #000;
}

.icon-circle {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #f1f1f1;
  margin-right: 15px;
}

.contact-item {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
}

.contact-item span.material-icons {
  font-size: 24px;
}

#contato .btn {
  margin-top: 15px;
}
</style>
