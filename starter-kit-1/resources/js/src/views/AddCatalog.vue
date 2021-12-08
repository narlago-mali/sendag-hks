<script>
export default {
    name: "AddCatalog",
    data() {
        return {
            form: {
                AddDate: "",
                AddedBy: "",
                ChangedBy: "",
                Doktor: "",
                HastaRecID: "",
                KolSay: "",
                LCDate: "",
                Ozet: "",
                ResimSay: "",
                SemaSay: "",
                Sonuc: "",
                TakipRecID: "",
                TakipSon: "",
                Tarih1: "",
                Tarih2: "",
                Tip: "",
            },
            options: [
                {value: 'Gebe', text: 'Gebe'},
                {value: 'Jinekoloji', text: 'Jinekoloji'},
                {value: 'İnfertelite', text: 'İnfertelite'},
                {value: 'Üroloji', text: 'Üroloji'}
            ]
        };
    },
    methods: {
        saveData() {
            console.log(this.form);
        },
    },
};
</script>

<template>
    <div class="container d-flex justify-content-around">
        <b-col>
            <b-col sm="9">
                <b-form-select v-model="form.Tip" :options="options"></b-form-select>
            </b-col>
            <b-col sm="9" class="mt-3">
                <b-form-input
                    v-model="form.AddDate"
                    placeholder="Ekleme Tarihi"
                ></b-form-input>
            </b-col>
            <b-col sm="9" class="mt-3">
                <b-form-input
                    v-model="form.AddedBy"
                    placeholder="Ekleyen"
                ></b-form-input>
            </b-col>
            <b-col sm="9" class="mt-3">
                <b-form-input
                    v-model="form.ChangedBy"
                    placeholder="Değiştiren"
                ></b-form-input>
            </b-col>
            <b-col sm="9" class="mt-3">
                <b-form-input
                    v-model="form.Doktor"
                    placeholder="Doktor"
                ></b-form-input>
            </b-col>
            <b-col sm="9" class="mt-3">
                <b-form-input
                    v-model="form.KolSay"
                    placeholder="Kol Say"
                ></b-form-input>
            </b-col>

            <b-col sm="9" class="mt-3">
                <b-form-input
                    v-model="form.ResimSay"
                    placeholder="Resim Say"
                ></b-form-input>
            </b-col>
        </b-col>
        <b-col>
            <b-col sm="9">
                <b-form-input
                    v-model="form.SemaSay"
                    placeholder="Sema Say"
                ></b-form-input>
            </b-col>
            <b-col sm="9" class="mt-3">
                <b-form-input
                    v-model="form.Sonuc"
                    placeholder="Sonuç"
                ></b-form-input>
            </b-col>
            <b-col sm="9" class="mt-3">
                <b-form-input
                    v-model="form.TakipSon"
                    placeholder="Takip Son"
                ></b-form-input>
            </b-col>
            <b-col sm="9" class="mt-3">
                <b-form-input
                    v-model="form.Tarih1"
                    placeholder="Tarih 1"
                ></b-form-input>
            </b-col>
            <b-col sm="9" class="mt-3">
                <b-form-input
                    v-model="form.Tarih2"
                    placeholder="Tarih 2"
                ></b-form-input>
            </b-col>
            <b-col sm="9" class="mt-3">
                <textarea
                    rows="4"
                    cols="60"
                    v-model="form.Ozet"
                    placeholder="Özet"
                ></textarea>
            </b-col>
        </b-col>
    </div>
</template>

<style></style>
