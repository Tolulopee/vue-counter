<template>
    <div class="contain">
        <p>{{ count }}</p>
        <button  @click="increment">Increment</button>
        <button @click="decrement" >Decrement</button>
        <button @click="setvalue">SetValue</button>
        <button @click="reset">Reset</button>
        
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
        setvalue(){
            this.count=10;
        },
        reset(){
            this.count=0;
        }
    }
}

</script>

<style >
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  font-family: 'Poppins', sans-serif;
  background: linear-gradient(to top, #bdc2e8 0%, #bdc2e8 1%, #e6dee9 100%);
  background-repeat:no-repeat;
  background-size:cover;
}
.container {
  max-width: 500px;
  margin: 30px auto;
  overflow: auto;
  min-height: 300px;
  border: 1px solid steelblue;
  padding: 30px;
  border-radius: 5px;
}
button{
  display: inline-block;
  background: #fff;
  color: black;
  border:1px solid #bdc2e8 ;
  padding: 10px 20px;
  margin: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;
  
}
.btn:focus {
  outline: none;
}
.btn:active {
  transform: scale(0.98);
}
.btn-block {
  display: block;
  width: 100%;
}

</style>
