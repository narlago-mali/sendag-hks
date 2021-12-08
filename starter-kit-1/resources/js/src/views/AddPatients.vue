<script>
import axios from 'axios';
export default {
    data() {
        return {
            name: "",
            form: {
                Ad: "",
                Soyad: "",
                GTarih: "",
                DTarih: "",
                Meslek: "",
                Kurum: "",
                Kangrubu: "",
                Referans: "",
                Sigorta: "",
                OSigorta: "",
                MedeniHali: "",
                ETarih: "",
                EAd: "",
                EDTarih: "",
                EYer: "",
                EKanGrubu: "",
                EMeslek: "",
                ESigorta: "",
                Kategori: "",
                AddedBy: "",
                ChangedBy: "",
                Doktor: "",
                AddedDate: "",
                LCDate: "",
                TCKimlikNo: "",
                Ozet: "",
            },
        };
    },
    methods: {
        async saveData() {
            await axios.post('/api/hastaekle', this.form)
            .then(res => console.log(res))
            .catch(err => console.log(err))
        },
        removeData() {
            this.form = {};
            this.$router.push('/hastalar')
        },
    },
};
</script>

<template>
    <div>
        <div class="container d-flex">
            <div class="column col-md-3">
                <b-form-group id="fieldset-1" label="Ad" label-for="input-1">
                    <b-form-input id="input-1" v-model="form.Ad"></b-form-input>
                </b-form-group>

                <b-form-group id="fieldset-1" label="Soyad" label-for="input-1">
                    <b-form-input
                        id="input-1"
                        v-model="form.Soyad"
                    ></b-form-input>
                </b-form-group>

                <b-form-group
                    id="fieldset-1"
                    label="Doğum Tarihi"
                    label-for="input-1"
                >
                    <b-form-input
                        id="input-1"
                        v-model="form.DTarih"
                    ></b-form-input>
                </b-form-group>

                <b-form-group
                    id="fieldset-1"
                    label="Doğum Yeri"
                    label-for="input-1"
                >
                    <b-form-input
                        id="input-1"
                        v-model="form.DYer"
                    ></b-form-input>
                </b-form-group>

                <b-form-group
                    id="fieldset-1"
                    label="Meslek"
                    label-for="input-1"
                >
                    <b-form-input
                        id="input-1"
                        v-model="form.Meslek"
                    ></b-form-input>
                </b-form-group>

                <b-form-group id="fieldset-1" label="Kurum" label-for="input-1">
                    <b-form-input
                        id="input-1"
                        v-model="form.Kurum"
                    ></b-form-input>
                </b-form-group>
            </div>
            <div class="column col-md-3">
                <b-form-group
                    id="fieldset-1"
                    label="Kan Grubu"
                    label-for="input-1"
                >
                    <b-form-input
                        id="input-1"
                        v-model="form.KanGrubu"
                    ></b-form-input>
                </b-form-group>

                <b-form-group
                    id="fieldset-1"
                    label="Referans"
                    label-for="input-1"
                >
                    <b-form-input
                        id="input-1"
                        v-model="form.referans"
                    ></b-form-input>
                </b-form-group>

                <b-form-group
                    id="fieldset-1"
                    label="Sigorta"
                    label-for="input-1"
                >
                    <b-form-input
                        id="input-1"
                        v-model="form.Sigorta"
                    ></b-form-input>
                </b-form-group>

                <b-form-group
                    id="fieldset-1"
                    label="O Sigorta"
                    label-for="input-1"
                >
                    <b-form-input
                        id="input-1"
                        v-model="form.OSigorta"
                    ></b-form-input>
                </b-form-group>

                <b-form-group
                    id="fieldset-1"
                    label="Medeni Hali"
                    label-for="input-1"
                >
                    <b-form-input
                        id="input-1"
                        v-model="form.MedeniHali"
                    ></b-form-input>
                </b-form-group>

                <b-form-group
                    id="fieldset-1"
                    label="E Tarih"
                    label-for="input-1"
                >
                    <b-form-input
                        id="input-1"
                        v-model="form.ETarih"
                    ></b-form-input>
                </b-form-group>
            </div>

            <div class="column col-md-3">
                <b-form-group id="fieldset-1" label="E Ad" label-for="input-1">
                    <b-form-input
                        id="input-1"
                        v-model="form.EAd"
                    ></b-form-input>
                </b-form-group>

                <b-form-group
                    id="fieldset-1"
                    label="ED Tarih"
                    label-for="input-1"
                >
                    <b-form-input
                        id="input-1"
                        v-model="form.EDTarih"
                    ></b-form-input>
                </b-form-group>

                <b-form-group id="fieldset-1" label="E Yer" label-for="input-1">
                    <b-form-input
                        id="input-1"
                        v-model="form.EYer"
                    ></b-form-input>
                </b-form-group>

                <b-form-group
                    id="fieldset-1"
                    label="E Meslek"
                    label-for="input-1"
                >
                    <b-form-input
                        id="input-1"
                        v-model="form.EMeslek"
                    ></b-form-input>
                </b-form-group>

                <b-form-group
                    id="fieldset-1"
                    label="ESigorta"
                    label-for="input-1"
                >
                    <b-form-input
                        id="input-1"
                        v-model="form.ESigorta"
                    ></b-form-input>
                </b-form-group>

                <b-form-group
                    id="fieldset-1"
                    label="Kategori"
                    label-for="input-1"
                >
                    <b-form-input
                        id="input-1"
                        v-model="form.Kategori"
                    ></b-form-input>
                </b-form-group>
            </div>

            <div class="column col-md-3">
                <b-form-group
                    id="fieldset-1"
                    label="Ekleyen"
                    label-for="input-1"
                >
                    <b-form-input
                        id="input-1"
                        v-model="form.AddedBy"
                        trim
                    ></b-form-input>
                </b-form-group>

                <b-form-group
                    id="fieldset-1"
                    label="Değiştiren"
                    label-for="input-1"
                >
                    <b-form-input
                        id="input-1"
                        v-model="form.ChangedBy"
                        trim
                    ></b-form-input>
                </b-form-group>

                <b-form-group
                    id="fieldset-1"
                    label="Doktor"
                    label-for="input-1"
                >
                    <b-form-input
                        id="input-1"
                        v-model="form.Doktor"
                        trim
                    ></b-form-input>
                </b-form-group>

                <b-form-group
                    id="fieldset-1"
                    label="Ekleme Tarihi"
                    label-for="input-1"
                >
                    <b-form-input
                        id="input-1"
                        v-model="form.AddedDate"
                        trim
                    ></b-form-input>
                </b-form-group>

                <b-form-group
                    id="fieldset-1"
                    label="Son Tarih"
                    label-for="input-1"
                >
                    <b-form-input
                        id="input-1"
                        v-model="form.LCDate"
                        trim
                    ></b-form-input>
                </b-form-group>

                <b-form-group
                    id="fieldset-1"
                    label="TC Kimlik No"
                    label-for="input-1"
                >
                    <b-form-input
                        id="input-1"
                        v-model="form.TCKimlikNo"
                        trim
                    ></b-form-input>
                </b-form-group>

                <b-form-group id="fieldset-1" label="Özet" label-for="input-1">
                    <b-form-input
                        id="input-1"
                        v-model="form.Ozet"
                    ></b-form-input>
                </b-form-group>
            </div>
        </div>
        <div class="container">
            <div class="col-md-12 m-auto  d-flex justify-content-center">
                <button @click="saveData" class="btn btn-success mr-25">Ekle</button>
                <button @click="removeData" class="btn btn-danger">
                    Vazgeç
                </button>
            </div>
        </div>
    </div>
</template>
