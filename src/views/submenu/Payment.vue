<template>
  <div class="my-5 row no-gutters justify-content-center">
    <Loading :active.sync="isLoading" />

    <!-- SECTION 訂單資料 START -->
    <div class="col">
      <table class="table table-striped table-bordered mt-4" cellspacing="0"  >
        <thead>
          <tr>
            <th>購買時間</th>
            <th>購買方式</th>
            <th>商品列表</th>
            <th>應付金額</th>
            <th>付款狀態</th>
            <th>編輯</th>
          </tr>
        </thead>
        <tbody v-if="orders.length">
          <tr
            v-for="(item, key) in orders"
            :key="key"
            :class="{'text-secondary': !item.is_paid} "
          >
            <td>{{ item.created.datetime }}</td>
            <td>
              {{ item.payment }}
            </td>
            <td>
              <ul class="list-unstyled">
                <li
                  v-for="(product, i) in item.products"
                  :key="i"
                >
                  {{ product.product.title }} 數量：{{ product.quantity }}
                  {{ product.product.unit }}
                </li>
              </ul>
            </td>
            <td class="text-right">
              {{ item.amount|currency }}
            </td>
            <td>
              <strong
                v-if="item.paid"
                class="text-success"
              >
                已付款
              </strong>
              <span
                v-else
                class="text-muted"
              >
                未付款
              </span>
            </td>
            <td>
              <div class="btn-group btn-group-sm">
                <button
                  class="btn btn-outline-primary"
                  :disabled="item.paid"
                  @click.prevent="getDetailed(item.id)"
                >
                  選擇
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- SECTION 訂單資料 START -->
    <hr class="w-100 bg-secondary">

    <!-- modal 編輯明細 START -->
    <div id="orderModal"
        class="modal fade bd-example-modal-lg"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg" role="document">
          <div class="modal-content">
          <div class="modal-header">
              <button
                type="button"
                class="close" data-dismiss="modal"
                aria-label="Close" >
                <span aria-hidden="true">&times;</span>
              </button>
            <div class="col">
            <!-- form 頁首 START-->
            <form @submit.prevent="payOrder" class="mr-4">
              <table class="table my-4">
                <thead>
                  <th>品名</th>
                  <th>數量</th>
                  <th>單價</th>
                </thead>
                <tbody>
                  <tr v-for="(item, key) in order.products" :key="key">
                    <td class="align-middle">
                      {{ item.product.title }}
                    </td>
                    <td class="align-middle">
                      {{ item.quantity }}/{{ item.product.unit }}
                    </td>
                    <td class="align-middle text-right">
                      {{ item.product.price }}
                    </td>
                  </tr>
                </tbody>

                <tfoot>
                  <tr>
                    <td colspan="2" class="text-right">總計</td>
                    <td class="text-right">{{ order.amount }}</td>
                  </tr>
                </tfoot>
              </table>

              <table class="table">
                <tbody>
                  <tr>
                    <th >Email</th>
                    <td>{{ order.user.email }}</td>
                  </tr>
                  <tr>
                    <th>姓名</th>
                    <td>{{ order.user.name }}</td>
                  </tr>
                  <tr>
                    <th>收件人電話</th>
                    <td>{{ order.user.tel }}</td>
                  </tr>
                  <tr>
                    <th>收件人地址</th>
                    <td>{{ order.user.address }}</td>
                  </tr>
                  <tr>
                    <th>付款狀態</th>
                    <td>
                      <span v-if="!order.paid">尚未付款</span>
                      <span
                        v-else
                        class="text-success"
                      >付款完成</span>
                    </td>
                  </tr>
                </tbody>
              </table>

              <div
                v-if="order.paid === false" class="text-right">
                <button class="btn btn-danger">
                  確認付款去
                </button>
              </div>
            </form>
            </div>
            <!-- form 頁首 ENDOF-->
          <div class="row">
          </div>

          </div>
        </div>
      </div>
    </div>
    <!-- modal 編輯明細 ENDOF -->
         <Pagination
      :pages="pagination"
      @naviPages="getOrders"
    />
  </div>
</template>

<script>
import Pagination from '@/components/Pagination.vue';

export default {
  name: 'Payment',
  components: {
    Pagination,
  },
  data() {
    return {
      order: {
        user: {},
      },
      orders: [],
      orderId: '',
      uuid: process.env.VUE_APP_UUID,
      isLoading: false,
      pagination: [],
    };
  },
  created() {
    // this.orderId = this.$route.params.orderId;
    // if (this.orderId) {
    //   this.getDetailed(this.orderId);
    // } else {
    //   this.getOrders();
    // }
    this.getOrders();
    this.isLoading = false;
    this.$swal.fire({
      icon: 'success',
      title: '問題待解，請  F5 刷新..',
      text: '模擬下單後進入，會出現遮罩 ! 到底是在哪 ? 阿砸 ..',
    });
  },
  methods: {
    getOrders(page = 1) {
      this.isLoading = true;
      const api = `${process.env.VUE_APP_APIPATH}${this.uuid}/ec/orders?`;
      this.$http
        .get(api, {
          params: {
            page: `${page}`,
            paged: '5',
          },
        }).then((res) => {
          this.orders = res.data.data;
          this.pagination = res.data.meta.pagination;
        });
      this.isLoading = false;
    },

    getDetailed(id) {
      $('#orderModal').modal('show');
      this.isLoading = true;
      this.orderId = id;
      const api = `${process.env.VUE_APP_APIPATH}${this.uuid}/ec/orders/${id}`;
      this.$http.get(api).then((res) => {
        this.order = res.data.data;
      });
      this.isLoading = false;
    },
    payOrder() {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_APIPATH}${this.uuid}/ec/orders/${this.orderId}/paying`;
      this.$http.post(url)
        .then((res) => {
          if (res.data.data.paid) {
            this.getDetailed(this.orderId);
          }
          $('#orderModal').modal('hide');
          this.getOrders();
        });
      this.isLoading = false;
    },
  },
};
</script>
