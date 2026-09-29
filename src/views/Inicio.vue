
<template>
  <div class="quienes-page">

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


    <section class="quienes-seccion">

      <div class="imagen-contenedor">
        <img
          src="@/assets/fabrica.jpg"
          alt="Frontera Living"
          class="imagen-empresa"
        />
      </div>

      <div class="quienes-texto">

        <span class="etiqueta">
          FRONTERA LIVING
        </span>

        <h2>
          ¿QUIÉNES SOMOS?
        </h2>

        <div class="linea-roja"></div>

        <p>
          Frontera Living nació hace más de 46 años en San Francisco, Córdoba,
          como una empresa familiar dedicada a la fabricación de sillones,
          incorporando con el tiempo la producción de colchones.
        </p>

        <p>
          Hoy somos una empresa mayorista con presencia en todo el país,
          enfocada en la calidad, el diseño y el confort del hogar.
        </p>

      </div>

    </section>


    <section class="info-seccion">

      <article class="info-card vision">

        <div class="card-superior"></div>

        <h2>
          VISIÓN
        </h2>

        <div class="separador"></div>

        <p>
          Estar presentes en cada hogar de nuestro país.
          Buscamos ser líder en el mercado nacional por nuestra
          calidad e innovación. Ser reconocidos por la trayectoria
          y el diseño de nuestros productos.
        </p>

      </article>


      <article class="info-card mision">

        <div class="card-superior"></div>

        <h2>
          MISIÓN
        </h2>

        <div class="separador"></div>

        <p>
          Creamos bienestar y espacios confortables a través de una
          organización sin desperdicios. Fabricamos productos de diseño
          y calidad priorizando las necesidades y expectativas de los usuarios.
        </p>

      </article>


      <article class="info-card valores">

        <div class="card-superior"></div>

        <h2>
          VALORES
        </h2>

        <div class="separador"></div>

        <p>
          Nuestros valores son esenciales para el buen desempeño y desarrollo
          de nuestras actividades, entre ellos están:
        </p>

        <div class="valores-lista">
          <span>Compromiso</span>
          <span>Confianza</span>
          <span>Responsabilidad</span>
          <span>Respeto</span>
          <span>Honestidad</span>
          <span>Humildad</span>
        </div>

      </article>

    </section>


    <section class="calendario-seccion">

      <div class="calendario-titulo">

        <span class="etiqueta">
          FRONTERA LIVING
        </span>

        <h2>
          CALENDARIO 2026
        </h2>

        <div class="linea-roja"></div>

        <p>
          Seleccioná una fecha destacada para conocer nuestra historia.
        </p>

      </div>


      <div class="calendario">

        <div
          v-for="mes in meses"
          :key="mes.numero"
          class="mes"
        >

          <div class="mes-titulo">
            {{ mes.nombre }}
          </div>

          <div class="dias-semana">
            <span>LU</span>
            <span>MA</span>
            <span>MI</span>
            <span>JU</span>
            <span>VI</span>
            <span>SA</span>
            <span>DO</span>
          </div>

          <div class="dias">

            <span
              v-for="n in mes.primerDia"
              :key="'vacio-' + mes.numero + '-' + n"
              class="dia vacio"
            ></span>

            <button
              v-for="dia in mes.dias"
              :key="mes.numero + '-' + dia"
              class="dia"
              :class="{
                destacado: tieneEvento(mes.numero, dia)
              }"
              :disabled="!tieneEvento(mes.numero, dia)"
              @click="abrirModal(mes.numero, dia)"
            >
              {{ dia }}
            </button>

          </div>

        </div>

      </div>

    </section>


    <section class="frase-final">

      <div class="frase-linea"></div>

      <p>
        Diseño, calidad y confort para cada hogar.
      </p>

      <div class="frase-linea"></div>

    </section>


    <div
      v-if="modalAbierto"
      class="modal-fondo"
      @click.self="cerrarModal"
    >

      <div class="modal-contenido">

        <button
          class="modal-cerrar"
          @click="cerrarModal"
        >
          ×
        </button>

        <div class="modal-titulo">

          <span>
            FRONTERA LIVING
          </span>

          <h2>
            {{ fechaSeleccionada }}
          </h2>

        </div>

        <div class="modal-imagenes">

          <img
            v-for="(imagen, index) in imagenesSeleccionadas"
            :key="index"
            :src="imagen"
            :alt="'Imagen ' + (index + 1) + ' - ' + fechaSeleccionada"
            class="imagen-modal"
          />

        </div>

      </div>

    </div>

  </div>
