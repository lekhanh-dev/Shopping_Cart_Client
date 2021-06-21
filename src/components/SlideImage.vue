<template>
  <div class="container slide-image">
    <div class="wrap-image">
      <div class="wrap-slide">
        <button class="btn btn-back" @click="handleBack">
          <i class="fas fa-chevron-left"></i>
        </button>
        <button class="btn btn-next" @click="handleNext">
          <i class="fas fa-chevron-right"></i>
        </button>
        <img
          class="image-left"
          :style="{
            left: images[selectedImageIndex].left + '%',
            transition: transitionCss,
          }"
          :src="getLinkImage(images[selectedImageIndex].name)"
          alt="image"
        />
        <img
          class="image-right"
          :style="{
            left: images[imageNextIndex].left + '%',
            transition: transitionCss,
          }"
          :src="getLinkImage(images[imageNextIndex].name)"
          alt="image"
        />
        <div class="ads">
          <img :src="getLinkImage('ads.jpg')" alt="image" />
        </div>
      </div>

      <div class="wrap-image-smail">
        <div class="wrap-image-smail-item">
          <img :src="getLinkImage('image_smail1.jpg')" alt="image" />
        </div>
        <div class="wrap-image-smail-item">
          <img :src="getLinkImage('image_smail2.jpg')" alt="image" />
        </div>
        <div class="wrap-image-smail-item">
          <img :src="getLinkImage('image_smail3.jpg')" alt="image" />
        </div>
        <div class="wrap-image-smail-item">
          <img :src="getLinkImage('image_smail4.jpg')" alt="image" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  name: "slide-image",
  props: {
    msg: String,
  },
  data() {
    return {
      images: [
        { name: "image1.jpg", left: 0 },
        { name: "image2.jpg", left: 100 },
        { name: "image3.jpg", left: 100 },
        { name: "image4.jpg", left: 100 },
        { name: "image5.jpg", left: 100 },
        { name: "image6.jpg", left: 100 },
      ],
      idTimeOut: 0,
      idInterval: 0,
      selectedImageIndex: 0,
      imageNextIndex: 1,
      transitionCss: "all 0.5s ease-in-out",
    };
  },
  methods: {
    getLinkImage(imageName: string) {
      return require(`@/assets/img/${imageName}`);
    },
    initEffect() {
      this.idInterval = setInterval(() => {
        this.transitionCss = "all 0.5s ease-in-out";
        this.images[this.selectedImageIndex].left = -100;
        this.images[this.imageNextIndex].left = 0;
        this.idTimeOut = setTimeout(() => {
          this.transitionCss = "inherit";
          this.images[this.selectedImageIndex].left = 100;
          this.selectedImageIndex = this.imageNextIndex;
          this.imageNextIndex = (this.imageNextIndex + 1) % this.images.length;
        }, 500);
      }, 3000);
    },
    handleNext() {
      clearInterval(this.idInterval);
      clearTimeout(this.idTimeOut);
      this.transitionCss = "all 0.5s ease-in-out";
      this.images[this.selectedImageIndex].left = -100;
      this.images[this.imageNextIndex].left = 0;
      this.idTimeOut = setTimeout(() => {
        this.transitionCss = "inherit";
        this.images[this.selectedImageIndex].left = 100;
        this.selectedImageIndex = this.imageNextIndex;
        this.imageNextIndex = (this.imageNextIndex + 1) % this.images.length;
        this.initEffect();
      }, 500);
    },
    handleBack() {
      clearInterval(this.idInterval);
      clearTimeout(this.idTimeOut);
      this.transitionCss = "inherit";
      this.imageNextIndex =
        (this.selectedImageIndex -
          (1 % this.images.length) +
          this.images.length) %
        this.images.length;
      this.images[this.imageNextIndex].left = -100;
      this.idTimeOut = setTimeout(() => {
        this.transitionCss = "all 0.5s ease-in-out";
        this.images[this.selectedImageIndex].left = 100;
        this.images[this.imageNextIndex].left = 0;
        clearTimeout(this.idTimeOut);
        this.idTimeOut = setTimeout(() => {
          clearTimeout(this.idTimeOut);
          this.selectedImageIndex = this.imageNextIndex;
          this.initEffect();
        }, 500);
      }, 1);
    },
  },
  mounted() {
    this.initEffect();
  },
  destroyed() {
    clearInterval(this.idInterval);
  },
})
export default class SlideImage extends Vue {}
</script>

<style scoped lang="scss">
.slide-image {
  img {
    width: 100%;
    height: auto;
  }
  .wrap-image {
    display: flex;
    .wrap-slide {
      flex: 66.66%;
      position: relative;
      overflow: hidden;
      &:hover .btn {
        opacity: 1;
        visibility: visible;
      }
      .btn {
        position: absolute;
        z-index: 2;
        top: 0;
        bottom: 15%;
        outline: none;
        cursor: pointer;
        border: none;
        width: 40px;
        background-color: rgba(0, 0, 0, 0.2);
        color: white;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease-in;
        i {
          font-size: 20px;
        }
      }
      .btn-next {
        right: 0;
      }
      .btn-back {
        left: 0;
      }
      .image-left,
      .image-right {
        position: absolute;
        top: 0;
        z-index: 1;
      }
      .image-left {
        left: 0;
      }
      .image-right {
        left: 100%;
      }
      .ads {
        position: absolute;
        bottom: 0;
      }
    }
    .wrap-image-smail {
      flex: 33.33%;
      display: flex;
      flex-wrap: wrap;
      .wrap-image-smail-item {
        flex: 50%;
      }
    }
  }
}
@media (max-width: 992px) {
  .slide-image {
    padding-bottom: 20px;
    .wrap-image {
      .wrap-slide {
        width: 100%;
        padding-top: 43.47%;
        .btn {
          bottom: 0;
        }
        .ads {
          display: none;
        }
      }
      .wrap-image-smail {
        display: none;
      }
    }
  }
}
@media (max-width: 576px) {
  .slide-image {
    display: none;
    .wrap-image {
      .wrap-slide {
        .btn {
          display: none;
        }
      }
    }
  }
}
</style>
