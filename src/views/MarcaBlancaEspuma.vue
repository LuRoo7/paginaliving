<template>
  <section class="espuma-page">

    <!-- =========================
         HERO / ENCABEZADO
    ========================== -->
    <section class="hero">
      <div class="hero-contenido">
        <span class="hero-etiqueta">MARCA BLANCA</span>
        <h1>Espuma</h1>
        <p>
          Conocé nuestra línea de colchones de espuma.
          Elegí el modelo que mejor se adapte a cada necesidad de descanso.
        </p>
      </div>
    </section>


    <!-- =========================
         CATÁLOGO Y GRILLA CON 3D DIRECTO
    ========================== -->
    <section class="catalogo">

      <div class="catalogo-header">
        <span>COLECCIÓN MARCA BLANCA</span>
        <h2>Colchones de espuma</h2>
        <p>Descubrí todos los modelos disponibles.</p>
      </div>

      <div class="productos-grid">

        <article
          v-for="(producto, index) in productos"
          :key="producto.nombre"
          class="producto-card"
        >
          <!-- VISOR INTERACTIVO DIRECTO EN LA TARJETA -->
          <div class="producto-imagen">
            <span class="marca">FRONTERA</span>

            <!-- Modelo 3D interactivo en la tarjeta -->
            <model-viewer
              v-if="producto.modelo"
              :src="producto.modelo"
              :alt="producto.nombre"
              camera-controls
              auto-rotate
              rotation-per-second="18deg"
              shadow-intensity="1"
              touch-action="pan-y"
              class="visor-card-3d"
            ></model-viewer>

            <!-- Imagen estática si no hay modelo 3D -->
            <img 
              v-else-if="producto.imagen" 
              :src="producto.imagen" 
              :alt="producto.nombre"
              class="imagen-colchon"
            />

            <!-- Placeholder -->
            <div v-else class="placeholder">
              <span>3D</span>
            </div>

            <strong>{{ producto.numero }}</strong>
          </div>

          <!-- DETALLES Y BOTÓN DE AMPLIAR -->
          <div class="producto-info">
            <span>MARCA BLANCA · ESPUMA</span>
            <h3>{{ producto.nombre }}</h3>
            <p>{{ producto.descripcion }}</p>

            <button
              type="button"
              class="btn-expandir"
              @click="abrirModal(index)"
            >
              Ver en pantalla completa
              <span>→</span>
            </button>
          </div>
        </article>

      </div>

    </section>


    <!-- =========================
         VENTANA EMERGENTE 3D (ESTILO CLARO)
    ========================== -->
    <Transition name="fade">
      <div
        v-if="productoSeleccionado"
        class="modal-overlay"
        @click.self="cerrarModal"
      >
        <div class="modal-redondeado">

          <!-- ENCABEZADO MODAL -->
          <div class="modal-header">
            <div class="modal-titulo">
              <span class="modal-badge">MARCA BLANCA · {{ productoSeleccionado.numero }}</span>
              <h2>{{ productoSeleccionado.nombre }}</h2>
            </div>

            <button class="modal-cerrar" type="button" @click="cerrarModal" title="Cerrar (ESC)">
              ✕
            </button>
          </div>

          <!-- ESCENARIO PRINCIPAL DEL MODELO 3D -->
          <div class="modal-visor">

            <!-- FLECHA IZQUIERDA -->
            <button
              class="flecha flecha-izquierda"
              @click="anteriorProducto"
              title="Anterior (Flecha Izquierda)"
            >
              ‹
            </button>

            <!-- CONTENIDO 3D / IMAGEN -->
            <div class="visor-escenario">
              <model-viewer
                v-if="productoSeleccionado.modelo"
                ref="modelViewerRef"
                :src="productoSeleccionado.modelo"
                :alt="productoSeleccionado.nombre"
                camera-controls
                auto-rotate
                shadow-intensity="1"
                exposure="1"
                environment-image="neutral"
                class="model-viewer-full"
              ></model-viewer>

              <img 
                v-else-if="productoSeleccionado.imagen" 
                :src="productoSeleccionado.imagen" 
                :alt="productoSeleccionado.nombre"
                class="imagen-modal-redondeada"
                :style="{ transform: `scale(${zoomNivel})` }"
              />

              <div v-else class="modelo-vacio">
                <div class="modelo-icono">3D</div>
                <p>Sin vista disponible para {{ productoSeleccionado.nombre }}</p>
              </div>
            </div>

            <!-- FLECHA DERECHA -->
            <button
              class="flecha flecha-derecha"
              @click="siguienteProducto"
              title="Siguiente (Flecha Derecha)"
            >
              ›
            </button>

            <!-- CONTROLES DE ZOOM FLOTANTES -->
            <div class="controles-zoom">
              <button @click="aplicarZoom(0.2)" title="Acercar">+</button>
              <button @click="aplicarZoom(-0.2)" title="Alejar">−</button>
              <button @click="resetearZoom" title="Restablecer">↺</button>
            </div>

          </div>

          <!-- PIE DE VENTANA CON DESCRIPCIÓN -->
          <div class="modal-footer">
            <p>{{ productoSeleccionado.descripcion }}</p>
          </div>

        </div>
      </div>
    </Transition>

  </section>
