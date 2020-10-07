<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <button v-on:click="sendMessage('Probando hptaa')">Send Message</button>
    <v-snackbar :timeout="4" :value="notification" absolute shaped top>
      Nuevo mensaje
    </v-snackbar>
  </div>
</template>
<script>
export default {
  name: "App",
  components: {},
  data: function () {
    return {
      notification: false,
    };
  },
  created() {
    this.socketConnection();
  },
  methods: {
    socketConnection() {
      try {
        //this.$ws = new WebSocket("wss://backlwe.herokuapp.com");
        this.$ws.onmessage = ({ data }) => {
          this.message = data;
          console.log(data);
          this.showAlert();
        };
        this.$ws.onopen = function (event) {
          console.log(event);
          console.log("Successfully connected to the echo websocket server...");
        };
      } catch (err) {
        console.log(err);
      }
    },
    showAlert() {
      this.notification = true;
    },
    sendMessage: function (message) {
      console.log(this.$ws);
      this.$ws.send(message);
    },
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
