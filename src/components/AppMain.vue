<template>
  <main class="main">
    <section class="head">
      <div class="head__content">
        <h2 class="head__content-title title">
          Хаб <span>№1</span> онлайн продавцов
        </h2>
        <p class="head__content-subtitle">
          Повышай продажи на Wildberries и Озон со всем инструментами,
          специалистами и сообществом
        </p>
        <div>
          <button class="head__content-button button button_blue">
            Разместить услугу
          </button>
          <button class="head__content-button button">Найти специалиста</button>
        </div>
      </div>
      <div>
        <video class="head-video" preload="auto" no-controls autoplay muted>
          <source src="../assets/head_video.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
    <section class="stat">
      <h2 class="stat__title title">Повышай продажи на Wildberries и Озон</h2>
      <p class="stat__subtitle">
        Мощный опыт сообщества селлеров поможет вам в этом
      </p>
      <div class="stat__list">
        <p class="stat__list-item">
          <span>{{ members }}</span>
          Участников
        </p>
        <p class="stat__list-item">
          <span>{{ themes }}</span>
          Тем форума
        </p>
        <p class="stat__list-item">
          <span>{{ specialists }}</span>
          Каталог специалистов
        </p>
        <p class="stat__list-item">
          <span>{{ exclusiveCourses }}</span>
          Эксклюзивный курс
        </p>
      </div>
    </section>
    <section class="catalogs">
      <h2 class="catalogs__title title">
        Каталоги специалистов для маркетплейсов
      </h2>
      <div class="catalogs__list">
        <div class="card">
          <div>
            <h3 class="card__title">Картотека 399 дизайнеров</h3>
            <p class="card__desc">
              Мы оценили каждого специалиста в каталогах по самым важным
              параметрам. Пользуйтесь фильтрами и тегами, чтобы отобрать
              подходящих именно вам.
            </p>
          </div>
          <img
            src="../assets/img/catalogs_card_1.png"
            class="card-img"
            height="280"
            alt="Картотека 399 дизайнеров"
          />
        </div>
        <div class="card">
          <div>
            <h3 class="card__title">Топ 81 менеджер Вайлдберриз ЛК</h3>
            <p class="card__desc">
              В этом топе — 380+ самых востребованных менеджеров ЛК для
              маркетплейсов, которые оптимизируют личный кабинет Озон и
              Вайлдберриз.
            </p>
          </div>
          <img
            src="../assets/img/catalogs_card_2.png"
            class="card-img"
            height="226"
            alt="Топ 81 менеджер Вайлдберриз ЛК"
          />
        </div>
        <div class="card">
          <div>
            <h3 class="card__title">
              Каталог опта для продажи на Вайлдберриз и Озон
            </h3>
            <p class="card__desc">
              Что и как продавать на Валберис и Озон в 2023? Просто забирай
              самый актуальный каталог оптовиков и производств и выбирай свой
              товар
            </p>
          </div>
          <button class="card-button button button_blue">
            Cмотреть еще 23 каталога
          </button>
        </div>
      </div>
    </section>
    <section class="instruction">
      <h2 class="instruction__title title">Как работают каталоги?</h2>
      <h2 class="instruction__title mobile title">Как это работает?</h2>
      <div class="instruction__list">
        <div class="card">
          <img
            src="../assets/img/instruction_card_1.png"
            alt="Выберите категорию специалиста"
            class="card-img"
          />
          <h3 class="card__title">Выберите категорию специалиста</h3>
          <p class="card__desc">
            Здесь собраны все специалисты, сервисы и услуги - и из Телеграм
            чатов, и из бирж труда, и из Инстграм. Вам не нужно искать и
            спрашивать - все уже собрано.
          </p>
        </div>
        <div class="card">
          <img
            src="../assets/img/instruction_card_2.png"
            alt="Отбирайте по фильтрам/тегам"
            class="card-img"
          />
          <h3 class="card__title">Отбирайте по фильтрам/тегам</h3>
          <p class="card__desc">
            Мы оценили каждого специалиста в каталогах по самым важным
            параметрам. Пользуйтесь фильтрами и тегами, чтобы отобрать
            подходящих именно вам.
          </p>
        </div>
        <div class="card">
          <img
            src="../assets/img/instruction_card_3.png"
            alt="Находите вашего специалиста"
            class="card-img"
          />
          <h3 class="card__title">Находите вашего специалиста</h3>
          <p class="card__desc">
            Найдите нужного специалиста или сервис — с портфолио, прямым
            контактом, и оценками работ по самым важным параметрам.
          </p>
        </div>
      </div>
    </section>
    <div class="banner">
      <div class="banner__content">
        <h2 class="banner__content-title title">
          Есть что предложить селлерам?
        </h2>
        <p class="banner__content-subtitle">
          Создай свой профиль в каталоге Sellershub
        </p>
        <button class="banner__content-button">Присоединиться</button>
      </div>
      <img src="../assets/img/banner_pattern.png" class="banner-img" />
    </div>
    <div class="rating">
      <img src="../assets/img/rating.png" class="rating-img" />
      <div>
        <div class="rating__section">
          <h4 class="rating__section-title">У тебя будет поток клиентов</h4>
          <p class="rating__section-desc">
            Нашими каталогами ежемесячно пользуются 20000+ продавцов. Вашей
            услуги еще нет в нашем каталоге? Если вы - специалист в любой из 26
            категорий, то срочно создайте свой профиль.
          </p>
        </div>
        <div class="rating__section">
          <h4 class="rating__section-title">Повышайте рейтинг и карму</h4>
          <p class="rating__section-desc">
            У каждой услуги, сервиса и специалиста в каталогах есть рейтинг,
            созданный клиентами. Чтобы быть выше в каталоге — нужно иметь лучший
            рейтинг.
          </p>
        </div>
        <button class="rating-button button button_blue">
          Разместить услугу
        </button>
      </div>
    </div>
    <section class="popular">
      <div class="popular__header">
        <h2 class="popular__header-title title">
          Популярное в каталоге Sellershub
        </h2>
        <a href="" class="popular__header-link link link-blue">Все категории</a>
      </div>
      <div class="popular__list">
        <div class="card">
          <img
            src="../assets/img/popular_card_1.png"
            alt="Дизайнер"
            class="card-img"
          />
          <div class="card__header">
            <h4 class="card__header-title">Дизайнер</h4>
            <span class="card__header-price">от 960 ₽</span>
          </div>
          <p class="card-desc">
            Инфографика для Wildberries. Самые продающие картинки для вашего
            товара за 1-2 дня.
          </p>
          <button class="card-button button button_blue">
            Перейти в каталог
          </button>
        </div>
        <div class="card">
          <img
            src="../assets/img/popular_card_2.png"
            alt="Менеджер"
            class="card-img"
          />
          <div class="card__header">
            <h4 class="card__header-title">Менеджер</h4>
            <span class="card__header-price">от 1500 ₽</span>
          </div>
          <p class="card-desc">
            Менеджер ЛК Вайлдберриз. Опытный и всезнающий менеджер возьмет
            клиентлов на удаленную работу 2-3 часа в день
          </p>
          <button class="card-button button button_blue">
            Перейти в каталог
          </button>
        </div>
        <div class="card">
          <img
            src="../assets/img/popular_card_3.png"
            alt="Оптовик"
            class="card-img"
          />
          <div class="card__header">
            <h4 class="card__header-title">Оптовик</h4>
            <span class="card__header-price">от 10000 ₽</span>
          </div>
          <p class="card-desc">
            Мелкий и крупный опт косметики из Кореи. Просто закажите, а через
            неделю все товары будут у вас в руках.
          </p>
          <button class="card-button button button_blue">
            Перейти в каталог
          </button>
        </div>
      </div>
    </section>
    <section class="questions">
      <h2 class="questions__title title">Часто задаваемые вопросы</h2>
      <div class="accordion">
        <div
          v-for="(tab, i) in tabs"
          :index="i"
          :key="i"
          :class="tab.open ? 'accordion__item open' : 'accordion__item'"
        >
          <div @click="() => toggleOpen(i)" class="accordion__item-header">
            <h4 class="accordion__item-title">{{ tab.title }}</h4>

            <i v-if="!tab.open" class="pi pi-chevron-down"></i>
            <i v-else-if="tab.open" class="pi pi-chevron-up"></i>
          </div>

          <div class="accordion__item-content">
            <p>
              {{ tab.content }}
            </p>
          </div>
        </div>
      </div>
    </section>
    <div class="banner banner_bottom">
      <img
        src="../assets/img/banner_pattern_bottom.png"
        class="banner_bottom-img"
      />
      <div class="banner__content banner_bottom__content">
        <h2 class="banner__content-title title">
          Гоу на форум СеллерсХаба в Telegram
        </h2>
        <p class="banner__content-subtitle">
          Поставь на мьют все темы, кроме интересной тебе
        </p>
        <button class="banner__content-button">Зайти</button>
      </div>
    </div>
    <ScrollTop />
  </main>
