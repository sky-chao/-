<template>
  <div class="hello">
    <router-link to="newcontact"><h1>{{ msg }}</h1></router-link>
  </div>
</template>

<script>
export default {
  name: 'yuangong',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h1 {
  font-weight: normal;
}
</style>
