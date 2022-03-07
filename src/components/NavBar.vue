<script>
import { RouterLink, RouterView } from "vue-router";
import BurgerSlide from "./BurgerSlide.vue";

export default {
  components: {
    BurgerSlide,
    RouterLink,
    RouterView,
  },
};
</script>

<template>
  <div class="wrapperr site-header__wrapper">
    <div class="site-header__logo">
      <RouterLink id="logo" to="/">MAYONOBE</RouterLink>
    </div>
    <div class="site-header__cat">
      <ul class="nav__wrapper">
        <RouterLink class="homePage" to="/home">Accueil</RouterLink>
        <RouterLink class="projectsPage" to="/projets">Projets</RouterLink>
        <RouterLink class="aboutPage" to="/about">À propos</RouterLink>
        <RouterLink class="contactPage" to="/contact">Contact</RouterLink>
      </ul>
    </div>
    <div class="burger">
      <BurgerSlide />
    </div>
  </div>
</template>

<style scoped lang="scss">
.wrapperr {
  position: fixed;
  display: flex;
  width: 100%;
  background-color: rgb(255, 255, 255);
  height: 11vh;
  box-shadow: 0px 5px 8px rgba(49, 49, 49, 0.616);
  z-index: 14;

  a {
    text-decoration: none;
    color: rgb(0, 0, 0);
    text-transform: uppercase;
  }

  #logo {
    font-weight: bold;
    font-size: 22px;
  }
}

.site-header__logo {
  display: flex;
  align-items: center;
  width: 40%;
  margin-left: 5%;
  z-index: 9;
  a {
    border-bottom: none !important;
  }
}

.site-header__cat {
  display: flex;
  align-items: center;
  width: 60%;
  justify-content: center;
  z-index: 9;

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    height: 100%;
    width: 25%;
    text-align: center;
  }

  a:hover {
    color: rgb(122, 122, 122);
    transition: 0.3s ease-in-out;
  }

  ul {
    display: flex;
    justify-content: space-between;
    width: 80%;
    height: 100%;
    align-items: center;
  }
}

.burger {
  display: none;
  width: 0%;
  margin-right: 5%;
}

.router-link-exact-active {
  border-bottom: 3px solid rgb(0, 190, 0);
  transition: 0.2s ease-in-out;
}

@media screen and (max-width: 900px) {
  .site-header__cat {
    ul {
      display: none;
    }
  }

  .site-header__cat {
    width: 50%;
  }

  .burger {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 10%;
  }
}
</style>
