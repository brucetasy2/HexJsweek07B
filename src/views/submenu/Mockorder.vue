<template>
    <div>
      <Loading :active.sync="isLoading" />
      <div class="text-right mt-4 mx-5">
        <button class="btn btn-primary" @click="accountModal()">
          結帳..
        </button>
      </div>
      <!-- SECTION 主畫面 START -->
      <div class="row mt-4">
        <div
          v-for="(item, index) in products"
          :key="index"
          class="col-md-4 mb-4">
          <div class="card border-0 shadow-sm">
            <div
              style="height: 150px; background-size: cover; background-position: center"
              :style="{backgroundImage: `url(${item.imageUrl})`}"/>

              <div class="card-body">
                <span class="badge badge-secondary float-right ml-2">{{ item.category }}</span>
                <h5 class="card-title">
                  <a
                    href="#"
                    class="text-dark"
                  >{{ item.title }}</a>
                </h5>
                <!-- 由於 content 是使用
                vue2Editor 生成 HTML
                標籤  所以必須使用 v-html 渲染，
                因此這邊會出現提示警告是正常的
                如果要解決 ESLint 錯誤，只需要使用該方式就可以
                -->
                <!-- eslint-disable -->
                <p
                  class="card-text"
                  v-html="item.content"
                >
                  {{ item.content }}
                </p>
                <!--eslint-enable-->

                <div class="d-flex justify-content-between align-items-baseline">
                  <div
                    v-if="!item.price"
                    class="h5">
                    {{ item.origin_price }} 元</div>
                  <del
                    v-if="item.price"
                    class="h6">原價 {{ item.origin_price }} 元</del>
                  <div
                    v-if="item.price"
                    class="h5">
                    現在只要 {{ item.price }} 元
                  </div>
                </div>
              </div>

            <div class="card-footer d-flex">
              <button
                type="button"
                class="btn btn-outline-secondary btn-sm"
                :disabled="status.loadingItem === item.id"
                @click="getDetailed(item.id)">
                <i
                  v-if="status.loadingItem === item.id"
                  class="spinner-grow spinner-grow-sm"/>
                查看更多...
              </button>

              <button
                type="button"
                class="btn btn-outline-danger btn-sm ml-auto"
                :disabled="status.loadingItem === item.id"
                @click="addtoCart(item)">
                <i
                  v-if="status.loadingItem === item.id"
                  class="spinner-grow spinner-grow-sm"/>
                加到購物車
              </button>
            </div>
          </div>
        </div>
      </div>
      <!-- SECTION 主畫面 EDNOF -->

      <!-- SECTION 查看明細 START -->
      <div id="productModal" class="modal fade"
      tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 id="exampleModalLabel" class="modal-title">
                  <p >產品名稱:</p>
                  <p class="mx-1 text-info">{{ tempProduct.title }}</p>
                </h5>

                <button type="button" class="close" data-dismiss="modal"
                aria-label="Close" >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>

              <div class="modal-body">
                <img :src="tempProduct.image" class="img-fluid" alt>
                <blockquote class="blockquote mt-0 ">
                  <!-- 由於 content 是使用 vue2Editor 生成 HTML 標籤
                  所以必須使用 v-html 渲染，因此這邊會出現提示警告是正常的 -->
                  <!-- eslint-disable -->
                  <p class="mb-0 text-left" v-html="tempProduct.content" />
                  <!--eslint-enable-->
                  <footer class="blockquote-footer text-left">
                    {{ tempProduct.description }}
                  </footer>
                </blockquote>

                <div class="d-flex justify-content-between align-items-baseline">
                  <div v-if="!tempProduct.price" class="h4">
                    <!-- {{ tempProduct.origin_price|currency}} 元 -->
                    {{ tempProduct.origin_price}} 元
                  </div>

                  <div v-else>
                    <del class="h6">原價 {{ tempProduct.origin_price }} 元</del>
                    <div class="h4 text-primary">
                      <!-- 特價 {{ tempProduct.price|currency }} 元 -->
                      {{ tempProduct.price|currency }}
                    </div>
                  </div>
                </div>

                <select v-model="tempProduct.num" name class="form-control mt-3">
                  <option value="0" disabled selected>
                    請選擇數量
                  </option>
                  <option v-for="num in 10" :key="num" :value="num">
                    選購 {{ num }} {{ tempProduct.unit }}
                  </option>
                </select>
              </div>

              <div class="modal-footer">
                <div v-if="tempProduct.num" class="text-muted text-nowrap mr-3">
                  小計
                  <strong>{{ tempProduct.num * tempProduct.price }}</strong> 元
                </div>

                <button type="button" class="btn btn-primary"
                @click="addtoCart(tempProduct, tempProduct.num)">
                  <i v-if="tempProduct.id === status.loadingItem"
                  class="fas fa-spinner fa-spin" />
                  加到購物車
                </button>
              </div>
            </div>
        </div>
      </div>
      <!-- SECTION 查看明細 ENDOF -->

      <!-- SECTION 結帳畫面 START -->
      <div id="accountModal" class="modal fade"
      tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h1>結帳畫面</h1>
            </div>
          </div>
        </div>
      </div>
      <!-- SECTION 結帳畫面 ENDOF -->

      <Pagination
      :pages="pagination"
      @naviPages="getProducts"
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
      products: {},
      carts: {},
      uuid: process.env.VUE_APP_UUID,
      xerror: 'NO_ERROR',
      tempProduct: {},
      status: {
        loadingItem: '',
      },
    };
  },
  created() {
    this.getProducts();
    this.getCart();
  },
  methods: {
    // 取得產品清單
    getProducts(page = 1) {
      this.isLoading = true;
      const api = `${process.env.VUE_APP_APIPATH}${this.uuid}/ec/products`;
      this.$http
        .get(api, {
          params: {
            page: `${page}`,
            paged: `${process.env.VUE_APP_PAGED}`,
          },
        })
        .then((res) => {
          this.products = res.data.data;
          this.pagination = res.data.meta.pagination;
          this.isLoading = false;
        })
        .catch((error) => {
          this.$swal.fire({
            icon: 'error',
            title: 'Oops1...',
            text: `錯誤代碼${error.request.status}`,
          });
          this.isLoading = false;
        });
    },
    // 取得購物車內容
    getCart() {
      this.isLoading = true;
      const api = `${process.env.VUE_APP_APIPATH}${this.uuid}/ec/shopping`;
      this.$http
        .get(api)
        .then((res) => {
          this.carts = res.data.data;
          this.isLoading = false;
        })
        .catch((error) => {
          this.$swal.fire({
            icon: 'error',
            title: '取得購物車內容失敗...',
            text: `錯誤代碼${error.request.status}`,
          });
          this.isLoading = false;
        });
    },
    addtoCart(item, quantity = 1) {
      const cart = {
        product: item.id,
        quantity,
      };
      this.status.loadingItem = item.id;

      this.isLoading = true;
      const api = `${process.env.VUE_APP_APIPATH}${this.uuid}/ec/shopping`;
      this.$http
        .get(api, {
          params: {
            cart: `${cart}`,
          },
        })
        .then(() => {
          $('#productModal').modal('hide');
          this.isLoading = false;
          this.status.loadingItem = '';
          this.$swal.fire({
            icon: 'sucess',
            title: '加入購物車..',
            text: '成功',
          });
        })
        .catch((error) => {
          this.$swal.fire({
            icon: 'error',
            title: '加入購物車失敗...',
            text: `錯誤代碼${error.request.status}`,
          });
          this.isLoading = false;
          this.status.loadingItem = '';
        });
    },
    getDetailed(id) {
      this.isLoading = true;
      const api = `${process.env.VUE_APP_APIPATH}${this.uuid}/ec/product/${id}`;
      this.$http
        .get(api)
        .then((res) => {
          this.tempProduct = res.data.data;
          this.isLoading = false;
          $('#productModal').modal('show');
        })
        .catch((error) => {
          this.$swal.fire({
            icon: 'error',
            title: 'Oops1...',
            text: `錯誤代碼${error.request.status}`,
          });
          this.isLoading = false;
        });
    },
    accountModal() {
      console.log('YOU WANT ACCOUNT');
      $('#accountModal').modal('show');
    },
  },
};
</script>
