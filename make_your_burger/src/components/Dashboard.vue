<template>
  <div id="burger-table">
    <div>

      <div id="burger-table-heading">
        <div class="order-id">#:</div>
        <div>Cliente:</div>
        <div>Pão:</div>
        <div>Carne:</div>
        <div>Opcionais:</div>
        <div>Ações  :</div>
      </div>
    </div>

    <div id="burger-table-row">
      <div class="burger-table-row">
        <div class="order-number">1</div>
        <div>João</div>
        <div>Pão de trigo</div>
        <div>Maminha</div>
        <div>
          <u>
            <li>Salame</li>
            <li>Tomate</li>
          </u>
        </div>
        <div>
          <select name="status" class="status">
            <option value="">Selecione</option>
          </select>
          <button class="delete-btn">Cancelar</button>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "Dashboard"
}
</script>

<style scoped>

#buger-table{
  max-width: 1200px;
  margin: 0 auto;
}

#burger-table-heading,
#burger-table-rows,
.burger-table-row{
  display: flex;
  flex-wrap: wrap;
}

#burger-table-heading{
  font-weight: bold;
  padding: 12px;
  border-bottom: 3px solid #333;
}

#burger-table-heading div,
.burger-table-row div{
  width: 19%;
}


.burger-table-row{
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
}

#burger-table-heading .order-id,
.burger-table-row .order-number{
  width: 5%;
}

select{
  padding: 12px 6px;
  margin-right: 12px;
}

.delete-btn{
  background-color: #222;
  color: #fcba03;
  font-weight: bold;
  border: 2px solid #222;
  padding: 10px;
  font-size: 10px;
  margin: 0 auto;
  cursor: pointer;
  border-radius: 10px;
}
  .delete-btn:hover{
    background-color: transparent;
    color: #222
}

</style>