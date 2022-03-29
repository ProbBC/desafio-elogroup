<!--
    Componente BodyHeader referente ao Header comum das páginas
    (Logo e título da página atual)
 -->
<template>
    <div>
        <v-row class="d-flex justify-center align-center">
            <v-col cols="6">
                <v-img :src="require('@/assets/img/logo.svg')" id="elogroup-logo"></v-img>
            </v-col>
            <v-col cols="6">
                <h2>{{ this.$route.meta.title }}</h2>
            </v-col>
        </v-row>
    </div>
</template>

<script>
export default {
    name: 'BodyHeader'
}
</script>

<style scoped>
    div {
        margin-bottom: 20px;
    }
</style>