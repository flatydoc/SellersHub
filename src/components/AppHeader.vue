<template>
  <header class="header">
    <a href="" class="header__title">
      <h1 class="visually-hidden">SellersHub</h1>
      <img src="../assets/img/logo.svg" alt="SellersHub logo" />
    </a>
    <nav class="header__nav">
      <a href="" class="header__nav-link link">Каталог</a>
      <a href="" class="header__nav-link link">Вопросы и Ответы</a>
      <a href="" class="header__nav-link link">Блог</a>
    </nav>
    <div class="header__nav user__nav">
      <button class="user__nav-button button">Регистрация</button>
      <button class="user__nav-button button button_blue">Войти</button>
    </div>
    <button class="burger-button" @click="toggleOpen">
      <i v-if="!open" class="pi pi-align-left"></i>
      <i v-else-if="open" class="pi pi-times"></i>
    </button>
    <div :class="open ? 'tabmenu open' : 'tabmenu'">
      <nav class="tabmenu__nav">
        <a href="" class="tabmenu__nav-link link">Каталог</a>
        <a href="" class="tabmenu__nav-link link">Вопросы и Ответы</a>
        <a href="" class="tabmenu__nav-link link">Блог</a>
      </nav>
      <div class="buttons__wrapper">
        <button class="user__nav-button button">Регистрация</button>
        <button class="user__nav-button button button_blue">Войти</button>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "AppHeader",
  data() {
    return {
      open: false,
    };
  },

  methods: {
    toggleOpen() {
      this.open = !this.open;
    },
  },
};
</script>

<style scoped lang="scss">
.header {
  position: relative;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 120px;
  height: 100px;
  border: 1px solid rgba(229, 229, 234, 1);

  background-color: #fff;

  &__title {
    display: block;
  }

  &__nav {
    display: flex;
    align-items: center;

    &-link {
      font-size: 18px;
      font-weight: 400;
      margin-right: 50px;
      &:last-child {
        margin-right: 0;
      }
    }
  }

  .user__nav {
    &-button {
      padding: 10px 30px;

      font-weight: 500;
      font-size: 16px;

      &:last-child {
        margin-left: 8px;
      }
    }
  }

  .tabmenu {
    position: absolute;

    top: 98px;
    right: 40px;
    overflow-y: hidden;

    display: none;

    padding: 16px;
    width: auto;
    max-height: 0px;
    border: 1px solid rgba(229, 229, 234, 1);
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;

    background-color: #fff;
    transform: translateY(-400px);
    transition: transform ease 0.5s, opacity 0.5s;

    opacity: 0;

    &__nav {
      display: flex;
      flex-direction: column;

      &-link {
        margin: 15px 0;
      }
    }

    .buttons__wrapper {
      display: flex;
      justify-content: center;

      width: 100%;
    }
  }

  .open {
    transform: translateY(0);
    max-height: 1000px;

    opacity: 1;
  }

  .burger-button {
    display: none;
    align-items: center;
    justify-content: center;

    width: 40px;
    height: 40px;

    border-radius: 8px;
    background-color: #f6f6fa;

    &:hover {
      border: 1px solid rgba(68, 80, 242, 1);
    }
    &:focus {
      border: 1px solid rgba(35, 39, 39, 1);
    }
  }
}

@media (max-width: 1200px) {
  .header {
    padding: 0 80px;
  }
}

@media (max-width: 1024px) {
  .header {
    padding: 0 40px;

    &__nav {
      &-link {
        margin-right: 20px;

        text-align: center;
        font-size: 16px;
        &:first-child {
          margin-left: 20px;
        }
        &:last-child {
          margin-right: 20px;
        }
      }
    }

    .user__nav {
      &-button {
        padding: 10px 24px;
      }
    }
  }
}

@media (max-width: 768px) {
  .header {
    &__nav {
      display: none;
    }

    .tabmenu {
      display: block;
    }

    .burger-button {
      display: flex;
    }
  }
}

@media (max-width: 414px) {
  .header {
    padding: 0 16px;

    .tabmenu {
      width: 100%;
      right: 0;

      border-radius: 0;
    }
  }
}
</style>
