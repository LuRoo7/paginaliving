<script setup lang="ts">
import { ref } from 'vue'
import axios from 'axios'
import { useRouter, RouterLink } from 'vue-router'

const router = useRouter()

const legajo = ref('')
const nombre = ref('')
const dni = ref('')
const contrasena = ref('')
const registrando = ref(false)

const registrar = async () => {

  if (registrando.value) {
    return
  }

  if (
    !legajo.value.trim() ||
    !nombre.value.trim() ||
    !dni.value.trim() ||
    !contrasena.value.trim()
  ) {
    alert('Completá todos los campos')
    return
  }

  registrando.value = true

  try {

    const respuesta = await axios.post(
      'http://localhost/nuevaapi/registro.php',
      {
        legajo: legajo.value.trim(),
        nombre: nombre.value.trim(),
        dni: dni.value.trim(),
        contrasena: contrasena.value
      }
    )

    console.log('RESPUESTA DEL PHP:', respuesta.data)

    if (respuesta.data.status === 'success') {

      alert('Usuario registrado correctamente')

      legajo.value = ''
      nombre.value = ''
      dni.value = ''
      contrasena.value = ''

      router.push('/Iniciosesion')

    } else {

      alert(
        respuesta.data.mensaje ||
        'No se pudo registrar el usuario'
      )
    }

  } catch (error: any) {

    console.log('ERROR COMPLETO:', error)

    if (error.response) {

      console.log(
        'RESPUESTA DEL SERVIDOR:',
        error.response.data
      )

      alert(
        error.response.data?.mensaje ||
        'El servidor rechazó el registro'
      )

    } else if (error.request) {

      alert(
        'No se pudo conectar con el servidor. ' +
        'Verificá que Apache esté iniciado en XAMPP.'
      )

    } else {

      alert('Ocurrió un error al registrar el usuario')
    }

  } finally {
    registrando.value = false
  }
}
</script>

<template>

  <nav>
    <RouterLink to="/registrarse">
      Registrarse
    </RouterLink>

    <RouterLink to="/Iniciosesion">
      Inicio de sesión
    </RouterLink>
  </nav>

  <div class="contenedor">

    <div class="formulario">

      <input
        type="text"
        placeholder="Legajo"
        v-model="legajo"
      >

      <input
        type="text"
        placeholder="Nombre"
        v-model="nombre"
      >

      <input
        type="text"
        placeholder="DNI"
        v-model="dni"
      >

      <input
        type="password"
        placeholder="Contraseña"
        v-model="contrasena"
      >

      <button
        @click="registrar"
        :disabled="registrando"
      >
        {{ registrando ? 'Registrando...' : 'Registrarse' }}
      </button>

      <p>
        Si ya tenés una cuenta,
        <RouterLink to="/Iniciosesion">
          iniciá sesión
        </RouterLink>
      </p>

    </div>

  </div>

</template>

<style scoped>

nav {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  padding: 20px 0;
  background-color: white;
}

nav a {
  text-decoration: none;
  color: black;
  font-size: 20px;
  font-weight: bold;
}

nav a.router-link-active {
  border-bottom: 2px solid black;
  padding-bottom: 5px;
}

.contenedor {
  min-height: calc(100vh - 80px);
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f4f4f4;
}

.formulario {
  background: white;
  width: 350px;
  padding: 40px;
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
  text-align: center;
}

.formulario h1 {
  margin-bottom: 25px;
}

.formulario input {
  width: 100%;
  padding: 12px;
  margin-bottom: 15px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-sizing: border-box;
}

.formulario input:focus {
  outline: none;
  border-color: black;
}

.formulario button {
  width: 100%;
  padding: 12px;
  background-color: black;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  font-size: 15px;
}

.formulario button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.formulario button:hover:not(:disabled) {
  opacity: 0.9;
}

.formulario p {
  margin-top: 15px;
  font-size: 14px;
  color: #666;
}

.formulario p a {
  color: black;
  font-weight: bold;
  text-decoration: none;
}

.formulario p a:hover {
  text-decoration: underline;
}

</style>