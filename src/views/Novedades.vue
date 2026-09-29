
<script setup>
import { ref } from 'vue'
import axios from 'axios'

const comentario = ref('')
const enviando = ref(false)
const mensaje = ref('')
const tipoMensaje = ref('')

const enviarPregunta = async () => {

  if (enviando.value) {
    return
  }

  if (!comentario.value.trim()) {
    mensaje.value = 'Escribí una pregunta antes de enviarla.'
    tipoMensaje.value = 'error'
    return
  }

  // Obtener el legajo del empleado que inició sesión
  const legajo = localStorage.getItem('legajo')

  if (!legajo) {
    mensaje.value = 'No se encontró el legajo del usuario. Volvé a iniciar sesión.'
    tipoMensaje.value = 'error'
    return
  }

  enviando.value = true
  mensaje.value = ''

  try {

    const respuesta = await axios.post(
      'http://localhost/nuevaapi/enviar_pregunta.php',
      {
        legajo: legajo,
        comentario: comentario.value.trim()
      }
    )

    if (respuesta.data.success) {

      mensaje.value = '¡Pregunta enviada correctamente!'
      tipoMensaje.value = 'exito'

      // Limpiar el campo después de enviar
      comentario.value = ''

    } else {

      mensaje.value = respuesta.data.message || 'No se pudo enviar la pregunta.'
      tipoMensaje.value = 'error'

    }

  } catch (error) {

    console.error('Error al enviar pregunta:', error)

    mensaje.value = 'Error al conectar con el servidor.'
    tipoMensaje.value = 'error'

  } finally {

    enviando.value = false

  }
}
</script>


<template>

  <div class="novedades-page">

    <header class="barra-logo">

      <div class="logo">
        <img src="@/assets/Logo.png" alt="logo" />
      </div>

      <nav class="menu">

        <RouterLink to="/Inicio" class="boton">
          Inicio
        </RouterLink>

        <RouterLink to="/novedades" class="boton">
          Novedades
        </RouterLink>

        <RouterLink to="/higieneyseguridad" class="boton">
          Higiene y Seguridad
        </RouterLink>

        <RouterLink to="/Capacitaciones" class="boton">
          Capacitaciones
        </RouterLink>
        
        <RouterLink to="/perfil" class="boton">
          Mi Perfil
        </RouterLink>

      </nav>

    </header>


    <!-- CONTENIDO -->
    <main class="contenido">
      
       <span class="etiqueta">
        FRONTERA LIVING
      </span>

      <h1>Novedades</h1>
      
      <div class="linea-roja"></div>

      <p class="subtitulo">
        Mantente informado sobre las últimas novedades de la empresa.
      </p>


      <section class="novedades-container">

        <article class="novedad">

          <div class="novedad-fecha">
            08 SEP 2026
          </div>

          <div class="novedad-contenido">

            <h2>Nuevo comunicado para empleados</h2>

            <p>
              La empresa informa que se encuentra disponible un nuevo
              comunicado con información importante para todos los empleados.
            </p>

          </div>

        </article>


        <article class="novedad">

          <div class="novedad-fecha">
            05 SEP 2026
          </div>

          <div class="novedad-contenido">

            <h2>Información sobre capacitaciones</h2>

            <p>
              Ya se encuentran disponibles nuevas capacitaciones para
              continuar aprendiendo y mejorando nuestras habilidades.
            </p>

          </div>

        </article>


        <article class="novedad">

          <div class="novedad-fecha">
            01 SEP 2026
          </div>

          <div class="novedad-contenido">

            <h2>Actualización de información</h2>

            <p>
              Se actualizaron algunos documentos y recursos disponibles
              dentro de la plataforma para los empleados.
            </p>

          </div>

        </article>

      </section>


      <section class="preguntas">

        <div class="preguntas-titulo">

          <h2>¿Tenés alguna pregunta?</h2>

          <p>
            Podés enviar tu consulta a la empresa y recibir una respuesta.
          </p>

        </div>


        <div class="pregunta-form">

          <label for="pregunta">
            Tu pregunta
          </label>

          <textarea
            id="pregunta"
            v-model="comentario"
            rows="5"
            placeholder="Escribí aquí tu pregunta..."
          ></textarea>


          <button
            class="enviar"
            @click="enviarPregunta"
            :disabled="enviando"
          >

            {{ enviando ? 'Enviando...' : 'Enviar pregunta' }}

          </button>


          <!-- MENSAJE DE ÉXITO O ERROR -->

          <p
            v-if="mensaje"
            :class="tipoMensaje"
            class="mensaje"
          >
            {{ mensaje }}
          </p>

        </div>

      </section>

    </main>

  </div>