</template>

<script>
import ScrollTop from "primevue/scrolltop";
export default {
  name: "AppMain",
  data() {
    return {
      members: 29560,
      themes: 18,
      specialists: 24,
      exclusiveCourses: 1,

      tabs: [
        {
          open: false,
          title: "Как оценить свою работу?",
          content:
            "Вопрос с подвохом! В Fever вы платите фрилансерам за проект, а не за час. Цена за услугу и все, что входит в нее, четко указана в их проектном предложении.",
        },
        {
          open: false,
          title: "Как оценить свою работу?",
          content:
            "Вопрос с подвохом! В Fever вы платите фрилансерам за проект, а не за час. Цена за услугу и все, что входит в нее, четко указана в их проектном предложении.",
        },
        {
          open: false,
          title: "Как оценить свою работу?",
          content:
            "Вопрос с подвохом! В Fever вы платите фрилансерам за проект, а не за час. Цена за услугу и все, что входит в нее, четко указана в их проектном предложении.",
        },
        {
          open: false,
          title: "Как оценить свою работу?",
          content:
            "Вопрос с подвохом! В Fever вы платите фрилансерам за проект, а не за час. Цена за услугу и все, что входит в нее, четко указана в их проектном предложении.",
        },
        {
          open: false,
          title: "Как оценить свою работу?",
          content:
            "Вопрос с подвохом! В Fever вы платите фрилансерам за проект, а не за час. Цена за услугу и все, что входит в нее, четко указана в их проектном предложении.",
        },
        {
          open: false,
          title: "Как оценить свою работу?",
          content:
            "Вопрос с подвохом! В Fever вы платите фрилансерам за проект, а не за час. Цена за услугу и все, что входит в нее, четко указана в их проектном предложении.",
        },
        {
          open: false,
          title: "Как оценить свою работу?",
          content:
            "Вопрос с подвохом! В Fever вы платите фрилансерам за проект, а не за час. Цена за услугу и все, что входит в нее, четко указана в их проектном предложении.",
        },
        {
          open: false,
          title: "Как оценить свою работу?",
          content:
            "Вопрос с подвохом! В Fever вы платите фрилансерам за проект, а не за час. Цена за услугу и все, что входит в нее, четко указана в их проектном предложении.",
        },
      ],
    };
  },
  components: {
    ScrollTop,
  },

  methods: {
    toggleOpen(index) {
      this.tabs = this.tabs.map((tab, i) => {
        if (index === i) {
          tab.open = !tab.open;
        } else tab.open = false;

        return tab;
      });
    },
  },
};
</script>

