<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const archivoSeleccionado = ref(null)
const vistaPrevia = ref(null)
const subiendo = ref(false)
const legajoUsuario = ref('')

onMounted(() => {
  const legajo = localStorage.getItem('legajo')

  if (legajo) {
    legajoUsuario.value = legajo
    console.log('LEGAJO DEL USUARIO:', legajo)
  } else {
    alert('No se encontró una sesión activa. Volvé a iniciar sesión.')
    router.push('/Iniciosesion')
  }
})

const seleccionarArchivo = (event) => {
  const archivo = event.target.files[0]

  if (!archivo) return

  const formatosPermitidos = [
    'application/pdf',
    'image/jpeg',
    'image/png'
  ]

  if (!formatosPermitidos.includes(archivo.type)) {
    alert('Solo se permiten archivos PDF, JPG, JPEG o PNG.')

    event.target.value = ''
    archivoSeleccionado.value = null
    vistaPrevia.value = null

    return
  }

  if (archivo.size > 5 * 1024 * 1024) {
    alert('El archivo no puede superar los 5 MB.')

    event.target.value = ''
    archivoSeleccionado.value = null
    vistaPrevia.value = null

    return
  }

  archivoSeleccionado.value = archivo

  if (archivo.type.startsWith('image/')) {
    vistaPrevia.value = URL.createObjectURL(archivo)
  } else {
    vistaPrevia.value = null
  }
}

const eliminarArchivo = () => {
  archivoSeleccionado.value = null
  vistaPrevia.value = null

  const input = document.getElementById('certificado-input')

  if (input) {
    input.value = ''
  }
}

const subirCertificado = async () => {
  if (!archivoSeleccionado.value) {
    alert('Primero seleccioná un certificado.')
    return
  }

  const legajo = localStorage.getItem('legajo')

  console.log('LEGAJO QUE SE VA A ENVIAR:', legajo)

  if (!legajo) {
    alert('No se encontró el legajo del usuario. Volvé a iniciar sesión.')
    router.push('/Iniciosesion')
    return
  }

  const formulario = new FormData()

  formulario.append('legajo', legajo)
  formulario.append('archivo', archivoSeleccionado.value)

  subiendo.value = true

  try {
    const respuesta = await fetch(
      'http://localhost/nuevaapi/subir_certificado.php',
      {
        method: 'POST',
        body: formulario
      }
    )

    console.log('ESTADO DEL SERVIDOR:', respuesta.status)

    const texto = await respuesta.text()

    console.log('RESPUESTA DEL PHP:', texto)

    let datos

    try {
      datos = JSON.parse(texto)
    } catch (error) {
      console.error('RESPUESTA NO ES JSON:', texto)

      alert(
        'El servidor respondió de una forma incorrecta.\n\n' +
        'Verificá el archivo subir_certificado.php.'
      )

      return
    }

    console.log('DATOS PROCESADOS:', datos)

    if (datos.success || datos.status === 'success') {
      alert('Certificado subido correctamente.')

      archivoSeleccionado.value = null
      vistaPrevia.value = null

      const input = document.getElementById('certificado-input')

      if (input) {
        input.value = ''
      }
    } else {
      alert(
        datos.message ||
        datos.mensaje ||
        'No se pudo subir el certificado.'
      )
    }

  } catch (error) {
    console.error('ERROR COMPLETO:', error)

    alert(
      'Error al conectar con el servidor.\n\n' +
      'Verificá que Apache esté iniciado en XAMPP y que exista:\n' +
      'http://localhost/nuevaapi/subir_certificado.php'
    )

  } finally {
    subiendo.value = false
  }
}

const volverPerfil = () => {
  router.push('/Perfil')
}
</script>