</template>


<style scoped>

.novedades-page {
  min-height: 100vh;
  background-color: #EDEDED;
  color: #4A4A4E;
  font-family: Arial, Helvetica, sans-serif;
}



.barra-logo {
  width: 100%;
  min-height: 80px;
  background-color: #EB3135;
  display: flex;
  align-items: center;
  padding: 10px 40px;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}

.logo {
  display: flex;
  align-items: center;
}

.logo img {
  display: block;
  width: 150px;
  height: auto;
}

.menu {
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: 10px;
}

.boton {
  color: white;
  text-decoration: none;
  font-family: 'Poppins', sans-serif;
  font-size: 15px;
  font-weight: 500;
  padding: 10px 16px;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.boton:hover {
  background-color: white;
  color: #000000;
}

.menu .router-link-active {
  background-color: white;
  color: #000000;
}



.contenido {
  padding: 50px 40px 70px;
  max-width: 1200px;
  margin: 0 auto;
}
.etiqueta {
  display: block;
  width: 100%;
  color: #EB3135;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 3px;
  margin-bottom: 10px;
  text-align: center;
}
.contenido h1 {
  margin: 0;
  color: #4A4A4E;
  font-family: "NuberNext Black", Arial, sans-serif;
  font-size: clamp(32px, 5vw, 48px);
  font-weight: 900;
  text-align: center;
}

.linea-roja {
  width: 55px;
  height: 4px;
  background-color: #EB3135;
  border-radius: 10px;
  margin: 17px auto;
}

.subtitulo {
  text-align: center;
  color: #77777C;
  font-size: 16px;
  margin-top: 10px;
  margin-bottom: 40px;
}



.novedades-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;
  margin-bottom: 60px;
}

.novedad {
  background-color: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.novedad:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 22px rgba(0, 0, 0, 0.12);
}

.novedad-fecha {
  background-color: #EB3135;
  color: white;
  padding: 12px 18px;
  font-size: 13px;
  font-weight: bold;
}

.novedad-contenido {
  padding: 22px;
}

.novedad-contenido h2 {
  margin: 0 0 12px;
  font-size: 20px;
  color: #4A4A4E;
}

.novedad-contenido p {
  color: #707074;
  line-height: 1.6;
  font-size: 14px;
  margin-bottom: 0;
}


.preguntas {
  background-color: white;
  border-radius: 18px;
  padding: 35px;
  max-width: 800px;
  margin: 0 auto;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
}

.preguntas-titulo {
  text-align: center;
  margin-bottom: 30px;
}

.preguntas-titulo h2 {
  margin: 0 0 10px;
  font-size: 28px;
  color: #4A4A4E;
}

.preguntas-titulo p {
  margin: 0;
  color: #77777C;
}


.pregunta-form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.pregunta-form label {
  font-weight: 600;
  color: #4A4A4E;
  margin-top: 8px;
}

.pregunta-form textarea {
  width: 100%;
  box-sizing: border-box;
  border: 1px solid #D5D5D5;
  border-radius: 8px;
  padding: 13px 15px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 14px;
  outline: none;
  transition: border 0.3s ease;
  resize: vertical;
  min-height: 120px;
}

.pregunta-form textarea:focus {
  border-color: #EB3135;
}



.enviar {
  margin-top: 15px;
  border: none;
  background-color: #EB3135;
  color: white;
  padding: 13px;
  border-radius: 8px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.3s ease;
}

.enviar:hover {
  background-color: #c92529;
}

.enviar:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}



.mensaje {
  text-align: center;
  margin-top: 10px;
  font-weight: 600;
}

.exito {
  color: #2e8b57;
}

.error {
  color: #EB3135;
}



@media (max-width: 950px) {

  .barra-logo {
    flex-direction: column;
    gap: 15px;
    padding: 15px;
  }

  .menu {
    margin-left: 0;
    flex-wrap: wrap;
    justify-content: center;
  }

  .novedades-container {
    grid-template-columns: 1fr;
  }

}


@media (max-width: 600px) {

  .logo img {
    width: 130px;
  }

  .menu {
    gap: 5px;
  }

  .boton {
    font-size: 12px;
    padding: 8px 10px;
  }

  .contenido {
    padding: 40px 20px;
  }

  .preguntas {
    padding: 25px 20px;
  }

  .preguntas-titulo h2 {
    font-size: 23px;
  }

}

</style>