<style scoped lang="scss">
.main {
  .title {
    color: #151618;
    font-size: 36px;
    font-weight: 600;
    text-align: center;
    line-height: 116%;
  }

  .head {
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 80px 120px;

    &__content {
      width: 50%;
      &-title {
        margin-bottom: 32px;

        text-align: left;
        font-size: 48px;
        font-weight: 700;

        span {
          color: #4450f2;
        }
      }

      &-subtitle {
        margin-bottom: 42px;

        font-size: 18px;
        line-height: 130%;
      }

      &-button {
        padding: 17px 29.5px;
        line-height: 22px;
        font-size: 18px;
        font-weight: 600;

        &:first-child {
          margin-right: 16px;
        }
      }

      div {
        display: flex;
      }
    }

    &-video {
      width: 600px;
    }
  }

  .stat {
    padding: 80px 120px;

    background-color: #f6f6fa;

    text-align: center;

    &__title {
      margin-bottom: 10px;
    }

    &__subtitle {
      font-size: 18px;
    }

    &__list {
      display: flex;
      justify-content: space-evenly;

      margin-top: 60px;

      &-item {
        display: flex;
        flex-direction: column;
        align-items: center;

        font-size: 20px;
        font-weight: 600;
        color: #151618;

        span {
          font-size: 64px;
          font-weight: 700;
          color: #4450f2;
        }
      }
    }
  }

  .catalogs {
    padding: 120px 120px 0 120px;
    margin-bottom: 60px;

    &__title {
      margin-bottom: 50px;
    }

    &__list {
      display: flex;
      justify-content: center;

      .card {
        position: relative;
        overflow: hidden;

        display: flex;
        flex-direction: column;
        justify-content: space-between;

        margin-right: 20px;
        padding: 32px;
        width: 387px;
        border-radius: 10px;

        background-color: #f6f6fa;

        transition: all 0.4s ease;

        &__title {
          margin-bottom: 12px;

          color: #151618;
          font-size: 20px;
          font-weight: 600;
          line-height: 116%;
        }

        &__desc {
          line-height: 150%;
          font-weight: 400;
        }

        &:first-child {
          &-img {
            right: 24px;
          }
        }

        &:last-child {
          margin-right: 0;
        }

        &-img {
          position: relative;
          right: -32px;
          bottom: -32px;
        }

        &:first-child {
          .card-img {
            right: -8px;
          }
        }
        &-button {
          padding: 17px 37px;

          font-size: 18px;
          font-weight: 600;
        }

        &:hover {
          box-shadow: 0px 8px 10px rgba(80, 74, 145, 0.09);
          transform: translateY(-7px);
        }
      }
    }
  }

  .instruction {
    padding: 120px;
    margin-bottom: 60px;

    &__title {
      margin-bottom: 50px;
    }

    .mobile {
      display: none;
    }

    &__list {
      display: flex;
      justify-content: center;
      .card {
        max-width: 400px;
        margin-right: 20px;

        &-img {
          width: 100%;
          height: 315px;
        }

        &__title {
          margin-top: 24px;
          margin-bottom: 12px;

          color: #151618;
          font-size: 20px;
          font-weight: 600;
        }

        &__desc {
          line-height: 150%;
          font-weight: 400;
        }

        &:last-child {
          margin-right: 0;
        }
      }
    }
  }

  .banner {
    display: flex;
    justify-content: space-between;

    margin: 0 120px 60px 120px;
    min-height: 340px;
    border-radius: 10px;

    background-color: #4450f2;

    &__content {
      padding: 70px 0 70px 80px;
      &-title {
        margin-bottom: 8px;

        text-align: left;
        color: #fff;
      }

      &-subtitle {
        margin-bottom: 30px;
        color: #fff;
        font-size: 18px;
      }

      &-button {
        padding: 17px 36.5px;
        width: 215px;
        border-radius: 10px;
        border: 1px solid transparent;

        background-color: #fff;

        font-size: 18px;
        font-weight: 600;

        transition: all ease 0.2s;

        &:hover {
          color: #4450f2;
        }

        &:focus {
          border: 1px solid rgba(35, 39, 39, 1);
        }
      }
    }

    &-img {
      width: 40%;
    }
  }

  .rating {
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 120px 120px 0 120px;

    &-img {
      margin-right: 80px;
      height: 550px;
    }

    &-button {
      padding: 17px 59.5px;

      font-size: 18px;
      font-weight: 600;
    }

    &__section {
      margin-bottom: 60px;

      &-title {
        margin-bottom: 16px;

        font-size: 20px;
        font-weight: 600;
      }

      &-desc {
        line-height: 130%;
      }
    }
  }

  .popular {
    margin-top: 60px;
    padding: 120px 120px 0 120px;

    &__header {
      display: flex;
      justify-content: space-between;

      &-title {
        margin-bottom: 50px;

        text-align: left;
      }

      &-link {
        font-size: 20px;
        font-weight: 600;
        height: 20px;
      }
    }

    &__list {
      display: flex;
      justify-content: center;

      .card {
        margin-right: 20px;
        max-width: 400px;
        padding: 20px;
        border-radius: 10px;

        background-color: #f6f6fa;

        &-img {
          border-radius: 10px;
          height: 220px;
        }

        &__header {
          display: flex;
          justify-content: space-between;

          margin-top: 20px;
          margin-bottom: 16px;

          &-title {
            font-size: 20px;
            font-weight: 600;
          }

          &-price {
            color: #abbed1;
            font-size: 18px;
            font-weight: 600;
          }
        }

        &-desc {
          margin-bottom: 32px;

          line-height: 150%;
        }

        &-button {
          padding: 17px 0;
          width: 100%;

          font-size: 18px;
          font-weight: 600;
        }

        &:last-child {
          margin-right: 0;
        }
      }
    }
  }

  .questions {
    margin-top: 60px;
    padding: 120px;

    &__title {
      margin-bottom: 50px;
    }

    .accordion {
      display: grid;
      grid-auto-flow: row dense;
      grid-template-rows: 1fr auto;
      grid-template-columns: repeat(2, 1fr);
      gap: 20px;

      &__item {
        align-self: flex-start;
        padding: 0 25px;
        border-radius: 15px;
        background-color: #f6f6fa;

        &-header {
          position: relative;

          display: flex;
          align-items: center;
          justify-content: space-between;

          height: 64px;

          cursor: pointer;

          &:hover {
            .pi {
              color: rgba(68, 80, 242, 1);
            }
          }
        }

        &-title {
          font-size: 18px;
          font-weight: 500;
          line-height: 22px;
        }

        &-content {
          overflow-y: hidden;

          padding-bottom: 0;
          max-height: 0px;

          opacity: 0;

          transition: padding-bottom 0.4s ease-out, max-height 0.2s ease-out,
            opacity 0.2s ease;

          p {
            line-height: 150%;
          }
        }
      }
      .open {
        grid-row: span 2;
        .accordion__item-header {
          .pi {
            color: rgba(68, 80, 242, 1);
          }
        }
        .accordion__item-content {
          padding-bottom: 20px;
          max-height: 1000px;

          opacity: 1;
        }
      }
    }
  }
  .banner_bottom {
    display: flex;
    justify-content: flex-start;

    margin: 0;
    border-radius: 0;

    &__content {
      padding: 70px 80px 70px 0;
    }

    &-img {
      width: 50%;
      height: auto;
    }
  }
}

