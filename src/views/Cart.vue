<template>
  <div class="container cart">
    <h1>Giỏ hàng</h1>
    <div class="wrap-cart-product">
      <div class="product-list">
        <p class="info"><span>Có n sản phẩm trong túi</span></p>
        <div
          class="product-item"
          v-for="product in productList"
          :key="product.id"
        >
          <div class="product-image">
            <img :src="getLinkImage(product.image)" alt="image" />
          </div>
          <div class="product-detail">
            <div class="product-name">
              <a href="#"> {{ product.name }}</a>
            </div>
            <div class="product-description">{{ product.description }}</div>
            <div class="product-price">{{ formatPrice(product.price) }}</div>
          </div>
          <div class="product-counter">
            <button class="btn-decrease">-</button>
            <input type="number" />
            <button class="btn-increase">+</button>
          </div>
          <div class="product-action"><i class="fas fa-times"></i></div>
        </div>
      </div>
    </div>
    <div class="wrap-cart-info">
      <p class="hide">Hide</p>
      <div class="wrap-promo-code">
        <p>Nhập mã giảm giá</p>
        <input type="text" />
        <button>Áp dụng</button>
      </div>
      <div class="wrap-checkout">
        <div class="wrap-price-sale">
          <span>Khuyến mại</span>
          <span class="price-sale">-{{ formatPrice(200000) }}</span>
        </div>
        <div class="wrap-price-total">
          <span>Tổng tiền</span>
          <span class="price-sale">{{ formatPrice(2000000) }}</span>
        </div>
        <button class="btn-checkout">THANH TOÁN</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
@Options({
  data() {
    return {
      productList: [
        {
          id: 1,
          name: "Iphone 12 Pro Max",
          price: 30000000,
          description: "Phiên bản iphone mới nhất năm nay.",
          num: 2,
          image: "product18.jpg",
        },
        {
          id: 2,
          name: "Iphone 13 Pro Max",
          price: 40000000,
          num: 3,
          description: "Phiên bản iphone mới nhất năm nay.",
          image: "product9.jpg",
        },
        {
          id: 3,
          name: "Iphone 14 Pro Max",
          price: 50000000,
          num: 4,
          description: "Phiên bản iphone mới nhất năm nay.",
          image: "product10.jpg",
        },
        {
          id: 4,
          name: "Iphone 12 Pro Max",
          price: 30000000,
          description: "Phiên bản iphone mới nhất năm nay.",
          num: 2,
          image: "product18.jpg",
        },
        {
          id: 5,
          name: "Iphone 13 Pro Max",
          price: 40000000,
          num: 3,
          description: "Phiên bản iphone mới nhất năm nay.",
          image: "product9.jpg",
        },
        {
          id: 6,
          name: "Iphone 14 Pro Max",
          price: 50000000,
          num: 4,
          description: "Phiên bản iphone mới nhất năm nay.",
          image: "product10.jpg",
        },
      ],
    };
  },
  methods: {
    getLinkImage(imageName: string) {
      return require(`@/assets/img/${imageName}`);
    },
    formatPrice(price: bigint) {
      return new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND",
      }).format(price);
    },
  },
})
export default class Cart extends Vue {}
</script>

<style lang="scss" scoped>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
input[type="number"] {
  -moz-appearance: textfield;
}
.cart {
  padding-bottom: 20px;
  display: flex;
  flex-wrap: wrap;
  h1 {
    font-size: 20px;
    flex: 100%;
  }
  input,
  button {
    padding: 5px 10px;
    border: none;
    outline: none;
    text-align: center;
  }
  input {
    border-top: 1px solid rgb(145, 145, 145);
    border-bottom: 1px solid rgb(145, 145, 145);
  }
  button {
    background-color: #fcb800;
    font-family: "Work Sans", sans-serif;
    color: white;
    border-top: 1px solid #fcb800;
    border-bottom: 1px solid #fcb800;
    cursor: pointer;
  }

  .wrap-cart-product {
    flex: 60%;
    .product-list {
      margin: 10px 0;
      border-bottom: 1px solid rgb(197, 197, 197);
      .product-item {
        padding: 30px;
        display: flex;
        border-top: 1px solid rgb(197, 197, 197);
        .product-image {
          width: 70px;
          height: 100px;
          img {
            width: 100%;
            height: 100%;
            object-fit: contain;
          }
        }
        .product-detail {
          flex: 50%;
          padding-left: 15px;
          padding-top: 10px;
          .product-name {
            font-weight: 600;
            padding-bottom: 5px;
            a {
              text-decoration: none;
            }
          }
          .product-description {
            font-size: 13px;
          }
          .product-price {
            padding: 10px 0;
            font-weight: 600;
            font-weight: 25px;
          }
        }
        .product-counter {
          flex: 20%;
          display: flex;
          align-items: center;
          input {
            width: 50px;
          }
        }
        .product-action {
          flex: 10%;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          i {
            cursor: pointer;
          }
        }
      }
    }
  }
  .wrap-cart-info {
    flex: 40%;
    padding-left: 50px;
    box-sizing: border-box;
    .hide {
      visibility: hidden;
    }
    .wrap-promo-code {
      border-bottom: 1px solid rgb(197, 197, 197);
      padding-bottom: 30px;
      input {
        border-left: 1px solid rgb(145, 145, 145);
      }
    }
    .wrap-checkout {
      padding-top: 20px;
      .wrap-price-sale,
      .wrap-price-total {
        display: flex;
        justify-content: space-between;
        padding: 15px;
      }
      .btn-checkout {
        width: 100%;
        padding: 15px 0;
        cursor: pointer;
        outline: none;
        border: none;
        background-color: #fcb800;
        color: white;
        font-weight: 700;
        font-size: 20px;
      }
    }
  }
}
</style>
