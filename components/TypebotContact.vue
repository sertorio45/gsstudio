<!-- components/TypebotContact.vue -->
<template>
    <div>
        <div>
          <typebot-standard style="width: 100%; height: 600px;"></typebot-standard>
        </div>
    </div>
  </template>
  
  <script>
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
  