</template>


<script setup>
import { ref } from "vue"
import { RouterLink } from "vue-router"

const modalAbierto = ref(false)
const fechaSeleccionada = ref("")
const imagenesSeleccionadas = ref([])

const eventos = {
  "3-8": [
    new URL("../assets/calendario/8marzo.jpeg", import.meta.url).href
  ],

  "3-19": [
    new URL("../assets/calendario/19marzo.jpeg", import.meta.url).href
  ],

  "4-27": [
    new URL("../assets/calendario/27abril.jpeg", import.meta.url).href
  ],

  "4-28": [
    new URL("../assets/calendario/28abril.jpeg", import.meta.url).href
  ],

  "6-3": [
    new URL("../assets/calendario/3junio.jpeg", import.meta.url).href
  ],

  "6-16": [
    new URL("../assets/calendario/16junio.jpeg", import.meta.url).href
  ],

  "6-21": [
    new URL("../assets/calendario/21junio.jpeg", import.meta.url).href
  ],

  "6-29": [
    new URL("../assets/calendario/29junio.jpeg", import.meta.url).href
  ],

  "7-1": [
    new URL("../assets/calendario/1julio.jpeg", import.meta.url).href
  ],

  "8-2": [
    new URL("../assets/calendario/2agosto.jpeg", import.meta.url).href
  ],

  "8-16": [
    new URL("../assets/calendario/16agosto.jpeg", import.meta.url).href
  ],

  "8-30": [
    new URL("../assets/calendario/30agosto.jpeg", import.meta.url).href
  ],

  "9-2": [
    new URL("../assets/calendario/2septiembre.jpeg", import.meta.url).href
  ],

  "9-24": [
    new URL("../assets/calendario/24septiembre.jpeg", import.meta.url).href
  ],

  "10-1": [
    new URL("../assets/calendario/1octubre.jpeg", import.meta.url).href
  ],

  "10-6": [
    new URL("../assets/calendario/6octubre.jpeg", import.meta.url).href
  ],

  "10-7": [
    new URL("../assets/calendario/7octubre.jpeg", import.meta.url).href
  ],

  "10-14": [
    new URL("../assets/calendario/14octubre1.jpeg", import.meta.url).href,
    new URL("../assets/calendario/14octubre2.jpeg", import.meta.url).href
  ],

  "10-18": [
    new URL("../assets/calendario/18octubre.jpeg", import.meta.url).href
  ],

  "12-15": [
    new URL("../assets/calendario/15diciembre.jpeg", import.meta.url).href
  ],

  "12-17": [
    new URL("../assets/calendario/17diciembre.jpeg", import.meta.url).href
  ]
}

const meses = [
  { numero: 1, nombre: "ENERO", primerDia: 3, dias: 31 },
  { numero: 2, nombre: "FEBRERO", primerDia: 6, dias: 28 },
  { numero: 3, nombre: "MARZO", primerDia: 6, dias: 31 },
  { numero: 4, nombre: "ABRIL", primerDia: 2, dias: 30 },
  { numero: 5, nombre: "MAYO", primerDia: 4, dias: 31 },
  { numero: 6, nombre: "JUNIO", primerDia: 0, dias: 30 },
  { numero: 7, nombre: "JULIO", primerDia: 2, dias: 31 },
  { numero: 8, nombre: "AGOSTO", primerDia: 5, dias: 31 },
  { numero: 9, nombre: "SEPTIEMBRE", primerDia: 1, dias: 30 },
  { numero: 10, nombre: "OCTUBRE", primerDia: 3, dias: 31 },
  { numero: 11, nombre: "NOVIEMBRE", primerDia: 6, dias: 30 },
  { numero: 12, nombre: "DICIEMBRE", primerDia: 1, dias: 31 }
]

