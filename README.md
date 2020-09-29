# vuejs-websocket

Websocket test with wss://echo.websocket.org

./views/App.vue

- Let’s start by adding a created function to our component definition.
- These aren’t the only callbacks you can define:
    - onclose - This is triggered whenever the connection between the client and the server is closed.
    - onerror - This is triggered whenever there is an error between the client and the server.
- Sending Messages Over the WebSocket Connection:
    With this connection logic now in place, let’s look at how we can start sending some messages to this WebSocket server which will in turn echo the message back     to us!
    We can achieve this by creating a new function within our methods block of our component.
- The final piece of the puzzle is adding a simple button to our App.vue component that will trigger this sendMessage function.

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
