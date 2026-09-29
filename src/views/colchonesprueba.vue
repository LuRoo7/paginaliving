<template>
  <section class="marca-blanca-page">

    <!-- HERO -->
    <section class="marca-hero">
      <div class="hero-shape"></div>
      <div class="hero-content">
        <span>FRONTERA LIVING / CATÁLOGO</span>
        <h1>Nuestra<br>Colección 3D</h1>
        <p>
          Explorá nuestras líneas de bases y colchones mediante modelos 3D interactivos.
        </p>
      </div>
    </section>

    <!-- SECCIÓN BASES -->
    <section class="marca-catalogo">
      <div class="catalogo-header">
        <span>ESTRUCTURA Y SOPORTE</span>
        <h2>Bases</h2>
      </div>

      <div class="categorias-grid">
        <article 
          v-for="(item, index) in bases" 
          :key="'base-' + index" 
          class="categoria-card"
        >
          <div class="categoria-visual">
            <img 
              v-if="item.imagen" 
              :src="item.imagen" 
              :alt="item.nombre" 
              class="preview-img"
            />
            <span class="numero">0{{ index + 1 }}</span>
          </div>
          <div class="categoria-info">
            <span>BASE</span>
            <h3>{{ item.nombre }}</h3>
            <button class="btn-ver-3d" @click="abrirModal3D(item)">
              Ver en 3D
            </button>
          </div>
        </article>
      </div>
    </section>

    <!-- SECCIÓN MARCA BLANCA -->
    <section class="marca-catalogo">
      <div class="catalogo-header">
        <span>LÍNEA</span>
        <h2>Marca Blanca</h2>
      </div>

      <!-- Espuma -->
      <h3 class="subcategoria-titulo">Espuma</h3>
      <div class="categorias-grid">
        <article 
          v-for="(item, index) in marcaBlanca.espuma" 
          :key="'mb-espuma-' + index" 
          class="categoria-card"
        >
          <div class="categoria-visual">
            <img 
              v-if="item.imagen" 
              :src="item.imagen" 
              :alt="item.nombre" 
              class="preview-img"
            />
          </div>
          <div class="categoria-info">
            <span>MARCA BLANCA - ESPUMA</span>
            <h3>{{ item.nombre }}</h3>
            <button class="btn-ver-3d" @click="abrirModal3D(item)">
              Ver en 3D
            </button>
          </div>
        </article>
      </div>

      <!-- Espuma Soft -->
      <h3 class="subcategoria-titulo">Espuma Soft</h3>
      <div class="categorias-grid">
        <article 
          v-for="(item, index) in marcaBlanca.espumaSoft" 
          :key="'mb-soft-' + index" 
          class="categoria-card"
        >
          <div class="categoria-visual">
            <img 
              v-if="item.imagen" 
              :src="item.imagen" 
              :alt="item.nombre" 
              class="preview-img"
            />
          </div>
          <div class="categoria-info">
            <span>MARCA BLANCA - ESPUMA SOFT</span>
            <h3>{{ item.nombre }}</h3>
            <button class="btn-ver-3d" @click="abrirModal3D(item)">
              Ver en 3D
            </button>
          </div>
        </article>
      </div>

      <!-- Resorte -->
      <h3 class="subcategoria-titulo">Resorte</h3>
      <div class="categorias-grid">
        <article 
          v-for="(item, index) in marcaBlanca.resorte" 
          :key="'mb-resorte-' + index" 
          class="categoria-card"
        >
          <div class="categoria-visual">
            <img 
              v-if="item.imagen" 
              :src="item.imagen" 
              :alt="item.nombre" 
              class="preview-img"
            />
          </div>
          <div class="categoria-info">
            <span>MARCA BLANCA - RESORTE</span>
            <h3>{{ item.nombre }}</h3>
            <button class="btn-ver-3d" @click="abrirModal3D(item)">
              Ver en 3D
            </button>
          </div>
        </article>
      </div>
    </section>

    <!-- SECCIÓN NATURAL SOFT -->
    <section class="marca-catalogo">
      <div class="catalogo-header">
        <span>LÍNEA</span>
        <h2>Natural Soft</h2>
      </div>

      <!-- Espuma -->
      <h3 class="subcategoria-titulo">Espuma</h3>
      <div class="categorias-grid">
        <article 
          v-for="(item, index) in naturalSoft.espuma" 
          :key="'ns-espuma-' + index" 
          class="categoria-card"
        >
          <div class="categoria-visual">
            <img 
              v-if="item.imagen" 
              :src="item.imagen" 
              :alt="item.nombre" 
              class="preview-img"
            />
          </div>
          <div class="categoria-info">
            <span>NATURAL SOFT - ESPUMA</span>
            <h3>{{ item.nombre }}</h3>
            <button class="btn-ver-3d" @click="abrirModal3D(item)">
              Ver en 3D
            </button>
          </div>
        </article>
      </div>

      <!-- Espuma Soft -->
      <h3 class="subcategoria-titulo">Espuma Soft</h3>
      <div class="categorias-grid">
        <article 
          v-for="(item, index) in naturalSoft.espumaSoft" 
          :key="'ns-soft-' + index" 
          class="categoria-card"
        >
          <div class="categoria-visual">
            <img 
              v-if="item.imagen" 
              :src="item.imagen" 
              :alt="item.nombre" 
              class="preview-img"
            />
          </div>
          <div class="categoria-info">
            <span>NATURAL SOFT - ESPUMA SOFT</span>
            <h3>{{ item.nombre }}</h3>
            <button class="btn-ver-3d" @click="abrirModal3D(item)">
              Ver en 3D
            </button>
          </div>
        </article>
      </div>

      <!-- Resorte -->
      <h3 class="subcategoria-titulo">Resorte</h3>
      <div class="categorias-grid">
        <article 
          v-for="(item, index) in naturalSoft.resorte" 
          :key="'ns-resorte-' + index" 
          class="categoria-card"
        >
          <div class="categoria-visual">
            <img 
              v-if="item.imagen" 
              :src="item.imagen" 
              :alt="item.nombre" 
              class="preview-img"
            />
          </div>
          <div class="categoria-info">
            <span>NATURAL SOFT - RESORTE</span>
            <h3>{{ item.nombre }}</h3>
            <button class="btn-ver-3d" @click="abrirModal3D(item)">
              Ver en 3D
            </button>
          </div>
        </article>
      </div>
    </section>

    <!-- MODAL VENTANA 3D CON CONTROLES ESTILO GOOGLE MAPS -->
    <div v-if="productoActivo" class="modal-overlay" @click="cerrarModal3D">
      <div class="modal-contenido-3d" @click.stop>
        <button class="modal-cerrar" @click="cerrarModal3D">&times;</button>
        
        <h3 class="modal-titulo">{{ productoActivo.nombre }}</h3>

        <div class="modal-viewer-wrapper">
          <model-viewer
            ref="modalModelViewer"
            :src="productoActivo.modelo3d"
            :alt="productoActivo.nombre"
            camera-controls
            shadow-intensity="1"
            class="modal-3d"
          ></model-viewer>

          <!-- CONTROLES ESTILO GOOGLE MAPS -->
          <div class="map-controls">
            <!-- CRUZ DE DIRECCIONES -->
            <div class="dpad-container">
              <button class="btn-dpad btn-up" @click="moverCamara('arriba')" title="Arriba">▲</button>
              <button class="btn-dpad btn-left" @click="moverCamara('izquierda')" title="Izquierda">◄</button>
              <button class="btn-dpad btn-center" @click="resetearCamara" title="Centrar">●</button>
              <button class="btn-dpad btn-right" @click="moverCamara('derecha')" title="Derecha">►</button>
              <button class="btn-dpad btn-down" @click="moverCamara('abajo')" title="Abajo">▼</button>
            </div>

            <!-- BOTONES DE ZOOM (+ / -) -->
            <div class="zoom-container">
              <button class="btn-zoom" @click="hacerZoomIn" title="Acercar">+</button>
              <button class="btn-zoom" @click="hacerZoomOut" title="Alejar">−</button>
            </div>
          </div>

        </div>
      </div>
    </div>

  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const productoActivo = ref(null)
