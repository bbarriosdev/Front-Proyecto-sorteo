<template>
  <div class="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-md">
      <div>
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Completa tu registro
        </h2>
      </div>
      <form class="mt-8 space-y-6" @submit.prevent="submitPassword">
        <div>
          <label for="password" class="sr-only">Nueva contraseña</label>
          <input
            id="password"
            v-model="password"
            name="password"
            type="password"
            required
            class="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Ingresa tu nueva contraseña"
          />
        </div>
        <div>
          <button
            type="submit"
            class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Registrar contraseña
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import axios from 'axios'

const password = ref('')
const route = useRoute()
const router = useRouter()


const token = route.params.token
console.log("Token capturado:", token) 

const submitPassword = async () => {
  try {
    const url = 'http://127.0.0.1:8000/api/complete-registration/';
    const data = {
      token: token,
      password: password.value,
    };

    console.log("URL completa:", url);
    console.log("Datos enviados:", data);

    const response = await axios.post(url, data);

  
    alert('Tu contraseña ha sido registrada correctamente.');
    
    router.push('/mensaje');
  } catch (error) {
    console.error("Error al registrar la contraseña:", error);

  
    if (error.response && error.response.status === 400) {
      alert('El cliente ya está registrado.');
    } else {
      alert('Hubo un error al registrar la contraseña.');
    }
  }
}


</script>
