<template>
    <v-container>
      <v-card>
        <v-card-title>Atendimento por Vídeo</v-card-title>
        <v-card-text>
          <video id="video" width="600" controls></video>
        </v-card-text>
      </v-card>
    </v-container>
  </template>
  
  <script>
  export default {
    mounted() {
      // Lógica para iniciar a chamada de vídeo
      const video = document.getElementById('video');
      // Supondo que você tenha uma URL de vídeo para a consulta
      video.src = 'URL_DO_VIDEO';
    }
  };
  </script>
  