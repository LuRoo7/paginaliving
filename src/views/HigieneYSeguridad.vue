<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const getPuestoImagen = (nombreImagen) => {
  return new URL(`../assets/puestos/${nombreImagen}`, import.meta.url).href
}

const eppSeleccionado = ref(null)

const epps = [
  {
    id: 1,
    nombre: 'Casco',
    icono: '⛑️',
    texto: 'Protege la cabeza frente a golpes y caída de objetos.'
  },
  {
    id: 2,
    nombre: 'Protección auditiva',
    icono: '🎧',
    texto: 'Ayuda a proteger la audición frente a niveles elevados de ruido.'
  },
  {
    id: 3,
    nombre: 'Lentes',
    icono: '🥽',
    texto: 'Protegen los ojos frente a partículas, polvo y salpicaduras.'
  },
  {
    id: 4,
    nombre: 'Guantes',
    icono: '🧤',
    texto: 'Protegen las manos frente a golpes, cortes y otros riesgos.'
  },
  {
    id: 5,
    nombre: 'Calzado',
    icono: '🥾',
    texto: 'Protege los pies frente a golpes y caída de objetos.'
  },
  {
    id: 6,
    nombre: 'Protección respiratoria',
    icono: '😷',
    texto: 'Ayuda a reducir la exposición a determinados polvos y partículas.'
  },
  {
    id: 7,
    nombre: 'Chaleco',
    icono: '🦺',
    texto: 'Aumenta la visibilidad del trabajador en determinadas zonas.'
  },
  {
    id: 8,
    nombre: 'Protección facial',
    icono: '🛡️',
    texto: 'Ayuda a proteger el rostro frente a partículas y salpicaduras.'
  }
]

function seleccionarEpp(id) {
  if (eppSeleccionado.value === id) {
    eppSeleccionado.value = null
  } else {
    eppSeleccionado.value = id
  }
}

