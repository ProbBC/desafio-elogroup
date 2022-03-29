<!--
    Componente referente a lista de leads do Painel de Leads
-->

<template>
    <v-row>
    <v-col cols="4">
        <v-simple-table>
            <template>
                <thead>
                    <tr>
                        <th>
                            <h3>Cliente em Potencial</h3>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <draggable class="list-group" id="1" :list="leadsPanel.potentialClients" group="leads" :move="checkChange" @change="updateLocalStorage">
                        <div
                        class="list-group-item"
                        v-for="(element) in leadsPanel.potentialClients"
                        :key="element.name"
                        >
                        <tr>
                            <td>
                                <v-icon>
                                    mdi-drag
                                </v-icon>
                                {{ element.name }}
                            </td>
                        </tr>
                        </div>
                    </draggable>                    
                </tbody>
            </template>
        </v-simple-table>
    </v-col>

    <v-col cols="4">
        <v-simple-table>
            <template>
                <thead>
                    <tr>
                        <th>
                            <h3>Dados confirmados</h3>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <draggable class="list-group" id="2" :list="leadsPanel.confirmedData" group="leads" :move="checkChange" @change="updateLocalStorage">
                        <div
                        class="list-group-item"
                        v-for="(element) in leadsPanel.confirmedData"
                        :key="element.name"
                        >
                        <tr>
                            <td>
                                <v-icon>
                                    mdi-drag
                                </v-icon>
                                {{ element.name }}
                            </td>
                        </tr>
                        </div>
                    </draggable>                    
                </tbody>
            </template>
        </v-simple-table>
    </v-col>

    <v-col cols="4">
        <v-simple-table>
            <template>
                <thead>
                    <tr>
                        <th>
                            <h3>Reunião agendada</h3>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <draggable class="list-group" id="3" :list="leadsPanel.scheduledMeetings" group="leads" :move="checkChange" @change="updateLocalStorage">
                        <div
                        class="list-group-item"
                        v-for="(element) in leadsPanel.scheduledMeetings"
                        :key="element.name"
                        >
                        <tr>
                            <td>
                                <v-icon>
                                    mdi-drag
                                </v-icon>
                                {{ element.name }}
                            </td>
                        </tr>
                        </div>
                    </draggable>                    
                </tbody>
            </template>
        </v-simple-table>
    </v-col>
    </v-row>
</template>

<script>
import draggable from "vuedraggable";
export default {
  name: "LeadsPanelList",
  display: "Two Lists",
  order: 1,
  components: {
    draggable
  },
  data() {
    return {
      leadsPanel: {
        potentialClients: [],
        confirmedData: [],
        scheduledMeetings: []
      }      
    };
  },
  mounted() {
      // Carrega o painel do local storage, se existir. Se não, gera um e salva
      if (localStorage.leadsPanel) {
          this.leadsPanel = JSON.parse(localStorage.leadsPanel)
      } else {
          let leads = JSON.parse(localStorage.leads)
          this.leadsPanel.potentialClients = leads
          localStorage.setItem('leadsPanel', JSON.stringify(this.leadsPanel))
      }
  },
  methods: {
      checkChange(evt) {
          // Checa se o elemento está sendo arrastado para a próxima lista ou para a atual
          // (nunca deve pular uma)
          if (parseInt(evt.to.id) - parseInt(evt.from.id) === 1 || evt.to.id === evt.from.id) {
            return true
          }
          return false
      },
      updateLocalStorage() {
        // Salva o painel no local storage do navegador
        let leadsPanel = JSON.stringify(this.leadsPanel)
        localStorage.setItem('leadsPanel', leadsPanel)
      }
  }
};
</script>

<style scoped>
    td {
        background-color: #EEEEEE;
        border: 1px solid #E0E0E0;
        padding: 8px;
        width: 800px;
        text-align: center;
    }
    td:hover {
        cursor: pointer;
    }
    col {
        border: 2px solid black;
    }
    v-icon {
        position: relative;
        left: 0px;
    }

</style>