<template>
    <header>
        <img src="../../assets/logo.png" alt="">
        <div>HEADER</div>
    </header>
</template>
  
<script>
  export default {
    name: 'HeaderPage'
  }
</script>
  
<style lang="scss">
  header{
    display: flex;
    flex-direction: row;
    gap: 20px;
    justify-content: flex-start;
    width: 100%;
    height: 50px;
    background-color: #84f3c2;
    color: #000;
    padding: 10px 0;

    div{
      height: fit-content;
      margin: auto 0;
    }
  }
  img{
    width: 40px;
    height: 40px;
    margin: auto 10px;
  }
</style>