</template>


<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import '@google/model-viewer'

// ==========================================
// PRODUCTOS
// ==========================================
const productos = [
  {
    numero: '01',
    nombre: 'Tropical',
    descripcion: 'Una alternativa confortable para acompañar el descanso diario.',
    modelo: '/Colchones/Marca blanca/ESPUMA/1. TROPICAL/TROPICAL.glb',
    imagen: '/Colchones/Marca blanca/ESPUMA/1. TROPICAL/TROPICAL.jpg'
  },
  {
    numero: '02',
    nombre: 'Corona',
    descripcion: 'Diseñado para ofrecer comodidad y soporte durante el descanso.',
    modelo: '/Colchones/Marca blanca/ESPUMA/2. CORONA/CORONA.glb',
    imagen: '/Colchones/Marca blanca/ESPUMA/2. CORONA/CORONA.jpg'
  },
  {
    numero: '03',
    nombre: 'Jensen',
    descripcion: 'Colchón de espuma pensado para combinar confort y estabilidad.',
    modelo: '/Colchones/Marca blanca/ESPUMA/3. JENSEN/JENSEN.glb',
    imagen: '/Colchones/Marca blanca/ESPUMA/3. JENSEN/JENSEN.jpg'
  },
  {
    numero: '04',
    nombre: 'Ares',
    descripcion: 'Una opción de espuma orientada al confort y al descanso cotidiano.',
    modelo: '/Colchones/Marca blanca/ESPUMA/4. ARES/ARES.glb',
    imagen: '/Colchones/Marca blanca/ESPUMA/4. ARES/ARES.jpg'
  },
  {
    numero: '05',
    nombre: 'Apolo',
    descripcion: 'Modelo pensado para brindar una experiencia de descanso cómoda.',
    modelo: '/Colchones/Marca blanca/ESPUMA/5. APOLO/APOLO.glb',
    imagen: '/Colchones/Marca blanca/ESPUMA/5. APOLO/APOLO.jpg'
  },
  {
    numero: '06',
    nombre: 'Diamante',
    descripcion: 'Colchón de espuma diseñado para acompañar diferentes necesidades de descanso.',
    modelo: '/Colchones/Marca blanca/ESPUMA/6. DIAMANTE/DIAMANTE.glb',
    imagen: '/Colchones/Marca blanca/ESPUMA/6. DIAMANTE/DIAMANTE.jpg'
  },
  {
    numero: '07',
    nombre: 'Hefesto',
    descripcion: 'Una propuesta de espuma que combina comodidad y soporte.',
    modelo: '/Colchones/Marca blanca/ESPUMA/7. HEFESTO/HEFESTO.glb',
    imagen: '/Colchones/Marca blanca/ESPUMA/7. HEFESTO/HEFESTO.jpg'
  }
]

// ESTADO
const productoSeleccionado = ref(null)
const indiceActual = ref(0)
const zoomNivel = ref(1)
const modelViewerRef = ref(null)

// FUNCIONES MODAL
function abrirModal(index) {
  indiceActual.value = index
  productoSeleccionado.value = productos[index]
  zoomNivel.value = 1
}

function cerrarModal() {
  productoSeleccionado.value = null
  zoomNivel.value = 1
}

function siguienteProducto() {
  indiceActual.value = (indiceActual.value + 1) % productos.length
  productoSeleccionado.value = productos[indiceActual.value]
  zoomNivel.value = 1
}

