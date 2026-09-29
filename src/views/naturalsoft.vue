<template>
  <section class="naturalsoft-page">

    <!-- HERO -->
    <section class="naturalsoft-hero">
      <div class="hero-shape"></div>

      <div class="hero-content">
        <span>FRONTERA LIVING</span>
        <h1>Natural Soft</h1>
        <p>
          Una línea pensada para brindar confort, calidad y una experiencia de
          descanso superior.
        </p>
      </div>
    </section>

    <!-- CATEGORÍAS -->
    <section class="categorias">
      <div class="categorias-header">
        <span>COLECCIÓN</span>
        <h2>Natural Soft</h2>
        <p>
          Descubrí nuestras diferentes propuestas y encontrá el colchón ideal
          para tu descanso.
        </p>
      </div>

      <div class="categorias-grid">

        <!-- ESPUMA -->
        <article class="categoria-card">
          <div class="card-number">01</div>

          <div class="card-content">
            <span>DESCANSO</span>
            <h3>Espuma</h3>
            <p>
              Colchones diseñados para ofrecer confort y una sensación de
              descanso equilibrada.
            </p>

            <button @click="irAEspuma">
              Ver productos
              <span>→</span>
            </button>
          </div>
        </article>

        <!-- ESPUMA SOFT -->
        <article class="categoria-card">
          <div class="card-number">02</div>

          <div class="card-content">
            <span>CONFORT</span>
            <h3>Espuma Soft</h3>
            <p>
              Una propuesta más suave y confortable para quienes buscan una
              sensación especial al descansar.
            </p>

            <button @click="irAEspumaSoft">
              Ver productos
              <span>→</span>
            </button>
          </div>
        </article>

        <!-- RESORTE -->
        <article class="categoria-card">
          <div class="card-number">03</div>

          <div class="card-content">
            <span>TECNOLOGÍA</span>
            <h3>Resorte</h3>
            <p>
              Sistemas de resortes pensados para brindar soporte, estabilidad y
              confort durante el descanso.
            </p>

            <button @click="irAResorte">
              Ver productos
              <span>→</span>
            </button>
          </div>
        </article>

      </div>
    </section>

    <!-- FINAL -->
    <section class="naturalsoft-final">
      <div class="final-circle"></div>

      <div class="final-content">
        <span>FRONTERA LIVING</span>
        <h2>Descansá como querés.</h2>
        <p>
          Natural Soft combina diseño, tecnología y confort para acompañarte
          todas las noches.
        </p>
      </div>
    </section>

  </section>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function irAEspuma() {
  router.push('/natural-soft/espuma')
}

function irAEspumaSoft() {
  router.push('/natural-soft/espuma-soft')
}

function irAResorte() {
  router.push('/natural-soft/resorte')
}
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.naturalsoft-page {
  width: 100%;
  background: #EDEDED;
  color: #4A4A4E;
  font-family: 'Poppins', Arial, sans-serif;
}

/* =========================
   HERO
========================= */

.naturalsoft-hero {
  position: relative;
  min-height: 470px;
  background: #4A4A4E;
  overflow: hidden;
  display: flex;
  align-items: center;
}

.hero-shape {
  position: absolute;
  width: 480px;
  height: 480px;
  right: -130px;
  top: -80px;
  border: 70px solid #5a5a5e;
  transform: rotate(45deg);
  opacity: 0.45;
}

.hero-shape::before {
  content: '';
  position: absolute;
  width: 250px;
  height: 250px;
  border: 35px solid #EB3135;
  top: 45px;
  left: 45px;
}

.hero-content {
  position: relative;
  z-index: 2;
  width: min(1200px, 90%);
  margin: 0 auto;
  padding: 80px 0;
}

.hero-content span {
  display: block;
  color: #BDC0C3;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 4px;
  margin-bottom: 18px;
}

.hero-content h1 {
  margin: 0;
  color: white;
  font-size: clamp(48px, 7vw, 82px);
  line-height: 1;
  font-weight: 700;
  letter-spacing: -2px;
}

.hero-content p {
  max-width: 600px;
  margin: 28px 0 0;
  color: #EDEDED;
  font-size: 17px;
  line-height: 1.8;
}