const modalModelViewer = ref(null)

// Ángulos de cámara
let thetaDeg = 0
let phiDeg = 75

const abrirModal3D = (item) => {
  productoActivo.value = item
  thetaDeg = 0
  phiDeg = 75
}

const cerrarModal3D = () => {
  productoActivo.value = null
}

// ZOOM FUNCIONAL USANDO EL MÉTODO NATIVO DE MODEL-VIEWER
const hacerZoomIn = () => {
  if (modalModelViewer.value) {
    if (typeof modalModelViewer.value.zoom === 'function') {
      modalModelViewer.value.zoom(1.5)
    } else {
      thetaDeg = thetaDeg || 0
      phiDeg = phiDeg || 75
      const currentOrbit = modalModelViewer.value.getCameraOrbit()
      const newRadius = Math.max(0.8, currentOrbit.radius * 0.8)
      modalModelViewer.value.cameraOrbit = `${currentOrbit.theta}rad ${currentOrbit.phi}rad ${newRadius}m`
    }
  }
}

const hacerZoomOut = () => {
  if (modalModelViewer.value) {
    if (typeof modalModelViewer.value.zoom === 'function') {
      modalModelViewer.value.zoom(-1.5)
    } else {
      const currentOrbit = modalModelViewer.value.getCameraOrbit()
      const newRadius = Math.min(8.0, currentOrbit.radius * 1.2)
      modalModelViewer.value.cameraOrbit = `${currentOrbit.theta}rad ${currentOrbit.phi}rad ${newRadius}m`
    }
  }
}

