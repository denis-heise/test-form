<template>
  <HeaderPage/>
  <main>
    <MyForm/>
  </main>
  <FooterPage/>
</template>

<script>
import HeaderPage from './components/header/Header.vue';
import MyForm from './components/form/MyForm.vue'
import FooterPage from './components/footer/Footer.vue';

export default {
  name: 'App',
  components: {
    HeaderPage,
    MyForm,
    FooterPage
  }
}
</script>

<style>
#app{
  display: flex;
  flex-direction: column;
  min-height: 100%;
}
html, body{
  margin: 0;
  height: 100%;
}
main{
  display: flex;
  flex-direction: column;
  width: 70%;
  margin: 100px auto;
  flex: 1 1 auto;
}
</style>