const puestos = [
  {
    nombre: 'Expedición',
    imagen: getPuestoImagen('expedicion.webp'),
    epps: [
      'Ropa de trabajo',
      'Calzado de seguridad',
      'Faja lumbar',
      'Guantes moteados'
    ]
  },
  {
    nombre: 'Embalaje',
    imagen: getPuestoImagen('embalaje.png'),
    epps: [
      'Ropa de trabajo',
      'Calzado de seguridad',
      'Faja lumbar',
      'Protector auditivo'
    ]
  },
  {
    nombre: 'Lean',
    imagen: getPuestoImagen('lean.webp'),
    epps: [
      'Ropa de trabajo',
      'Calzado de seguridad',
      'Protector auditivo',
      'Protector ocular'
    ]
  },
  {
    nombre: 'Tapicería',
    imagen: getPuestoImagen('tapiceria.png'),
    epps: [
      'Ropa de trabajo',
      'Calzado de seguridad',
      'Protector auditivo',
      'Protector ocular'
    ]
  },
  {
    nombre: 'Costura',
    imagen: getPuestoImagen('costura.webp'),
    epps: [
      'Ropa de trabajo',
      'Calzado de seguridad',
      'Protector auditivo',
      'Protector ocular'
    ]
  },
  {
    nombre: 'Llenado',
    imagen: getPuestoImagen('sillon.jpg'),
    epps: [
      'Ropa de trabajo',
      'Calzado de seguridad',
      'Protector auditivo'
    ]
  },
  {
    nombre: 'Enfundado',
    imagen: getPuestoImagen('sillon.jpg'),
    epps: [
      'Ropa de trabajo',
      'Calzado de seguridad',
      'Protector auditivo'
    ]
  },
  {
    nombre: 'Tendido de tela',
    imagen: getPuestoImagen('tendido-tela.png'),
    epps: [
      'Ropa de trabajo',
      'Calzado de seguridad'
    ]
  },
  {
    nombre: 'CNC de tela',
    imagen: getPuestoImagen('tela.jpg'),
    epps: [
      'Ropa de trabajo',
      'Calzado de seguridad',
      'Protector auditivo'
    ]
  },
  {
    nombre: 'Armado de juegos',
    imagen: getPuestoImagen('sillon.jpg'),
    epps: [
      'Ropa de trabajo',
      'Calzado de seguridad',
      'Protector auditivo'
    ]
  },
  {
    nombre: 'Carpintería',
    imagen: getPuestoImagen('carpinteria.jpg'),
    epps: [
      'Ropa de trabajo',
      'Calzado de seguridad',
      'Protector auditivo',
      'Protector ocular',
      'Guantes moteados'
    ]
  },
  {
    nombre: 'Espuma',
    imagen: getPuestoImagen('espuma.png'),
    epps: [
      'Ropa de trabajo',
      'Calzado de seguridad',
      'Guantes de nitrilo',
      'Máscara facial respiratoria',
      'Mameluco'
    ]
  },
  {
    nombre: 'Corte de poliéster',
    imagen: getPuestoImagen('poliester.jpg'),
    epps: [
      'Ropa de trabajo',
      'Calzado de seguridad',
      'Protector auditivo',
      'Protector ocular'
    ]
  },
  {
    nombre: 'Multicorte',
    imagen: getPuestoImagen('multicorte.webp'),
    epps: [
      'Ropa de trabajo',
      'Calzado de seguridad'
    ]
  },
  {
    nombre: 'Líneas de colchones',
    imagen: getPuestoImagen('colchones.webp'),
    epps: [
      'Ropa de trabajo',
      'Calzado de seguridad',
      'Protector auditivo',
      'Protector ocular',
      'Guantes moteados'
    ]
  },
  {
    nombre: 'Embalaje de colchones',
    imagen: getPuestoImagen('embalaje.png'),
    epps: [
      'Ropa de trabajo',
      'Calzado de seguridad',
      'Protector auditivo'
    ]
  },
  {
    nombre: 'Autoelevador',
    imagen: getPuestoImagen('autoelevador.jpg'),
    epps: [
      'Ropa de trabajo',
      'Calzado de seguridad',
      'Protector auditivo'
    ]
  },
  {
    nombre: 'Camionero',
    imagen: getPuestoImagen('camionero.webp'),
    epps: [
      'Ropa de trabajo',
      'Calzado de seguridad',
      'Faja lumbar'
    ]
  },
  {
    nombre: 'Resortera',
    imagen: getPuestoImagen('resortera.jpg'),
    epps: [
      'Ropa de trabajo',
      'Calzado de seguridad',
      'Protector auditivo',
      'Guantes de cuero'
    ]
  },
  {
    nombre: 'Ensamblado',
    imagen: getPuestoImagen('colchones.webp'),
    epps: [
      'Ropa de trabajo',
      'Calzado de seguridad',
      'Protector auditivo',
      'Protector ocular',
      'Guantes anticorte'
    ]
  },
  {
    nombre: 'Corte y doblado de marco',
    imagen: getPuestoImagen('colchones.webp'),
    epps: [
      'Ropa de trabajo',
      'Calzado de seguridad',
      'Protector auditivo',
      'Protector ocular',
      'Guantes anticorte'
    ]
  },
  {
    nombre: 'Soldado resortera',
    imagen: getPuestoImagen('soldado-resortera.webp'),
    epps: [
      'Ropa de trabajo',
      'Calzado de seguridad',
      'Protector auditivo',
      'Guante de cuero',
      'Máscara para soldar',
      'Delantal de cuero'
    ]
  },
  {
    nombre: 'Anillado de marco y estabilizadores',
    imagen: getPuestoImagen('sillon.jpg'),
    epps: [
      'Ropa de trabajo',
      'Calzado de seguridad',
      'Protector auditivo',
      'Protector ocular',
      'Guantes anticorte'
    ]
  }
]
</script>

