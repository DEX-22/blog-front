<template>
  <div class="bg-gray-100 dark:bg-gray-900">
  <!-- Contenedor principal -->
  <div class="container">
    <!-- Encabezado -->
    <header class="flex items-center justify-between mb-8">
      <h1 class="text-4xl font-bold">Mi Sitio Web</h1>
      <button class="button">Botón</button>
    </header>

    <!-- Contenido principal -->
    <main>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Tarjeta 1 -->
        <div class="bg-white shadow rounded p-4">
          <h2 class="text-lg font-bold mb-2">Tarjeta 1</h2>
          <p>Contenido de la tarjeta 1</p>
        </div>

        <!-- Tarjeta 2 -->
        <div class="bg-white shadow rounded p-4">
          <h2 class="text-lg font-bold mb-2">Tarjeta 2</h2>
          <p>Contenido de la tarjeta 2</p>
        </div>

        <!-- Tarjeta 3 -->
        <div class="bg-white shadow rounded p-4">
          <h2 class="text-lg font-bold mb-2">Tarjeta 3</h2>
          <p>Contenido de la tarjeta 3</p>
        </div>

        <!-- Más tarjetas... -->
      </div>
    </main>

    <!-- Pie de página -->
    <footer class="mt-8 py-4 border-t">
      <p>&copy; 2023 Mi Sitio Web. Todos los derechos reservados.</p>
    </footer>
  </div>
</div>
</template>
<style scoped>
 
</style>