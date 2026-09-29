
<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

import nixF from '@/assets/nixF.png'
import nixCarrusel from '@/assets/nix.jpeg'
import nixF2 from '@/assets/nixF2.jpeg'
import nixF3 from '@/assets/nixF3.jpeg'
import nixF4 from '@/assets/nixF4.jpeg'
import nixF5 from '@/assets/nixF5.jpeg'
import videoNix from '@/assets/nixF.mp4'

const router = useRouter()

const productoSeleccionado = ref(null)
const imagenActual = ref(0)

const productos = [
  {
    id: 1,
    nombre: 'Sillón Nix',
    imagenPrincipal: nixF,
    imagenes: [
      nixCarrusel,
      nixF2,
      nixF3,
      nixF4,
      nixF5
    ],
    video: videoNix
  }
]

function seleccionarProducto(producto) {
  productoSeleccionado.value = producto
  imagenActual.value = 0
}

function cerrarProducto() {
  productoSeleccionado.value = null
  imagenActual.value = 0
}

function imagenAnterior() {
  if (!productoSeleccionado.value) return

  const total = productoSeleccionado.value.imagenes.length

  imagenActual.value =
    imagenActual.value === 0
      ? total - 1
      : imagenActual.value - 1
}

function imagenSiguiente() {
  if (!productoSeleccionado.value) return

  const total = productoSeleccionado.value.imagenes.length

  imagenActual.value =
    imagenActual.value === total - 1
      ? 0
      : imagenActual.value + 1
}

function seleccionarImagen(index) {
  imagenActual.value = index
}

function volver() {
  router.push('/productos')
}
</script>

<template>
  <div class="living-page">

    <section class="titulo-seccion">

      <span class="etiqueta">
        LIVING
      </span>

      <h1>
        Nuestros productos
      </h1>

      <div class="linea-roja"></div>

      <p>
        Conocé nuestra selección de sillones y productos para tu hogar.
      </p>

    </section>


    <section class="productos-seccion">

      <div
        v-for="producto in productos"
        :key="producto.id"
        class="producto-card"
        @click="seleccionarProducto(producto)"
      >

        <div class="producto-imagen">

          <img
            :src="producto.imagenPrincipal"
            :alt="producto.nombre"
          />

        </div>

        <h2>
          {{ producto.nombre }}
        </h2>

        <div class="producto-linea"></div>

        <p>
          Ver producto
        </p>

      </div>

    </section>


    <div
      v-if="productoSeleccionado"
      class="detalle-fondo"
      @click.self="cerrarProducto"
    >

      <div class="detalle-contenido">

        <button
          class="detalle-cerrar"
          @click="cerrarProducto"
        >
          ×
        </button>


        <div class="detalle-titulo">

          <span>
            LIVING
          </span>

          <h2>
            {{ productoSeleccionado.nombre }}
          </h2>

          <div class="linea-roja"></div>

        </div>


        <div class="carrusel">

          <button
            class="carrusel-btn"
            @click="imagenAnterior"
          >
            ‹
          </button>


          <div class="imagen-carrusel">

            <img
              :src="productoSeleccionado.imagenes[imagenActual]"
              :alt="productoSeleccionado.nombre"
            />

          </div>


          <button
            class="carrusel-btn"
            @click="imagenSiguiente"
          >
            ›
          </button>

        </div>


        <div class="indicadores">

          <button
            v-for="(imagen, index) in productoSeleccionado.imagenes"
            :key="index"
            class="indicador"
            :class="{
              activo: imagenActual === index
            }"
            @click="seleccionarImagen(index)"
          ></button>

        </div>


        <div class="miniaturas">

          <button
            v-for="(imagen, index) in productoSeleccionado.imagenes"
            :key="index"
            class="miniatura"
            :class="{
              seleccionada: imagenActual === index
            }"
            @click="seleccionarImagen(index)"
          >

            <img
              :src="imagen"
              :alt="`${productoSeleccionado.nombre} - imagen ${index + 1}`"
            />

          </button>

        </div>


        <div class="video-seccion">

          <div class="video-titulo">

            <span>
              CONOCÉ EL PRODUCTO
            </span>

            <h3>
              Detalles del sillón
            </h3>

          </div>

          <video
            class="video-producto"
            controls
            preload="metadata"
          >

            <source
              :src="productoSeleccionado.video"
              type="video/mp4"
            />

            Tu navegador no soporta la reproducción de videos.

          </video>

        </div>

      </div>

    </div>


    <button
      class="btn-volver"
      @click="volver"
    >
      ← Volver
    </button>

  </div>
