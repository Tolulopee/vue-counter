<template>
    <div class="wrapper">
    <h1>Vue Counter App</h1>
    
    <router-link to="/counter">
        <button>Counter</button>
    </router-link>
    </div>
    
</template>

<script>


export default {
    name: "HomePage",
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@600;700;800&display=swap');

.wrapper{
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
h1{
    font-family: 'Poppins', sans-serif;
    font-size: 3rem;
    font-weight: 800;
    color: #000;
    text-align: center;

}

button{
    font-family: 'Poppins', sans-serif;
    font-size: 1.5rem;
    font-weight: 600;
    color: #fff;
    background-color: #000;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    margin: 20px 0;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
}
</style>

