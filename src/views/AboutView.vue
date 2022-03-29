<template>
  <div>
    <div class="about" v-for="usuario in usuarios" :key="usuario.id">
      <p>Nombre: {{usuario.Nombre}}</p>
      <p>Correo: {{usuario.Correo}}</p>
      <p>Contraseña: {{usuario.Password}}</p>
      <p>Edad: {{usuario.Edad}}</p>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState} from 'vuex'

export default {
  name: "DesafioForm",

  data() {
    return {
      users: [],
    };
  },

  async created() {
    this.obtenerUsers();
  },

  computed: {
    ...mapState([
      'usuarios'
    ])
  },

  methods: {
    ...mapActions([
      'obtenerUsers'
    ])
  }
};
</script>

<style scoped>
.about {
  border: 1px solid black;
  padding: 10px;
  width: 250px;
  height: auto;
  margin: auto;
  margin-bottom: 10px;
}
</style>
