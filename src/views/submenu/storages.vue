<template>
  <div>
    <div class='text-right mt-4 mx-5'>
      <button class='btn btn-primary'
      @click="openModal('new')">加入圖檔</button>
    </div>

    <table class="table table-striped table-bordered mt-4" cellspacing="0" >
      <thead>
        <tr>
          <th>圖片縮圖</th>
          <th>圖片位置</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for='(item, key) in storeImg' :key='key'>
          <td>
            <img :src='item.path' width='100px' class='img-fluid' />
          </td>

          <td>
            <a :href='item.path' target='_blank'>CLICK ME</a>
          </td>

          <td>
            <div class='btn-group btn-group-sm'>
              <button class='btn btn-outline-danger'
              @click.prevent="openModal('delete', item)">刪除</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>

    <Pagination :pages='pagination'
    @naviPages='getSorage'
    />

    <!-- Modal (DELETE) START-->
    <div>
      <div
        id='deleteModal'
        class='modal fade'
        tabindex='-1'
        role='dialog'
        aria-labelledby='exampleModalLabel'
        aria-hidden='true'
      >
        <div class='modal-dialog' role='document'>
          <div class='modal-content border-0'>
            <div class='modal-header bg-danger text-white'>
              <h5 id='exampleModalLabel' class='modal-title'>
                <span>刪除資料</span>
              </h5>
              <button type='button' class='close' data-dismiss='modal' aria-label='Close'>
                <span aria-hidden='true'>&times;</span>
              </button>
            </div>

            <div class='modal-body'>是否刪除該筆資料 (刪除後將無法恢復)。</div>

            <div class='modal-footer'>
              <button type='button'
              class='btn btn-outline-secondary'
              data-dismiss='modal'>取消</button>
              <button type='button' class='btn btn-danger' @click='deleteData'>確認刪除</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Modal (DELETE) ENDOF-->

    <!-- Modal (增修) START-->
    <div>
      <div
        id='editModal'
        class='modal fade bd-example-modal-lg'
        tabindex='-1'
        role='dialog'
        aria-labelledby='exampleModalLabel'
        aria-hidden='true'
      >
        <div class='modal-dialog modal-lg' role='document'>
          <div class='modal-content '>
            <div class='modal-header bg-danger text-white'>
              <h5 id='exampleModalLabel' class='modal-title'>
                <span>圖檔上傳</span>
              </h5>
              <button type='button' class='close' data-dismiss='modal' aria-label='Close'>
                <span aria-hidden='true'>&times;</span>
              </button>
            </div>

            <!-- xxxxxxx 上傳圖片 xxxxxxxxxx -->
            <div>
              <div class="modal-body">
                <div class="row">
                  <div class="col-sm-4">
                    <div class="form-group">
                      <label for="customFile">上傳圖片
                      </label>
                      <input
                        id="customFile"
                        ref="file"
                        type="file"
                        class="form-control"
                        @change="uploadFile"
                      />
                    </div>
                    <!-- 如何預覽本地圖檔 -->
                    <!-- <img class="img-fluid" :src="tempImg.imageUrl[0]" alt /> -->
                    </div>
                </div>
              </div>
            </div>
            <!-- xxxxxxx 上傳圖片 xxxxxxxxxx -->

            <div class='modal-footer'>
              <button type='button'
              class='btn btn-outline-secondary'
              data-dismiss='modal'>取消</button>
              <button type='button' class='btn btn-danger'
              @click='updateData'>確認</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Modal (增修) ENDOF-->
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
      storeImg: [],
      tempImg: {
        imageUrl: [],
      },
      status: {
        fileUploading: false,
      },
      updimg: [],
    };
  },
  created() {
    this.token = document.cookie.replace(
      /(?:(?:^|.*;\s*)BruceStoreT7_token\s*=\s*([^;]*).*$)|^.*$/,
      '$1',
    );
    const url = `${process.env.VUE_APP_APIPATH}auth/check`;
    this.$http.defaults.headers.common.Authorization = `Bearer ${this.token}`;
    this.$http
      .post(url, { api_token: this.token })
      .then(() => {
        this.getSorage();
      });
  },
  methods: {
    getSorage(page = 1) {
      this.isLoading = true;
      const api = `${process.env.VUE_APP_APIPATH}${this.uuid}/admin/storage`;
      this.$http
        .get(api, {
          params: {
            page: `${page}`,
            paged: 5,
          },
        })
        .then((res) => {
          this.storeImg = res.data.data;
          this.pagination = res.data.meta.pagination;
          this.isLoading = false;
        });
    },
    deleteData() {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_APIPATH}${this.uuid}/admin/storage/${this.tempImg.id}`;
      this.$http.delete(url)
        .then(() => {
          this.isLoading = false;
          this.$swal.fire({
            icon: 'success',
            title: '刪除圖檔',
            text: '成功 !',
            timer: 1000,
          }).then(() => {
            this.getSorage(this.pagination.current_page);
            // 依樣無效
          });
          $('#deleteModal').modal('hide');
        })
        .catch((error) => {
          this.isLoading = false;
          this.$swal.fire({
            icon: 'error',
            title: '刪除圖檔',
            text: `錯誤代碼${error.request.status}`,
          });
        });
      this.getSorage(this.pagination.current_page);
      // this.$swal.fire({
      //   position: 'center',
      //   icon: 'info',
      //   title: '這裡有非同部的問題，刪除檔案 會在更新後被執行，所以畫面是錯誤',
      //   text: '需要自行 F5 RELOAD ，如何才能處理 ?',
      //   timer: 4000,
      // });
    },

    openModal(isNew, item) {
      switch (isNew) {
        case 'new':
          this.tempImg = {};
          this.isNew = true;
          $('#editModal').modal('show');
          break;
        case 'edit':
          this.isNew = false;
          // this.getDetails(item.id);
          $('#editModal').modal('show');
          break;
        case 'delete':
          this.tempImg = { ...item };
          $('#deleteModal').modal('show');
          break;
        default:
          break;
      }
    },
    updateData() {
      if (this.status.fileUploading === true) {
        const api = `${process.env.VUE_APP_APIPATH}${this.uuid}/admin/storage`;
        this.$http.post(api, this.updimg, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
          .then((res) => {
            if (res.status === 200) {
              this.status.fileUploading = false;
            }
            this.$swal.fire({
              icon: 'success',
              title: '檔案上傳',
              text: '成功',
              timer: 4000,
            })
              .then(() => {
                this.getSorage(this.pagination.current_page);
                // 依樣無效
              });
            $('#editModal').modal('hide');
          })
          .catch((error) => {
            this.status.fileUploading = false;
            this.$swal.fire({
              icon: 'error',
              title: '檔案上傳失敗...',
              text: `請檢查是不是檔案大小超過 2MB ${error.request.status}`,
            });
          });
      }
    },

    uploadFile() {
      const uploadedFile = this.$refs.file.files[0];
      const formData = new FormData();
      formData.append('file', uploadedFile);
      this.status.fileUploading = true;
      this.updimg = formData;
      this.$swal.fire({
        icon: 'success',
        title: '檔案準備完成，請按下 [確認] 上傳...',
        text: 'READY',
        timer: 1000,
      });
      this.status.fileUploading = true;
    },
  },
};
</script>
