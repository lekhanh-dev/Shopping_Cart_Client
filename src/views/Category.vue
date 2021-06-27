<template>
  <div class="category">
    <div class="wrap-banner">
      <img :src="getLinkImage('banner_phone.jpg')" alt="img" />
    </div>
    <div class="container main">
      <div class="wrap-option">
        <div class="item-category">
          <div class="title">
            <h5>{{ categoryParent.Name }}</h5>
          </div>
          <div class="body">
            <h6 v-for="category in categoriesChild" :key="category.ID">
              {{ category.Name }}
            </h6>
          </div>
        </div>
        <div class="item-category">
          <div class="title">
            <h5>Giá</h5>
          </div>
          <div class="body">
            <div class="price price-min">
              <span>Từ</span><input type="number" /><span>đồng</span>
            </div>
            <div class="price price-max">
              <span>Đến</span><input type="number" /><span>đồng</span>
            </div>
          </div>
        </div>
      </div>
      <div class="wrap-list-product">
        <!-- <div class="none-product">Không có sản phẩm nào thỏa mãn</div> -->
        <div class="header" v-if="products.length > 0">
          <select>
            <option value="">--Sắp xếp sản phẩm--</option>
            <option value="lowToHigh">Giá sản phảm từ thấp đến cao</option>
            <option value="highToLow">Giá sản phẩm từ cao đến thấp</option>
          </select>
          <span>Có {{ products.length }} sản phẩm</span>
        </div>
        <ProductCard
          v-for="product in products"
          :key="product.ID"
          :product="product"
        />
        <div class="align-right align-center-xs" v-if="products.length > 0">
          <h5 class="upp" @click="getMoreProducts"><span>Xem thêm</span></h5>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import ProductCard from "@/components/ProductCard.vue";
import axios from "axios";

@Options({
  components: {
    ProductCard,
  },
  props: {},
  data() {
    return {
      categoriesChild: [],
      categoryParent: [],
      domainName: "http://localhost:3000",
      limit: 4,
      offset: 0,
      manufacturers: [],
      products: [],
    };
  },
  methods: {
    getLinkImage(imageName: string) {
      return require(`@/assets/img/${imageName}`);
    },
    getMoreProducts() {
      this.offset += this.limit;
      const categoryChildId = this.$route.params.categoryChildId;
      axios
        .get(
          `${this.domainName}/api/product/query/v2?limit=${this.limit}&offset=${this.offset}&categoryId=${categoryChildId}`
        )
        .then((response) => {
          this.products = this.products.concat(response.data);
        });
    },
  },
  created() {
    const categoryId = this.$route.params.categoryId;
    const categoryChildId = this.$route.params.categoryChildId;
    console.log(this.$route);

    axios
      .get(`${this.domainName}/api/category/${categoryId}`)
      .then((response) => {
        this.categoryParent = response.data[response.data.length - 1];
        this.categoriesChild = response.data.slice(0, response.data.length - 1);
      });
    axios.get(`${this.domainName}/api/manufacturer`).then((response) => {
      this.manufacturers = response.data;
    });
    axios
      .get(
        `${this.domainName}/api/product/query/v2?limit=${this.limit}&offset=${this.offset}&categoryId=${categoryChildId}`
      )
      .then((response) => {
        this.products = response.data;
      });
  },
  beforeRouteUpdate(to, from) {
    const categoryId = to.params.categoryId;
    const categoryChildId = to.params.categoryChildId;
    this.limit = 4;
    this.offset = 0;
    axios
      .get(`${this.domainName}/api/category/${categoryId}`)
      .then((response) => {
        this.categoryParent = response.data[response.data.length - 1];
        this.categoriesChild = response.data.slice(0, response.data.length - 1);
      });
    axios
      .get(
        `${this.domainName}/api/product/query/v2?limit=${this.limit}&offset=${this.offset}&categoryId=${categoryChildId}`
      )
      .then((response) => {
        this.products = response.data;
      });
  },
})
export default class Category extends Vue {
  msg!: string;
}
</script>

<style scoped lang="scss">
h5.upp {
  text-align: center;
  cursor: pointer;
}
h5.upp > span {
  display: inline-block;
  padding: 10px 30px;
  border-radius: 30px;
  color: white;
  background-color: #fcb800;
  transition: all 0.3s ease-in-out;
  &:hover {
    opacity: 0.7;
  }
}
.align-center-xs {
  flex: 100%;
  text-align: center;
  padding: 30px 0;
}
.none-product {
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
}
.wrap-banner {
  position: relative;
  top: -6px;
  width: 100%;
  height: 300px;
  padding-bottom: 50px;
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
}
.main {
  display: flex;
  flex-wrap: wrap;
  min-height: 80vh;
  .wrap-option {
    flex: 20%;
    .item-category {
      padding-bottom: 50px;
      .title {
        padding-bottom: 25px;
        h5 {
          font-weight: 700;
        }
      }
      .body {
        h6 {
          margin-bottom: 20px;
        }
        .price {
          padding-bottom: 15px;
          span {
            display: inline-block;
            width: 40px;
          }
          input {
            margin-right: 5px;
            width: 120px;
            padding-left: 10px;
            height: 25px;
            outline: none;
            border: 1px solid rgb(211, 211, 211);
          }
        }
      }
    }
  }
  .wrap-list-product {
    flex: 80%;
    display: flex;
    flex-wrap: wrap;
    .header {
      flex: 100%;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      padding: 6px;
      select {
        height: 35px;
        border-radius: 5px;
        padding: 5px;
        outline: none;
        border: 1px solid #bababa;
        border-radius: 0;
      }
    }
  }
}
</style>