</template>

<style scoped>

.living-page {
  min-height: 100vh;
  background-color: #EDEDED;
  color: #4A4A4E;
  font-family: Arial, Helvetica, sans-serif;
  padding: 40px 0 100px;
}

.titulo-seccion {
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 25px 0 40px;
  text-align: center;
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
h2,
h3 {
  font-family:
    "NuberNext Black",
    "NuberNext",
    Arial,
    sans-serif;
  font-weight: 900;
}

.titulo-seccion h1 {
  margin: 0;
  color: #4A4A4E;
  font-size: clamp(32px, 5vw, 48px);
  line-height: 1.1;
}

.linea-roja {
  width: 65px;
  height: 5px;
  background-color: #EB3135;
  border-radius: 10px;
  margin: 20px auto;
}

.titulo-seccion p {
  margin: 0;
  color: #66666A;
  font-size: 15px;
  line-height: 1.6;
}

.productos-seccion {
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 25px;
}

.producto-card {
  width: 480px;
  max-width: 100%;
  background-color: white;
  border-radius: 20px;
  padding: 20px;
  box-sizing: border-box;
  cursor: pointer;
  text-align: center;
  box-shadow:
    0 7px 20px rgba(0, 0, 0, 0.08);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.producto-card:hover {
  transform: translateY(-7px);
  box-shadow:
    0 14px 30px rgba(0, 0, 0, 0.15);
}

.producto-imagen {
  width: 420px;
  height: 320px;
  max-width: 100%;
  margin: 0 auto;
  overflow: hidden;
  border-radius: 15px;
  background-color: #EDEDED;
  display: flex;
  align-items: center;
  justify-content: center;
}

.producto-imagen img {
  width: 85%;
  height: 85%;
  display: block;
  object-fit: contain;
  transition:
    transform 0.4s ease;
}

.producto-card:hover .producto-imagen img {
  transform: scale(1.04);
}

.producto-card h2 {
  margin: 20px 0 10px;
  color: #4A4A4E;
  font-size: 25px;
}

.producto-linea {
  width: 45px;
  height: 4px;
  background-color: #EB3135;
  border-radius: 5px;
  margin: 0 auto 12px;
}

.producto-card p {
  margin: 0;
  color: #77777B;
  font-size: 14px;
}

.detalle-fondo {
  position: fixed;
  inset: 0;
  z-index: 9999;
  background-color: rgba(0, 0, 0, 0.78);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 25px;
  box-sizing: border-box;
  animation: aparecer 0.25s ease;
}

.detalle-contenido {
  position: relative;
  width: min(1100px, 95vw);
  max-height: 92vh;
  overflow-y: auto;
  background-color: white;
  border-radius: 22px;
  padding: 35px;
  box-sizing: border-box;
  box-shadow:
    0 20px 60px rgba(0, 0, 0, 0.4);
  animation: subir 0.3s ease;
}

.detalle-cerrar {
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
  z-index: 20;
  transition:
    background-color 0.2s ease,
    transform 0.2s ease;
}

.detalle-cerrar:hover {
  background-color: #4A4A4E;
  transform: rotate(90deg);
}

.detalle-titulo {
  text-align: center;
  padding: 0 50px 20px;
}

.detalle-titulo span {
  display: block;
  color: #EB3135;
  font-size: 11px;
  font-weight: bold;
  letter-spacing: 3px;
  margin-bottom: 7px;
}

.detalle-titulo h2 {
  margin: 0;
  color: #4A4A4E;
  font-size: clamp(28px, 4vw, 40px);
}

.carrusel {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-top: 10px;
}

.imagen-carrusel {
  width: min(700px, 75vw);
  height: 430px;
  background-color: #EDEDED;
  border-radius: 18px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow:
    0 8px 25px rgba(0, 0, 0, 0.12);
}

.imagen-carrusel img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
}

.carrusel-btn {
  flex-shrink: 0;
  width: 48px;
  height: 48px;
  border: none;
  border-radius: 50%;
  background-color: #EB3135;
  color: white;
  font-size: 35px;
  line-height: 1;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition:
    background-color 0.2s ease,
    transform 0.2s ease;
}

.carrusel-btn:hover {
  background-color: #4A4A4E;
  transform: scale(1.08);
}

.indicadores {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-top: 18px;
}

.indicador {
  width: 9px;
  height: 9px;
  padding: 0;
  border: none;
  border-radius: 50%;
  background-color: #BDC0C3;
  cursor: pointer;
  transition:
    background-color 0.2s ease,
    transform 0.2s ease;
}

.indicador.activo {
  background-color: #EB3135;
  transform: scale(1.3);
}

.miniaturas {
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-top: 20px;
  flex-wrap: wrap;
}

.miniatura {
  width: 85px;
  height: 65px;
  padding: 3px;
  border: 2px solid transparent;
  border-radius: 10px;
  background-color: #EDEDED;
  cursor: pointer;
  overflow: hidden;
  transition:
    border-color 0.2s ease,
    transform 0.2s ease;
}

.miniatura:hover {
  transform: translateY(-3px);
}

.miniatura.seleccionada {
  border-color: #EB3135;
}

.miniatura img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 7px;
  display: block;
}

