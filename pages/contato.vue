<template>
    <DefaultLayout>
      <section class="contact-section py-5">
        <div class="container">
          <h1 class="text-center mb-5">Entre em contato</h1>
          <div class="row">
            <div class="col-md-6">
              <h2>Envie uma mensagem</h2>
              <form @submit.prevent="submitForm">
                <div class="form-group">
                  <label for="name">Nome</label>
                  <input type="text" id="name" class="form-control" v-model="form.name" required />
                </div>
                <div class="form-group">
                  <label for="email">Email</label>
                  <input type="email" id="email" class="form-control" v-model="form.email" required />
                </div>
                <div class="form-group">
                  <label for="message">Mensagem</label>
                  <textarea id="message" class="form-control" v-model="form.message" required></textarea>
                </div>
                <button type="submit" class="btn btn-primary mt-3">Enviar</button>
              </form>
            </div>
            <div class="col-md-6">
              <h2>Converse conosco</h2>
              <typebot-standard style="width: 100%; height: 600px;"></typebot-standard>
            </div>
          </div>
        </div>
      </section>
    </DefaultLayout>
  </template>
  
  <script>
  import DefaultLayout from '~/layouts/Default.vue'
    import Contato from '~/components/Contato.vue'

  export default {
    components: {
    DefaultLayout,
    Contato,
  },
    data() {
      return {
        form: {
          name: '',
          email: '',
          message: ''
        }
      }
    },
    mounted() {
      const typebotInitScript = document.createElement("script");
      typebotInitScript.type = "module";
      typebotInitScript.innerHTML = `
        import Typebot from 'https://cdn.jsdelivr.net/npm/@typebot.io/js@0.2.60/dist/web.js';
        Typebot.initStandard({
          typebot: "iniciar",
          apiHost: "https://bot.gsstudio.com.br",
        });
      `;
      document.body.append(typebotInitScript);
    },
    methods: {
      submitForm() {
        // Lógica para enviar a mensagem do formulário
        alert('Mensagem enviada!');
      }
    }
  }
  </script>
  
  <style scoped>
  .contact-section {
    background-color: #f9f9f9;
  }
  
  .contact-section h1, .contact-section h2 {
    color: #333;
  }
  
  .contact-section .form-control {
    margin-bottom: 1rem;
  }
  
  .contact-section .btn-primary {
    background-color: #007bff;
    border-color: #007bff;
  }
  
  .contact-section .btn-primary:hover {
    background-color: #0056b3;
    border-color: #004085;
  }
  </style>
  