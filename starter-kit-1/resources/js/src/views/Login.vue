<script>
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
import { required, email } from "@validations";
import { togglePasswordVisibility } from "@core/mixins/ui/forms";
import store from "@/store/index";
import { mapActions, mapState } from "vuex";

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
                email: "",
                password: "",
            },
            errors: []
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
        ...mapActions("user", ["login"]),
        async doLogin() {
            try {
                await this.login(this.form);
                this.$router.push("/");
            } catch (e) {
                this.errors.push(e)
            }
        },
    },
};
</script>

<template>
    <div class="auth-wrapper auth-v2">
        <b-row class="auth-inner m-0">
            <!-- Brand logo-->
            <b-link class="brand-logo">
                <h2 class="brand-text text-primary ml-1">HKS</h2>
            </b-link>
            <!-- /Brand logo-->

            <!-- Login-->
            <b-col
                lg="8"
                class="d-flex align-items-center m-auto auth-bg px-2 p-lg-5"
            >
                <b-col lg="12" class="px-xl-2 mx-auto">
                    <b-card-title title-tag="h2" class="font-weight-bold mb-1">
                        Hoşgeldiniz
                    </b-card-title>
                    <b-card-text class="mb-2">
                        Giriş yapmak için bilgileri doldurunuz
                    </b-card-text>
                    <b-card-text v-if="errors.length > 0" class="mb-2 text-danger">
                        {{errors[0]}}
                    </b-card-text>
                    <!-- form -->
                    <b-form class="auth-login-form mt-2" @submit.prevent>
                        <!-- email -->
                        <b-form-group label="Email" label-for="login-email">
                            <b-form-input
                                id="login-email"
                                name="login-email"
                                v-model="form.email"
                                type="email"
                            />
                        </b-form-group>

                        <!-- forgot password -->
                        <b-form-group>
                            <div class="d-flex justify-content-between">
                                <label for="login-password">Şifre</label>
                            </div>
                            <b-input-group class="input-group-merge">
                                <b-form-input
                                    id="login-password"
                                    class="form-control-merge"
                                    name="login-password"
                                    placeholder="············"
                                    v-model="form.password"
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
                            @click="doLogin"
                        >
                            Giriş yap
                        </b-button>
                    </b-form>

                    <b-card-text class="text-center mt-2">
                        <span>Hesabınız yok mu ? </span>
                        <b-link to="/register">
                            <span>&nbsp;Kayıt ol</span>
                        </b-link>
                    </b-card-text>
                </b-col>
            </b-col>
        </b-row>
    </div>
</template>

<style lang="scss">
@import "@core/scss/vue/pages/page-auth.scss";
</style>
