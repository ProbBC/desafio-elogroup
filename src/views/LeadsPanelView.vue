<template>
  <LeadsPanelBody />
</template>

<script>
  import LeadsPanelBody from '../components/LeadsPanelBody.vue'
  export default {
    name: 'LeadsPanelView',

    components: {
      LeadsPanelBody
    },
    data: () => ({
      drawer: null
    }),
  }
</script>
