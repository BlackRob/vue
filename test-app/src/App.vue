<template>
  <div id="app">
    <div id="branding">
      <h1 id="logo">5 Questions!</h1>
      <h2 id="slogan"><em>The world's least accurate intelligence test!</em></h2>
    </div>
    <!-- img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Poopy Vue.js App"/> -->
    <Homepage msg="Fuck you" />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Homepage from './components/Homepage.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    Homepage
  }
}

</script>

<style>
body {
  background: gray;
  display: flex;
  justify-content: center;
  align-items: center;
}
#app {
  font-family: -apple-system, BlinkMacSystemFont, Roboto, Oxygen, Ubuntu, Cantarell, “Fira Sans”, “Droid Sans”, “Helvetica Neue”, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background: white;
  color: #2c3e50;
  box-sizing: border-box;
  height: 96vh;
  padding: 1em;
  border: 1px solid #111;
  box-shadow: 1px 1px 1px #111;
  border-radius: 1em;
}
#branding {
  padding: 20px;
  margin: 0px;
}
#logo {
  font-size: 40px;
  font-weight: 700;
  color: #555;
  margin: 0px;
}
#slogan {
  margin: 0px;
  font-size: 12px;
  font-weight: 500;
  color: #2c3e50;
}
</style>
