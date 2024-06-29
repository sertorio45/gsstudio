<!-- components/TypebotContact.vue -->
<template>
    <section id="contato" class="my-5">
      <div class="container text-center">
        <h2>Entre em contato rapidamente</h2>
        <p>Use nosso Typebot para iniciar uma conversa.</p>
        <TypebotContact />
      </div>
    </section>
  </template>
  
  <script>
  import TypebotContact from '~/components/TypebotContact.vue'

  export default {
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
  };
  </script>
  
  <style scoped>
  /* Adicione seus estilos aqui, se necessário */
  </style>
  