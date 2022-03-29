<template>
  <div>
    <div class="about" v-for="user in users" :key="user.id">
      <p>Nombre: {{user.Nombre}}</p>
      <p>Correo: {{user.Correo}}</p>
      <p>Contraseña: {{user.Password}}</p>
      <p>Edad: {{user.Edad}}</p>
    </div>
  </div>
</template>

<script>
//importar libreria
import axios from "axios";

export default {
  name: "AxiosImage",

  data() {
    return {
      users: [],
    };
  },

  async created() {
    let url = "https://6242550cb6734894c14f948b.mockapi.io/users";
    await axios.get(url).then((response) => (this.users = response.data));
  },
};
</script>

<style scoped>
.about {
  border: 1px solid black;
  padding: 10px;
  width: 250px;
  height: auto;
  margin: auto;
}
</style>