const nombresMeses = [
  "",
  "enero",
  "febrero",
  "marzo",
  "abril",
  "mayo",
  "junio",
  "julio",
  "agosto",
  "septiembre",
  "octubre",
  "noviembre",
  "diciembre"
]

function tieneEvento(mes, dia) {
  return !!eventos[`${mes}-${dia}`]
}

function abrirModal(mes, dia) {
  const clave = `${mes}-${dia}`

  if (!eventos[clave]) {
    return
  }

  fechaSeleccionada.value =
    `${dia} de ${nombresMeses[mes]} de 2026`

  imagenesSeleccionadas.value = eventos[clave]
  modalAbierto.value = true

  document.body.style.overflow = "hidden"
}

function cerrarModal() {
  modalAbierto.value = false
  document.body.style.overflow = ""
}
</script>


<style scoped>

.quienes-page {
  min-height: 100vh;
  background-color: #EDEDED;
  color: #4A4A4E;
  font-family: Arial, Helvetica, sans-serif;
  padding-bottom: 30px;
}


.barra-logo {
  width: 100%;
  min-height: 80px;
  background-color: #EB3135;
  display: flex;
  align-items: center;
  padding: 10px 40px;
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


.quienes-seccion {
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 55px 0 45px;
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  align-items: center;
  gap: 55px;
}


.imagen-contenedor {
  width: 100%;
  aspect-ratio: 16 / 9;
  border-radius: 20px;
  overflow: hidden;
  position: relative;
  background-color: #BDC0C3;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.14);
}


.imagen-empresa {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  object-position: center;
  transition: transform 0.5s ease;
}


.imagen-contenedor:hover .imagen-empresa {
  transform: scale(1.03);
}


.imagen-contenedor::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(
    135deg,
    rgba(235, 49, 53, 0.08),
    transparent 60%
  );
  pointer-events: none;
}


.quienes-texto {
  padding: 10px 5px;
}


.etiqueta {
  display: inline-block;
  color: #EB3135;
  font-size: 12px;
  font-weight: bold;
  letter-spacing: 3px;
  margin-bottom: 12px;
}


h1,
h2 {
  font-family:
    "NuberNext Black",
    "NuberNext",
    Arial,
    sans-serif;
  font-weight: 900;
}


.quienes-texto h2 {
  margin: 0;
  color: #4A4A4E;
  font-size: clamp(30px, 4vw, 46px);
  line-height: 1.1;
  letter-spacing: -0.5px;
}


.linea-roja {
  width: 65px;
  height: 5px;
  background-color: #EB3135;
  border-radius: 10px;
  margin: 20px 0 25px;
}


.quienes-texto p {
  margin: 0 0 15px;
  color: #4A4A4E;
  font-size: 15px;
  line-height: 1.7;
}


.info-seccion {
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px 0 50px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 22px;
}


.info-card {
  min-height: 320px;
  padding: 28px;
  border-radius: 18px;
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}


.info-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.14);
}


.vision {
  background-color: #EB3135;
  color: white;
}


.mision {
  background-color: #4A4A4E;
  color: white;
}


.valores {
  background-color: #BDC0C3;
  color: #4A4A4E;
}


.card-superior {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
}


.info-card h2 {
  margin: 0;
  font-size: 25px;
  line-height: 1.1;
  letter-spacing: 1px;
}


.separador {
  width: 45px;
  height: 3px;
  margin: 15px 0 20px;
  border-radius: 5px;
  background-color: currentColor;
  opacity: 0.75;
}


