<template>
  <nav>
  <h1>Vue Counter App</h1>
  <div class="nav-links">
    <router-link class="nav-btns" to="/">Home</router-link>
    <router-link class="nav-btns" to="/about">About</router-link>
    <router-link class="nav-btns" to="/counter">Counter</router-link>

  </div>
  </nav>
  <footer>
    <p>Created by 
      <a class="footer-link" href="https://github.com/Tolulopee">Kalejaiye Tolulope</a>
    </p>
    <h3>Copyright &copy; 2023</h3>
  </footer>
  
  <router-view></router-view>
</template>

<script>


export default {
  name: 'App',
}
</script>

<style>
body {
  background-color:white;
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
  background-color: #333;
  animation: slider ease 1.5s;
  animation-iteration-count: 1;
  animation-fill-mode: backwards;
}

nav h1{
  font-size: 30px;
  font-weight: 400;
}

.nav-links{
  display:flex;
  align-items:center;
  justify-content:space-between;
  width:300px;
  font-size:25px;
}

.nav-btns{
  color:white;
  text-decoration:none;
  padding:10px;
  border-radius:5px;
  transition:all 0.3s ease-in-out;
}

.nav-btns:hover{
  background-color:#eee;
  color:#333;
}

footer{
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color:#333;
  color: white;
  text-align: center;
}

footer p{
  font-size: 20px;
  font-weight: 400;
  margin: 0;
  padding: 0;
}

.footer-link{
  color: #eee;
  text-decoration: none;
}

</style>
