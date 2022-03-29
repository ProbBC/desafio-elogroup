<!--
    Componente referente ao corpo da página de Adicionar Leads.
    Implementa o form AddLeadForm
-->

<template>
    <AddLeadForm />
</template>

<script>
import AddLeadForm from './Forms/AddLeadForm.vue'
export default {
    name: 'AddLeadBody',
    components: {
        AddLeadForm
    }
}
</script>