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
            <option value="">Selecione o tipo do pão: </option>
            <option value="integral">Integral</option>
          </select>
        </div>

        <div class="input-container">
          <label for="carne">Escolha a carne do seu burger: </label>
          <select name="carne" id="carne" v-model="carne">
            <option value="">Selecione o tipo de carne: </option>
            <option value="integral">Maminha</option>
          </select>
        </div>

        <div class="input-container">
          <label for="opcionais">Escolha os opcionais: </label>
            <div class="checkbox-container">
              <input type="checkbox" name="opcionais" v-model="opcionais" value="salame"> 
              <span>Salame</span>
            </div>          
        </div>
        <div class="input-contai">
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

</style>