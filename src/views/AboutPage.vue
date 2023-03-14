<template>
    <div></div>
    <div class="container">
        <h3>More About This App..</h3>
        <p>A simple counter app built with Vue.js, one of the popular javascript frameworks. 
            it is used to building a single page user interface. In this app you can increase, decrease, reset the value back to zero by using the buttons provided and set the value to any number you want using the input field.<br>
           <a href="https://github.com/Tolulopee/vue-counter">
            <button>View Source Code</button>
           </a>
            
        </p>
    </div>
</template>

<style scoped>
button{
    background-color: #333;
    color: #eee;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    margin: 10px;
    cursor: pointer;
    font-size: 20px;
    font-weight: 400;
    transition: all 0.3s ease;
}
.container {
  max-width: 700px;
  margin: 30px auto;
  overflow: auto;
  min-height: 300px;
  padding: 30px;
  border-radius: 5px;
}

.container h3 {
  font-size: 30px;
  font-weight: 400;
  margin-bottom: 20px;
}
.container p {
  font-size: 20px;
  line-height: 1.5;
  text-decoration: wavy;
  margin-bottom: 20px;
}
</style>