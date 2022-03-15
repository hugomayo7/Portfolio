<template>
  <div class="container-time">
    <div class="timeline">
      <ul>
        <li>
          <div class="timeline-content">
            <h2 class="date">2019-2020</h2>
            <h1>Bac Technologique STI2D - Option SIN</h1>
            <p>
              Année de terminale, avec option Système d'Information et Numérique. <br> Découverte et légère initiation au HTML/CSS.
            </p>
          </div>
        </li>
        <li>
          <div class="timeline-content">
            <h2 class="date">2020-2021</h2>
            <h1>DUT Informatique - 1ere Année</h1>
            <p>
              - Algorithmique avancée <br>
              - Programmation <strong>C++</strong> <br>
              - Apprentissage <strong>HTML/CSS</strong> (Flex, ...)<br>
            </p>
          </div>
        </li>
        <li>
          <div class="timeline-content">
            <h2 class="date">2021-2022</h2>
            <h1>DUT Informatique - 2e Année</h1>
            <p>
              - <strong>PHP</strong> <br>
              - Découverte du framework <strong>Symfony</strong><br>
              - Découverte du framework <strong>ReactJS</strong><br>
              - <strong>HTML/CSS</strong><br>
              - <strong>Javascript</strong>
            </p>
          </div>
        </li>
      </ul>
    </div>
  </div>
  <div class="download-cv">
    <h2>Telecharger mon CV</h2>
    <a href="./CV_MAYONOBE_Hugo.pdf" download="CV_MAYONOBE_Hugo.pdf">
      <button class="dw-button">Download</button>
    </a>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box !important;
  font-family: "Montserrat", sans-serif;
  color: #fff;
}

strong {
  color: rgb(0, 190, 0);
}

.container-time {
  transition: 2s ease-in-out;
  min-height: 100vh;
  width: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 110px;
  background-color: #101010;
  .timeline {
    width: 100%;
    height: auto;
    max-width: 800px;
    margin: 0;
    margin-top: 5%;
    position: relative;
    ul {
      list-style: none;
      li {
        padding: 20px;
        background-color: #232427;
        color: white;
        border-radius: 10px;
        margin-bottom: 20px;
        .timeline-content {
          h1 {
            font-size: 25px;
            font-weight: 500;
            line-height: 30px;
            margin-bottom: 10px;
          }
          p {
            font-size: 16px;
            line-height: 30px;
            font-weight: 300;
          }
          .date {
            font-size: 13px;
            font-weight: 300;
            margin-bottom: 10px;
            letter-spacing: 2px;
          }
        }
      }
      li:last-child {
        margin-bottom: 0;
      }
    }
  }
}

.download-cv {
  height: auto;
  width: 100%;
  background-color: #101010;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 3%;
  padding-bottom: 5%;
  h2 {
    font-size: 20px;
    margin-bottom: 1.5%;
    text-transform: uppercase;
  }
  a {
    border: 3px solid #fff;
    width: 200px;
    background-color: rgb(255, 255, 255);
    .dw-button {
      color: rgb(0, 190, 0);
      background: transparent;
      padding: 10%;
      width: 100%;
      border: solid 3px #111;
      font-weight: 500;
      font-size: 18px;
    }
    .dw-button:hover {
      color: #fff;
      background: #101010;
      text-shadow: 0px 3px 1px rgb(0, 0, 0);
      transition: 0.3s ease-in-out;
    }
  }
}

@keyframes coming-left {
  0% {
    transform: translateX(-500px);
  }
  70% {
    transform: translateX(-20px);
  }
  100% {
    transform: translateX(-30px);
  }
}

@keyframes coming-right {
  0% {
    transform: translateX(500px);
  }
  70% {
    transform: translateX(20px);
  }
  100% {
    transform: translateX(30px);
  }
}

@media only screen and (min-width: 900px) {
  .container-time {
    .timeline::before {
      content: "";
      position: absolute;
      height: 90%;
      width: 2px;
      background-color: gray;
      left: 50%;
      transform: translateX(-50%);
    }
    .timeline {
      width: 100%;
      padding-top: 14vh;
      padding-bottom: 3vh;
      ul {
        li {
          width: 50%;
          margin-bottom: 50px;
          position: relative;
          .date {
            position: absolute;
            top: -30px;
          }
        }
        li:nth-child(odd) {
          float: left;
          clear: right;
          transform: translateX(-30px);
          border-radius: 20px 0px 20px 20px;
          animation-duration: 1.5s;
          animation-name: coming-left;
        }
        li:nth-child(even) {
          float: right;
          clear: left;
          transform: translateX(30px);
          border-radius: 0px 20px 20px 20px;
          animation-duration: 1.5s;
          animation-name: coming-right;
        }
        li::after {
          content: "";
          position: absolute;
          height: 20px;
          width: 20px;
          background-color: gray;
          border-radius: 50%;
          top: 0;
        }
        li:nth-child(odd)::after {
          transform: translate(50%, -50%);
          right: -30px;
        }
        li:nth-child(even)::after {
          transform: translate(-50%, -50%);
          left: -30px;
        }
        li:hover:after {
          background-color: rgb(0, 190, 0);
        }
      }
    }
  }
}

@media screen and (max-width: 900px) {
  .container-time {
    padding-bottom: 5%;
    .timeline {
      ul {
        margin-top: 18%;
        li {
          margin-right: 4%;
          margin-left: 4%;
        }
      }
    }
  }
}
</style>