<template>
  <div class="higiene-page">

    <header class="barra-logo">
      <div class="logo">
        <img src="@/assets/Logo.png" alt="Frontera Living">
      </div>

      <nav class="menu">
        <RouterLink to="/Inicio" class="boton">
          Inicio
        </RouterLink>

        <RouterLink to="/Novedades" class="boton">
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

    <main class="contenido">

      <section class="titulo">
        <span class="etiqueta">FRONTERA LIVING</span>

        <h1>HIGIENE Y SEGURIDAD</h1>

        <div class="linea-roja"></div>
      </section>

      <section class="informacion-importante">

        <div class="imagenes-seguridad">

          <div class="imagen-card imagen-grande">
            <img
              src="@/assets/in_itinere.jpg"
              alt="Accidentes in itinere"
            >
          </div>

          <div class="imagen-card">
            <img
              src="@/assets/emergencias.png"
              alt="Números de emergencias"
            >
          </div>

          <div class="imagen-card imagen-grande">
            <img
              src="@/assets/fuego.png"
              alt="Información de seguridad"
            >
          </div>

        </div>
      </section>

      <section class="epp-seccion">

        <div class="epp-titulo">
          <span class="etiqueta-puestos">
            ELEMENTOS DE PROTECCIÓN
          </span>

          <h2>EPP</h2>

          <p>
            Seleccioná cada elemento para conocer su importancia.
          </p>
        </div>

        <div class="epp-contenedor">

          <div
            v-for="epp in epps"
            :key="epp.id"
            class="epp-wrapper"
            :class="{ abierto: eppSeleccionado === epp.id }"
          >

            <button
              class="epp-boton"
              type="button"
              @click="seleccionarEpp(epp.id)"
            >
              <div class="epp-icono">
                {{ epp.icono }}
              </div>

              <span class="epp-nombre">
                {{ epp.nombre }}
              </span>

              <span
                class="flecha"
                :class="{ girada: eppSeleccionado === epp.id }"
              >
                ↓
              </span>
            </button>

            <div
              v-if="eppSeleccionado === epp.id"
              class="comentario"
            >
              <div class="comentario-linea"></div>

              <div class="comentario-contenido">
                <span class="comentario-titulo">
                  ¿POR QUÉ ES IMPORTANTE?
                </span>

                <p>{{ epp.texto }}</p>
              </div>
            </div>

          </div>

        </div>
      </section>

      <section class="puestos">

        <div class="puestos-titulo">

          <span class="etiqueta-puestos">
            FRONTERA LIVING
          </span>

          <h2>EPP SEGÚN EL PUESTO</h2>

          <p>
            Pasá el puntero sobre cada puesto para conocer
            los elementos de protección necesarios.
          </p>

        </div>

        <div class="puestos-contenedor">

          <div
            v-for="puesto in puestos"
            :key="puesto.nombre"
            class="puesto-wrapper"
          >

            <div class="puesto">

              <div class="puesto-info">

                <div class="puesto-imagen-icono">
                  <img
                    :src="puesto.imagen"
                    :alt="puesto.nombre"
                  >
                </div>

                <span class="puesto-nombre">
                  {{ puesto.nombre }}
                </span>

                <span class="puesto-flecha">
                  →
                </span>

              </div>

            </div>

            <div class="puesto-tooltip">

              <div class="tooltip-titulo">
                EPP NECESARIOS
              </div>

              <div class="tooltip-lista">

                <span
                  v-for="epp in puesto.epps"
                  :key="epp"
                  class="tooltip-epp"
                >
                  ✓ {{ epp }}
                </span>

              </div>

            </div>

          </div>

        </div>

      </section>

      <div class="mensaje-final">

        <span class="mensaje-icono">
          🛡
        </span>

        <p>
          Utilizar correctamente los EPP ayuda a trabajar de forma
          más segura y a reducir la exposición a determinados riesgos.
        </p>

      </div>

    </main>

  </div>
</template>

<style scoped>
.higiene-page {
  min-height: 100vh;
  background-color: #EDEDED;
  color: #4A4A4E;
  font-family: 'Poppins', Arial, sans-serif;
}

.barra-logo {
  width: 100%;
  min-height: 80px;
  background-color: #EB3135;
  display: flex;
  align-items: center;
  padding: 10px 40px;
  box-sizing: border-box;
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
  width: 90%;
  max-width: 1050px;
  margin: 0 auto;
  padding: 55px 0 70px;
}

.titulo {
  text-align: center;
  margin-bottom: 42px;
}

.etiqueta {
  display: inline-block;
  color: #EB3135;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 3px;
  margin-bottom: 10px;
}

.titulo h1 {
  margin: 0;
  color: #4A4A4E;
  font-family: "NuberNext Black", "NuberNext", Arial, sans-serif;
  font-size: clamp(30px, 4vw, 44px);
  font-weight: 900;
  line-height: 1.1;
}

.linea-roja {
  width: 55px;
  height: 4px;
  background-color: #EB3135;
  border-radius: 10px;
  margin: 17px auto;
}