<template>
  <div class="certificados-page">

    <div class="certificados-contenedor">

      <div class="encabezado">

        <span class="etiqueta">
          FRONTERA LIVING
        </span>

        <h2>
          CERTIFICADOS MÉDICOS
        </h2>

        <div class="linea-roja"></div>

        <p>
          Cargá tu certificado médico de manera rápida y sencilla.
        </p>

      </div>

      <div class="certificado-card">

        <div class="card-header">

          <div class="icono-certificado">
            +
          </div>

          <div>
            <h2>
              Nuevo certificado
            </h2>

            <p>
              Seleccioná el archivo correspondiente.
            </p>
          </div>

        </div>

        <div class="usuario-activo">

          <span>
            Usuario
          </span>

          <strong>
            Legajo {{ legajoUsuario }}
          </strong>

        </div>

        <div class="formulario">

          <div class="archivo-seccion">

            <label
              for="certificado-input"
              class="btn-seleccionar"
            >

              <span class="icono-subir">
                ↑
              </span>

              Seleccionar certificado

            </label>

            <input
              id="certificado-input"
              type="file"
              accept=".pdf,.jpg,.jpeg,.png"
              @change="seleccionarArchivo"
            />

            <p class="formatos">
              PDF, JPG, JPEG o PNG · Máximo 5 MB
            </p>

          </div>

          <div
            v-if="archivoSeleccionado"
            class="archivo-card"
          >

            <div class="archivo-icono">

              {{
                archivoSeleccionado.type === 'application/pdf'
                  ? 'PDF'
                  : 'IMG'
              }}

            </div>

            <div class="archivo-datos">

              <strong>
                {{ archivoSeleccionado.name }}
              </strong>

              <span>
                {{
                  (archivoSeleccionado.size / 1024 / 1024).toFixed(2)
                }}
                MB
              </span>

            </div>

            <button
              type="button"
              class="btn-eliminar"
              @click="eliminarArchivo"
            >
              ×
            </button>

          </div>

          <div
            v-if="vistaPrevia"
            class="vista-previa"
          >

            <div class="vista-titulo">

              <span></span>

              <h3>
                Vista previa
              </h3>

            </div>

            <div class="imagen-preview-contenedor">

              <img
                :src="vistaPrevia"
                alt="Vista previa del certificado"
                class="imagen-preview"
              />

            </div>

          </div>

          <button
            type="button"
            class="btn-subir"
            @click="subirCertificado"
            :disabled="subiendo"
          >

            <span v-if="!subiendo">
              ↑
            </span>

            {{
              subiendo
                ? 'SUBIENDO CERTIFICADO...'
                : 'SUBIR CERTIFICADO'
            }}

          </button>

        </div>

      </div>

      <div class="informacion">

        <div class="informacion-icono">
          i
        </div>

        <div>

          <strong>
            Importante
          </strong>

          <p>
            Verificá que el certificado sea legible antes de enviarlo.
          </p>

        </div>

      </div>

      <button
        type="button"
        class="btn-volver"
        @click="volverPerfil"
      >
        ← Volver al perfil
      </button>

    </div>

  </div>
</template>

<style scoped>
* {
  box-sizing: border-box;
}

.certificados-page {
  width: 100%;
  min-height: 100vh;
  margin: 0;
  padding: 55px 20px 110px;
  background-color: #EDEDED;
  color: #4A4A4E;
  font-family: Arial, Helvetica, sans-serif;
}

.certificados-contenedor {
  width: 100%;
  max-width: 950px;
  margin: 0 auto;
}
.certificados-page {
  min-height: 100vh;
  padding: 55px 20px 110px;
  background-color: #EDEDED;
  color: #4A4A4E;
  font-family: Arial, Helvetica, sans-serif;
}

.certificados-contenedor {
  width: 100%;
  max-width: 950px;
  margin: 0 auto;
}

.encabezado {
  text-align: center;
  margin-bottom: 40px;
}

.etiqueta {
  display: inline-block;
  margin-bottom: 10px;
  color: #EB3135;
  font-size: 12px;
  font-weight: bold;
  letter-spacing: 3px;
}

.encabezado h1 {
  margin: 0;
  color: #4A4A4E;
  font-family: "NuberNext Black", Arial, sans-serif;
  font-size: clamp(30px, 5vw, 46px);
  font-weight: 900;
}

.linea-roja {
  width: 65px;
  height: 5px;
  margin: 18px auto;
  border-radius: 10px;
  background-color: #EB3135;
}

.encabezado p {
  margin: 0;
  color: #4A4A4E;
  font-size: 15px;
}

.certificado-card {
  width: 100%;
  padding: 38px;
  background-color: white;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(74, 74, 78, 0.12);
  box-sizing: border-box;
}

.card-header {
  display: flex;
  align-items: center;
  gap: 18px;
  padding-bottom: 25px;
  margin-bottom: 20px;
  border-bottom: 1px solid #BDC0C3;
}

.icono-certificado {
  width: 58px;
  height: 58px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  border-radius: 16px;
  background-color: #EB3135;
  color: white;
  font-size: 30px;
  font-weight: bold;
}

.card-header h2 {
  margin: 0 0 5px;
  color: #4A4A4E;
  font-family: "NuberNext Black", Arial, sans-serif;
  font-size: 23px;
}

.card-header p {
  margin: 0;
  color: #BDC0C3;
  font-size: 14px;
}

.usuario-activo {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
  margin-bottom: 25px;
  padding: 14px 18px;
  border-radius: 10px;
  background-color: #EDEDED;
  border-left: 5px solid #EB3135;
}

