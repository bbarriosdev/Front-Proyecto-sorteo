<template>
    <div class="min-h-screen bg-gradient-to-br from-red-100 to-pink-100 flex items-center justify-center p-4">
      <div class="max-w-md w-full bg-white rounded-xl shadow-2xl overflow-hidden">
        <div class="p-8 text-center">
          <div class="relative mb-6">
            <svg class="w-20 h-20 mx-auto text-red-500 animate-pulse" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd"></path>
            </svg>
            <div class="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <svg class="w-12 h-12 text-pink-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
            </div>
          </div>
          <h2 class="text-3xl font-bold text-red-600 mb-4">¡Felicitaciones!</h2>
          <p class="text-lg text-gray-700 mb-6">
            Ya estás registrado para participar en el sorteo de
            <span class="font-semibold text-red-500">2 viajes con hospedaje</span>
            para el día de San Valentín.
          </p>
          <div class="flex justify-center space-x-4 mb-6">
            <svg class="w-8 h-8 text-pink-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"></path>
            </svg>
            <svg class="w-8 h-8 text-red-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path>
            </svg>
          </div>
          <div class="flex justify-center space-x-2">
            <span class="inline-block w-2 h-2 bg-red-400 rounded-full animate-bounce"></span>
            <span class="inline-block w-2 h-2 bg-pink-400 rounded-full animate-bounce" style="animation-delay: 0.2s"></span>
            <span class="inline-block w-2 h-2 bg-red-400 rounded-full animate-bounce" style="animation-delay: 0.4s"></span>
          </div>
        </div>
        <div class="bg-pink-100 p-4">
          <p class="text-sm text-center text-pink-600">
            ¡Buena suerte y feliz San Valentín!
          </p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  // No se requiere lógica adicional para este componente
  </script>
  
  <style scoped>
  @keyframes float {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
    100% { transform: translateY(0px); }
  }
  
  .animate-float {
    animation: float 3s ease-in-out infinite;
  }
  .animate-bounce {
    animation: bounce 1s ease-in-out infinite;
  }
  
  @keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
  }
  </style>
  
  