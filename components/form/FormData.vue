<template>
  <form @submit.prevent="onSubmit">
    <slot />
  </form>
</template>

<script setup>
import {useForm} from 'vee-validate';

const emit = defineEmits(['submit', 'isValid'])

const {handleSubmit, meta} = useForm();

watch(meta, value => {
  emit('isValid', value.valid)
})
const onSubmit = handleSubmit((values) => {
  emit('submit', values)
});
</script>