const moverCamara = (direccion) => {
  if (!modalModelViewer.value) return

  switch (direccion) {
    case 'izquierda':
      thetaDeg -= 20
      break
    case 'derecha':
      thetaDeg += 20
      break
    case 'arriba':
      phiDeg = Math.max(10, phiDeg - 15)
      break
    case 'abajo':
      phiDeg = Math.min(160, phiDeg + 15)
      break
  }
  
  modalModelViewer.value.cameraOrbit = `${thetaDeg}deg ${phiDeg}deg auto`
}

const resetearCamara = () => {
  if (modalModelViewer.value) {
    thetaDeg = 0
    phiDeg = 75
    modalModelViewer.value.cameraOrbit = '0deg 75deg auto'
    modalModelViewer.value.cameraTarget = 'auto auto auto'
  }
}

// Carga del script del model-viewer de Google
onMounted(() => {
  if (!customElements.get('model-viewer')) {
    const script = document.createElement('script')
    script.type = 'module'
    script.src = 'https://ajax.googleapis.com/ajax/libs/model-viewer/3.4.0/model-viewer.min.js'
    document.head.appendChild(script)
  }
})

const bases = [
  { 
    nombre: 'Base Olimpo', 
    modelo3d: '/BASES/1. BASE OLIMPO/BASE OLIMPO.glb',
    imagen: '/BASES/1. BASE OLIMPO/BASE OLIMPO.jpg'
  },
  { 
    nombre: 'Base Estándar', 
    modelo3d: '/BASES/2. BASE ESTANDAR/BASE ESTANDAR.glb',
    imagen: '/BASES/2. BASE ESTANDAR/BASE ESTANDAR.jpg'
  },
  { 
    nombre: 'Base Milenium', 
    modelo3d: '/BASES/3. BASE MILENIUM/BASE MILENIUM.glb',
    imagen: '/BASES/3. BASE MILENIUM/BASE MILENIUM.jpg'
  },
  { 
    nombre: 'Base Marinera Sahara', 
    modelo3d: '/BASES/4. BASE MARINERA SAHARA/BASE MARINERA SAHARA.glb',
    imagen: '/BASES/4. BASE MARINERA SAHARA/BASE MARINERA SAHARA.jpg'
  }
]

