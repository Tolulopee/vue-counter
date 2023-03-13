<template>
  <nav>
  <h1>Vue Counter App</h1>
  <div class="nav-links">
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/counter">Counter</router-link>

  </div>
  </nav>
  
  <router-view></router-view>
</template>

<script>


export default {
  name: 'App',
}
</script>

<style>
body {
  background-color: #333;

  background-repeat: no-repeat;
  background-position: center top;
  background-size: cover;
  padding: 0;
  margin: 0;
}
nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #eee;
  padding: 0.2rem 2rem;
  background-color: #53d198;
  animation: slider ease 1.5s;
  animation-iteration-count: 1;
  animation-fill-mode: backwards;
}

.nav-links{
  display:flex;
  align-items:center;
  justify-content:space-between;
  width:300px;
  font-size:30px;
}

</style>
