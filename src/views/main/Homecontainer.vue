<template>
  <div>
    <Menu1 />
     <div class='container-fluid'>
      <div class='row'>
        <main role='main' class='col-md-12 ml-sm-auto px-4'>
          <!-- <router-link /> 造成錯誤 -->
        </main>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
import Menu1 from '@/views/main/Home.vue';

export default {
  name: 'Homecontainer',
  components: {
    Menu1,
  },
  data() {
    return {
    };
  },
};
</script>

<style lang="scss"></style>
