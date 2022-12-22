<template>
  <footer class="footer">
    <a href="" class="footer__logo">
      <img src="../assets/img/logo.svg" alt="SellersHub logo" />
    </a>
    <div class="footer__wrapper">
      <div class="footer__contacts">
        <a href="" class="footer__contacts-logo">
          <img src="../assets/img/logo.svg" alt="SellersHub logo" />
        </a>
        <div class="social__wrapper">
          <p>Будте в курсе новостей!</p>
          <ul class="social__list">
            <li class="social__list-item">
              <a href="">
                <img src="../assets/img/social/vk.svg" alt="vk link" />
              </a>
            </li>
            <li class="social__list-item">
              <a href="">
                <img src="../assets/img/social/tg.svg" alt="tg link" />
              </a>
            </li>
            <li class="social__list-item">
              <a href="">
                <img
                  src="../assets/img/social/youtube.svg"
                  alt="youtube link"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="footer__menu">
        <div class="footer__menu-block">
          <p>Продукты</p>
          <ul class="footer__menu-list">
            <li class="footer__menu-item">
              <a href="" class="link">Каталог</a>
            </li>
            <li class="footer__menu-item">
              <a href="" class="link">Вопросы и ответы</a>
            </li>
            <li class="footer__menu-item">
              <a href="" class="link">Блог</a>
            </li>
            <li class="footer__menu-item">
              <a href="" class="link">О компании</a>
            </li>
            <li class="footer__menu-item">
              <a href="" class="link">Помощь</a>
            </li>
          </ul>
        </div>
        <div class="footer__menu-block">
          <p>Категории</p>
          <ul class="footer__menu-list">
            <li class="footer__menu-item">
              <a href="" class="link">SMM</a>
            </li>
            <li class="footer__menu-item">
              <a href="" class="link">Видео и аудио</a>
            </li>
            <li class="footer__menu-item">
              <a href="" class="link">Поддержка</a>
            </li>
            <li class="footer__menu-item">
              <a href="" class="link">Копирайтинг</a>
            </li>
            <li class="footer__menu-item">
              <a href="" class="link">Все сравнения</a>
            </li>
            <li class="footer__menu-item">
              <a href="" class="link">Разработка</a>
            </li>
            <li class="footer__menu-item">
              <a href="" class="link">Маркетинг</a>
            </li>
            <li class="footer__menu-item">
              <a href="" class="link">Музыка</a>
            </li>
            <li class="footer__menu-item">
              <a href="" class="link">Бизнес</a>
            </li>
            <li class="footer__menu-item">
              <a href="" class="link">Дизайн</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="footer__copyright">
      <p class="copyright">© 2022 Sellershub.</p>
      <div class="user__nav">
        <a href="" class="user__nav-link link">Условия использования</a>
        <a href="" class="user__nav-link link">Политика конфиденциальности</a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "AppFooter",
};
</script>

<style scoped lang="scss">
.footer {
  padding: 80px 120px 0 120px;

  background-color: #f6f6fa;

  font-weight: 400;

  &__logo {
    display: none;
  }

  &__wrapper {
    display: flex;
    justify-content: space-between;

    margin-bottom: 65px;
    min-height: 200px;

    .footer__contacts {
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      margin-right: 20px;

      .social__wrapper {
        .social__list {
          display: flex;

          margin-top: 20px;

          &-item {
            margin-right: 20px;
            transition: transform ease 0.2s;

            &:hover,
            &:focus {
              transform: scale(110%);
            }
            &:active {
              transform: scale(90%);
            }
          }
        }
      }
    }

    .footer__menu {
      display: flex;
      justify-content: space-between;

      height: 100%;

      &-block {
        p {
          margin-bottom: 10px;

          font-size: 18px;
          font-weight: 600;
        }
      }

      &-list {
        display: grid;
        grid-auto-flow: column;
        grid-template-rows: repeat(5, auto);
      }

      &-item {
        margin-top: 15px;

        &:nth-child(1) {
          margin-right: 150px;
        }
      }
    }
  }

  &__copyright {
    display: flex;
    justify-content: space-between;
    align-items: center;

    height: 70px;
    border-top: 1px solid rgba(229, 229, 234, 1);

    font-size: 14px;

    .copyright {
      color: #aeaeb2;
    }

    .user__nav {
      &-link {
        font-weight: 500;

        &:last-child {
          margin-left: 50px;
          margin-right: 20px;
        }
      }
    }
  }
}

@media (max-width: 1200px) {
  .footer {
    padding: 80px 80px 0 80px;
  }
}

@media (max-width: 1024px) {
  .footer {
    padding: 40px 40px 0 40px;

    &__wrapper {
      .footer__menu {
        &-item {
          &:nth-child(1) {
            margin-right: 100px;
          }
        }
      }
    }
  }
}

@media (max-width: 768px) {
  .footer {
    &__logo {
      display: block;
    }

    &__wrapper {
      flex-direction: column-reverse;

      margin-bottom: 50px;

      .footer__contacts {
        &-logo {
          display: none;
        }
      }

      .footer__menu {
        flex-direction: row-reverse;
        justify-content: flex-end;

        margin: 50px 0 40px 0;

        &-list {
          display: block;
        }
      }
    }

    &__copyright {
      flex-direction: column;
      align-items: flex-start;

      padding: 40px 0;
      height: 160px;

      .user__nav {
        display: flex;
        flex-direction: column;
        &-link {
          &:last-child {
            margin-left: 0;
            margin-right: 0;
            margin-top: 12px;
          }
        }
      }
    }
  }
}

@media (max-width: 414px) {
  .footer {
    padding: 40px 16px 0 16px;
  }
}
</style>
