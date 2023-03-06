<template>
    <div>
        <button  @click="increment">Increment</button>
        <button @click="decrement" >Decrement</button>
        <button @click="setvalue">SetValue</button>
        <button @click="reset">Reset</button>
        <p>{{ count }}</p>
    </div>
</template>

<script>
export default{
    name:'Counter',
    data(){
        return{
            count:0
        }
    },
    methods:{
        
    }
}

</script>

<style scoped>
</style>
