<template>
  <div class="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-md">
      <div>
        <h1 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Bienvenido al Panel de Administrador
        </h1>
        <p class="mt-2 text-center text-sm text-gray-600">
          Acceso autorizado
        </p>
      </div>
      
      <div class="mt-8 space-y-6">
        <button
          @click="obtenerGanador"
          class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          <span class="absolute left-0 inset-y-0 flex items-center pl-3">
            <TrophyIcon class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
          </span>
          Seleccionar Ganador Aleatorio
        </button>

      
        <div v-if="ganador" class="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 rounded" role="alert">
          <p class="font-bold">El ganador es:</p>
          <p>{{ ganador.nombre }}</p>
        </div>

        
        <div v-if="error" class="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded" role="alert">
          <p class="font-bold">Error:</p>
          <p>{{ error }}</p>
        </div>

       
        <button
          @click="logout"
          class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
        >
          <span class="absolute left-0 inset-y-0 flex items-center pl-3">
            <LogOutIcon class="h-5 w-5 text-red-500 group-hover:text-red-400" aria-hidden="true" />
          </span>
          Cerrar Sesión
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { TrophyIcon, LogOutIcon } from 'lucide-vue-next';

export default {
  components: {
    TrophyIcon,
    LogOutIcon
  },
  data() {
    return {
      ganador: null,
      error: null,
    };
  },
  methods: {
    async obtenerGanador() {
      try {
      
        const response = await axios.get("http://localhost:8000/api/sorteo/ganador/");
        this.ganador = response.data.ganador;
        this.error = null; 
      } catch (error) {
        if (error.response) {
          this.error = error.response.data.detail || "Hubo un problema al obtener el ganador.";
        } else {
          this.error = "Error en la conexión. Por favor, intenta más tarde.";
        }
      }
    },

    logout() {
   
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      this.$router.push("/login"); 
    },
  },
};
</script>