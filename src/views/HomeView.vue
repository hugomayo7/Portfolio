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
        <p class="lastname">MAYONOBE</p>
        <p class="firstname">Hugo</p>
      </div>
      <div class="barre"></div>
      <div class="resume">
        <p>
          Je suis blablabla.... ihsbcuidsgc bhuienebfzehceuicbejcbehjfbuiz bihr
          fehzhb zebfze b erybeb
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
  display: flex;
  flex-direction: row;
  font-family: "Roboto", sans-serif;
  justify-content: space-evenly;
  align-items: center;
  height: 95%;
  padding-top: 60px;

  .my_picture {
    height: 60%;
    width: 40%;
    text-align: center;

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
      width: 60%;
      background: rgba(226, 226, 226, 0.349);
      backdrop-filter: blur(3px);
      margin: 5%;
      margin-top: 6%;

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
      width: 33%;
      height: 4px;
      background: rgb(0, 190, 0);
      border-radius: 15%;
      box-shadow: 0px 3px 7px rgba(49, 49, 49, 0.616);
      margin-bottom: 5%;
    }

    .resume {
      font-size: 18px;
    }
  }
}

@media screen and (max-width: 900px) {
  main {
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    overflow: hidden;
    height: 700px;
    padding-top: 25%;

    .me {
      display: flex;
      justify-content: space-evenly;
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
}
</style>