.info-card p {
  margin: 0;
  font-size: 14px;
  line-height: 1.65;
}


.valores-lista {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 20px;
}


.valores-lista span {
  padding: 7px 11px;
  border-radius: 20px;
  background-color: #EDEDED;
  color: #4A4A4E;
  font-size: 12px;
  font-weight: bold;
  transition:
    background-color 0.2s ease,
    color 0.2s ease,
    transform 0.2s ease;
}


.valores-lista span:hover {
  background-color: #EB3135;
  color: white;
  transform: translateY(-2px);
}


.calendario-seccion {
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 25px 0 70px;
}


.calendario-titulo {
  text-align: center;
  margin-bottom: 35px;
}


.calendario-titulo h2 {
  margin: 0;
  font-size: clamp(30px, 4vw, 42px);
  color: #4A4A4E;
}


.calendario-titulo .linea-roja {
  margin: 18px auto;
}


.calendario-titulo p {
  margin: 0;
  color: #66666A;
  font-size: 15px;
}


.calendario {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 22px;
}


.mes {
  background-color: white;
  border-radius: 17px;
  padding: 18px;
  box-shadow: 0 7px 20px rgba(0, 0, 0, 0.08);
  border: 1px solid #E0E0E0;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}


.mes:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 25px rgba(0, 0, 0, 0.12);
}


.mes-titulo {
  text-align: center;
  font-family:
    "NuberNext Black",
    "NuberNext",
    Arial,
    sans-serif;
  font-size: 18px;
  font-weight: 900;
  color: #4A4A4E;
  margin-bottom: 15px;
  letter-spacing: 1px;
}


.dias-semana {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  margin-bottom: 7px;
}


.dias-semana span {
  text-align: center;
  font-size: 10px;
  font-weight: bold;
  color: #99999D;
}


.dias {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 4px;
}


.dia {
  width: 100%;
  aspect-ratio: 1;
  border: none;
  border-radius: 8px;
  background-color: transparent;
  color: #4A4A4E;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: default;
  padding: 0;
}


.dia.vacio {
  pointer-events: none;
}


.dia.destacado {
  background-color: #EB3135;
  color: white;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 0 3px 7px rgba(235, 49, 53, 0.3);
  transition:
    transform 0.2s ease,
    background-color 0.2s ease,
    box-shadow 0.2s ease;
}


.dia.destacado:hover {
  background-color: #4A4A4E;
  transform: scale(1.12);
  box-shadow: 0 5px 12px rgba(0, 0, 0, 0.2);
}


.modal-fondo {
  position: fixed;
  inset: 0;
  z-index: 9999;
  background-color: rgba(0, 0, 0, 0.78);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px;
  box-sizing: border-box;
  animation: aparecerModal 0.25s ease;
}


.modal-contenido {
  position: relative;
  width: min(1100px, 95vw);
  max-height: 92vh;
  overflow-y: auto;
  background-color: white;
  border-radius: 22px;
  padding: 35px;
  box-sizing: border-box;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);
  animation: subirModal 0.3s ease;
}


.modal-cerrar {
  position: absolute;
  top: 15px;
  right: 18px;
  width: 42px;
  height: 42px;
  border: none;
  border-radius: 50%;
  background-color: #EB3135;
  color: white;
  font-size: 28px;
  line-height: 1;
  cursor: pointer;
  z-index: 10;
  transition:
    background-color 0.2s ease,
    transform 0.2s ease;
}


.modal-cerrar:hover {
  background-color: #4A4A4E;
  transform: rotate(90deg);
}


.modal-titulo {
  text-align: center;
  padding: 0 45px 25px;
}


.modal-titulo span {
  display: block;
  color: #EB3135;
  font-size: 11px;
  font-weight: bold;
  letter-spacing: 3px;
  margin-bottom: 7px;
}


.modal-titulo h2 {
  margin: 0;
  color: #4A4A4E;
  font-size: clamp(24px, 4vw, 36px);
}


