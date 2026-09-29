```vue
<template>
  <section class="bases-page">

    <section class="bases-hero">
      <div class="hero-shape"></div>

      <div class="hero-content">
        <span>FRONTERA LIVING / COLCHONES</span>

        <h1>Bases</h1>

        <p>
          Conocé nuestras bases diseñadas para complementar tu colchón
          y acompañar cada momento de descanso.
        </p>
      </div>
    </section>

    <section class="bases-catalogo">

      <div class="catalogo-header">
        <span>COLECCIÓN</span>

        <h2>Nuestras bases</h2>

        <p>
          Diferentes propuestas pensadas para completar tu conjunto
          de descanso con diseño, estructura y funcionalidad.
        </p>
      </div>

      <div class="bases-grid">

        <article
          v-for="base in bases"
          :key="base.nombre"
          class="base-card"
        >

          <div class="base-visual">

            <span class="base-marca">
              FRONTERA
            </span>

            <div class="base-placeholder">
              <span>3D</span>
              <small>Modelo de base</small>
            </div>

            <strong>
              {{ base.numero }}
            </strong>

          </div>

          <div class="base-info">

            <span>BASE</span>

            <h3>
              {{ base.nombre }}
            </h3>

            <p>
              {{ base.descripcion }}
            </p>

            <button>
              Ver producto
              <strong>→</strong>
            </button>

          </div>

        </article>

      </div>

    </section>

    <section class="bases-final">

      <div class="final-circle"></div>

      <div class="final-content">

        <span>FRONTERA LIVING</span>

        <h2>
          La base también es parte del descanso.
        </h2>

        <p>
          Completá tu conjunto con una base pensada para acompañar
          tu colchón.
        </p>

      </div>

    </section>

  </section>
</template>


<script setup>

const bases = [

  {
    numero: '01',
    nombre: 'Base Olimpo',
    descripcion:
      'Una alternativa pensada para complementar tu colchón y acompañar tu descanso.'
  },

  {
    numero: '02',
    nombre: 'Base Estándar',
    descripcion:
      'Una opción práctica y funcional para completar tu conjunto de descanso.'
  },

  {
    numero: '03',
    nombre: 'Base Millenium',
    descripcion:
      'Una propuesta pensada para brindar una estructura firme y confortable.'
  },

  {
    numero: '04',
    nombre: 'Base Marinera Sahara',
    descripcion:
      'Una alternativa diferente para completar tu conjunto de descanso.'
  }

]

</script>


<style scoped>

.bases-page {
  width: 100%;
  overflow: hidden;
  background: #ededed;
  color: #4a4a4e;
  font-family: 'Poppins', sans-serif;
}


/* HERO */

.bases-hero {
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
  font-size: clamp(60px, 9vw, 120px);
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


/* CATÁLOGO */

.bases-catalogo {
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


/* GRID */

.bases-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 35px;
}


/* TARJETAS */

.base-card {
  background: white;
  border-radius: 30px;
  overflow: hidden;
  transition:
    transform 0.35s ease,
    box-shadow 0.35s ease;
}

.base-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 18px 40px rgba(0, 0, 0, 0.10);
}


/* VISUAL */

.base-visual {
  height: 360px;
  position: relative;
  background: #bdc0c3;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.base-marca {
  position: absolute;
  top: 25px;
  left: 25px;
  z-index: 4;
  color: #4a4a4e;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 2px;
}


/* PLACEHOLDER */

.base-placeholder {
  width: 230px;
  height: 150px;
  position: relative;
  z-index: 2;
  background: #ededed;
  border-radius: 10px;
  border-bottom: 15px solid #4a4a4e;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 25px 30px rgba(0, 0, 0, 0.12);
}

.base-placeholder span {
  font-size: 45px;
  font-weight: 800;
  color: rgba(74, 74, 78, 0.18);
}

.base-placeholder small {
  margin-top: 5px;
  color: #77777b;
  font-size: 9px;
  letter-spacing: 1px;
}


/* NÚMERO */

.base-visual > strong {
  position: absolute;
  right: 25px;
  bottom: 15px;
  z-index: 4;
  font-size: 75px;
  line-height: 1;
  color: rgba(255, 255, 255, 0.55);
  pointer-events: none;
}


/* INFORMACIÓN */

.base-info {
  padding: 35px;
}

.base-info > span {
  display: block;
  color: #eb3135;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 2px;
  margin-bottom: 10px;
}

.base-info h3 {
  margin: 0 0 15px;
  color: #4a4a4e;
  font-size: 34px;
  line-height: 1.1;
}

.base-info p {
  color: #77777b;
  font-size: 15px;
  line-height: 1.6;
  margin-bottom: 25px;
}

.base-info button {
  border: none;
  background: transparent;
  padding: 0;
  color: #4a4a4e;
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
}

.base-info button strong {
  color: #eb3135;
  font-size: 20px;
  margin-left: 8px;
}


/* FINAL */

.bases-final {
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


/* TABLET */

@media (max-width: 800px) {

  .bases-grid {
    grid-template-columns: 1fr;
  }

  .base-visual {
    height: 330px;
  }

}


/* CELULAR */

@media (max-width: 550px) {

  .bases-hero {
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
    font-size: 65px;
  }

  .hero-content p {
    font-size: 16px;
  }

  .bases-catalogo {
    padding: 80px 6%;
  }

  .catalogo-header h2 {
    font-size: 48px;
  }

  .base-visual {
    height: 300px;
  }

  .base-info {
    padding: 28px;
  }

  .base-info h3 {
    font-size: 28px;
  }

}

</style>
