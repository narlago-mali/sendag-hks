<script>
import axios from "axios";
export default {
    name: "hastatakip",
    data() {
        return {
            patientsDesc: null,
        };
    },
    methods: {
        async getData() {
            await axios
                .get(`/api/takipgoster/${this.$route.params.patientsRecID}`)
                .then((res) => (this.patientsDesc = res.data))
                .catch((e) => console.log(e));
            console.log(this.patientsDesc);
        },
        goToPatientsView() {
            this.$router.push("/hastalar");
        },
    },
    async mounted() {
        //await this.getData();
        this.patientsDesc = this.$store.state.hastalar.katalog;
        console.log(this.patientsDesc);
    },
};
</script>

<template>
    <div>
        <b-tabs content-class="mt-3" justified>
            <b-tab :title="patientsDesc.Tip">
                <div class="follow">
                    <h6>
                        Özet: <span>{{ patientsDesc.Ozet }}</span>
                    </h6>
                    <h6>
                        Kol Say: <span>{{ patientsDesc.KolSay }}</span>
                    </h6>
                    <h6>
                        Resim Say: <span>{{ patientsDesc.ResimSay }}</span>
                    </h6>
                    <h6>
                        Sema Say: <span>{{ patientsDesc.SemaSay }}</span>
                    </h6>
                    <h6>
                        Sonuç: <span>{{ patientsDesc.Sonuc }}</span>
                    </h6>
                    <h6>
                        Takip Son: <span>{{ patientsDesc.TakipSon }}</span>
                    </h6>
                    <h6>
                        Tarih 1: <span>{{ patientsDesc.Tarih1 }}</span>
                    </h6>
                    <h6>
                        Tarih 2: <span>{{ patientsDesc.Tarih2 }}</span>
                    </h6>
                    <h6>
                        Doktor: <span>{{ patientsDesc.Doktor }}</span>
                    </h6>
                    <h6>
                        Ekleyen: <span>{{ patientsDesc.AddedBy }}</span>
                    </h6>
                    <h6>
                        Değiştiren: <span>{{ patientsDesc.ChangedBy }}</span>
                    </h6>
                </div>
            </b-tab>
        </b-tabs>
        <div class="buttonGroup">
            <button class="btn btn-danger" @click="goToPatientsView">
                Geri
            </button>
            <div>
                <b-button class="btn btn-success">Ekle</b-button>
            </div>
        </div>
    </div>
</template>

<style>
.follow {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 5px;
}

.follow h6 {
    margin-bottom: 15px;
    font-weight: 700;
    font-size: 18px;
}

.follow h6 span {
    font-size: 14 px;
    color: blue;
    margin-left: 5px;
}

.buttonGroup{
    display: flex;
    flex-direction: row;
}
</style>
