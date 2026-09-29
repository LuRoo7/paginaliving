```vue
<template>
  <section class="tipos-colchones-page">

    <!-- HERO -->
    <section class="tipos-hero">

      <div class="hero-shape"></div>

      <div class="hero-content">

        <span>FRONTERA LIVING</span>

        <h1>
          Colchones
        </h1>

        <p>
          Descubrí nuestras diferentes líneas y encontrá la opción ideal
          para acompañar tu descanso.
        </p>

      </div>

    </section>


    <!-- CONTENIDO -->
    <section class="tipos-contenido">

      <div class="contenido-header">

        <span>COLECCIÓN</span>

        <h2>
          Elegí una categoría
        </h2>

        <p>
          Explorá nuestras propuestas de descanso y conocé cada una de
          nuestras líneas.
        </p>

      </div>


      <!-- OPCIONES -->
      <div class="tipos-grid">

        <!-- BASES -->
        <article
          class="tipo-card"
          @click="irABases"
        >

          <div class="tipo-imagen">

            <span class="numero">01</span>

            <div class="tipo-icono">
              BASES
            </div>

          </div>

          <div class="tipo-info">

            <span>DESCANSO</span>

            <h3>Bases</h3>

            <p>
              Estructuras diseñadas para complementar tu colchón
              y acompañar tu descanso.
            </p>

            <button>
              Ver bases
              <strong>→</strong>
            </button>

          </div>

        </article>


        <!-- MARCA BLANCA -->
        <article
          class="tipo-card"
          @click="irAMarcaBlanca"
        >

          <div class="tipo-imagen">

            <span class="numero">02</span>

            <div class="tipo-icono">
              MARCA<br>
              BLANCA
            </div>

          </div>

          <div class="tipo-info">

            <span>LÍNEA</span>

            <h3>Marca Blanca</h3>

            <p>
              Una variedad de opciones pensadas para ofrecer
              diferentes niveles de confort y soporte.
            </p>

            <button>
              Ver colección
              <strong>→</strong>
            </button>

          </div>

        </article>


        <!-- NATURAL SOFT -->
        <article
          class="tipo-card"
          @click="irANaturalSoft"
        >

          <div class="tipo-imagen">

            <span class="numero">03</span>

            <div class="tipo-icono">
              NATURAL<br>
              SOFT
            </div>

          </div>

          <div class="tipo-info">

            <span>LÍNEA</span>

            <h3>Natural Soft</h3>

            <p>
              Una colección enfocada en el confort y diferentes
              alternativas para cada necesidad.
            </p>

            <button>
              Ver colección
              <strong>→</strong>
            </button>

          </div>

        </article>

      </div>

    </section>


    <!-- FINAL -->
    <section class="tipos-final">

      <div class="final-circle"></div>

      <div class="final-content">

        <span>FRONTERA LIVING</span>

        <h2>
          Encontrá el descanso que buscás.
        </h2>

        <p>
          Conocé nuestras líneas de colchones y elegí la opción
          que mejor se adapte a vos.
        </p>

      </div>

    </section>

  </section>
</template>


<script setup>

import { useRouter } from 'vue-router'

const router = useRouter()


function irABases() {

  router.push('/bases')

}


function irAMarcaBlanca() {

  router.push('/marca-blanca')

}


function irANaturalSoft() {

  router.push('/natural-soft')

}

</script>


<style scoped>

/* ================================= */
/* GENERAL */
/* ================================= */

.tipos-colchones-page {

  width: 100%;

  overflow: hidden;

  background: #ededed;

  color: #4a4a4e;

  font-family: 'Poppins', sans-serif;
}


/* ================================= */
/* HERO */
/* ================================= */

.tipos-hero {

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
/* CONTENIDO */
/* ================================= */

.tipos-contenido {

  padding: 120px 8%;
}


.contenido-header {

  max-width: 750px;

  margin-bottom: 60px;
}


.contenido-header > span {

  display: block;

  color: #eb3135;

  font-size: 13px;

  font-weight: 700;

  letter-spacing: 3px;

  margin-bottom: 18px;
}


.contenido-header h2 {

  font-size: clamp(45px, 6vw, 75px);

  line-height: 0.95;

  margin: 0 0 25px;

  color: #4a4a4e;
}


.contenido-header p {

  font-size: 18px;

  line-height: 1.7;

  color: #6a6a6e;

  max-width: 650px;
}


/* ================================= */
/* GRID */
/* ================================= */

.tipos-grid {

  display: grid;

  grid-template-columns: repeat(3, 1fr);

  gap: 30px;
}


/* ================================= */
/* TARJETAS */
/* ================================= */

.tipo-card {

  background: white;

  border-radius: 28px;

  overflow: hidden;

  cursor: pointer;

  transition: transform 0.35s ease,
              box-shadow 0.35s ease;
}


.tipo-card:hover {

  transform: translateY(-8px);

  box-shadow: 0 18px 40px rgba(0, 0, 0, 0.10);
}


/* ================================= */
/* IMAGEN / CABECERA */
/* ================================= */

.tipo-imagen {

  height: 280px;

  position: relative;

  background: #bdc0c3;

  display: flex;

  align-items: center;

  justify-content: center;

  overflow: hidden;
}


/* Decoración */

.tipo-imagen::before {

  content: "";

  position: absolute;

  width: 220px;

  height: 220px;

  border-radius: 50%;

  background: #ededed;

  opacity: 0.8;
}


.tipo-imagen::after {

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
/* TEXTO CENTRAL */
/* ================================= */

.tipo-icono {

  position: relative;

  z-index: 2;

  text-align: center;

  font-size: 22px;

  line-height: 1.1;

  font-weight: 800;

  letter-spacing: 2px;

  color: #4a4a4e;
}


/* ================================= */
/* INFORMACIÓN */
/* ================================= */

.tipo-info {

  padding: 30px;
}


.tipo-info > span {

  display: block;

  color: #eb3135;

  font-size: 11px;

  font-weight: 700;

  letter-spacing: 2px;

  margin-bottom: 10px;
}


.tipo-info h3 {

  margin: 0 0 15px;

  color: #4a4a4e;

  font-size: 32px;

  line-height: 1.1;
}


.tipo-info p {

  color: #77777b;

  font-size: 15px;

  line-height: 1.6;

  margin-bottom: 25px;
}


.tipo-info button {

  border: none;

  background: transparent;

  padding: 0;

  color: #4a4a4e;

  font-family: 'Poppins', sans-serif;

  font-size: 14px;

  font-weight: 700;

  cursor: pointer;
}


.tipo-info button strong {

  color: #eb3135;

  font-size: 20px;

  margin-left: 8px;
}


/* ================================= */
/* FINAL */
/* ================================= */

.tipos-final {

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

  .tipos-grid {

    grid-template-columns: 1fr;

    max-width: 650px;
  }

  .tipo-imagen {

    height: 250px;
  }

}


/* ================================= */
/* CELULAR */
/* ================================= */

@media (max-width: 550px) {

  .tipos-hero {

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

  .tipos-contenido {

    padding: 80px 6%;
  }

  .contenido-header h2 {

    font-size: 48px;
  }

  .tipo-info {

    padding: 28px;
  }

  .tipo-info h3 {

    font-size: 28px;
  }

}

</style>
