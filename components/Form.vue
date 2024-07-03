<template>
  <div class="d-flex align-items-center justify-content-center vh-100 mb-4">
    <div class="container">
      <div class="row">
        <div class="col-md-3">
          <button @click="$emit('go-back')" class="btn btn-back">Voltar</button>
        </div>
        <div class="col-md-6 gscard-border p-5">
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
              <label for="area">Área</label>
              <select id="area" class="form-control" v-model="form.area" required>
                <option value="" disabled>Selecione a área</option>
                <option value="suporte">Suporte</option>
                <option value="vendas">Vendas</option>
                <option value="geral">Geral</option>
              </select>
            </div>
            <div class="form-group">
              <label for="message">Mensagem</label>
              <textarea id="message" class="form-control" v-model="form.message" required></textarea>
            </div>
            <button type="submit" class="btn btn-primary mt-3">Enviar</button>
          </form>
          <!-- Botões de Teste
          <button @click="showSuccessNotification" class="btn btn-success mt-3">Testar Sucesso</button>
          <button @click="showErrorNotification" class="btn btn-danger mt-3">Testar Erro</button> -->
        </div>
        <div class="col-md-3"></div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { errorMessages } from '~/utils/errors';

export default {
  data() {
    return {
      form: {
        name: '',
        email: '',
        area: '',
        message: ''
      }
    };
  },
  methods: {
    async submitForm() {
      try {
        const response = await axios.post('/gsstudio/api/send-email', this.form);
        this.$vs.notify({
          color: 'success',
          position: 'bottom-right',
          time: 2000,
          text: `<div style="color: white; text-align: center;" >Mensagem enviada com sucesso!</div>`
        });
        this.resetForm();
      } catch (error) {
        const errorMessage = errorMessages[error.response?.status] || 'Ocorreu um erro ao enviar a mensagem.';
        console.error('Erro ao enviar a mensagem:', error);
        this.$vs.notify({
          color: 'danger',
          position: 'bottom-right',
          time: 2000,
          text: `<div style="color: white; text-align: center;" >Mensagem enviada com sucesso!</div>`
        });
      }
    },
    resetForm() {
      this.form = {
        name: '',
        email: '',
        area: '',
        message: ''
      };
    },
    showSuccessNotification() {
      this.$vs.notify({
        color: 'success',
        position: 'bottom-right',
        time: 2000,
        text: `<div style="color: white; text-align: center;" >Mensagem enviada com sucesso!</div>`
      });
    },
    showErrorNotification() {
      this.$vs.notify({
        color: 'danger',
        position: 'bottom-right',
        time: 2000,
        text: `<div style="color: white; text-align: center;">Erro ao enviar a mensagem.</div>`
      });
    }
  }
};
</script>

<style scoped>
.vs-component {
     top: 1000px !important;
}
.btn-back {
  align-self: flex-start;
}
.form-group {
  padding: 5px;
}
</style>