const marcaBlanca = {
  espuma: [
    { 
      nombre: 'Tropical', 
      modelo3d: '/Colchones/Marca blanca/ESPUMA/1. TROPICAL/TROPICAL.glb',
      imagen: '/Colchones/imgcolchones/tropical.png'
    },
    { 
      nombre: 'Corona', 
      modelo3d: '/Colchones/Marca blanca/ESPUMA/2. CORONA/CORONA.glb',
      imagen: '/Colchones/imgcolchones/corona.png'
    },
    { 
      nombre: 'Jensen', 
      modelo3d: '/Colchones/Marca blanca/ESPUMA/3. JENSEN/JENSEN.glb',
      imagen: '/Colchones/imgcolchones/jensen.png'
    },
    { 
      nombre: 'Ares', 
      modelo3d: '/Colchones/Marca blanca/ESPUMA/4. ARES/ARES.glb',
      imagen: '/Colchones/imgcolchones/ares.png'
    },
    { 
      nombre: 'Apolo', 
      modelo3d: '/Colchones/Marca blanca/ESPUMA/5. APOLO/APOLO.glb',
      imagen: '/Colchones/imgcolchones/apolo.png'
    },
    { 
      nombre: 'Diamante', 
      modelo3d: '/Colchones/Marca blanca/ESPUMA/6. DIAMANTE/DIAMANTE.glb',
      imagen: '/Colchones/imgcolchones/diamante.png'
    },
    { 
      nombre: 'Hefesto', 
      modelo3d: '/Colchones/Marca blanca/ESPUMA/7. HEFESTO/HEFESTO.glb',
      imagen: '/Colchones/imgcolchones/hefesto.png'
    }
  ],
  espumaSoft: [
    { 
      nombre: 'Purity Softy', 
      modelo3d: '/Colchones/Marca blanca/ESPUMA SOFT/1. PURITY SOFTY/PURITY SOFTY.glb',
      imagen: '/Colchones/imgcolchones/purity.png'
    }
  ],
  resorte: [
    { 
      nombre: 'SurenPocket', 
      modelo3d: '/Colchones/Marca blanca/RESORTE/1. SURENPOCKET/SURENPOCKET.glb',
      imagen: '/Colchones/Marca blanca/RESORTE/1. SURENPOCKET/SURENPOCKET.jpg'
    }
  ]
}

