<template>
    <v-container>
      <v-form>
        <v-text-field label="Nome do Paciente" v-model="patientName"></v-text-field>
        <v-text-field label="Data da Consulta" v-model="appointmentDate" type="date"></v-text-field>
        <v-btn @click="scheduleAppointment">Agendar Consulta</v-btn>
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
        // Lógica para agendar a consulta
        console.log(`Consulta agendada para ${this.patientName} em ${this.appointmentDate}`);
      }
    }
  };
  </script>
  