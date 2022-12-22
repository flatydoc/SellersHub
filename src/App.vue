<template>
  <AppHeader />
  <AppMain />
  <AppFooter />
</template>

<script>
import AppMain from "./components/AppMain.vue";
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";

export default {
  name: "App",
  components: {
    AppMain,
    AppHeader,
    AppFooter,
  },
};
</script>

<style lang="scss">
@import "./css/normalize.css";
@import "./css/fonts.css";

#app {
  font-family: Gilroy;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #232727;

  .visually-hidden {
    position: absolute;
    overflow: hidden;

    width: 1px;
    height: 1px;
    padding: 0;
    border: 0;
    margin: -1px;

    clip: rect(0 0 0 0);
  }

  .button {
    display: flex;
    justify-content: center;
    align-items: center;

    border: 1px solid rgba(229, 229, 234, 1);
    border-radius: 10px;
    background-color: transparent;

    color: #232727;

    transition: all ease 0.2s;

    &:hover {
      border: 1px solid rgba(68, 80, 242, 1);
    }

    &:focus {
      border: 1px solid rgba(35, 39, 39, 1);
    }

    &_blue {
      border: 1px solid transparent;
      background-color: #4450f2;

      color: #fff;

      &:hover {
        background-color: #2432e8;
      }

      &:focus {
        border: 1px solid #151618;
        background-color: #4450f2;
      }
    }
  }

  .link {
    border: 1px solid transparent;

    color: #232727;

    transition: all ease 0.2s;

    &:hover {
      color: #4450f2;
    }
    &:focus {
      border: 1px solid rgba(0, 0, 0, 1);
      border-radius: 2px;

      color: #4450f2;
    }
    &:active {
      color: #2432e8;
    }

    &-blue {
      color: #4450f2;

      &:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>
