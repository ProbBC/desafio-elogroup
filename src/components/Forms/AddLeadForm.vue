<!--
    Form para adicionar Leads.
-->
<template>
    <div>
    <v-row>
        <div v-if="alerts.length > 0">
            <div class="list-group-item" v-for="alert in alerts" :key="alerts.indexOf(alert)">
                <v-alert
                    :value="true"
                    :type=alert.type
                >
                    {{ alert.text }}
                </v-alert>
            </div>
        </div>
    </v-row>
    <v-row class="d-flex justify-center">        
        <v-col cols="6">
            <v-form>
                <v-text-field
                    v-model="form.name"
                    label="Nome"
                    required
                ></v-text-field>
                <v-text-field
                    v-model="form.phone"
                    label="Telefone"
                    required
                ></v-text-field>
                <v-text-field
                    v-model="form.email"
                    label="Email"
                    :rules="emailRules"
                    required
                ></v-text-field>
            </v-form>
        </v-col>
        <v-col cols="6">
            <v-form>
                <v-checkbox
                    v-model="form.rpa"
                    label="RPA"
                ></v-checkbox>
                <v-checkbox
                    v-model="form.digitalProduct"
                    label="Produto Digital"
                ></v-checkbox>
                <v-checkbox
                    v-model="form.analytics"
                    label="Analytics"
                ></v-checkbox>
                <v-checkbox
                    v-model="form.BPM"
                    label="BPM"
                ></v-checkbox>
                <v-btn
                    color="primary"
                    class="justify-space-between"
                    @click="addLead"
                >                    
                    Salvar
                </v-btn>      
            </v-form>
        </v-col>
    </v-row>
    </div>
    
</template>

<script>
export default {
    name: 'AddLeadForm',
    data: () => ({
        form: {
            name: '',
            phone: '',
            email: '',
            RPA: true,
            digitalProduct: true,
            analytics: true,
            BPM: true
        },
        emailRules: [
            value => !!value || 'O e-mail é obrigatório',
            value => /.+@.+\..+/.test(value) || 'O e-mail não é válido',                
        ],
        alerts: []
    }),
    methods: {
        addLead() {
            // Salva o lead e cria um leadPanel no localStorage
            let leads = []
            if (localStorage.leads) {
                let saved = JSON.parse(localStorage.leads)
                if (Array.isArray(saved)) {
                    leads = saved                    
                } else {
                    leads.push(saved)
                }
            }
            let lead = this.form            
            leads.push(lead)
            leads = JSON.stringify(leads)
            localStorage.setItem('leads', leads)

            if (localStorage.leadsPanel) {
                let leadsPanel = JSON.parse(localStorage.leadsPanel)
                leadsPanel.potentialClients.push(lead)
                localStorage.setItem('leadsPanel', JSON.stringify(leadsPanel))
            }

            this.alerts.push({
                text: 'Lead adicionado.',
                type: 'success'
            })
        }
    }
}
</script>