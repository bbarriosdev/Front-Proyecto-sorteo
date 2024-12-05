<template>
  <div class="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8">
      <div>
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Inicio de Sesión
        </h2>
      </div>
      <form class="mt-8 space-y-6" @submit.prevent="handleLogin">
        <input type="hidden" name="remember" value="true" />
        <div class="rounded-md shadow-sm -space-y-px">
          <div>
            <label for="username" class="sr-only">Usuario</label>
            <input
              id="username"
              name="username"
              type="text"
              required
              v-model="username"
              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Nombre de usuario"
            />
          </div>
          <div>
            <label for="password" class="sr-only">Contraseña</label>
            <input
              id="password"
              name="password"
              type="password"
              required
              v-model="password"
              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Contraseña"
            />
          </div>
        </div>

        <div>
          <button
            type="submit"
            class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <span class="absolute left-0 inset-y-0 flex items-center pl-3">
              <LockClosedIcon class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
            </span>
            Iniciar Sesión
          </button>
        </div>
      </form>
      <div v-if="error" class="mt-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
        <strong class="font-bold">Error:</strong>
        <span class="block sm:inline">{{ error }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      username: "",
      password: "",
      error: null,
    };
  },
  methods: {
    async handleLogin() {
      try {
        // Hacer la solicitud de inicio de sesión
        const response = await axios.post("http://localhost:8000/api/usuario/token/", {
          username: this.username,
          password: this.password,
        });

        // Almacenar los tokens en el almacenamiento local
        localStorage.setItem("accessToken", response.data.access);
        localStorage.setItem("refreshToken", response.data.refresh);

        // Redirigir al panel de administración
        this.$router.push("/admin-dashboard");
      } catch (error) {
        if (error.response) {
          // Si la respuesta es un error desde el servidor
          this.error = error.response.data.detail || "Credenciales incorrectas. Inténtalo de nuevo.";
        } else {
          this.error = "Error en la conexión. Por favor, intenta más tarde.";
        }
      }
    },
  },
  created() {
    // Limpiar los tokens si el usuario ya está autenticado
    if (localStorage.getItem("accessToken")) {
      this.$router.push("/admin-dashboard");
    }
  },
};
</script>

<style>
.login-container {
  max-width: 400px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  text-align: center;
}

.error {
  color: red;
  margin-top: 10px;
}
</style>


