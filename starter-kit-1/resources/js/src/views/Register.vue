<script>
import { mapActions } from "vuex";
/* eslint-disable global-require */
import { ValidationProvider, ValidationObserver } from "vee-validate";
import VuexyLogo from "@core/layouts/components/Logo.vue";
import {
    BRow,
    BCol,
    BLink,
    BFormGroup,
    BFormInput,
    BInputGroupAppend,
    BInputGroup,
    BFormCheckbox,
    BCardText,
    BCardTitle,
    BImg,
    BForm,
    BButton,
} from "bootstrap-vue";
import { togglePasswordVisibility } from "@core/mixins/ui/forms";
import store from "@/store/index";

export default {
    components: {
        BRow,
        BCol,
        BLink,
        BFormGroup,
        BFormInput,
        BInputGroupAppend,
        BInputGroup,
        BFormCheckbox,
        BCardText,
        BCardTitle,
        BImg,
        BForm,
        BButton,
        VuexyLogo,
        ValidationProvider,
        ValidationObserver,
    },
    mixins: [togglePasswordVisibility],
    data() {
        return {
            form: {
                name: "",
                email: "",
                password: "",
            },
            errors: [],
        };
    },
    computed: {
        passwordToggleIcon() {
            return this.passwordFieldType === "password"
                ? "EyeIcon"
                : "EyeOffIcon";
        },
        imgUrl() {
            if (store.state.appConfig.layout.skin === "dark") {
                // eslint-disable-next-line vue/no-side-effects-in-computed-properties
                this.sideImg = require("@/assets/images/pages/login-v2-dark.svg");
                return this.sideImg;
            }
            return this.sideImg;
        },
    },
    methods: {
        ...mapActions("user", ["registerUser"]),
        async doRegister() {
            try {
                await this.registerUser(this.form);
                this.$router.push('/login')
            } catch (e) {
                this.errors.push(e)
            }
        },
    },
};
</script>

<style lang="scss">
@import "@core/scss/vue/pages/page-auth.scss";
</style>

<template>
    <div class="auth-wrapper auth-v2">
        <b-row class="auth-inner m-0">
            <!-- Brand logo-->
            <b-link class="brand-logo">
                <h2 class="brand-text text-primary ml-1">HKS</h2>
            </b-link>
            <!-- Login-->
            <b-col
                lg="8"
                class="d-flex align-items-center m-auto auth-bg px-2 p-lg-5"
            >
                <b-col sm="8" md="6" lg="12" class="px-xl-2 mx-auto">
                    <b-card-title title-tag="h2" class="font-weight-bold mb-1">
                        Hoşgeldiniz
                    </b-card-title>

                    <b-card-text v-if="errors.length > 0" class="mb-2 text-danger">
                        {{errors[0]}}
                    </b-card-text>

                    <!-- form -->
                    <div class="auth-login-form mt-2">
                        <b-form-group label="Adı" label-for="register-name">
                            <b-form-input
                                id="register-name"
                                v-model="form.name"
                                name="register-name"
                            />
                        </b-form-group>
                        <!-- email -->
                        <b-form-group label="Email" label-for="register-email">
                            <b-form-input
                                id="register-email"
                                v-model="form.email"
                                name="register-email"
                                type="email"
                            />
                        </b-form-group>

                        <!-- forgot password -->
                        <b-form-group>
                            <div class="d-flex justify-content-between">
                                <label for="register-password">Şifre</label>
                            </div>
                            <b-input-group class="input-group-merge">
                                <b-form-input
                                    id="register-password"
                                    v-model="form.password"
                                    class="form-control-merge"
                                    name="register-password"
                                    placeholder="············"
                                    type="password"
                                />
                                <b-input-group-append is-text>
                                    <feather-icon
                                        class="cursor-pointer"
                                        :icon="passwordToggleIcon"
                                        @click="togglePasswordVisibility"
                                    />
                                </b-input-group-append>
                            </b-input-group>
                        </b-form-group>

                        <!-- submit buttons -->
                        <b-button
                            type="submit"
                            variant="primary"
                            block
                            @click="doRegister"
                        >
                            Kayıt Ol
                        </b-button>
                    </div>

                    <b-card-text class="text-center mt-2">
                        <span>Hesabınız var mı? </span>
                        <b-link :to="{ name: 'login' }">
                            <span>&nbsp;Giriş yap</span>
                        </b-link>
                    </b-card-text>
                </b-col>
            </b-col>
        </b-row>
    </div>
</template>

<style scoped></style>
