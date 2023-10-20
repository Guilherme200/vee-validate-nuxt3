<template>
  <FormData @submit="onSubmit" @isValid="(isValid) => isValidForm = isValid">
    <FormInput
      label="Código externo:"
      type="text"
      name="form.accountCustomer.externalCode"
      v-model="form.accountCustomer.externalCode"
      :error="errorData?.['accountCustomer.externalCode']"
      required
      placeholder="Insira seu código externo"
      rules="required|min:3" />

    <input v-model="on" type="checkbox" class="toggle" checked />

    <FormInput
      v-if="on"
      label="Novo campo:"
      type="text"
      name="form.accountCustomer.newField"
      v-model="form.accountCustomer.newField"
      :error="errorData?.['accountCustomer.newField']"
      required
      placeholder="Insira seu novo campo"
      rules="required|min:3" />

    <FormButton
      :loading="loading"
      :disabled="!isValidForm"
      type="submit"
      label="Salvar"
      class="btn btn-block btn-primary mt-3" />
  </FormData>
</template>

<script setup lang="ts">
const loading = ref(false)
const errorData = ref(null)
const isValidForm = ref(null)

const on = ref(false)

const form = ref({
  accountCustomer: {
    email: null,
    phone: null,
    cellphone: null,
    internalCode: null,
    externalCode: null,
    newField: null
  }
})

async function onSubmit(submit: any) {
  loading.value = true
  console.log(submit.form)
  loading.value = false
}
</script>