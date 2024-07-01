<template>
    <div class="d-flex flex-column align-items-center justify-content-center vh-100">
      <div class="container">
        <div class="row">
          <div class="col-12 d-flex justify-content-start">
            <button @click="$emit('go-back')" class="btn btn-back">Voltar</button>
          </div>
          <div class="col-md-6 offset-md-3">
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
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
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
          alert('Mensagem enviada com sucesso!');
        } catch (error) {
          console.error('Erro ao enviar a mensagem:', error);
          alert('Erro ao enviar a mensagem.');
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .btn-back {
    align-self: flex-start;
  }
  </style>
  