function anteriorProducto() {
  indiceActual.value = (indiceActual.value - 1 + productos.length) % productos.length
  productoSeleccionado.value = productos[indiceActual.value]
  zoomNivel.value = 1
}

// ZOOM
function aplicarZoom(delta) {
  if (productoSeleccionado.value?.modelo && modelViewerRef.value) {
    const mv = modelViewerRef.value
    if (mv.zoom) {
      mv.zoom(delta > 0 ? 1 : -1)
    }
  } else {
    const nuevoZoom = zoomNivel.value + delta
    if (nuevoZoom >= 0.6 && nuevoZoom <= 2.5) {
      zoomNivel.value = nuevoZoom
    }
  }
}

function resetearZoom() {
  zoomNivel.value = 1
}

// SOPORTE TECLADO
function manejarTeclado(e) {
  if (!productoSeleccionado.value) return
  if (e.key === 'ArrowRight') siguienteProducto()
  if (e.key === 'ArrowLeft') anteriorProducto()
  if (e.key === 'Escape') cerrarModal()
}

onMounted(() => {
  window.addEventListener('keydown', manejarTeclado)
})

onUnmounted(() => {
  window.removeEventListener('keydown', manejarTeclado)
})
</script>


<style scoped>

/* ==========================================
   GENERAL & HERO
========================================== */

.espuma-page {
  min-height: 100vh;
  background: #ffffff;
  color: #4A4A4E;
  font-family: 'Poppins', sans-serif;
}

.hero {
  position: relative;
  min-height: 420px;
  display: flex;
  align-items: center;
  overflow: hidden;
  background: #4A4A4E;
}

.hero::after {
  content: '';
  position: absolute;
  width: 520px;
  height: 520px;
  right: -170px;
  top: -180px;
  border-radius: 50%;
  background: #EB3135;
}

.hero-contenido {
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 80px 40px;
}

.hero-etiqueta {
  display: block;
  margin-bottom: 18px;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 3px;
  color: #ffffff;
}

.hero h1 {
  margin: 0 0 20px;
  font-size: clamp(50px, 7vw, 85px);
  line-height: 1;
  color: #ffffff;
}

.hero p {
  max-width: 620px;
  margin: 0;
  font-size: 16px;
  line-height: 1.8;
  color: #EDEDED;
}


/* ==========================================
   CATÁLOGO & GRID
========================================== */

.catalogo {
  max-width: 1250px;
  margin: auto;
  padding: 90px 40px 120px;
}

.catalogo-header {
  margin-bottom: 55px;
}

.catalogo-header span {
  display: block;
  margin-bottom: 10px;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 3px;
  color: #EB3135;
}

.catalogo-header h2 {
  margin: 0 0 12px;
  font-size: 38px;
  color: #4A4A4E;
}

.catalogo-header p {
  margin: 0;
  font-size: 15px;
  color: #77777B;
}

.productos-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 25px;
}

.producto-card {
  overflow: hidden;
  background: #ffffff;
  border: 1px solid #EDEDED;
  border-radius: 12px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
}

.producto-card:hover {
  transform: translateY(-7px);
  box-shadow: 0 18px 45px rgba(74, 74, 78, 0.12);
}

.producto-imagen {
  position: relative;
  height: 300px;
  overflow: hidden;
  background: #EDEDED;
}

.producto-imagen .marca {
  position: absolute;
  z-index: 3;
  top: 18px;
  left: 18px;
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 2px;
  color: #4A4A4E;
  pointer-events: none;
}

.producto-imagen strong {
  position: absolute;
  z-index: 3;
  right: 18px;
  bottom: 15px;
  font-size: 12px;
  color: #BDC0C3;
  pointer-events: none;
}

.visor-card-3d {
  width: 100%;
  height: 100%;
}

.imagen-colchon {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40px;
  font-weight: 700;
  color: #BDC0C3;
}

