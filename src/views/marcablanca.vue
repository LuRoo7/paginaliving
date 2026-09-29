<template>
  <section class="marca-blanca-page">

    <!-- SI ESTAMOS EN LA RUTA RAÍZ /marca-blanca, SE MUESTRA ESTE DISEÑO -->
    <div v-if="$route.path === '/marca-blanca'">

      <!-- HERO -->
      <section class="marca-hero">
        <div class="hero-shape"></div>
        <div class="hero-content">
          <span>FRONTERA LIVING / COLCHONES</span>
          <h1>
            Marca<br>
            Blanca
          </h1>
          <p>
            Una colección de colchones pensada para ofrecer diferentes
            alternativas de confort y soporte.
          </p>
        </div>
      </section>

      <!-- CATÁLOGO -->
      <section class="marca-catalogo">
        <div class="catalogo-header">
          <span>COLECCIÓN</span>
          <h2>Elegí una línea</h2>
          <p>
            Conocé las diferentes opciones disponibles dentro de
            nuestra línea Marca Blanca.
          </p>
        </div>

        <!-- CATEGORÍAS -->
        <div class="categorias-grid">

          <!-- ESPUMA -->
          <article class="categoria-card" @click="irAEspuma">
            <div class="categoria-visual">
              <span class="numero">01</span>
              <div class="categoria-titulo">ESPUMA</div>
            </div>
            <div class="categoria-info">
              <span>MARCA BLANCA</span>
              <h3>Espuma</h3>
              <p>
                Una selección de colchones de espuma pensados para
                brindar comodidad y soporte.
              </p>
              <button>
                Ver colchones
                <strong>→</strong>
              </button>
            </div>
          </article>

          <!-- ESPUMA SOFT -->
          <article class="categoria-card" @click="irAEspumaSoft">
            <div class="categoria-visual">
              <span class="numero">02</span>
              <div class="categoria-titulo">
                ESPUMA<br>
                SOFT
              </div>
            </div>
            <div class="categoria-info">
              <span>MARCA BLANCA</span>
              <h3>Espuma Soft</h3>
              <p>
                Alternativas de espuma con una sensación de confort
                más suave.
              </p>
              <button>
                Ver colchones
                <strong>→</strong>
              </button>
            </div>
          </article>

          <!-- RESORTE -->
          <article class="categoria-card" @click="irAResorte">
            <div class="categoria-visual">
              <span class="numero">03</span>
              <div class="categoria-titulo">RESORTE</div>
            </div>
            <div class="categoria-info">
              <span>MARCA BLANCA</span>
              <h3>Resorte / SurrenPocket</h3>
              <p>
                Una alternativa con sistema de resortes para quienes
                buscan otro nivel de soporte.
              </p>
              <button>
                Ver colchones
                <strong>→</strong>
              </button>
            </div>
          </article>

        </div>
      </section>

      <!-- FINAL -->
      <section class="marca-final">
        <div class="final-circle"></div>
        <div class="final-content">
          <span>FRONTERA LIVING</span>
          <h2>Elegí el confort que necesitás.</h2>
          <p>
            Explorá nuestra línea Marca Blanca y encontrá la opción
            adecuada para tu descanso.
          </p>
        </div>
      </section>

    </div>

    <!-- SI EL USUARIO ENTRA A UNA SUBRUTA (EJ: /marca-blanca/espuma), SE RENDERIZA AQUÍ -->
    <RouterView v-else />

  </section>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const $route = useRoute()

function irAEspuma() {
  router.push('/marca-blanca/espuma')
}

function irAEspumaSoft() {
  router.push('/marca-blanca/espuma-soft')
}

function irAResorte() {
  router.push('/marca-blanca/resorte')
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

/* ================================= */
/* HERO */
/* ================================= */

.marca-hero {
  min-height: 480px;
  position: relative;
  display: flex;
  align-items: center;
  padding: 100px 9%;
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
  font-size: clamp(55px, 8vw, 110px);
  line-height: 0.9;
  margin: 0 0 30px;
  font-weight: 900;
}

.hero-content p {
  color: #ededed;
  font-size: 19px;
  line-height: 1.6;
  max-width: 600px;
}

/* ================================= */
/* FORMA ROJA */
/* ================================= */

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

/* ================================= */
/* CATÁLOGO */
/* ================================= */

.marca-catalogo {
  padding: 120px 8%;
}

.catalogo-header {
  max-width: 750px;
  margin-bottom: 65px;
}

.catalogo-header > span {
  display: block;
  color: #eb3135;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 3px;
  margin-bottom: 18px;
}

.catalogo-header h2 {
  font-size: clamp(45px, 6vw, 75px);
  line-height: 0.95;
  margin: 0 0 25px;
  color: #4a4a4e;
}

.catalogo-header p {
  font-size: 18px;
  line-height: 1.7;
  color: #6a6a6e;
  max-width: 650px;
}

/* ================================= */
/* GRID */
/* ================================= */

.categorias-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}