@media (max-width: 1200px) {
  .main {
    .head {
      padding: 80px;
    }
    .stat {
      padding: 80px;
    }
    .catalogs {
      padding: 80px 80px 0 80px;
      margin-bottom: 10px;

      &__list {
        flex-direction: column;
        align-items: center;

        .card {
          margin-bottom: 50px;
          margin-right: 0;

          &__desc {
            margin-bottom: 50px;
          }
        }
      }
    }
    .instruction {
      padding: 80px;
      &__list {
        flex-direction: column;
        align-items: center;

        .card {
          margin-bottom: 20px;
          margin-right: 0;
        }
      }
    }

    .banner {
      margin: 0 80px 60px 80px;
    }
    .banner_bottom {
      margin: 0;
    }
    .rating {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;

      padding: 120px 80px 0 80px;

      &-img {
        margin-right: 0;
        margin-bottom: 40px;
      }

      &__section {
        margin-bottom: 40px;

        &-title {
          margin-bottom: 16px;

          font-size: 20px;
          font-weight: 600;
        }

        &-desc {
          line-height: 130%;
        }
      }
    }
    .popular {
      padding: 80px 80px 0 80px;
      &__header {
        display: block;

        margin-bottom: 24px;
        &-title {
          margin-bottom: 8px;
        }
      }
      &__list {
        flex-direction: column;
        align-items: center;

        .card {
          margin-bottom: 50px;
          margin-right: 0;
        }
      }
    }
    .questions {
      padding: 80px;
    }
  }
}

