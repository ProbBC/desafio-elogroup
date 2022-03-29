<template>
    <div>
        <v-container class="grey lighten-3" id="login-page">
            <v-row class="d-flex justify-center">
                <v-col
                    cols="6"
                >
                    <v-img :src="require('@/assets/img/logo.svg')" id="elogroup-logo"></v-img>
                <v-tabs
                    fixed-tabs
                    background-color="blue-grey lighten-5"
                    color="black"
                    v-model="tabsForm"
                >
                    <v-tab
                    key="register"
                    >
                        Cadastrar
                    </v-tab>
                    <v-tab
                        key="login"
                    >
                        Fazer Login
                    </v-tab>

                </v-tabs>
                </v-col>
            </v-row>
            <v-row class="d-flex justify-center">
                <v-col cols="4">
                    <v-tabs-items
                        v-model="tabsForm"
                        cols="3"
                    >
                        <v-tab-item
                            key="register"
                        >
                            <RegisterForm />
                        </v-tab-item>
                        <v-tab-item
                            key="login"
                            active
                        >

                            <LoginForm />
                        </v-tab-item>
                    </v-tabs-items>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
import LoginForm from '../components/Forms/LoginForm.vue'
import RegisterForm from '../components/Forms/RegisterForm.vue'

export default {
    name: 'LoginView',
    components: {
        LoginForm,
        RegisterForm
    },
    data: () => ({
        tabsForm: null,
    })
    
}
</script>