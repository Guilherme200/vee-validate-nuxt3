<template>
  <button
    v-bind="$attrs"
    class="btn btn-block btn-primary mt-3">
    <span v-if="loading" class="loading loading-spinner"></span>
    {{ label }}
  </button>
</template>

<script setup>
defineProps({
  label: String,
  loading: {
    type: Boolean,
    default: true
  }
});
</script>