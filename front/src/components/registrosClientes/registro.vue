<template>
    <div class="min-h-screen bg-pink-100 flex items-center justify-center p-4">
      <div class="max-w-md w-full bg-white rounded-lg shadow-xl overflow-hidden">
        <div class="bg-pink-500 text-white px-6 py-4">
          <h2 class="text-3xl font-bold text-center">Concurso de San Valentín</h2>
          <p class="text-center mt-2">¡Gana 2 noches todo incluido en un hotel romántico!</p>
        </div>
        <form @submit.prevent="submitForm" class="p-6 space-y-6">
          <div class="space-y-2">
            <label for="name" class="text-sm font-medium text-gray-700">Nombre completo</label>
            <input
              id="name"
              v-model="form.name"
              type="text"
              required
              class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
              placeholder="Juan Pérez"
            />
          </div>
          <div class="space-y-2">
            <label for="email" class="text-sm font-medium text-gray-700">Correo electrónico</label>
            <input
              id="email"
              v-model="form.email"
              type="email"
              required
              class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
              placeholder="juan@ejemplo.com"
            />
          </div>
          <div class="space-y-2">
            <label for="story" class="text-sm font-medium text-gray-700">Tu historia de amor (máx. 500 caracteres)</label>
            <textarea
              id="story"
              v-model="form.story"
              required
              maxlength="500"
              rows="4"
              class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
              placeholder="Cuéntanos tu historia de amor más romántica..."
            ></textarea>
            <p class="text-sm text-gray-500 text-right">{{ form.story.length }}/500</p>
          </div>
          <div class="flex items-center">
            <input
              id="terms"
              v-model="form.terms"
              type="checkbox"
              required
              class="h-4 w-4 text-pink-600 focus:ring-pink-500 border-gray-300 rounded"
            />
            <label for="terms" class="ml-2 block text-sm text-gray-900">
              Acepto los términos y condiciones
            </label>
          </div>
          <div>
            <button
              type="submit"
              class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
            >
              Registrarse
            </button>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios'; 
  
  export default {
    name: 'ValentineContestForm',
    data() {
      return {
        form: {
          name: '',
          email: '',
          story: '',
          terms: false
        }
      };
    },
    methods: {
    async submitForm() {
      
        console.log('Datos que se enviarán:', {
            correo: this.form.email,
            nombre: this.form.name,
      
        });

        try {
         
            const response = await axios.post('http://127.0.0.1:8000/api/personas/', {
                correo: this.form.email,
                nombre: this.form.name,
          
            });

          
            alert('¡Gracias por participar! Podrías ganar 2 noches todo incluido en un hotel romántico.');
            console.log('Formulario enviado:', response.data);

            this.form.name = '';
            this.form.email = '';
            this.form.story = '';
            this.form.terms = false;
            
        } catch (error) {
            // Manejar el error
            if (error.response && error.response.data) {
                alert('Error: ' + Object.values(error.response.data).join(', '));
            } else {
                alert('Ocurrió un error al enviar el formulario.');
            }
        }
    }


}


  };
  </script>
  