.titulo p {
  margin: 0 0 4px;
  color: #4A4A4E;
  font-size: 15px;
  font-weight: 600;
}

.subtitulo {
  color: #88888C;
  font-size: 12px;
}

.informacion-importante {
  margin-bottom: 60px;
}

.informacion-titulo {
  text-align: center;
  margin-bottom: 30px;
}

.etiqueta-puestos {
  display: block;
  color: #EB3135;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 3px;
  margin-bottom: 8px;
}

.informacion-titulo h2,
.epp-titulo h2,
.puestos-titulo h2 {
  margin: 0;
  color: #4A4A4E;
  font-family: "NuberNext Black", "NuberNext", Arial, sans-serif;
  font-size: 27px;
  font-weight: 900;
}

.imagenes-seguridad {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
}

.imagen-card {
  width: 24%;
  background-color: white;
  border: 1px solid #E1E1E1;
  border-radius: 15px;
  padding: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.07);
  overflow: hidden;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.imagen-card.imagen-grande {
  width: 38%;
}

.imagen-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.12);
}

.imagen-card img {
  display: block;
  width: 100%;
  height: 230px;
  object-fit: contain;
  border-radius: 10px;
}

.imagen-card.imagen-grande img {
  height: 310px;
}

.epp-seccion {
  margin-top: 20px;
}

.epp-titulo {
  text-align: center;
  margin-bottom: 30px;
}

.epp-titulo p {
  margin: 10px auto 0;
  color: #88888C;
  font-size: 12px;
}

.epp-contenedor {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 14px;
  align-items: start;
}

.epp-wrapper {
  width: 100%;
}

.epp-boton {
  width: 100%;
  height: 72px;
  padding: 10px 13px;
  display: flex;
  align-items: center;
  gap: 11px;
  border: 1px solid #E1E1E1;
  border-radius: 13px;
  background-color: white;
  color: #4A4A4E;
  cursor: pointer;
  font-family: 'Poppins', sans-serif;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
  transition: transform 0.25s ease, box-shadow 0.25s ease,
    background-color 0.25s ease, border-radius 0.25s ease;
}

.epp-boton:hover {
  transform: translateY(-2px);
  box-shadow: 0 7px 18px rgba(0, 0, 0, 0.10);
  border-color: #EB3135;
}

.epp-wrapper.abierto .epp-boton {
  background-color: #EB3135;
  border-color: #EB3135;
  color: white;
  border-radius: 13px 13px 0 0;
  transform: none;
  box-shadow: none;
}

.epp-icono {
  width: 43px;
  height: 43px;
  min-width: 43px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background-color: #F0F0F0;
  font-size: 23px;
}

.epp-wrapper.abierto .epp-icono {
  background-color: white;
}

.epp-nombre {
  flex: 1;
  text-align: left;
  font-size: 13px;
  font-weight: 600;
}

.flecha {
  font-size: 17px;
  font-weight: bold;
  transition: transform 0.3s ease;
}

.flecha.girada {
  transform: rotate(180deg);
}

.comentario {
  position: relative;
  background-color: white;
  border-radius: 0 0 13px 13px;
  padding: 15px 15px 17px;
  box-shadow: 0 7px 18px rgba(0, 0, 0, 0.08);
  animation: aparecer 0.25s ease;
}

.comentario-linea {
  position: absolute;
  top: 0;
  left: 25px;
  width: 3px;
  height: 100%;
  background-color: #EB3135;
}

.comentario-contenido {
  padding-left: 20px;
}

.comentario-titulo {
  display: block;
  color: #EB3135;
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 1.4px;
  margin-bottom: 6px;
}

.comentario p {
  margin: 0;
  color: #66666A;
  font-size: 11px;
  line-height: 1.55;
}

.puestos {
  margin-top: 60px;
}

.puestos-titulo {
  text-align: center;
  margin-bottom: 30px;
}

.puestos-titulo p {
  margin: 10px auto 0;
  color: #88888C;
  font-size: 12px;
  max-width: 600px;
}

.puestos-contenedor {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 15px;
}

.puesto-wrapper {
  position: relative;
}

.puesto {
  overflow: hidden;
  background-color: white;
  border: 1px solid #E1E1E1;
  border-radius: 13px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  cursor: pointer;
  transition: transform 0.25s ease, border-color 0.25s ease,
    box-shadow 0.25s ease;
}

