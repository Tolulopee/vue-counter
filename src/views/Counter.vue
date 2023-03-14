<template>
    <div class="contain">
        <p>{{ count }}</p>
        <button class="incre-btn" @click="increment">+</button>
        <button class="reset" @click="reset">Reset</button>
        <button  class="decre-btn" @click="decrement" >-</button>
        <input type="text" v-model="count">
   </div>

  
</template>

<script>
export default{
    name:'counterApp',
    data(){
        return{
            count:0
        }
    },
    methods:{
        increment(){
            this.count++;
        },
        decrement(){
            this.count--;
        },
        
        reset(){
            this.count=0;
        }
    }
}

</script>

<style scoped >
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  font-family: 'Poppins', sans-serif;
  background-color:white;
  background-repeat:no-repeat;
  background-size:cover;
}
.contain {
  max-width: 500px;
  margin: 30px auto;
  overflow: auto;
  min-height: 300px;
  padding: 30px;
  border-radius: 5px;
}
.contain p {
 
  font-size: 60px;
  text-align: center;
  grid-column-start: 1;
  grid-column-end: 6;
  padding: 0;
  margin: 0;
  color: rgb(0, 139, 74);


}
button {
   background-color:rgb(46, 164, 79);
        color:white;
        font-weight:bold;
        font-size:14px;
        border:none;
        height:36px;
        width:80px;
        border-radius:5px;
  margin-left:8px;
  cursor:pointer;
   transition:box-shadow 0.15s;

}

button:hover{
  box-shadow: 4px 4px 7px  rgb(28, 26,26);
}

button:active{
  box-shadow: 2px 2px 5px  rgb(28, 26,26);
}
.reset{
  background-color:rgb(46, 164, 79);
  color:white;
  font-weight:bold;
  font-size:14px;
  border:none;
  height:36px;
  width:80px;
  border-radius:5px;
  margin-left:8px;
  cursor:pointer;
  transition:box-shadow 0.15s;
}
.contain input {
  display:block;
  width: 100%;
  background-color: #fff;
  padding:10px 20px;
  border: 1px solid #555;
  height: 2rem;
  
}

.contain input:focus {
   border: 2px solid #555;
}
</style>
