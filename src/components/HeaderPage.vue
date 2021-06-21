<template>
  <header>
    <div class="container">
      <button class="menu" @click="openNav">
        <i class="fas fa-bars"></i>
      </button>
      <div class="logo">
        <span class="text-primary">SHOP </span>
        <span class="text-secondary">PHONE</span>
      </div>
      <nav :class="{ 'open-menu': openMenu }">
        <button class="close" @click="closeNav">
          <i class="fas fa-times"></i>
        </button>
        <ul>
          <li>
            Điện thoại
            <div class="nav-lv-2">
              <div class="wrap-nav-lv-2">
                <ul v-for="(value, key) in listPhone" :key="key">
                  <li v-for="phone in value" :key="phone">{{ phone }}</li>
                </ul>
              </div>
            </div>
          </li>
          <li><a href="#">Mua cũ</a></li>
          <li><a href="#">Trả góp</a></li>
          <li><a href="#">Tin công nghệ</a></li>
        </ul>
      </nav>
      <div class="group-icon">
        <div class="search">
          <i class="fas fa-search"></i>
        </div>
        <div class="cart">
          <i class="fas fa-shopping-cart"></i>
        </div>
        <div class="avatar">
          <i class="fas fa-user-alt"></i>
          <div>
            <p>Đăng nhập</p>
            <p>Đăng ký</p>
          </div>
        </div>
      </div>
    </div>
  </header>
  <div class="cache"></div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  name: "header-page",
  props: {
    msg: String,
  },
  data() {
    return {
      listPhone: [
        ["Apple", "Samsung", "Xiaomi"],
        ["OPPO", "Vsmart", "Vivo"],
        ["OnePlus", "Nubia", "Vetur"],
        ["Điện thoại phổ thông"],
      ],
      openMenu: false,
    };
  },
  methods: {
    openNav() {
      this.openMenu = true;
    },
    closeNav() {
      this.openMenu = false;
    },
  },
})
export default class HeaderPage extends Vue {
  msg!: string;
}
</script>

<style scoped lang="scss">
.cache {
  padding-top: 70px;
}
header {
  z-index: 3;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: #fcb800;
  .container {
    display: flex;
    align-items: center;
    .menu {
      outline: none;
      background-color: transparent;
      border: none;
      margin-right: 5px;
      margin-top: 1px;
      display: none;
      i {
        font-size: 20px;
        transition: all 0.3s ease-in-out;
        &:hover {
          color: white;
        }
      }
    }
    .logo {
      padding-right: 30px;
      cursor: pointer;
      span {
        font-size: 25px;
        font-weight: 700;
      }
    }
    nav {
      .close {
        display: none;
      }
      ul {
        display: flex;
        margin: 0;
        li {
          color: black;
          cursor: pointer;
          padding: 20px 0;
          margin-right: 15px;
          &:nth-child(1):hover .nav-lv-2 {
            max-height: inherit;
            visibility: visible;
            top: 100%;
            opacity: 1;
          }
          a {
            text-decoration: none;
            color: black;
          }
        }
        .nav-lv-2 {
          background: white;
          position: absolute;
          left: 0;
          right: 0;
          top: 90%;
          padding: 0 20px;
          box-shadow: 0px 1px 2px #c5c5c5;
          max-height: 0;
          visibility: hidden;
          opacity: 0;
          transition: all 0.2s ease-out;
          .wrap-nav-lv-2 {
            display: flex;
            width: 1200px;
            margin: 0 auto;
            padding: 20px 0;
            ul {
              padding-right: 50px;
              display: block;
              li {
                padding: 10px 0;
                transition: all 0.3s ease-in-out;
                &:hover {
                  color: #fcb800;
                }
              }
            }
          }
        }
      }
    }
    .group-icon {
      flex: 1 1 auto;
      text-align: right;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      > div:not(.avatar) {
        margin-left: 20px;
        i {
          font-size: 20px;
          transition: all 0.3s ease-in-out;
          cursor: pointer;
          &:hover {
            color: white;
          }
        }
      }
      .avatar {
        display: flex;
        align-items: center;
        i {
          font-size: 20px;
          margin-left: 20px;
        }
        div {
          margin-left: 5px;
          p {
            margin: 0;
            font-size: 12px;
            text-align: left;
            font-weight: 700;
            transition: all 0.3s ease-in-out;
            cursor: pointer;
            &:hover {
              color: white;
            }
          }
        }
      }
    }
  }
}
@media (max-width: 768px) {
  header {
    .container {
      padding: 20px;
      .menu {
        display: block;
        padding: 0;
        cursor: pointer;
      }
      .logo {
        span {
          font-size: 22px;
        }
      }
      nav {
        position: absolute;
        width: 100vw;
        height: 100vh;
        top: 0;
        left: -120%;
        bottom: 0;
        background-color: white;
        transition: all 0.5s ease-in;
        overflow-y: scroll;
        > ul {
          padding-left: 20px;
          flex-direction: column;
          margin-top: 20px;
          li {
            margin-right: 0;
          }
          .nav-lv-2 {
            position: static;
            padding: 0 20px;
            box-shadow: 0px 0px 0px transparent;
            max-height: inherit;
            visibility: visible;
            opacity: 1;
            .wrap-nav-lv-2 {
              display: block;
              padding-bottom: 0;
              width: auto;
            }
          }
        }
        .close {
          display: block;
          position: absolute;
          top: 20px;
          right: 20px;
          outline: none;
          font-size: 20px;
          border: none;
          cursor: pointer;
          background-color: transparent;
          transition: all 0.5s ease-in;
        }
      }
      .open-menu {
        display: block;
        left: 0;
      }
    }
  }
}
@media (max-width: 576px) {
  header {
    .container {
      padding: 10px;
      .logo {
        padding-right: 0;
        display: none;
        span {
          font-size: 14px;
        }
      }
    }
  }
}
</style>
