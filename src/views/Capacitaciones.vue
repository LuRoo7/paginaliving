
<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="Recursos-page">

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

    <main class="contenido">
      
        <span class="etiqueta">
          FRONTERA LIVING
        </span>
      <h1>
        Recursos
      </h1>

      <div class="linea-roja"></div>

      <p class="descripcion">
        Accedé a información sobre nuestros productos y la maquinaria
        utilizada en Frontera Living.
      </p>

      <div class="recursos-botones">

        <RouterLink
          to="/Productos"
          class="recurso-boton"
        >

          <span class="recurso-icono">
            📦
          </span>

          <span class="recurso-titulo">
            Productos
          </span>

          <span class="recurso-descripcion">
            Conocé nuestros productos
          </span>

          <span class="recurso-flecha">
            →
          </span>

        </RouterLink>


        <RouterLink
          to="/Maquinaria"
          class="recurso-boton"
        >

          <span class="recurso-icono">
            ⚙️
          </span>

          <span class="recurso-titulo">
            Maquinaria
          </span>

          <span class="recurso-descripcion">
            Conocé nuestra maquinaria
          </span>

          <span class="recurso-flecha">
            →
          </span>

        </RouterLink>

      </div>

    </main>

  </div>
</template>

<style scoped>

.Recursos-page {
  min-height: 100vh;
  background-color: #EDEDED;
  color: #4A4A4E;
  font-family: Arial, Helvetica, sans-serif;
}

.barra-logo {
  width: 100%;
  min-height: 80px;
  background-color: #EB3135;
  display: flex;
  align-items: center;
  padding: 10px 40px;
  box-sizing: border-box;
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

.contenido {
  padding: 60px 40px 100px;
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


/* BOTONES DE RECURSOS */

.recursos-botones {
  width: 90%;
  max-width: 950px;
  margin: 50px auto 0;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
}

.recurso-boton {
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

.recurso-boton:hover {
  transform: translateY(-7px);

  background-color: #EB3135;
  color: white;

  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.16);
}


/* ICONO */

.recurso-icono {
  width: 60px;
  height: 60px;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-bottom: 22px;

  border-radius: 15px;

  background-color: #EDEDED;

  font-size: 28px;

  transition:
    background-color 0.3s ease;
}

.recurso-boton:hover .recurso-icono {
  background-color: rgba(255, 255, 255, 0.18);
}


/* TITULO */

.recurso-titulo {
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


/* DESCRIPCION */

.recurso-descripcion {
  margin-top: 10px;

  font-family: Arial, Helvetica, sans-serif;

  font-size: 14px;
  line-height: 1.5;

  color: #66666A;

  transition:
    color 0.3s ease;
}

.recurso-boton:hover .recurso-descripcion {
  color: white;
}


/* FLECHA */

.recurso-flecha {
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

.recurso-boton:hover .recurso-flecha {
  background-color: white;
  color: #EB3135;

  transform: translateX(5px);
}


/* TABLET */

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


/* CELULAR */

@media (max-width: 700px) {

  .recursos-botones {
    width: 95%;
    grid-template-columns: 1fr;
    gap: 20px;
    margin-top: 40px;
  }

  .recurso-boton {
    min-height: 230px;
    padding: 30px;
  }

  .recurso-titulo {
    font-size: 25px;
  }

  .recurso-descripcion {
    font-size: 14px;
  }

}


/* CELULAR PEQUEÑO */

@media (max-width: 600px) {

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

  .contenido {
    padding: 40px 20px 80px;
  }

  .contenido h1 {
    font-size: 34px;
  }

  .descripcion {
    font-size: 14px;
  }

  .recurso-boton {
    border-radius: 17px;
  }

  .recurso-icono {
    width: 55px;
    height: 55px;
    font-size: 25px;
  }

  .recurso-titulo {
    font-size: 23px;
  }

  .recurso-flecha {
    right: 20px;
    bottom: 20px;
  }

}

</style>