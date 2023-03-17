<template>
    <div class="contain">
        <p>{{ counter}}</p>
        <div class="btn-contain">
          <div class="btns-wrapper">
        <button class="incre-btn" @click="increment">+</button>
        <button class="reset" @click="reset">Reset</button>
        <button  class="decre-btn" @click="decrement" >-</button>
          </div>
        <input class="input-box" type="text" v-model="counter">
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
    methods:{
        increment(){
            this.$store.commit('increment');
        },
        decrement(){
            this.$store.commit('decrement');
        },
        
        reset(){
            this.$store.commit('reset');
        }
    },
    }
    //data(){
     //   return{
       //     count:0
      //  }
   // },
   // methods:{
      //  increment(){
           // this.count++;
       // },
       // decrement(){
          //  this.count--;
       // },
        
       // reset(){
          //  this.count=0;
       // }
   // },

//}

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
  flex-direction: column;
  justify-content:space-between;
  align-items:center;
  margin-top:20px;
}

.btns-wrapper{
  display:flex;
  flex-direction: row;
  justify-content: space-between;
  align-items:center;

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
  height:40px;
  width:120px;
  border-radius:5px;
  margin-left:8px;
  cursor:pointer;
  transition:box-shadow 0.15s;
  
}
.incre-btn{
  background-color:#AFE1AF;
}

.decre-btn{
  background-color:#E34234;
}

.reset{
  background-color: aliceblue;
  color:black;
  border:none;
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
  width: 60%;
  background-color: #fff;
  padding:10px 20px;
  border: 0.7px solid black;
  border-radius:7px;
  margin-top:20px;
  height: 40px;
  grid-column-start: 1;
  grid-column-end: 6;
  
  }
</style>
