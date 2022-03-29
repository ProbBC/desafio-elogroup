<!--
    Form de Login do App
-->
<template>
    <v-form class="text-center grey lighten-3">
        <div v-if="errors.length > 0">
            <div class="list-group-item" v-for="error in errors" :key="errors.indexOf(error)">
                <v-alert
                    :value="true"
                    type="error"
                >
                    {{ error }}
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
        <v-btn 
            color="primary"
            class="justify-space-between"
            @click="login"
        >
            Acessar
        </v-btn>
    </v-form>
</template>

<script>
    export default {
        name: 'LoginForm',
        data: () => ({
            form: {
                password: '',
                username: '',
            },
            usernameRules: [
                value => !!value || 'O nome é obrigatório',
                value => (value && value.length >= 3) || 'O nome deve ter no mínimo 3 caracteres',
                value => (value && value.length <= 10) || 'O nome deve ter menos do que 10 caracteres'
            ],
            emailRules: [
                value => !!value || 'O e-mail é obrigatório',
                value => /.+@.+\..+/.test(value) || 'O e-mail não é válido',                
            ],
            passwordRules: [
                value => !!value || 'A senha é obrigatória',
                value => (value && value.length >= 5) || 'A senha deve ter no mínimo 5 caracteres'
            ],
            errors: []
        }),
        methods: {
            login() {
                /** 
                 * Realiza o login do usuário, checando se os dados são válidos
                 * e correspondem no localStorage.
                 * Salva o usuário logado no item 'loggedUser' do localStorage
                 * */
                if (localStorage.length === 0) {
                    this.errors.push("Nenhum usuário registrado.")
                    return
                }
                let users = JSON.parse(localStorage.users)
                if (users) {
                    let user = users.find((user) => {
                        return user.username === this.form.username
                    })
                    if (user && user.password === this.form.password) {
                        localStorage.setItem('loggedUser', JSON.stringify(user))
                        this.$router.push("leads-panel")
                    } else {
                        this.errors.push("Dados incorretos.")
                    }
                }
            }
        }
    }
</script>

<style scoped>
    #login-page {
        margin-top: 10px;
    }
    #hcode-image {
        margin: 20px 0;
    }
</style>