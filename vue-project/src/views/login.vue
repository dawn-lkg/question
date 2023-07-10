<template>
  <div id="login">
    <div>Login页面</div>
    <router-link to="/search">跳转到search页面</router-link>
  </div>
</template>

<script>
export default {
    name:'login'
}
</script>

<style>
#login{
  height: 1200px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-size: 30px;
}
</style>