/* =========================
   CATEGORÍAS
========================= */

.categorias {
  width: min(1200px, 90%);
  margin: 0 auto;
  padding: 100px 0;
}

.categorias-header {
  max-width: 700px;
  margin-bottom: 55px;
}

.categorias-header > span {
  display: block;
  color: #EB3135;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 3px;
  margin-bottom: 12px;
}

.categorias-header h2 {
  margin: 0 0 18px;
  color: #4A4A4E;
  font-size: clamp(36px, 5vw, 55px);
  line-height: 1.1;
  font-weight: 700;
}

.categorias-header p {
  margin: 0;
  color: #66666a;
  font-size: 16px;
  line-height: 1.8;
}

/* =========================
   GRID
========================= */

.categorias-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;
}

/* =========================
   CARD
========================= */

.categoria-card {
  position: relative;
  min-height: 430px;
  background: white;
  overflow: hidden;
  border-top: 5px solid #EB3135;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.categoria-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 18px 45px rgba(74, 74, 78, 0.14);
}

.card-number {
  position: absolute;
  top: 25px;
  right: 28px;
  color: #BDC0C3;
  font-size: 48px;
  font-weight: 700;
  line-height: 1;
}

.card-content {
  position: relative;
  z-index: 2;
  padding: 100px 35px 35px;
}

.card-content > span {
  display: block;
  color: #EB3135;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 2px;
  margin-bottom: 14px;
}

.card-content h3 {
  margin: 0 0 18px;
  color: #4A4A4E;
  font-size: 31px;
  font-weight: 700;
}

.card-content p {
  min-height: 105px;
  margin: 0;
  color: #6b6b6f;
  font-size: 14px;
  line-height: 1.8;
}

.card-content button {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 30px;
  padding: 15px 18px;
  border: none;
  background: #4A4A4E;
  color: white;
  font-family: 'Poppins', Arial, sans-serif;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s ease;
}

.card-content button:hover {
  background: #EB3135;
}

.card-content button span {
  color: white;
  font-size: 20px;
  line-height: 1;
  margin: 0;
}

/* =========================
   FINAL
========================= */

.naturalsoft-final {
  position: relative;
  min-height: 360px;
  background: #4A4A4E;
  overflow: hidden;
  display: flex;
  align-items: center;
}

.final-circle {
  position: absolute;
  width: 500px;
  height: 500px;
  border: 90px solid #5a5a5e;
  border-radius: 50%;
  right: -180px;
  top: -90px;
}

.final-circle::after {
  content: '';
  position: absolute;
  width: 100px;
  height: 100px;
  background: #EB3135;
  border-radius: 50%;
  left: 100px;
  top: 100px;
}

.final-content {
  position: relative;
  z-index: 2;
  width: min(1200px, 90%);
  margin: 0 auto;
  padding: 70px 0;
}

.final-content span {
  display: block;
  color: #BDC0C3;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 3px;
  margin-bottom: 15px;
}

.final-content h2 {
  max-width: 600px;
  margin: 0 0 15px;
  color: white;
  font-size: clamp(32px, 5vw, 50px);
  line-height: 1.1;
  font-weight: 700;
}

.final-content p {
  max-width: 550px;
  margin: 0;
  color: #EDEDED;
  font-size: 15px;
  line-height: 1.8;
}

/* =========================
   RESPONSIVE
========================= */

@media (max-width: 900px) {
  .categorias-grid {
    grid-template-columns: 1fr;
  }

  .categoria-card {
    min-height: auto;
  }

  .card-content p {
    min-height: auto;
  }

  .hero-shape {
    right: -250px;
  }
}

@media (max-width: 600px) {
  .naturalsoft-hero {
    min-height: 420px;
  }

  .hero-content {
    padding: 60px 0;
  }

  .hero-content h1 {
    font-size: 48px;
  }

  .hero-content p {
    font-size: 15px;
  }

  .categorias {
    padding: 70px 0;
  }

  .categorias-header h2 {
    font-size: 38px;
  }

  .card-content {
    padding: 85px 28px 28px;
  }

  .naturalsoft-final {
    min-height: 330px;
  }
}
</style>