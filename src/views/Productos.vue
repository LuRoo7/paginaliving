<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="Productos-page">

    <main class="contenido">
      <span class="etiqueta">
        FRONTERA LIVING
      </span>
      <h1>
        Productos
      </h1>

      <div class="linea-roja"></div>

      <p class="descripcion">
        Conocé las diferentes categorías de productos que ofrece
        Frontera Living.
      </p>

      <div class="productos-botones">

        <RouterLink
          to="/Living"
          class="producto-boton"
        >
          <span class="producto-icono">🛋️</span>

          <span class="producto-titulo">
            Living
          </span>

          <span class="producto-descripcion">
            Conocé nuestros productos para living.
          </span>

          <span class="producto-flecha">
            →
          </span>
        </RouterLink>

        <RouterLink
          to="/colchonesprueba"
          class="producto-boton"
        >
          <span class="producto-icono">🛏️</span>

          <span class="producto-titulo">
            Colchones
          </span>

          <span class="producto-descripcion">
            Conocé nuestros colchones y productos de descanso.
          </span>

          <span class="producto-flecha">
            →
          </span>
        </RouterLink>

      </div>

      <RouterLink
        to="/capacitaciones"
        class="volver"
      >
        ← Volver
      </RouterLink>

    </main>

  </div>
</template>

<style scoped>

.Productos-page {
  min-height: 100vh;
  background-color: #EDEDED;
  color: #4A4A4E;
  font-family: Arial, Helvetica, sans-serif;
}

.contenido {
  min-height: 100vh;
  padding: 60px 40px 100px;
  box-sizing: border-box;
  text-align: center;
  max-width: 1200px;
  margin: 0 auto;
}
.etiqueta {
  display: inline-block;
  color: #EB3135;
  font-size: 12px;
  font-weight: bold;
  letter-spacing: 3px;
  margin-bottom: 12px;
}
.contenido h1 {
  margin: 0;

  color: #4A4A4E;

  font-family:
    "NuberNext Black",
    "NuberNext",
    Arial,
    sans-serif;

  font-size: clamp(32px, 5vw, 48px);
  font-weight: 900;
}

.linea-roja {
  width: 65px;
  height: 5px;

  background-color: #EB3135;

  border-radius: 10px;

  margin: 20px auto;
}

.descripcion {
  max-width: 650px;

  margin: 0 auto;

  color: #66666A;

  font-size: 15px;
  line-height: 1.7;
}

.productos-botones {
  width: 90%;
  max-width: 950px;

  margin: 50px auto 0;

  display: grid;
  grid-template-columns: repeat(2, 1fr);

  gap: 30px;
}

.producto-boton {
  position: relative;

  min-height: 260px;

  padding: 35px;

  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  background-color: white;
  color: #4A4A4E;

  text-decoration: none;

  border-radius: 20px;
  border: 1px solid #E0E0E0;

  box-shadow: 0 7px 20px rgba(0, 0, 0, 0.08);

  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease,
    background-color 0.3s ease,
    color 0.3s ease;
}

.producto-boton:hover {
  transform: translateY(-7px);

  background-color: #EB3135;
  color: white;

  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.16);
}

.producto-icono {
  width: 60px;
  height: 60px;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-bottom: 22px;

  border-radius: 15px;

  background-color: #EDEDED;

  font-size: 28px;

  transition: background-color 0.3s ease;
}

.producto-boton:hover .producto-icono {
  background-color: rgba(255, 255, 255, 0.18);
}

.producto-titulo {
  font-family:
    "NuberNext Black",
    "NuberNext",
    Arial,
    sans-serif;

  font-size: 28px;
  font-weight: 900;

  text-transform: uppercase;
  letter-spacing: 1px;
}

.producto-descripcion {
  margin-top: 10px;

  font-family: Arial, Helvetica, sans-serif;

  font-size: 14px;
  line-height: 1.5;

  color: #66666A;

  transition: color 0.3s ease;
}

.producto-boton:hover .producto-descripcion {
  color: white;
}

.producto-flecha {
  position: absolute;

  right: 25px;
  bottom: 22px;

  width: 42px;
  height: 42px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;

  background-color: #EB3135;
  color: white;

  font-size: 23px;

  transition:
    transform 0.3s ease,
    background-color 0.3s ease,
    color 0.3s ease;
}

.producto-boton:hover .producto-flecha {
  background-color: white;
  color: #EB3135;

  transform: translateX(5px);
}

.volver {
  position: fixed;

  left: 30px;
  bottom: 25px;

  color: white;
  background-color: #EB3135;

  text-decoration: none;

  font-family: 'Poppins', sans-serif;

  font-size: 15px;
  font-weight: 600;

  padding: 12px 20px;

  border-radius: 10px;

  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);

  transition: all 0.3s ease;

  z-index: 10;
}

.volver:hover {
  background-color: #4A4A4E;
  transform: translateX(-4px);
}

@media (max-width: 700px) {

  .productos-botones {
    width: 95%;

    grid-template-columns: 1fr;

    gap: 20px;

    margin-top: 40px;
  }

  .producto-boton {
    min-height: 230px;
    padding: 30px;
  }

  .producto-titulo {
    font-size: 25px;
  }

  .producto-descripcion {
    font-size: 14px;
  }

}

@media (max-width: 600px) {

  .contenido {
    padding: 40px 20px 90px;
  }

  .contenido h1 {
    font-size: 34px;
  }

  .descripcion {
    font-size: 14px;
  }

  .producto-boton {
    border-radius: 17px;
  }

  .producto-icono {
    width: 55px;
    height: 55px;
    font-size: 25px;
  }

  .producto-titulo {
    font-size: 23px;
  }

  .producto-flecha {
    right: 20px;
    bottom: 20px;
  }

  .volver {
    left: 20px;
    bottom: 20px;

    font-size: 14px;
    padding: 10px 16px;
  }

}

</style>