<template>
    <v-container>
      <v-card>
        <v-card-title>Atendimento por Vídeo</v-card-title>
        <v-card-text>
          <video ref="localVideo" width="300" controls autoplay muted></video>
          <video ref="remoteVideo" width="300" controls autoplay></video>
        </v-card-text>
      </v-card>
    </v-container>
  </template>
  
  <script>
  export default {
    data() {
      return {
        localStream: null,
        remoteStream: null,
        peerConnection: null,
        servers: {
          iceServers: [
            {
              urls: 'stun:stun.l.google.com:19302'
            }
          ]
        }
      };
    },
    mounted() {
      this.startVideoCall();
    },
    methods: {
      async startVideoCall() {
        try {
          const localVideo = this.$refs.localVideo;
          const remoteVideo = this.$refs.remoteVideo;
  
          // Obter o stream local (paciente)
          this.localStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
          localVideo.srcObject = this.localStream;
  
          // Configurar a conexão peer-to-peer
          this.peerConnection = new RTCPeerConnection(this.servers);
  
          // Adicionar o stream local à conexão
          this.localStream.getTracks().forEach(track => {
            this.peerConnection.addTrack(track, this.localStream);
          });
  
          // Receber o stream remoto (médico)
          this.peerConnection.ontrack = event => {
            if (!this.remoteStream) {
              this.remoteStream = new MediaStream();
              remoteVideo.srcObject = this.remoteStream;
            }
            this.remoteStream.addTrack(event.track);
          };
  
          // Criar uma oferta para iniciar a conexão
          const offer = await this.peerConnection.createOffer();
          await this.peerConnection.setLocalDescription(offer);
  
          // Enviar a oferta para o servidor e receber a resposta do médico
          const answer = await this.sendOfferToServer(offer);
          await this.peerConnection.setRemoteDescription(answer);
  
        } catch (error) {
          console.error('Erro ao iniciar a chamada de vídeo:', error);
          alert('Não foi possível iniciar a chamada de vídeo. Verifique as permissões da câmera e do microfone.');
        }
      },
      async sendOfferToServer(offer) {
        // Simulação de envio da oferta para o servidor e recebimento da resposta do médico
        const response = await fetch('https://your-signaling-server.com/offer', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ offer })
        });
        const { answer } = await response.json();
        return new RTCSessionDescription(answer);
      }
    }
  };
  </script>
  