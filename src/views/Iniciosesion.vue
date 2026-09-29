<script setup lang="ts">
import { ref } from 'vue'
import axios from 'axios'
import { useRouter, RouterLink } from 'vue-router'

const router = useRouter()

const legajo = ref('')
const contrasena = ref('')
const iniciando = ref(false)

const iniciarSesion = async () => {

  if (iniciando.value) {
    return
  }

  if (!legajo.value.trim() || !contrasena.value) {
    alert('Completá el legajo y la contraseña')
    return
  }

  iniciando.value = true

  try {

    const respuesta = await axios.post(
      'http://localhost/nuevaapi/Iniciosesion.php',
      {
        legajo: legajo.value.trim(),
        contrasena: contrasena.value
      },
      {
        headers: {
          'Content-Type': 'application/json'
        },
        responseType: 'json'
      }
    )

    console.log('RESPUESTA COMPLETA:', respuesta)
    console.log('DATA:', respuesta.data)

    let datos = respuesta.data

    if (typeof datos === 'string') {
      try {
        datos = JSON.parse(datos)
      } catch (e) {
        console.log('No se pudo convertir la respuesta a JSON')
      }
    }

    console.log('DATOS PROCESADOS:', datos)
    console.log('STATUS:', datos.status)

    if (datos.status === 'success') {

      localStorage.setItem(
        'legajo',
        String(datos.legajo)
      )

      localStorage.setItem(
        'nombre_usuario',
        datos.nombre
      )

      localStorage.setItem(
        'dni_usuario',
        datos.dni
      )

      console.log('LOGIN CORRECTO')
      console.log('Legajo guardado:', localStorage.getItem('legajo'))

      alert('Inicio de sesión correcto')

      router.push('/Inicio')

    } else {

      console.log('LOGIN RECHAZADO POR PHP')
      console.log('Mensaje:', datos.mensaje)

      alert(
        datos.mensaje ||
        'Legajo o contraseña incorrectos'
      )
    }

  } catch (error: any) {

    console.log('ERROR COMPLETO:', error)

    if (error.response) {

      console.log('STATUS HTTP:', error.response.status)
      console.log('RESPUESTA PHP:', error.response.data)

      let mensaje = 'Error del servidor'

      if (typeof error.response.data === 'object') {
        mensaje =
          error.response.data.mensaje ||
          mensaje
      }

      alert(mensaje)

    } else if (error.request) {

      alert(
        'No se pudo conectar con el servidor. Verificá que Apache esté iniciado en XAMPP.'
      )

    } else {

      alert('Ocurrió un error al iniciar sesión')
    }

  } finally {

    iniciando.value = false

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
        autocomplete="username"
      >

      <input
        type="password"
        placeholder="Contraseña"
        v-model="contrasena"
        autocomplete="current-password"
      >

      <button
        @click="iniciarSesion"
        :disabled="iniciando"
      >
        {{ iniciando ? 'Iniciando...' : 'Iniciar sesión' }}
      </button>

      <p>
        ¿No tienes una cuenta?
        <RouterLink to="/registrarse">
          Regístrate
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
  font-weight: bold;
  cursor: pointer;
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