/* ================================= */
/* CARD */
/* ================================= */

.categoria-card {
  background: white;
  border-radius: 30px;
  overflow: hidden;
  cursor: pointer;
  transition:
    transform 0.35s ease,
    box-shadow 0.35s ease;
}

.categoria-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 18px 40px rgba(0, 0, 0, 0.10);
}

/* ================================= */
/* VISUAL */
/* ================================= */

.categoria-visual {
  height: 280px;
  position: relative;
  background: #bdc0c3;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.categoria-visual::before {
  content: "";
  position: absolute;
  width: 220px;
  height: 220px;
  border-radius: 50%;
  background: #ededed;
  opacity: 0.8;
}

.categoria-visual::after {
  content: "";
  position: absolute;
  width: 180px;
  height: 180px;
  border: 2px solid rgba(235, 49, 53, 0.35);
  border-radius: 50%;
  transform: rotate(25deg);
}

/* ================================= */
/* NÚMERO */
/* ================================= */

.numero {
  position: absolute;
  right: 22px;
  bottom: 15px;
  z-index: 3;
  font-size: 75px;
  line-height: 1;
  font-weight: 800;
  color: rgba(255, 255, 255, 0.55);
}

/* ================================= */
/* TÍTULO VISUAL */
/* ================================= */

.categoria-titulo {
  position: relative;
  z-index: 2;
  text-align: center;
  font-size: 24px;
  line-height: 1.1;
  font-weight: 800;
  letter-spacing: 2px;
  color: #4a4a4e;
}

/* ================================= */
/* INFO */
/* ================================= */

.categoria-info {
  padding: 32px;
}

.categoria-info > span {
  display: block;
  color: #eb3135;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 2px;
  margin-bottom: 10px;
}

.categoria-info h3 {
  margin: 0 0 15px;
  color: #4a4a4e;
  font-size: 30px;
  line-height: 1.1;
}

.categoria-info p {
  color: #77777b;
  font-size: 15px;
  line-height: 1.6;
  margin-bottom: 25px;
}

.categoria-info button {
  border: none;
  background: transparent;
  padding: 0;
  color: #4a4a4e;
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
}

.categoria-info button strong {
  color: #eb3135;
  font-size: 20px;
  margin-left: 8px;
}

/* ================================= */
/* FINAL */
/* ================================= */

.marca-final {
  position: relative;
  min-height: 450px;
  padding: 100px 10%;
  background: #4a4a4e;
  color: white;
  display: flex;
  align-items: center;
  overflow: hidden;
}

.final-content {
  position: relative;
  z-index: 2;
  max-width: 700px;
}

.final-content span {
  display: block;
  color: #eb3135;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 3px;
  margin-bottom: 20px;
}

.final-content h2 {
  font-size: clamp(45px, 6vw, 80px);
  line-height: 1;
  margin: 0 0 25px;
}

.final-content p {
  color: #ededed;
  font-size: 18px;
  line-height: 1.6;
  max-width: 600px;
}

.final-circle {
  position: absolute;
  width: 450px;
  height: 450px;
  border-radius: 50%;
  background: #eb3135;
  right: -120px;
  bottom: -180px;
}

/* ================================= */
/* TABLET */
/* ================================= */

@media (max-width: 900px) {
  .categorias-grid {
    grid-template-columns: 1fr;
    max-width: 650px;
  }
}

/* ================================= */
/* CELULAR */
/* ================================= */

@media (max-width: 550px) {
  .marca-hero {
    min-height: 420px;
    padding: 80px 7%;
  }

  .hero-shape {
    width: 350px;
    height: 350px;
    right: -150px;
    top: -100px;
  }

  .hero-content h1 {
    font-size: 62px;
  }

  .hero-content p {
    font-size: 16px;
  }

  .marca-catalogo {
    padding: 80px 6%;
  }

  .catalogo-header h2 {
    font-size: 48px;
  }

  .categoria-info {
    padding: 28px;
  }

  .categoria-info h3 {
    font-size: 27px;
  }
}
</style>