.puesto:hover {
  border-color: #EB3135;
  transform: translateY(-4px);
  box-shadow: 0 8px 18px rgba(0, 0, 0, 0.12);
}

.puesto-info {
  min-height: 65px;
  padding: 10px 12px;
  display: flex;
  align-items: center;
  gap: 10px;
}

.puesto-imagen-icono {
  width: 40px;
  height: 40px;
  min-width: 40px;
  border-radius: 8px;
  overflow: hidden;
  background-color: #F0F0F0;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #EEEEEE;
}

.puesto-imagen-icono img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.puesto-nombre {
  flex: 1;
  font-size: 12px;
  font-weight: 600;
  line-height: 1.25;
  color: #4A4A4E;
}

.puesto:hover .puesto-nombre {
  color: #EB3135;
}

.puesto-flecha {
  font-size: 14px;
  font-weight: bold;
  color: #EB3135;
  transition: transform 0.25s ease;
}

.puesto:hover .puesto-flecha {
  transform: translateX(4px);
}

.puesto-tooltip {
  position: absolute;
  z-index: 50;
  left: 50%;
  bottom: calc(100% + 10px);
  width: 230px;
  transform: translateX(-50%) translateY(8px);
  padding: 16px;
  background-color: white;
  border-radius: 12px;
  border: 1px solid #E5E5E5;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.14);
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transition: opacity 0.2s ease, transform 0.2s ease,
    visibility 0.2s ease;
}

.puesto-wrapper:hover .puesto-tooltip {
  opacity: 1;
  visibility: visible;
  transform: translateX(-50%) translateY(0);
}

.puesto-tooltip::after {
  content: "";
  position: absolute;
  left: 50%;
  bottom: -7px;
  width: 13px;
  height: 13px;
  background-color: white;
  border-right: 1px solid #E5E5E5;
  border-bottom: 1px solid #E5E5E5;
  transform: translateX(-50%) rotate(45deg);
}

.tooltip-titulo {
  color: #EB3135;
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 1.5px;
  margin-bottom: 10px;
  padding-bottom: 8px;
  border-bottom: 1px solid #EEEEEE;
}

.tooltip-lista {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.tooltip-epp {
  color: #66666A;
  font-size: 11px;
  line-height: 1.3;
}

.mensaje-final {
  margin-top: 35px;
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 17px 20px;
  background-color: #4A4A4E;
  border-radius: 13px;
  color: white;
}

.mensaje-icono {
  width: 38px;
  height: 38px;
  min-width: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: #EB3135;
  font-size: 18px;
}

.mensaje-final p {
  margin: 0;
  font-size: 11px;
  line-height: 1.5;
}

@keyframes aparecer {
  from {
    opacity: 0;
    transform: translateY(-5px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
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

  .epp-contenedor {
    grid-template-columns: repeat(2, 1fr);
  }

  .puestos-contenedor {
    grid-template-columns: repeat(2, 1fr);
  }

  .imagenes-seguridad {
    flex-wrap: wrap;
  }

  .imagen-card,
  .imagen-card.imagen-grande {
    width: 45%;
  }
}

@media (max-width: 600px) {

  .contenido {
    width: 88%;
    padding-top: 35px;
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

  .imagenes-seguridad {
    flex-direction: column;
    gap: 15px;
  }

  .imagen-card,
  .imagen-card.imagen-grande {
    width: 100%;
  }

  .imagen-card img,
  .imagen-card.imagen-grande img {
    height: auto;
    max-height: 350px;
  }

  .epp-contenedor {
    grid-template-columns: 1fr;
    gap: 10px;
  }

  .epp-boton {
    height: 65px;
  }

  .puestos {
    margin-top: 45px;
  }

  .puestos-contenedor {
    grid-template-columns: 1fr;
    gap: 10px;
  }

  .puesto-tooltip {
    position: static;
    width: auto;
    margin-top: 5px;
    transform: none;
    opacity: 0;
    visibility: hidden;
  }

  .puesto-wrapper:hover .puesto-tooltip {
    opacity: 1;
    visibility: visible;
    transform: none;
  }

  .puesto-tooltip::after {
    display: none;
  }

  .mensaje-final {
    align-items: flex-start;
  }
}
</style>