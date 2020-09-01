<template>
  <div>
     <H2>沒有任何圖檔</H2>
      <table class="table mt-4">
        <thead>
          <tr>
            <th>圖片縮圖</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody >
          <tr>
            <td>
              <img
                width="100px"
                class="img-fluid"
              >
            </td>
            <td>
              <div class="btn-group btn-group-sm">
                <button
                  class="btn btn-outline-danger"
                >
                  刪除
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>

    <Pagination
      :pages="pagination"
      @naviPages="getSorage"
    />
  </div>
</template>

<script>
import Pagination from '@/components/Pagination.vue';

export default {
  components: {
    Pagination,
  },
  data() {
    return {
      isNew: false,
      isLoading: false,
      uuid: process.env.VUE_APP_UUID,
      xerror: 'NO_ERROR',
      pagination: [],
    };
  },
  created() {
    this.token = document.cookie.replace(/(?:(?:^|.*;\s*)BruceStoreT7_token\s*=\s*([^;]*).*$)|^.*$/, '$1');
    const url = `${process.env.VUE_APP_APIPATH}auth/check`;
    // Axios 預設值
    this.$http.defaults.headers.common.Authorization = `Bearer ${this.token}`;
    this.$http
      .post(url, { api_token: this.token })
      .then(() => {
        this.getSorage();
      })
      .catch((err) => {
        this.$swal.fire({
          icon: 'error',
          title: 'Oops Orders Error 1...',
          text: `錯誤代碼${err.request.status}`,
        });
      });
  },
  methods: {
    getSorage(page = 1) {
      this.isLoading = true;
      const api = `${process.env.VUE_APP_APIPATH}${this.uuid}/admin/storage`;
      this.$http
        .get(api,
          {
            params: {
              page: `${page}`,
              paged: 5,
            },
          })
        .then((res) => {
          window.xyx = res.data.data;
          // this.orders = res.data.data;
          this.pagination = res.data.meta.pagination;
          this.isLoading = false;
        })
        .catch((error) => {
          this.$swal.fire({
            icon: 'error',
            title: 'Oops Orders Error 2...',
            text: `錯誤代碼${error.request.status}`,
          });
          this.isLoading = false;
        });
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
