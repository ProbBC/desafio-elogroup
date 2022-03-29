<!--
    Componente referente ao TopBar com o menu de navegação das páginas
-->

<template>
    <div>
        <v-navigation-drawer
        v-model="drawer"
        app
        >
            <v-list
                nav
                dense
            >
                <v-list-item-group
                v-model="group"
                active-class="primary--text text--accent-4"
                >
                <v-list-item
                    v-for="(item, i) in items"
                    :key="i"
                    :to="item.path"
                    >
                        <v-list-item-title v-text="item.text"></v-list-item-title>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
        </v-navigation-drawer>
        <v-app-bar app>
            <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>      
            <v-toolbar-title>Desafio EloGroup</v-toolbar-title>
        </v-app-bar>
    </div>
</template>

<script>
  export default {
    name: 'TopBar',
    data: () => ({
        drawer: null,
        group: null,
        items: [
            {text: 'Novo Lead', path: '/add-lead'},
            {text: 'Painel de Leads', path: '/leads-panel'},
        ]
    }),
    watch: {
      group () {
        // Carrega a página com o menu fechado por padrão
        this.drawer = false
      },
    },
  }
</script>