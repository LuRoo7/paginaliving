```vue
<script setup>
import { ref } from 'vue'
import { useRouter, RouterLink } from 'vue-router'

const router = useRouter()

const mostrarRecibo = ref(false)
const mostrarVacaciones = ref(false)
const mostrarART = ref(false)

const irCertificados = () => {
  router.push('/certificados')
}

const cerrarModales = () => {
  mostrarRecibo.value = false
  mostrarVacaciones.value = false
  mostrarART.value = false
}
</script>

<template>
  <div class="perfil-page">

    <header class="barra-logo">

      <div class="logo">
        <img
          src="@/assets/Logo.png"
          alt="Frontera Living"
        />
      </div>

      <nav class="menu">

        <RouterLink
          to="/Inicio"
          class="boton"
        >
          Inicio
        </RouterLink>

        <RouterLink
          to="/novedades"
          class="boton"
        >
          Novedades
        </RouterLink>
        <RouterLink
          to="/higieneyseguridad"
          class="boton"
        >
          Higiene y Seguridad
        </RouterLink>

        <RouterLink
          to="/Capacitaciones"
          class="boton"
        >
          Capacitaciones
        </RouterLink>
        <RouterLink
          to="/perfil"
          class="boton"
        >
          Mi Perfil
        </RouterLink>

      </nav>

    </header>


    <div class="perfil-contenedor">

      <div class="encabezado">

        <span class="etiqueta">
          FRONTERA LIVING
        </span>

        <h1>
          MI PERFIL
        </h1>

        <div class="linea-roja"></div>

        <p>
          Consultá tu información y documentación laboral.
        </p>

      </div>


      <div class="perfil-card">

        <h1>Codigo de barras</h1>

        <div class="codigo">

          <div class="codigo-barras">

            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>

          </div>

          <span>
            LEGAJO
          </span>

        </div>

      </div>


      <div class="opciones">

        <button
          class="opcion-card"
          @click="mostrarRecibo = true"
        >

          <div class="opcion-icono">
            $
          </div>

          <div class="opcion-texto">

            <h3>
              Recibo de sueldo
            </h3>

            <p>
              Consultá y descargá tu recibo de sueldo.
            </p>

          </div>

          <div class="flecha">
            →
          </div>

        </button>


        <button
          class="opcion-card"
          @click="mostrarVacaciones = true"
        >

          <div class="opcion-icono">
            📅
          </div>

          <div class="opcion-texto">

            <h3>
              Vacaciones
            </h3>

            <p>
              Consultá la fecha programada de tus vacaciones.
            </p>

          </div>

          <div class="flecha">
            →
          </div>

        </button>


        <button
          class="opcion-card"
          @click="mostrarART = true"
        >

          <div class="opcion-icono">
            ✓
          </div>

          <div class="opcion-texto">

            <h3>
              ART Seguro
            </h3>

            <p>
              Consultá la información de tu seguro laboral.
            </p>

          </div>

          <div class="flecha">
            →
          </div>

        </button>


        <button
          class="opcion-card"
          @click="irCertificados"
        >

          <div class="opcion-icono">
            +
          </div>

          <div class="opcion-texto">

            <h3>
              Certificado médico
            </h3>

            <p>
              Cargá y consultá tus certificados médicos.
            </p>

          </div>

          <div class="flecha">
            →
          </div>

        </button>

      </div>

    </div>


    <div
      v-if="mostrarRecibo"
      class="modal-fondo"
      @click.self="cerrarModales"
    >

      <div class="modal">

        <button
          class="cerrar"
          @click="cerrarModales"
        >
          ×
        </button>

        <div class="modal-icono">
          $
        </div>

        <h2>
          Recibo de sueldo
        </h2>

        <div class="informacion-modal">

          <div>
            <span>PERÍODO</span>
            <strong>Agosto 2026</strong>
          </div>

          <div>
            <span>SUELDO BÁSICO</span>
            <strong>$850.000</strong>
          </div>

          <div>
            <span>ESTADO</span>
            <strong>Disponible</strong>
          </div>

        </div>

        <a
          href="/recibos/recibo.pdf"
          download
          class="btn-principal"
        >
          ↓ Descargar recibo
        </a>

      </div>

    </div>


    <div
      v-if="mostrarVacaciones"
      class="modal-fondo"
      @click.self="cerrarModales"
    >

      <div class="modal">

        <button
          class="cerrar"
          @click="cerrarModales"
        >
          ×
        </button>

        <div class="modal-icono">
          📅
        </div>

        <h2>
          Vacaciones
        </h2>

        <div class="vacaciones-info">

          <span>
            FECHA PROGRAMADA
          </span>

          <strong>
            14 de diciembre de 2026
          </strong>

        </div>

        <p class="texto-modal">
          Esta es la fecha actualmente programada para tus vacaciones.
        </p>

        <button
          class="btn-principal"
          @click="cerrarModales"
        >
          Cerrar
        </button>

      </div>

    </div>


    <div
      v-if="mostrarART"
      class="modal-fondo"
      @click.self="cerrarModales"
    >

      <div class="modal">

        <button
          class="cerrar"
          @click="cerrarModales"
        >
          ×
        </button>

        <div class="modal-icono">
          ✓
        </div>

        <h2>
          ART Seguro
        </h2>

        <div class="informacion-modal">

          <div>
            <span>ASEGURADORA</span>
            <strong>ART Frontera</strong>
          </div>

          <div>
            <span>ESTADO</span>
            <strong>Activo</strong>
          </div>

          <div>
            <span>COBERTURA</span>
            <strong>Accidentes laborales</strong>
          </div>

        </div>

        <button
          class="btn-principal"
          @click="cerrarModales"
        >
          Cerrar
        </button>

      </div>

    </div>


  </div>
</template>


<style scoped>

.perfil-page {
  min-height: 100vh;
  padding: 0 20px 110px;
  background-color: #EDEDED;
  color: #4A4A4E;
  font-family: Arial, Helvetica, sans-serif;
}


.barra-logo {
  width: calc(100% + 40px);
  margin-left: -20px;
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


.perfil-contenedor {
  width: 100%;
  max-width: 950px;
  margin: 0 auto;
  padding-top: 55px;
}


.encabezado {
  text-align: center;
  margin-bottom: 35px;
}


.etiqueta {
  display: inline-block;
  margin-bottom: 10px;
  color: #EB3135;
  font-size: 12px;
  font-weight: bold;
  letter-spacing: 3px;
}


.encabezado h1 {
  margin: 0;
  color: #4A4A4E;
  font-family:
    "NuberNext Black",
    Arial,
    sans-serif;
  font-size: clamp(30px, 5vw, 46px);
  font-weight: 900;
}


.linea-roja {
  width: 65px;
  height: 5px;
  margin: 18px auto;
  border-radius: 10px;
  background-color: #EB3135;
}


.encabezado p {
  margin: 0;
  color: #4A4A4E;
  font-size: 15px;
}


.perfil-card {
  text-align: center;
  padding: 30px;
  background-color: white;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(74, 74, 78, 0.12);
}


.codigo {
  margin-top: 25px;
  padding: 20px;
  border-top: 1px solid #BDC0C3;
  text-align: center;
}


.codigo-barras {
  display: flex;
  align-items: stretch;
  justify-content: center;
  height: 55px;
  gap: 4px;
  overflow: hidden;
}


.codigo-barras span {
  display: block;
  width: 4px;
  height: 100%;
  background-color: #4A4A4E;
}


.codigo-barras span:nth-child(2n) {
  width: 7px;
}


.codigo-barras span:nth-child(3n) {
  width: 2px;
}


.codigo-barras span:nth-child(5n) {
  width: 9px;
}


.codigo > span {
  display: block;
  margin-top: 8px;
  color: #BDC0C3;
  font-size: 10px;
  font-weight: bold;
  letter-spacing: 3px;
}


.opciones {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 18px;
  margin-top: 25px;
}


.opcion-card {
  display: flex;
  align-items: center;
  gap: 15px;
  width: 100%;
  min-height: 120px;
  padding: 20px;
  border: 1px solid #BDC0C3;
  border-radius: 16px;
  background-color: white;
  color: #4A4A4E;
  text-align: left;
  cursor: pointer;
  transition:
    transform 0.2s ease,
    border-color 0.2s ease,
    box-shadow 0.2s ease;
}


.opcion-card:hover {
  transform: translateY(-4px);
  border-color: #EB3135;
  box-shadow: 0 8px 20px rgba(74, 74, 78, 0.12);
}


.opcion-icono {
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  border-radius: 13px;
  background-color: #EB3135;
  color: white;
  font-size: 23px;
  font-weight: bold;
}


.opcion-texto {
  flex: 1;
  min-width: 0;
}


.opcion-texto h3 {
  margin: 0 0 7px;
  color: #4A4A4E;
  font-family:
    "NuberNext Black",
    Arial,
    sans-serif;
  font-size: 17px;
}


.opcion-texto p {
  margin: 0;
  color: #BDC0C3;
  font-size: 12px;
  line-height: 1.4;
}


.flecha {
  color: #EB3135;
  font-size: 22px;
  font-weight: bold;
}


.modal-fondo {
  position: fixed;
  inset: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: rgba(74, 74, 78, 0.7);
}


.modal {
  position: relative;
  width: 100%;
  max-width: 500px;
  padding: 35px;
  border-radius: 20px;
  background-color: white;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.25);
}


.cerrar {
  position: absolute;
  top: 15px;
  right: 15px;
  width: 35px;
  height: 35px;
  border: none;
  border-radius: 50%;
  background-color: #EDEDED;
  color: #4A4A4E;
  font-size: 24px;
  cursor: pointer;
}


.cerrar:hover {
  background-color: #EB3135;
  color: white;
}


.modal-icono {
  width: 55px;
  height: 55px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;
  border-radius: 14px;
  background-color: #EB3135;
  color: white;
  font-size: 25px;
  font-weight: bold;
}


.modal h2 {
  margin: 0 0 25px;
  color: #4A4A4E;
  font-family:
    "NuberNext Black",
    Arial,
    sans-serif;
  font-size: 25px;
}


.informacion-modal {
  display: flex;
  flex-direction: column;
  gap: 12px;
}


.informacion-modal > div {
  display: flex;
  justify-content: space-between;
  gap: 15px;
  padding: 14px;
  border-radius: 10px;
  background-color: #EDEDED;
}


.informacion-modal span {
  color: #BDC0C3;
  font-size: 11px;
  font-weight: bold;
}


.informacion-modal strong {
  color: #4A4A4E;
  font-size: 13px;
  text-align: right;
}


.vacaciones-info {
  padding: 25px;
  border-radius: 14px;
  background-color: #EDEDED;
  text-align: center;
}


.vacaciones-info span {
  display: block;
  margin-bottom: 10px;
  color: #EB3135;
  font-size: 11px;
  font-weight: bold;
  letter-spacing: 1px;
}


.vacaciones-info strong {
  color: #4A4A4E;
  font-family:
    "NuberNext Black",
    Arial,
    sans-serif;
  font-size: 21px;
}


.texto-modal {
  margin: 20px 0;
  color: #4A4A4E;
  font-size: 14px;
  line-height: 1.5;
}


.btn-principal {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 48px;
  margin-top: 25px;
  border: none;
  border-radius: 10px;
  background-color: #EB3135;
  color: white;
  text-decoration: none;
  font-family:
    "NuberNext Black",
    Arial,
    sans-serif;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  transition:
    background-color 0.2s ease,
    transform 0.2s ease;
}


.btn-principal:hover {
  background-color: #4A4A4E;
  transform: translateY(-2px);
}


.btn-volver {
  position: fixed;
  right: 25px;
  bottom: 25px;
  z-index: 100;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 44px;
  padding: 11px 19px;
  border-radius: 9px;
  background-color: #EB3135;
  color: white;
  text-decoration: none;
  font-size: 14px;
  font-weight: bold;
  box-shadow: 0 5px 15px rgba(74, 74, 78, 0.18);
  transition:
    background-color 0.2s ease,
    transform 0.2s ease;
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

}


@media (max-width: 700px) {

  .perfil-page {
    padding: 0 15px 100px;
  }

  .barra-logo {
    width: calc(100% + 30px);
    margin-left: -15px;
  }

  .perfil-contenedor {
    padding-top: 35px;
  }

  .perfil-card {
    padding: 22px;
  }

  .opciones {
    grid-template-columns: 1fr;
  }

  .opcion-card {
    min-height: 100px;
  }

}


@media (max-width: 450px) {

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

  .opcion-icono {
    width: 45px;
    height: 45px;
  }

  .opcion-texto h3 {
    font-size: 15px;
  }

}

</style>
```
