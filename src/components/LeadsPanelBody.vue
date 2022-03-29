<!--
    Componente referente ao corpo da página de Painel de Leads
    Utiliza o componente LeadsPanelList para mostrar o painel
-->

<template>
    <div>
        <v-row>
            <v-btn
                color="primary"
                to="add-lead"
            >
                Novo Lead (+)
            </v-btn>
        </v-row>
        <v-row>
            <LeadsPanelList />
        </v-row>
    </div>
</template>

<script>
import LeadsPanelList from './LeadsPanelList.vue'

export default {
    name: 'LeadsPanelBody',
    components: {
        LeadsPanelList
    },
    data: () => ({
        leads: localStorage.leads
    })
}
</script>

<style scoped>
    div {
        margin-bottom: 40px
    }
</style>