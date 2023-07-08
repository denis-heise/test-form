<template>
  <form @submit.prevent="sendInfo">
    <div>
      <div>Выбрать элемент:</div>
      <select @click="selectItem" class="select-css">
        <option v-for="data in doneData" :key="data.id" :value="data.id">
          Элемент {{ data.id }}
        </option>
      </select>
    </div>

    <div class="edit-block">
      <h1>{{getItem['name']}}</h1>
      <input type="text" :value="getItem['value']">
    </div>

    <button type="submit">Сохранить</button>
  </form>
</template>

<script>
  import axios from "axios";

  export default {
    name: 'MyForm',
    data(){
      return{
        id: 0
      }
    },
    mounted(){
      this.$store.dispatch('data/GET_DATA');
    },
    computed: {
      doneData () {
        return this.$store.state.data.data
      },
      getItem(){
        const oneItem = this.$store.state.data.data[this.id];
        let newItem = [];
        if(oneItem){
          newItem = oneItem;
        }
          return newItem;
      }
    },
    methods: {
      selectItem(evt){
        const target = evt.target;
        this.id = target.value - 1;
      },
      sendInfo(evt){
        const target = evt.target;
        const arrayData = this.$store.state.data.data;
        const editBlock = target.querySelector('.edit-block');
        const valueItem = editBlock.querySelector('input').value;

        arrayData.forEach(element => {
          if(element['id'] === Number(this.id) + 1){
            element['value'] = valueItem;
            axios.put(`https://data-form.onrender.com/data/${element['id']}`, { id: element['id'], name: element['name'], value: element['value'] });
          }
        });
      }
    },  
  }
</script>

<style lang="scss">
  form{
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 40%;
    margin: auto;
    background-color: #41b883;
    border-radius: 10px;
    padding: 20px;

    div{
      &:first-child{
        display: flex;
        flex-direction: column;
        gap: 10px;
        font-size: 20px;
      }
    }
  }
  input{
    width: 100%;
    height: 30px;
    border: none;
    border-radius: 5px;
    outline: none;
    font-size: 24px;
    padding: 10px;
    box-sizing: border-box;
  }
  button{
    width: 100%;
    height: 25px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    background-color: #ededff;


    &:hover{ background-color: #dfdffa; }
  }
  .edit-block{
    display: flex;
    flex-direction: column;
    grid-area: 10px;
  }
  .select-css { 
    width: 100%;
    max-width: 135px;
    display: block; 
    font-size: 16px; 
    font-family: sans-serif; 
    font-weight: 700; 
    color: #444; 
    line-height: 1.3; 
    padding: .6em 1.4em .5em .8em; 
    box-sizing: border-box; 
    margin: 0; 
    border: 1px solid #aaa;
    box-shadow: 0 1px 0 1px rgba(0,0,0,.04); 
    border-radius: .5em;
    appearance: none;
    background-color: #fff; 
    background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23007CB2%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E'), linear-gradient(to bottom, #ffffff 0%,#e5e5e5 100%); 
    background-repeat: no-repeat, repeat;
    background-position: right .7em top 50%, 0 0;
    background-size: .65em auto, 100%; 
  } 
  .select-css::-ms-expand { display: none; } 
  .select-css:hover { border-color: #888; } 
  .select-css:focus { border-color: #aaa; 
    box-shadow: 0 0 1px 3px #4effaf;
    box-shadow: 0 0 0 3px -moz-mac-focusring; 
    color: #222;
    outline: none; 
  } 
  .select-css option { font-weight:normal; } 
  *[dir="rtl"] .select-css, :root:lang(ar) .select-css, :root:lang(iw) .select-css { 
    background-position: left .7em top 50%, 0 0; 
    padding: .6em .8em .5em 1.4em; 
  }

  @media (max-width: 540px){
    form{ width: 100%; }
    .select-css{ max-width: 200px; }
  }
</style>