.usuario-activo span {
  color: #4A4A4E;
  font-size: 13px;
}

.usuario-activo strong {
  color: #4A4A4E;
  font-size: 14px;
}

.archivo-seccion {
  margin-top: 5px;
  padding: 35px 30px;
  border: 2px dashed #BDC0C3;
  border-radius: 15px;
  background-color: #EDEDED;
  text-align: center;
}

input[type="file"] {
  display: none;
}

.btn-seleccionar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  min-height: 48px;
  padding: 12px 24px;
  border-radius: 10px;
  background-color: #4A4A4E;
  color: white;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.2s;
  box-sizing: border-box;
}

.btn-seleccionar:hover {
  background-color: #EB3135;
  transform: translateY(-2px);
}

.icono-subir {
  font-size: 20px;
}

.formatos {
  margin: 12px 0 0;
  color: #4A4A4E;
  font-size: 12px;
}

.archivo-card {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-top: 22px;
  padding: 15px;
  border-radius: 12px;
  background-color: #EDEDED;
  border: 1px solid #BDC0C3;
}

.archivo-icono {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  border-radius: 10px;
  background-color: #EB3135;
  color: white;
  font-size: 11px;
  font-weight: bold;
}

.archivo-datos {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.archivo-datos strong {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #4A4A4E;
  font-size: 14px;
}

.archivo-datos span {
  color: #BDC0C3;
  font-size: 12px;
}

.btn-eliminar {
  width: 35px;
  height: 35px;
  border: none;
  border-radius: 50%;
  background-color: #4A4A4E;
  color: white;
  font-size: 22px;
  cursor: pointer;
}

.btn-eliminar:hover {
  background-color: #EB3135;
}

.vista-previa {
  margin-top: 30px;
  padding-top: 25px;
  border-top: 1px solid #BDC0C3;
}

.vista-titulo {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 15px;
}

.vista-titulo span {
  width: 6px;
  height: 25px;
  border-radius: 5px;
  background-color: #EB3135;
}

.vista-titulo h3 {
  margin: 0;
  color: #4A4A4E;
  font-family: "NuberNext Black", Arial, sans-serif;
  font-size: 18px;
}

.imagen-preview-contenedor {
  width: 100%;
  padding: 15px;
  border-radius: 12px;
  background-color: #EDEDED;
  border: 1px solid #BDC0C3;
  text-align: center;
  box-sizing: border-box;
}

.imagen-preview {
  display: block;
  width: 100%;
  max-width: 600px;
  max-height: 500px;
  margin: 0 auto;
  object-fit: contain;
  border-radius: 8px;
}

.btn-subir {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 100%;
  min-height: 52px;
  margin-top: 30px;
  border: none;
  border-radius: 10px;
  background-color: #EB3135;
  color: white;
  font-family: "NuberNext Black", Arial, sans-serif;
  font-size: 14px;
  font-weight: 900;
  cursor: pointer;
  transition: 0.2s;
}

.btn-subir:hover {
  background-color: #4A4A4E;
  transform: translateY(-2px);
}

.btn-subir:disabled {
  background-color: #BDC0C3;
  cursor: not-allowed;
  transform: none;
}

.informacion {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-top: 22px;
  padding: 18px 20px;
  border-radius: 12px;
  background-color: #4A4A4E;
  color: white;
}

.informacion-icono {
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  border-radius: 50%;
  background-color: #EB3135;
  font-weight: bold;
}

.informacion strong {
  display: block;
  margin-bottom: 4px;
  font-family: "NuberNext Black", Arial, sans-serif;
  font-size: 14px;
}

.informacion p {
  margin: 0;
  color: #EDEDED;
  font-size: 13px;
}

.btn-volver {
  position: fixed;
  right: 25px;
  bottom: 25px;
  z-index: 100;
  padding: 11px 19px;
  border: none;
  border-radius: 9px;
  background-color: #EB3135;
  color: white;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 0 5px 15px rgba(74, 74, 78, 0.18);
}

.btn-volver:hover {
  background-color: #4A4A4E;
}

@media (max-width: 700px) {
  .certificados-page {
    padding: 35px 15px 100px;
  }

  .certificado-card {
    padding: 25px 20px;
  }

  .archivo-seccion {
    padding: 25px 15px;
  }

  .usuario-activo {
    align-items: flex-start;
    flex-direction: column;
    gap: 5px;
  }

  .btn-volver {
    left: 15px;
    right: 15px;
    bottom: 15px;
  }
}

@media (max-width: 450px) {
  .certificado-card {
    padding: 22px 15px;
  }

  .btn-seleccionar {
    width: 100%;
  }

  .archivo-card {
    gap: 10px;
  }
}
</style>