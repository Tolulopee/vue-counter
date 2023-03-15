<template>
    <div class="contain">
        <p>{{ counter}}</p>
        <div class="btn-contain">
        <button class="incre-btn" @click="increment">+</button>
        <button class="reset" @click="reset">Reset</button>
        <button  class="decre-btn" @click="decrement" >-</button>
        <input class="input-box" type="text" v-model="count">
        </div>
   </div>

  
</template>

<script>
export default{
    name:'counterApp',
    computed:{
      counter(){
          return this.$store.getters.counter;
      }

    },
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
    },

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
  display:flex;
  flex-direction:column;
  justify-content:center;
  max-width: 500px;
  margin: 30px auto;
  overflow: auto;
  min-height: 300px;
  padding: 30px;
  border-radius: 5px;
  border:2px solid red;
}
.contain p {
 font-size: 60px;
  text-align: center;
  grid-column-start: 1;
  grid-column-end: 6;
  padding: 0;
  margin: 0;
  color: #555;
}


.btn-contain{
  display:flex;
  justify-content:center;
  align-items:center;
  margin-top:20px;
}
.incre-btn,
.reset,
.decre-btn{
  display:block;
  background-color:#555;
  color:white;
  font-weight:400;
  font-size:25px;
  border:none;
  height:72px;
  width:200px;
  border-radius:5px;
  margin-left:8px;
  cursor:pointer;
  transition:box-shadow 0.15s;
  
}

.incre-btn:hover,
.reset:hover,
.decre-btn:hover{
  box-shadow:0 0 0 2px #555;
}

.reset{
  font-size:20px;
}
.input-box {
  display:block;
  width: 100%;
  background-color: #fff;
  padding:10px 20px;
  border: 1px solid #555;
  height: 2rem;
  grid-column-start: 1;
  grid-column-end: 6;
  border:1px solid red;
  }
</style>