.video-seccion {
  width: 100%;
  margin-top: 45px;
  padding-top: 35px;
  border-top: 1px solid #E0E0E0;
}

.video-titulo {
  text-align: center;
  margin-bottom: 20px;
}

.video-titulo span {
  display: block;
  color: #EB3135;
  font-size: 11px;
  font-weight: bold;
  letter-spacing: 3px;
  margin-bottom: 7px;
}

.video-titulo h3 {
  margin: 0;
  color: #4A4A4E;
  font-size: 27px;
}

.video-producto {
  display: block;
  width: min(850px, 100%);
  max-height: 500px;
  margin: 0 auto;
  border-radius: 16px;
  background-color: #000;
  box-shadow:
    0 8px 25px rgba(0, 0, 0, 0.15);
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
  border: none;
  background-color: #EB3135;
  color: white;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 14px;
  font-weight: bold;
  border-radius: 9px;
  box-shadow:
    0 5px 15px rgba(0, 0, 0, 0.18);
  cursor: pointer;
  transition:
    background-color 0.3s ease,
    transform 0.3s ease;
}

.btn-volver:hover {
  background-color: #4A4A4E;
  transform: translateY(-3px);
}

@keyframes aparecer {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@keyframes subir {
  from {
    opacity: 0;
    transform:
      translateY(25px)
      scale(0.97);
  }

  to {
    opacity: 1;
    transform:
      translateY(0)
      scale(1);
  }
}

@media (max-width: 700px) {

  .living-page {
    padding-top: 20px;
  }

  .titulo-seccion {
    padding-top: 15px;
  }

  .producto-card {
    width: 100%;
    max-width: 480px;
  }

  .producto-imagen {
    width: 100%;
    max-width: 420px;
    height: 280px;
  }

  .producto-imagen img {
    width: 85%;
    height: 85%;
  }

  .detalle-fondo {
    padding: 15px;
  }

  .detalle-contenido {
    padding: 25px 18px;
    border-radius: 18px;
  }

  .carrusel {
    gap: 8px;
  }

  .imagen-carrusel {
    height: 300px;
    width: 100%;
  }

  .carrusel-btn {
    width: 40px;
    height: 40px;
    font-size: 28px;
  }

  .miniatura {
    width: 70px;
    height: 55px;
  }

  .video-producto {
    max-height: 300px;
  }

  .btn-volver {
    right: 15px;
    bottom: 15px;
  }

}
</style>