.modal-imagenes {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  align-items: center;
  justify-items: center;
}


.imagen-modal {
  display: block;
  width: 100%;
  max-height: 68vh;
  object-fit: contain;
  border-radius: 15px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.16);
}


@keyframes aparecerModal {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}


@keyframes subirModal {
  from {
    opacity: 0;
    transform: translateY(25px) scale(0.97);
  }

  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}


.frase-final {
  width: 90%;
  max-width: 1000px;
  margin: 0 auto;
  padding: 10px 0 90px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
}


.frase-final p {
  margin: 0;
  color: #4A4A4E;
  font-family:
    "NuberNext Black",
    "NuberNext",
    Arial,
    sans-serif;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
}


.frase-linea {
  width: 60px;
  height: 3px;
  background-color: #EB3135;
  border-radius: 5px;
}


.btn-volver {
  position: fixed;
  right: 25px;
  bottom: 25px;
  z-index: 100;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 11px 19px;
  background-color: #EB3135;
  color: white;
  text-decoration: none;
  font-size: 14px;
  font-weight: bold;
  border-radius: 9px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.18);
  transition:
    background-color 0.3s ease,
    transform 0.3s ease;
}


.btn-volver:hover {
  background-color: #4A4A4E;
  transform: translateY(-3px);
}


@media (max-width: 1050px) {

  .calendario {
    grid-template-columns: repeat(3, 1fr);
  }

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

  .quienes-seccion {
    grid-template-columns: 1fr;
    gap: 35px;
    padding-top: 40px;
  }

  .imagen-contenedor {
    aspect-ratio: 16 / 8;
  }

  .quienes-texto {
    text-align: center;
    max-width: 800px;
    margin: 0 auto;
  }

  .linea-roja {
    margin-left: auto;
    margin-right: auto;
  }

  .info-seccion {
    grid-template-columns: 1fr;
    max-width: 700px;
  }

  .info-card {
    min-height: auto;
  }

  .calendario {
    grid-template-columns: repeat(2, 1fr);
  }

}


@media (max-width: 600px) {

  .barra-logo {
    padding: 12px;
  }

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

  .quienes-seccion {
    width: 88%;
    padding-top: 30px;
    padding-bottom: 35px;
    gap: 28px;
  }

  .imagen-contenedor {
    aspect-ratio: 16 / 9;
    border-radius: 15px;
  }

  .etiqueta {
    font-size: 10px;
    letter-spacing: 2px;
  }

  .quienes-texto h2 {
    font-size: 31px;
  }

  .quienes-texto p {
    font-size: 14px;
    line-height: 1.65;
  }

  .info-seccion {
    width: 88%;
    gap: 16px;
    padding-bottom: 35px;
  }

  .info-card {
    padding: 25px;
    border-radius: 16px;
  }

  .info-card h2 {
    font-size: 23px;
  }

  .info-card p {
    font-size: 14px;
  }

  .valores-lista {
    gap: 7px;
  }

  .valores-lista span {
    font-size: 11px;
    padding: 6px 10px;
  }

  .calendario-seccion {
    width: 92%;
  }

  .calendario {
    grid-template-columns: 1fr;
    gap: 15px;
  }

  .mes {
    padding: 16px;
  }

  .dia {
    font-size: 13px;
  }

  .modal-fondo {
    padding: 12px;
  }

  .modal-contenido {
    width: 100%;
    max-height: 94vh;
    padding: 25px 15px;
    border-radius: 17px;
  }

  .modal-titulo {
    padding: 5px 35px 20px;
  }

  .modal-imagenes {
    grid-template-columns: 1fr;
    gap: 15px;
  }

  .imagen-modal {
    max-height: 65vh;
  }

  .frase-final {
    padding-bottom: 90px;
  }

  .frase-final p {
    font-size: 16px;
  }

  .frase-linea {
    display: none;
  }


}

</style>
