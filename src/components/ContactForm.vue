<template>
  <div class="formulaire">
    <div class="left_part">
      <div class="app-title">
        <span>CONTACTEZ</span>
        <span>MOI</span>
      </div>
      <div class="contact_info">
        <ul>
          <li>
            <a href="mailto:hugomayonobe@gmail.com">hugomayonobe@gmail.com</a>
          </li>
          <li><a href="tel:+33782648734">07 82 64 87 34</a></li>
          <li class="media">
            <ul class="list__social-media">
              <a
                href="https://www.linkedin.com/in/hugo-mayonobe/"
                target="_blank"
                ><i class="fa-brands fa-linkedin-in icon"
              /></a>
              <a href="https://www.facebook.com/hugo.mayonobe/" target="_blank"
                ><i class="fa-brands fa-facebook-f icon"
              /></a>
              <a href="https://www.instagram.com/hugo_mynb/" target="_blank"
                ><i class="fa-brands fa-instagram icon"
              /></a>
            </ul>
          </li>
        </ul>
        <p>Mes Réseaux</p>
      </div>
    </div>
    <form class="wrapper__form" ref="form" @submit.prevent="sendEmail">
      <div class="name">
        <input
          class="nameInput"
          type="text"
          placeholder="NOM"
          name="user_name"
        />
      </div>
      <div class="mail">
        <input
          class="mailInput"
          type="email"
          placeholder="EMAIL"
          name="user_email"
        />
      </div>
      <div class="msg">
        <textarea
          class="msgInput"
          placeholder="MESSAGE"
          name="message"
        ></textarea>
      </div>
      <input class="buttons" type="submit" value="Envoyer" />
    </form>
  </div>
</template>

<script>
import emailjs from "@emailjs/browser";

export default {
  methods: {
    sendEmail() {
      emailjs
        .sendForm(
          "service_0wv2tqh",
          "template_kcrdh1i",
          this.$refs.form,
          "GB8yA50yjoyhiB68O"
        )
        .then(
          (result) => {
            console.log("SUCCESS!", result.text);
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    },
  },
};
</script>

<style scoped lang="scss">
main {
  font-family: "Roboto", sans-serif;
  .formulaire {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 75%;
    width: 80%;
    background: rgba(230, 230, 230, 0.829);
    backdrop-filter: blur(3px);
    border-radius: 12px;
    box-shadow: 0px 3px 10px rgba(49, 49, 49, 0.616);
    overflow: hidden;

    .left_part {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 90%;
      width: 100%;

      .app-title {
        display: flex;
        flex-direction: column;
        font-weight: bold;
        position: relative;
        color: rgb(0, 190, 0);
        font-size: 46px;
        width: 40%;
        height: 100%;
        padding-top: 15%;
        line-height: 1.2;
        justify-content: flex-start;
        align-items: center;
        text-shadow: 0px 1px 1px rgb(0, 0, 0);
      }

      .app-title:after {
        content: "";
        display: block;
        margin-top: 2%;
        width: 43px;
        height: 5px;
        box-shadow: 0px 0.8px 1px rgb(0, 0, 0);
        background: rgb(0, 190, 0);
      }

      .contact_info {
        display: flex;
        margin-bottom: 3%;
        flex-direction: column;
        line-height: 3;
        align-items: center;

        a {
          text-decoration: none;
          color: #111;
        }

        p {
          text-align: center;
          font-size: 9px;
          text-transform: uppercase;
        }

        ul {
          line-height: 2;
          text-transform: uppercase;
          text-align: center;
          font-size: 13px;

          .media {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: 10%;
          }

          .list__social-media {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            width: 90%;
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
        }
      }
    }

    .wrapper__form {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 60%;
      line-height: 3;
      padding-right: 10%;

      .name {
        width: 90%;
        .nameInput {
          width: 100%;
          padding: 10px 0;
          background: none;
          border: none;
          border-bottom: 2px solid rgb(138, 138, 138);
          color: rgb(0, 0, 0);
          font-size: 15px;
          outline: none;
          transition: border-color 0.2s;
        }
      }
      .msg {
        width: 90%;
        .msgInput {
          width: 100%;
          height: 100px;
          padding: 10px 0;
          background: none;
          border: none;
          border-bottom: 2px solid rgb(138, 138, 138);
          color: rgb(0, 0, 0);
          font-size: 15px;
          outline: none;
          transition: border-color 0.2s;
          line-height: 1.5;
        }
      }
      .mail {
        width: 90%;
        .mailInput {
          width: 100%;
          padding: 10px 0;
          background: none;
          border: none;
          border-bottom: 2px solid rgb(138, 138, 138);
          color: rgb(0, 0, 0);
          font-size: 15px;
          outline: none;
          transition: border-color 0.2s;
        }
      }

      .buttons {
        background: none;
        border: none;
        color: rgb(0, 190, 0);
        font-size: 16px;
        cursor: pointer;
        text-transform: uppercase;
        outline: none;
        transition: 0.2s ease-in-out;
      }
      .buttons:hover {
        color: #ffffff;
        text-shadow: 0px 1px 1px #111;
      }
    }
    ::placeholder {
      font-family: "Montserrat", sans-serif;
    }
  }
}
</style>