.producto-info {
  padding: 25px;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.producto-info > span {
  display: block;
  margin-bottom: 10px;
  font-size: 9px;
  font-weight: 600;
  letter-spacing: 1.5px;
  color: #EB3135;
}

.producto-info h3 {
  margin: 0 0 10px;
  font-size: 23px;
  color: #4A4A4E;
}

.producto-info p {
  min-height: 60px;
  margin: 0 0 20px;
  font-size: 13px;
  line-height: 1.7;
  color: #77777B;
  flex: 1;
}

.btn-expandir {
  width: 100%;
  padding: 12px 16px;
  background: #f8f9fa;
  border: 1px solid #EDEDED;
  border-radius: 8px;
  cursor: pointer;
  font-size: 13px;
  font-weight: 600;
  color: #4A4A4E;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: all 0.2s ease;
}

.btn-expandir span {
  color: #EB3135;
  font-size: 16px;
}

.btn-expandir:hover {
  background: #EB3135;
  color: #ffffff;
  border-color: #EB3135;
}

.btn-expandir:hover span {
  color: #ffffff;
}


/* ==========================================
   VENTANA EMERGENTE CLARA (MODAL)
========================================== */

.modal-overlay {
  position: fixed;
  z-index: 99999;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background: rgba(30, 30, 32, 0.82);
  backdrop-filter: blur(8px);
}

.modal-redondeado {
  position: relative;
  width: min(950px, 92vw);
  height: 82vh;
  max-height: 720px;
  background: #ffffff;
  border-radius: 28px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-shadow: 0 35px 80px rgba(0, 0, 0, 0.4);
}

.modal-header {
  padding: 18px 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #EDEDED;
  background: #ffffff;
  z-index: 10;
}

.modal-badge {
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 2px;
  color: #EB3135;
}

.modal-titulo h2 {
  margin: 2px 0 0;
  font-size: 24px;
  color: #4A4A4E;
}

.modal-cerrar {
  width: 38px;
  height: 38px;
  border: none;
  border-radius: 50%;
  background: #EDEDED;
  cursor: pointer;
  font-size: 18px;
  color: #4A4A4E;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-cerrar:hover {
  background: #EB3135;
  color: #ffffff;
}

/* ÁREA 3D */
.modal-visor {
  position: relative;
  flex: 1;
  width: 100%;
  background: #f8f9fa;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.visor-escenario {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.model-viewer-full {
  width: 100%;
  height: 100%;
}

.imagen-modal-redondeada {
  max-width: 80%;
  max-height: 80%;
  object-fit: contain;
  transition: transform 0.2s ease-out;
}

/* FLECHAS DE NAVEGACIÓN DE ESTILO CLARO */
.flecha {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 20;
  width: 52px;
  height: 52px;
  border: 1px solid #EDEDED;
  border-radius: 50%;
  background: #ffffff;
  color: #4A4A4E;
  font-size: 32px;
  cursor: pointer;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.12);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
}

.flecha:hover {
  background: #EB3135;
  color: #ffffff;
  border-color: #EB3135;
  transform: translateY(-50%) scale(1.1);
}

.flecha-izquierda {
  left: 20px;
}

.flecha-derecha {
  right: 20px;
}

/* BOTONES DE ZOOM */
.controles-zoom {
  position: absolute;
  bottom: 20px;
  right: 20px;
  z-index: 20;
  display: flex;
  flex-direction: column;
  gap: 8px;
  background: rgba(255, 255, 255, 0.9);
  padding: 6px;
  border: 1px solid #EDEDED;
  border-radius: 30px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
}

.controles-zoom button {
  width: 38px;
  height: 38px;
  border: none;
  border-radius: 50%;
  background: #ffffff;
  color: #4A4A4E;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.controles-zoom button:hover {
  background: #EB3135;
  color: #ffffff;
}

.modal-footer {
  padding: 15px 30px;
  background: #ffffff;
  border-top: 1px solid #EDEDED;
  text-align: center;
}

.modal-footer p {
  margin: 0;
  font-size: 13px;
  color: #77777B;
}

.modelo-vacio {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #BDC0C3;
}

.modelo-icono {
  font-size: 60px;
  font-weight: 700;
}

/* TRANSICIONES */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.25s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

/* RESPONSIVE */
@media (max-width: 1050px) {
  .productos-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 750px) {
  .hero-contenido {
    padding: 70px 25px;
  }

  .catalogo {
    padding: 65px 25px 90px;
  }

  .productos-grid {
    grid-template-columns: 1fr;
  }

  .modal-redondeado {
    height: 85vh;
    border-radius: 20px;
  }

  .flecha {
    width: 42px;
    height: 42px;
    font-size: 24px;
  }

  .flecha-izquierda { left: 10px; }
  .flecha-derecha { right: 10px; }
}

</style>