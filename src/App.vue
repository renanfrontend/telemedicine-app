<template>
  <v-app>
    <v-main>
      <AppointmentScheduler />
      <VideoConsultation />
    </v-main>
  </v-app>
</template>

<script>
import AppointmentScheduler from './components/AppointmentScheduler.vue';
import VideoConsultation from './components/VideoConsultation.vue';

export default {
  name: 'App',

  components: {
    AppointmentScheduler,
    VideoConsultation,
  },

  data: () => ({
    //
  }),
}
</script>
