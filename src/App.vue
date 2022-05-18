<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    console.log('aaa')
    this.$http.get('/api/home/getlist', {}).then((response) => {
      console.log(response)
    })
    return {
      message: this.response
    }
  },
  methods: {
    getList () {
      this.message = 'liu'
      this.$http.get('/api/home/getlist', {}).then((response) => {
        console.log(response)
      })
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
