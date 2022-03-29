<!--
    Form de Registro de Usuário
-->

<template>
    <v-form class="text-center grey lighten-3">

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
    <v-text-field
        v-model="form.username"
        label="Usuário"
        :rules="usernameRules"
        required
    ></v-text-field>

    <v-text-field
        v-model="form.password"
        label="Senha"
        type="password"
        :rules="passwordRules"
        required
    ></v-text-field>

    <v-text-field
        v-model="form.confirmPassword"
        label="Confirme a senha"
        type="password"
        :rules="confirmPasswordRules"
        required
    ></v-text-field>

    <v-btn
        color="success"
        class="justify-space-between"
        @click="register"
    >
        Registrar
    </v-btn>
</v-form>

</template>

<script>
export default {
    name: 'RegisterForm',
    data: () => ({
            form: {
                username: '',
                password: '',
                confirmPassword: '',
            },            
            usernameRules: [
                value => !!value || 'O nome de usuário é obrigatório',
                value => (value && value.length >= 3) || 'O nome de usuário deve ter no mínimo 3 caracteres',
                value => (value && value.length <= 10) || 'O nome de usuário deve ter menos do que 10 caracteres'
            ],
            passwordRules: [
                value => !!value || 'A senha é obrigatória',
                value => /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(value) || 'A senha deve ter no mínimo 8 caracteres, um caracter especial, um caracter número e um caracter alfanumérico'
            ],
            confirmPasswordRules: [
                value => !!value || 'A confirmação de senha é obrigatória',
            ],
            alerts : []
    }),
    methods: {
        register() {
            /**
             * Faz as checagens de regras e registra o usuário no localStorage
             */
            if (this.form.password === this.form.confirmPassword) {                
                let users = []
                if (localStorage.users) {
                    let saved = JSON.parse(localStorage.users)
                    if (Array.isArray(saved)) {
                        users = saved                    
                    } else {
                        users.push(saved)
                    }
                }
                if (users.find(user => user.username === this.form.username)) {
                    this.errors.push('O usuário já existe.')
                    return;
                }
                users.push(this.form)
                users = JSON.stringify(users)
                localStorage.setItem('users', users)
                this.alerts.push({
                    text: 'Usuário foi cadastrado.',
                    type: 'success'
                })
            } else {
                this.alerts.push({
                    text: 'As senhas informadas não são identicas.',
                    type: 'error'
                });
            }            
        }
    }
}
</script>