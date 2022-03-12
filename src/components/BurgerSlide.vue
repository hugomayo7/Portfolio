<template>
  <div class="menu-btn">
    <div class="barre"></div>
    <div class="barre"></div>
    <div class="barre"></div>
  </div>
  <div class="slide">
    <span class="close-btn">x</span>
    <ul class="nav__wrapper">
      <li>
        <RouterLink class="elementNav" to="/home">Accueil</RouterLink>
      </li>
      <li>
        <RouterLink class="elementNav" to="/projets">Projets</RouterLink>
      </li>
      <li>
        <RouterLink class="elementNav" to="/about">À propos</RouterLink>
      </li>
      <li>
        <RouterLink class="elementNav" to="/contact">Contact</RouterLink>
      </li>
    </ul>
    <div class="social-media">
      <ul class="list__social-media">
        <a href="https://www.linkedin.com/in/hugo-mayonobe/" target="_blank"
          ><i class="fa-brands fa-linkedin-in icon"
        /></a>
        <a href="https://www.facebook.com/hugo.mayonobe/" target="_blank"
          ><i class="fa-brands fa-facebook-f icon"
        /></a>
        <a href="https://www.instagram.com/hugo_mynb/" target="_blank"
          ><i class="fa-brands fa-instagram icon"
        /></a>
      </ul>
      <p>Me contacter</p>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import { RouterLink, RouterView } from "vue-router";
export default {
  components: {
    RouterLink,
    RouterView,
  },

  mounted() {
    $(".menu-btn").click(function () {
      $(".slide").toggleClass("isOpen");
      $(".darkLayout").toggleClass("displayDarkLayout");
    });

    $(".close-btn").click(function () {
      $(".slide").toggleClass("isOpen");
      $(".darkLayout").toggleClass("displayDarkLayout");
    });

    $(".darkLayout").click(function () {
      $(".slide").toggleClass("isOpen");
      $("#dLayout").toggleClass("displayDarkLayout");
    });

    $(".elementNav").click(function () {
      $(".slide").toggleClass("isOpen");
      $("#dLayout").toggleClass("displayDarkLayout");
    });
  },
};
</script>

<style scoped lang="scss">
.menu-btn {
  z-index: 10;
  cursor: pointer;

  .barre {
    width: 30px;
    height: 3px;
    background: rgb(0, 0, 0);
    margin-top: 5px;
  }
}

.close-btn {
  z-index: 22;
  cursor: pointer;
  display: flex;
  position: absolute;
  top: 20px;
  left: 10%;
  font-size: 26px;
  font-weight: bold;
  border: 2px solid #111;
  border-radius: 20%;
  padding: 2px 3%;
  padding-bottom: 4px;
  transition: 0.2s ease-in-out;
  width: 10%;
  justify-content: center;
}

.close-btn:hover {
  color: rgb(0, 190, 0);
  border-color: rgb(0, 190, 0);
}

.slide.isOpen {
  transform: translateX(0%);
  -webkit-transform: translateX(0%);

  .nav__wrapper li a {
    transform: translateX(0%);
    -webkit-transform: translateX(0%);
  }
}

.slide {
  position: fixed;
  display: flex;
  flex-direction: column;
  background-color: rgb(255, 255, 255);
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.616);
  border-radius: 3% 0 0 3%;
  height: 100%;
  width: 150px;
  padding: 0 20px;
  top: 0;
  right: 0;
  z-index: 15;
  align-items: center;

  transition: transform 0.5s ease-in-out;
  -webkit-transition: transform 0.5s ease-in-out;
  transform: translateX(100%);
  -webkit-transform: translateX(100%);

  .social-media {
    position: absolute;
    bottom: 10px;
    display: flex;
    flex-direction: column;
    height: 10%;
    width: 80%;
    margin-bottom: 4%;

    .list__social-media {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 65%;
      margin-bottom: 1%;

      a {
        color: #111;
        width: 30%;
        height: 50%;
        text-align: center;
        padding-top: 2%;
      }

      a:hover {
        color: rgb(0, 190, 0);
        transition: all ease-in-out 0.3s;
      }
    }
    p {
      text-align: center;
      font-size: 9px;
      text-transform: uppercase;
    }
  }

  .nav__wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: start;
    width: 100%;
    height: 45%;
    margin-top: 35%;
    margin-left: 5%;

    li {
      a {
        color: rgb(0, 0, 0);
        opacity: 0.4;
        text-transform: uppercase;
        margin: 20px 0;
        text-decoration: none;
        font-weight: bold;
        font-size: 16px;
        transition: transform ease-in-out 2s;

        -webkit-transition: transform 2s ease-in-out;
        transform: translateX(100%);
        -webkit-transform: translateX(100%);
      }

      a:hover {
        font-size: 15px;
        color: rgb(0, 190, 0);
      }
    }
  }

  .router-link-exact-active {
    opacity: 1 !important;
  }
}
</style>