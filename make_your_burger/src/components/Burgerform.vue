<template>  
  <div>
    <p>Mensagem de pedido feito</p>
    <div>
      <form id="burger-form">

        <div class="input-container">
          <label for="nome">Nome do cliente: </label>
          <input type="text" id="nome" name="nome" v-model="nome" placeholder="Insira o seu nome">
        </div>

        <div class="input-container">
          <label for="pao">Escolha o pão: </label>
          <select name="pao" id="pao" v-model="pao">
            <option value="">Selecione o tipo do pão</option>
            <option value="integral">Integral</option>
          </select>
        </div>

        <div class="input-container">
          <label for="carne">Escolha a carne do seu burger: </label>
          <select name="carne" id="carne" v-model="carne">
            <option value="">Selecione o tipo de carne</option>
            <option value="integral">Maminha</option>
          </select>
        </div>

        <div id="opcionais-container"  class="input-container">
          <label id="opcionais-title" for="opcionais">Escolha os opcionais: </label>
            <div class="checkbox-container">
              <input type="checkbox" name="opcionais" v-model="opcionais" value="salame"> 
              <span>Salame</span>
            </div>          
            <div class="checkbox-container">
              <input type="checkbox" name="opcionais" v-model="opcionais" value="salame"> 
              <span>Salame</span>
            </div>          
            <div class="checkbox-container">
              <input type="checkbox" name="opcionais" v-model="opcionais" value="salame"> 
              <span>Salame</span>
            </div>          
        </div>
        
        <div class="input-container">
          <input type="submit" class="submit-btn" value="Criar meu Burger">
        </div>

      </form>
    </div>
  </div>
</template>

<script>
export default {
  name:'Burgerform'
}
</script>

<style scoped>
  #burger-form{
    max-width: 400px;
    margin: 0 auto;
  }

  .input-container{
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
  }

  label{
    font-weight: bold;
    margin-bottom: 15px;
    color: #222;
    padding: 5px 10px;
    border-left: 4px solid #fcba03;
  }

  input,select{
    padding: 5px 10px;
    widows: 300px;
  }

  #opcionais-container{
    flex-direction: row;
    flex-wrap: wrap;
  }

  #opcionais-title{
    width: 100%;
  }

  .checkbox-container{
    display: flex;
    align-items: flex-start;
    width: 50%;
    margin-bottom: 20px;
  }

  .checkbox-container span, .checkbox-container input{
    widows: auto;
  }

  .checkbox-container span{
    margin-left: 6px;
    font-weight: bold;
  }

  .submit-btn{
    background-color: #222;
    color:#fcba03;
    font-weight: bold;
    border: 2px solid #222;
    padding: 10px;
    font-size: 16px;
    margin: 0 auto;
    border-radius: 10px;
    cursor: pointer;
    transition: .2s;
  }

  .submit-btn:hover{
    background-color: transparent;
    color: #222;
  }
</style>