@media (max-width: 1024px) {
  .main {
    .head {
      flex-direction: column-reverse;
      align-items: center;
      padding: 40px;

      &__content {
        width: 100%;
      }

      &-video {
        width: 100%;
      }
    }
    .stat {
      padding: 40px;

      &__list {
        display: grid;
        grid-auto-flow: row;
        grid-template-rows: 1fr auto;
        grid-template-columns: repeat(2, 1fr);
        row-gap: 50px;
        column-gap: 20px;

        &-item {
          span {
            font-size: 36px;
          }
        }
      }
    }
    .catalogs {
      padding: 40px;
    }
    .instruction {
      padding: 40px;
    }
    .banner {
      flex-direction: column-reverse;

      margin: 0 40px 60px 40px;
      &__content {
        padding: 24px;
      }

      &-img {
        width: 100%;
      }
    }
    .banner_bottom {
      flex-direction: column;
      margin: 0;

      &-img {
        width: 100%;
      }
    }
    .rating {
      padding: 40px 40px 0 40px;

      &-img {
        width: 100%;
        height: auto;
      }
    }
    .popular {
      padding: 40px 40px 0 40px;
    }
    .questions {
      padding: 40px;
    }
  }
}

@media (max-width: 768px) {
  .main {
    .title {
      font-size: 28px;
      font-weight: 600;
      line-height: 34px;
    }
    .head {
      &__content {
        &-title {
          text-align: center;
          font-size: 32px;
          line-height: 40px;
        }
        &-subtitle {
          text-align: center;
        }
        div {
          display: block;
        }
        &-button {
          width: 100%;

          &:first-child {
            margin-right: 0;
            margin-bottom: 16px;
          }
        }
      }
    }
    .instruction {
      &__title {
        display: none;
      }
      .mobile {
        display: block;
      }
    }
    .banner {
      &__content {
        &-button {
          width: 100%;
        }
      }
    }
    .rating {
      &-button {
        width: 100%;
      }
    }
    .popular {
      &__list {
        .card {
          &-img {
            width: 100%;
          }
        }
      }
    }
    .questions {
      .accordion {
        display: block;

        &__item {
          margin-bottom: 20px;
          padding: 0 15px;
        }
      }
    }
  }
}

@media (max-width: 414px) {
  .main {
    .head {
      padding: 40px 16px;
    }

    .stat {
      padding: 40px 16px;
    }

    .catalogs {
      padding: 40px 16px;

      &__list {
        .card {
          padding: 24px;
          width: 100%;
        }
      }
    }
    .instruction {
      padding: 40px 16px;
    }
    .banner {
      margin: 0 16px 60px 16px;
    }
    .banner_bottom {
      border-radius: 10px;
      margin: 0 16px;
    }
    .popular {
      padding: 40px 16px 0 16px;
    }
    .questions {
      padding: 40px 16px;
    }
  }
}
</style>
