<template>
    <v-container>
      <v-form @submit.prevent="scheduleAppointment">
        <v-text-field
          label="Nome do Paciente"
          v-model="patientName"
          required
        ></v-text-field>
        <v-text-field
          label="Data da Consulta"
          v-model="appointmentDate"
          type="date"
          required
        ></v-text-field>
        <v-btn type="submit" color="primary">Agendar Consulta</v-btn>
      </v-form>
    </v-container>
  </template>
  
  <script>
  export default {
    data() {
      return {
        patientName: '',
        appointmentDate: ''
      };
    },
    methods: {
      scheduleAppointment() {
        if (this.patientName && this.appointmentDate) {
          // Lógica para agendar a consulta
          console.log(`Consulta agendada para ${this.patientName} em ${this.appointmentDate}`);
          // Aqui você pode adicionar a lógica para salvar a consulta em um backend ou local storage
          alert(`Consulta agendada para ${this.patientName} em ${this.appointmentDate}`);
          // Limpar os campos após o agendamento
          this.patientName = '';
          this.appointmentDate = '';
        } else {
          alert('Por favor, preencha todos os campos.');
        }
      }
    }
  };
  </script>
  