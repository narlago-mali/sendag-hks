<template>
  <div>
    <b-card>
      <Agenda />
    </b-card>
  </div>
</template>

<script>
import { BCard, BCardText, BLink } from 'bootstrap-vue'
import Agenda from '../layouts/components/Agenda.vue'
export default {
  components: {
    BCard,
    BCardText,
    BLink,
    Agenda
  },
}
</script>

<style>

</style>
