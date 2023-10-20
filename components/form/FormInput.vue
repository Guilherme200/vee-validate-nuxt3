<template>
  <div class="form-control w-full max-w-xs">
    <label class="label-text my-2 mx-1">
      {{ label }}
      <span class="text-error" v-if="required">*</span>
    </label>
    <input v-model="value" v-bind="$attrs" :class="{'input-error': error}" class="input input-bordered w-full max-w-xs" />
    <span class="label-text-alt text-error mt-2 mx-1">{{ error }}</span>
  </div>
</template>
<script setup>
import {useField} from 'vee-validate';

const props = defineProps({
  label: String,
  name: String,
  error: String | null,
  rules: String | Object,
  required: {
    type: Boolean,
    default: false
  },
  modelValue: {
    required: true
  },
});

const error = ref(null)
const {value, errorMessage} = useField(() => props.name, props.rules, {
  syncVModel: true,
});

watch(errorMessage, (payload) => error.value = payload)
watch(() => props.error, (payload) => error.value = payload)
</script>