<template>
    <div>
        <h1>Sorry this page does not exist</h1>
        <router-link to="/">Go back to home</router-link>
    </div>
</template>

<script>
export default {
    name: "PageNotFound"
};
</script>


<style scoped>
div{
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    margin-top:10px;
}
</style>