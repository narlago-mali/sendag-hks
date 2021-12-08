<script>
import axios from "axios";
import { mapActions } from 'vuex'
export default {
    data() {
        return {
            modes: ["multi", "single", "range"],
            fields: [
                {
                    key: "selected",
                    label: "",
                    class: "text-center",
                },
                {
                    key: "HastaRecID",
                    label: "ID",
                    sortable: true,
                    sortDirection: "desc",
                    class: "text-center",
                },
                {
                    key: "Ad",
                    label: "Ad",
                    sortable: true,
                    sortDirection: "desc",
                    class: "text-center",
                },
                {
                    key: "Soyad",
                    label: "Soyad",
                    sortable: true,
                    class: "text-center",
                },
                {
                    key: "DTarih",
                    label: "DTarih",
                    sortable: true,
                    sortByFormatted: true,
                    filterByFormatted: true,
                    class: "text-center",
                },
                {
                    key: "Meslek",
                    label: "Meslek",
                    sortable: true,
                    class: "text-center",
                },
            ],
            items: [],
            selectMode: "single",
            selected: {},
            isLoading: false,
            totalRows: 1,
            currentPage: 1,
            perPage: 25,
            pageOptions: [5, 10, 15, { value: 100, text: "Show a lot" }],
            sortBy: "",
            sortDesc: false,
            sortDirection: "asc",
            filter: null,
            filterOn: [],
            showPatientsDesc: false,
            patientsFollowHeader: [
                "Başlangıç",
                "Bitiş",
                "Tip",
                "Sonuç",
                "Doktor",
            ],
        };
    },
    computed: {
        sortOptions() {
            // Create an options list from our fields
            return this.fields
                .filter((f) => f.sortable)
                .map((f) => {
                    return { text: f.label, value: f.key };
                });
        },
    },
    methods: {
        ...mapActions('hastalar',['getKatalog']),
        info(item, index, button) {
            this.infoModal.title = `Row index: ${index}`;
            this.infoModal.content = JSON.stringify(item, null, 2);
            this.$root.$emit("bv::show::modal", this.infoModal.id, button);
        },
        resetInfoModal() {
            this.infoModal.title = "";
            this.infoModal.content = "";
        },
        onFiltered(filteredItems) {
            this.totalRows = filteredItems.length;
            this.currentPage = 1;
        },
        async onRowSelected(items) {
            this.showPatientsDesc = true;
            const patientsId = items[0].HastaRecID;
            await axios
                .get(`/api/takipgoster/${patientsId}`)
                .then((res) => (this.selected = res.data))
                .catch((e) => console.log(e));

            console.log(this.selected);
        },
        selectAllRows() {
            this.$refs.selectableTable.selectAllRows();
        },
        clearSelected() {
            this.$refs.selectableTable.clearSelected();
            this.showPatientsDesc = false;
        },
        async getData() {
            await axios.get("api/hastalar").then((res) => {
                this.items = res.data;
            });
        },
        removeSelectedData() {
            this.selected = {};
            this.showPatientsDesc = false;
        },
        goToPatientsFollow(selectedPatients) {
            this.getKatalog(selectedPatients)
            this.$router.push('/hastatakip')
        },
        addCatalog(){
            this.$router.push('/katalogekle')
        }
    },
    async mounted() {
        await this.getData();
        this.items.length <= 0 ? (this.isLoading = true) : false;
        this.totalRows = this.items.length;
    },
};
</script>

<template>
    <div>
        <b-col lg="12" class="my-1">
            <b-form-group
                label-for="filter-input"
                label-cols-sm="3"
                label-align-sm="right"
                label-size="sm"
                class="mb-0"
            >
                <b-input-group size="sm">
                    <b-form-input
                        id="filter-input"
                        v-model="filter"
                        type="search"
                        placeholder="Ara..."
                    ></b-form-input>
                </b-input-group>
            </b-form-group>
        </b-col>
        <b-table
            :items="items"
            :fields="fields"
            :current-page="currentPage"
            :per-page="perPage"
            :filter="filter"
            :filter-included-fields="filterOn"
            :sort-by.sync="sortBy"
            :sort-desc.sync="sortDesc"
            :sort-direction="sortDirection"
            :select-mode="selectMode"
            responsive="sm"
            ref="selectableTable"
            stacked="md"
            show-empty
            small
            @filtered="onFiltered"
            selectable
            @row-selected="onRowSelected"
        >
            <!-- Example scoped slot for select state illustrative purposes -->
            <template #cell(selected)="{ rowSelected }">
                <template v-if="rowSelected">
                    <span aria-hidden="true">&check;</span>
                    <span class="sr-only">Selected</span>
                </template>
                <template v-else>
                    <span aria-hidden="true">&nbsp;</span>
                    <span class="sr-only">Not selected</span>
                </template>
            </template>
        </b-table>
        <div class="tableBottom">
            <p>
                <b-button size="sm" @click="selectAllRows"
                    >Hepsini seç</b-button
                >
                <b-button size="sm" @click="clearSelected"
                    >Seçilenleri temizle</b-button
                >
            </p>

            <b-col sm="7" md="6" class="my-1">
                <b-pagination
                    v-model="currentPage"
                    :total-rows="totalRows"
                    :per-page="perPage"
                    align="fill"
                    size="sm"
                    class="my-0"
                ></b-pagination>
            </b-col>
        </div>

        <div class="mt-3" v-if="this.showPatientsDesc">
            <div class="container d-flex flex-column">
                <div
                    class="d-flex flex-row justify-content-center patientsHeader"
                >
                    <h6
                        class="m-auto justify-content-center font-weight-bold"
                        v-for="(item, i) in patientsFollowHeader"
                        :key="i"
                    >
                        {{ item }}
                    </h6>
                </div>
                <div
                    class="d-flex flex-row justify-content-center patientsDesc"
                    v-for="(item, i) in selected"
                    :key="i"
                    @click="goToPatientsFollow(selected[i])"
                >
                    <h6 class="">{{ item.Tarih1 }}</h6>
                    <h6 class="">{{ item.Tarih2 }}</h6>
                    <h6 class="">{{ item.Tip }}</h6>
                    <h6 class="">{{ item.Sonuc }}</h6>
                    <h6 class="">{{ item.Doktor }}</h6>
                </div>
            </div>
            <div class="container mt-3 d-flex justify-content-center">
                <button @click="addCatalog" class="btn btn-success">Katalog Ekle</button>
            </div>
        </div>
    </div>
</template>

<style>
.patientsHeader {
    border-bottom: 2px solid gray;
    align-items: center;
    text-align: center;
}

.patientsHeader h6 {
    margin-bottom: 5px;
}

.patientsDesc {
    align-items: center;
    text-align: center;
    border-bottom: 1px solid gray;
    height: 30px;
    margin-top: 5px;
    cursor: pointer;
}

.patientsDesc:hover {
    background-color: rgb(231, 231, 231);
}

.patientsDesc h6 {
    margin: auto;
}

.tableBottom {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
}
</style>
