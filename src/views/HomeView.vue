<template>
  <main>
    <div class="my_picture">
      <img
        src="https://uploads-ssl.webflow.com/5e7b6b23dd8fc2114f1bac22/5e8492f63fb6cf4a9ef4a307_designer.svg"
        alt="me"
      />
    </div>
    <div class="me">
      <div class="my_name">
        <p class="lastname"><strong>Hugo</strong></p>
        <p class="firstname"><strong>MAYONOBE</strong></p>
      </div>
      <div class="barre"></div>
      <div class="resume">
        <p>
          Passionné par le <strong>Développement Web</strong>
        </p>
      </div>
    </div>
  </main>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
main {
  font-family: "Montserrat", sans-serif;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  height: 75%;
  padding-top: 25vh;

  .my_picture {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60%;
    width: 40%;

    img {
      width: 70%;
      height: 70%;
    }
  }

  .me {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 60%;
    height: 60%;
    text-align: center;

    .my_name {
      display: flex;
      flex-direction: column;
      padding: 5%;
      box-shadow: 0px 3px 7px rgba(49, 49, 49, 0.616);
      border-radius: 7px;
      width: 50%;
      background: rgba(255, 255, 255, 0.747);
      backdrop-filter: blur(3px);
      margin-top: 6%;
      line-height: 1.2;

      .lastname {
        font-weight: bold;
        font-size: 60px;
        letter-spacing: 1px;
      }

      .firstname {
        font-size: 34px;
        letter-spacing: 1px;
      }
    }

    .barre {
      margin-top: 3%;
      width: 33%;
      height: 4px;
      background: rgb(0, 190, 0);
      border-radius: 15%;
      box-shadow: 0px 3px 7px rgba(49, 49, 49, 0.616);
      margin-bottom: 5%;
    }

    .resume {
      font-size: 24px;

      p {
        strong {
          font-weight: bold;
          text-decoration: underline rgb(0, 190, 0) 3px;
        }
        strong:hover {
          text-decoration: underline rgb(221, 0, 184);
          transition: 0.4s ease-in-out;
        }
      }
    }
  }
}

@media screen and (max-width: 900px) {
  main {
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    height: 85%;
    padding-top: 25%;

    .me {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 300px;
      transition: 1s ease-in-out;

      .my_name {
        .lastname {
          font-size: 40px;
        }
        .firstname {
          font-size: 30px;
        }
      }

      .resume {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 80%;
        height: 30%;
        font-size: 20px;
      }
    }

    .my_picture {
      height: auto;
      width: auto;
    }
  }
}

@media screen and (max-width: 350px) {
  main .me .my_name {
    transition: 2s ease-in-out;
    .lastname {
      font-size: 25px;
    }
    .firstname {
      font-size: 15px;
    }
  }
  main .me .resume {
      font-size: 15px;
    }
}
</style>