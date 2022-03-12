<template>
  <div class="wrapper site-footer__wrapper">
    <ul class="pages">
      <li>
        <RouterLink to="/home">Accueil</RouterLink>
      </li>
      <li>
        <RouterLink to="/projets">Projets</RouterLink>
      </li>
      <li>
        <RouterLink to="/about">À propos</RouterLink>
      </li>
      <li>
        <RouterLink to="/contact">Contact</RouterLink>
      </li>
    </ul>
    <div class="name">
      <p>© 2022 Mayonobe Hugo</p>
    </div>
  </div>
</template>

<script>
import { RouterLink, RouterView } from "vue-router";
export default {
  components: {
    RouterLink,
    RouterView,
  },
};
</script>

<style scoped lang="scss">
.site-footer__wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: auto;
  background-color: rgb(255, 255, 255);
  font-family: "Montserrat", sans-serif;
  box-shadow: 15px 5px 25px rgba(49, 49, 49, 0.616);
  z-index: 10;

  .pages {
    display: flex;
    flex-direction: row;
    width: 35%;
    justify-content: space-around;
    margin-top: 2%;
    margin-bottom: 2%;

    li {
      text-align: center;
      a {
        text-decoration: none;
        color: #111;
        font-size: 14px;
      }
      a:hover {
        color: rgba(0, 190, 0, 0.726);
        transition: all ease-in-out 0.2s;
      }
    }
  }

  .name {
    margin: 1%;
    margin-bottom: 3%;
    font-size: 10px;
  }
}

@media screen and (max-width: 900px) {
  .pages {
    width: 80% !important;
    margin: 5% !important;
  }
}
</style>