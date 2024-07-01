<!-- components/TypebotContact.vue -->
<template>
  <div class="d-flex flex-column align-items-center justify-content-center vh-100">
    <div class="container">
      <div class="row">
        <div class="col-12 d-flex justify-content-start mb-3">
          <button @click="$emit('go-back')" class="btn btn-back">Voltar</button>
        </div>
        <div class="col-12 d-flex justify-content-center">
          <iframe
            src="https://bot.gsstudio.com.br/iniciar"
            style="border: none; width: 100%; height: 400px"
          ></iframe>
        </div>
      </div>
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
.btn-back {
  align-self: flex-start;
}
</style>