const naturalSoft = {
  espuma: [
    { 
      nombre: 'Tropical', 
      modelo3d: '/Colchones/Natural Soft/ESPUMA/1. TROPICAL/TROPICAL.glb',
      imagen: '/Colchones/Natural Soft/ESPUMA/1. TROPICAL/TROPICAL.jpg'
    },
    { 
      nombre: 'Mark', 
      modelo3d: '/Colchones/Natural Soft/ESPUMA/2. MARK/MARK.glb',
      imagen: '/Colchones/Natural Soft/ESPUMA/2. MARK/MARK.jpg'
    },
    { 
      nombre: 'Rest', 
      modelo3d: '/Colchones/Natural Soft/ESPUMA/3. REST/REST.glb',
      imagen: '/Colchones/Natural Soft/ESPUMA/3. REST/REST.jpg'
    },
    { 
      nombre: 'Relax', 
      modelo3d: '/Colchones/Natural Soft/ESPUMA/4. RELAX/RELAX.glb',
      imagen: '/Colchones/Natural Soft/ESPUMA/4. RELAX/RELAX.jpg'
    },
    { 
      nombre: 'Virtus', 
      modelo3d: '/Colchones/Natural Soft/ESPUMA/5. VIRTUS/VIRTUS.glb',
      imagen: '/Colchones/Natural Soft/ESPUMA/5. VIRTUS/VIRTUS.jpg'
    },
    { 
      nombre: 'Comfort', 
      modelo3d: '/Colchones/Natural Soft/ESPUMA/6. COMFORT/COMFORT.glb',
      imagen: '/Colchones/Natural Soft/ESPUMA/6. COMFORT/COMFORT.jpg'
    },
    { 
      nombre: 'Siena', 
      modelo3d: '/Colchones/Natural Soft/ESPUMA/7. SIENA/SIENA.glb',
      imagen: '/Colchones/Natural Soft/ESPUMA/7. SIENA/SIENA.jpg'
    },
    { 
      nombre: 'Select', 
      modelo3d: '/Colchones/Natural Soft/ESPUMA/8. SELECT/SELECT.glb',
      imagen: '/Colchones/Natural Soft/ESPUMA/8. SELECT/SELECT.jpg'
    },
    { 
      nombre: 'Sense', 
      modelo3d: '/Colchones/Natural Soft/ESPUMA/9. SENSE/SENSE.glb',
      imagen: '/Colchones/Natural Soft/ESPUMA/9. SENSE/SENSE.jpg'
    }
  ],
  espumaSoft: [
    { 
      nombre: 'Comfy', 
      modelo3d: '/Colchones/Natural Soft/ESPUMA SOFT/1. COMFY/COMFY.glb',
      imagen: '/Colchones/Natural Soft/ESPUMA SOFT/1. COMFY/COMFY.jpg'
    },
    { 
      nombre: 'Serenity', 
      modelo3d: '/Colchones/Natural Soft/ESPUMA SOFT/2. SERENITY/SERENITY.glb',
      imagen: '/Colchones/Natural Soft/ESPUMA SOFT/2. SERENITY/SERENITY.jpg'
    },
    { 
      nombre: 'Harmony', 
      modelo3d: '/Colchones/Natural Soft/ESPUMA SOFT/3. HARMONY/HARMONY.glb',
      imagen: '/Colchones/Natural Soft/ESPUMA SOFT/3. HARMONY/HARMONY.jpg'
    }
  ],
  resorte: [
    { 
      nombre: 'Zinus Pocket', 
      modelo3d: '/Colchones/Natural Soft/RESORTE/1. ZINUS POCKET/ZINUS POCKET.glb',
      imagen: '/Colchones/Natural Soft/RESORTE/1. ZINUS POCKET/ZINUS POCKET.jpg'
    },
    { 
      nombre: 'Select Pocket', 
      modelo3d: '/Colchones/Natural Soft/RESORTE/2. SELECT POCKET/SELECT POCKET.glb',
      imagen: '/Colchones/Natural Soft/RESORTE/2. SELECT POCKET/SELECT POCKET.jpg'
    }
  ]
}
</script>

<style scoped>
.marca-blanca-page {
  width: 100%;
  overflow: hidden;
  background: #ededed;
  color: #4a4a4e;
  font-family: 'Poppins', sans-serif;
}

.marca-hero {
  min-height: 400px;
  position: relative;
  display: flex;
  align-items: center;
  padding: 80px 9%;
  background: #4a4a4e;
  overflow: hidden;
}

.hero-content {
  position: relative;
  z-index: 2;
  max-width: 700px;
}

.hero-content span {
  display: block;
  color: #eb3135;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 3px;
  margin-bottom: 20px;
}

.hero-content h1 {
  color: white;
  font-size: clamp(45px, 6vw, 90px);
  line-height: 0.9;
  margin: 0 0 20px;
  font-weight: 900;
}

.hero-content p {
  color: #ededed;
  font-size: 18px;
  line-height: 1.6;
}

.hero-shape {
  position: absolute;
  width: 500px;
  height: 500px;
  border-radius: 50%;
  right: -120px;
  top: -150px;
  background: #eb3135;
  opacity: 0.95;
}

.marca-catalogo {
  padding: 60px 8%;
}

.catalogo-header {
  margin-bottom: 30px;
}

.catalogo-header > span {
  display: block;
  color: #eb3135;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 3px;
  margin-bottom: 10px;
}

.catalogo-header h2 {
  font-size: clamp(35px, 5vw, 60px);
  line-height: 0.95;
  margin: 0;
  color: #4a4a4e;
}

.subcategoria-titulo {
  font-size: 24px;
  color: #eb3135;
  margin: 40px 0 20px 0;
  border-bottom: 2px solid #ccc;
  padding-bottom: 8px;
}

