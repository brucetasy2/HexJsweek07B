<template>
    <div>
        <h1>MyTemplate</h1>
        <!-- <Pagination/> -->
    </div>
</template>

<script>
// import Pagination from '@/components/Pagination.vue';

export default {
  components: {
    // Pagination,
  },
  data() {
    return {
      isNew: false,
      isLoading: false,
      uuid: process.env.VUE_APP_UUID,
      xerror: 'NO_ERROR',
    };
  },
  created() {

  },
  methods: {

  },
};
</script>
