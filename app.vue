<template>
  <div class="w-full flex justify-center p-10">
    <CustomerForm />
  </div>
</template>

<script setup>
const { $httpClient } = useNuxtApp()
$httpClient.get('/sanctum/csrf-cookie')
$httpClient.post('/login', {
  "email": "admin@letsgrow.com.br",
  "password": "12345678"
})
</script>