.categorias-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 30px;
}

.categoria-card {
  background: white;
  border-radius: 20px;
  overflow: hidden;
  transition: transform 0.35s ease, box-shadow 0.35s ease;
}

.categoria-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 18px 40px rgba(0, 0, 0, 0.10);
}

.categoria-visual {
  height: 240px;
  position: relative;
  background: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.preview-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.numero {
  position: absolute;
  right: 15px;
  bottom: 10px;
  z-index: 2;
  font-size: 50px;
  font-weight: 800;
  color: rgba(0, 0, 0, 0.15);
  pointer-events: none;
}

.categoria-info {
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.categoria-info > span {
  display: block;
  color: #eb3135;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 1.5px;
}

.categoria-info h3 {
  margin: 0;
  color: #4a4a4e;
  font-size: 22px;
}

.btn-ver-3d {
  margin-top: 8px;
  padding: 10px 18px;
  background-color: #eb3135;
  color: #ffffff;
  border: none;
  border-radius: 8px;
  font-size: 13px;
  font-weight: 700;
  cursor: pointer;
  transition: background-color 0.2s ease, transform 0.1s ease;
  align-self: flex-start;
}

.btn-ver-3d:hover {
  background-color: #c92428;
  transform: scale(1.02);
}

/* MODAL Y CONTROLES ESTILO GOOGLE MAPS */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.85);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  padding: 20px;
}

.modal-contenido-3d {
  position: relative;
  width: 85vw;
  max-width: 1000px;
  height: 80vh;
  background: #ffffff;
  border-radius: 16px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 15px 40px rgba(0,0,0,0.5);
}

.modal-titulo {
  margin: 0 0 15px 0;
  color: #4a4a4e;
  font-size: 24px;
}

.modal-viewer-wrapper {
  position: relative;
  flex: 1;
  width: 100%;
  background: #f5f5f7;
  border-radius: 12px;
  overflow: hidden;
}

.modal-3d {
  width: 100%;
  height: 100%;
}

/* PANEL DE CONTROLES INFERIOR DERECHA */
.map-controls {
  position: absolute;
  bottom: 20px;
  right: 20px;
  display: flex;
  align-items: center;
  gap: 15px;
  z-index: 10;
}

/* CRUZ DIRECCIONAL */
.dpad-container {
  width: 90px;
  height: 90px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 2px;
  background: rgba(255, 255, 255, 0.9);
  padding: 4px;
  border-radius: 50%;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}

.btn-dpad {
  background: #4a4a4e;
  color: #ffffff;
  border: none;
  font-size: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s;
}

.btn-dpad:hover {
  background: #eb3135;
}

.btn-up { grid-column: 2; grid-row: 1; border-radius: 6px 6px 2px 2px; }
.btn-left { grid-column: 1; grid-row: 2; border-radius: 6px 2px 2px 6px; }
.btn-center { grid-column: 2; grid-row: 2; background: #eb3135; border-radius: 50%; font-size: 8px; }
.btn-right { grid-column: 3; grid-row: 2; border-radius: 2px 6px 6px 2px; }
.btn-down { grid-column: 2; grid-row: 3; border-radius: 2px 2px 6px 6px; }

/* BARRA DE ZOOM ESTILO MAPS (+ / -) */
.zoom-container {
  display: flex;
  flex-direction: column;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  overflow: hidden;
}

.btn-zoom {
  width: 36px;
  height: 36px;
  background: transparent;
  border: none;
  color: #4a4a4e;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s, color 0.2s;
}

.btn-zoom:first-child {
  border-bottom: 1px solid #ddd;
}

.btn-zoom:hover {
  background: #eb3135;
  color: #ffffff;
}

.modal-cerrar {
  position: absolute;
  top: 15px;
  right: 20px;
  background: transparent;
  border: none;
  color: #4a4a4e;
  font-size: 36px;
  font-weight: bold;
  cursor: pointer;
  line-height: 1;
  z-index: 12;
}

.modal-cerrar:hover {
  color: #eb3135;
}
</style>