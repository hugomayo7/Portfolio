<template>
  <div class="card">
    <div class="year">
      <p class="year__project">{{ info_project.year }}</p>
    </div>
    <div :style="changeBackground" class="cardImage" />
    <div class="projet">
      <div class="project--info">
        <div class="title">{{ info_project.title }}</div>
        <div class="desc">{{ info_project.resume }}</div>
      </div>
      <div class="button--more">
        <button
          class="more-bttn"
          type="button"
          data-bs-toggle="modal"
          :data-bs-target="'#project-' + info_project.id"
        >
          En savoir plus
        </button>
      </div>
    </div>
  </div>
  <!-- Modal -->
  <div
    class="modal fade"
    :id="'project-' + info_project.id"
    tabindex="-1"
    role="dialog"
  >
    <div class="modal-dialog modal-lg" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title title_modal">{{ info_project.title }}</h5>
          <p class="year__project--modal">{{ info_project.year }}</p>
        </div>
        <div class="modal-body content_modal">
          <div class="picture">
            <img
              :src="info_project.image"
              :alt="'image project' + info_project.id"
            />
          </div>
          <div class="project-global">
            <div class="project-details">
              <h5 class="sous-title_modal">Détails :</h5>
              <hr />
              <div
                class="content-details"
                v-html="markdownToHtml_details"
              ></div>
            </div>
            <div class="project-techno">
              <h5 class="sous-title_modal">Technologies :</h5>
              <hr />
              <div class="content-techno" v-html="markdownToHtml_techno"></div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="more-bttn btn btn-secondary close__button"
            data-bs-dismiss="modal"
          >
            Fermer
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { marked } from "marked";
import { computed } from "vue";
export default {
  props: {
    info_project: Object,
  },
  setup(props) {
    const changeBackground = computed(() => {
      return {
        backgroundImage: `url(${props.info_project.image})`,
      };
    });
    return {
      changeBackground,
    };
  },
  data() {
    return {
      details_prj: this.info_project.details,
      techno_prj: this.info_project.techno,
    };
  },
  computed: {
    markdownToHtml_details() {
      return marked(this.details_prj);
    },
    markdownToHtml_techno() {
      return marked(this.techno_prj);
    },
  },
};
</script>

<style scoped lang="scss">
.card {
  height: 34vh;
  width: 32%;
  margin: 0.5%;
  margin-bottom: 1%;
  margin-top: 2%;
  border-radius: 7px;
  box-shadow: 3px 5px 15px 0px #00000054;

  .year {
    .year__project {
      position: absolute;
      background: #fff;
      right: 10px;
      padding: 2%;
      box-shadow: 0px 1px 2px 0px #000000;
      border-radius: 0 0 5px 5px;
      font-size: 14px;
    }
  }

  .cardImage {
    width: 100%;
    height: 70%;
    background-size: cover;
    background-position: center;
    box-shadow: inset 0px -2px 5px 0px #000000;
    border-radius: 7px 7px 0 0;
  }

  .projet {
    display: flex;
    flex-direction: row;
    height: auto;
    width: 100%;
    justify-content: space-between;
    .project--info {
      display: flex;
      flex-direction: column;
      width: 60%;
      padding: 1%;
      .title {
        font-size: 16px;
        font-weight: bold;
        text-transform: uppercase;
        margin: 5%;
      }
      .desc {
        font-size: 14px;
        height: 1%;
        margin: 5%;
        margin-top: 2%;
        padding-bottom: 3%;
      }
    }
    .button--more {
      display: flex;
      align-items: center;
      padding: 5%;
    }
  }
}

.more-bttn {
  display: inline-block;
  font-family: "Montserrat", sans-serif;
  padding: 8px;
  border-radius: 15px;
  color: rgb(0, 0, 0);
  font-size: 12px;
  transition: all 0.3s;
  position: relative;
  overflow: hidden;
  z-index: 1;
  background: rgb(214, 214, 214);
  border-color: transparent !important;
  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -2;
  }
  &:before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0%;
    height: 100%;
    background-color: rgb(0, 190, 0);
    transition: all 0.3s;
    border-radius: 15px;
    z-index: -1;
  }
  &:hover {
    color: #fff;
    &:before {
      width: 100%;
    }
  }
}

.modal-header {
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.616);
  z-index: 1;
  background: rgb(39, 39, 39);
  font-family: "Montserrat", sans-serif;
  font-size: 16px;
  color: #fff;
  .year__project--modal {
    margin-right: 2%;
  }
}

.modal-footer {
  box-shadow: 0px -4px 10px rgba(0, 0, 0, 0.616);
  z-index: 1;
  background: rgb(39, 39, 39);
  font-family: "Montserrat", sans-serif;
  color: #fff;
}

.content_modal {
  display: flex;
  font-family: "Montserrat", sans-serif !important;
  flex-direction: column;
  justify-content: center;
  background: transparent !important;

  color: rgb(0, 0, 0);
  z-index: 0;
  .picture {
    display: flex;
    justify-content: center;
    margin-bottom: 4%;
    width: 100%;
  }
}

.title_modal {
  font-weight: bold;
  font-size: 20px;
  text-transform: uppercase;
  margin: 0.5% 2%;
}

.sous-title_modal {
  font-weight: bold;
  font-size: 19px;
  text-transform: uppercase;
  margin: 2%;
  color: #000000;

  font-weight: bold;
}

img {
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 5px;
  width: 50%;
}

.project-details,
.project-techno {
  margin: 0 5%;
}
.project-details {
  margin-bottom: 4%;
}
.content-details,
.content-techno {
  font-size: 18px;
  line-height: 1.3;
  margin-bottom: 3%;
}

@media screen and (max-width: 900px) {
  .card {
    width: 100%;
    margin-bottom: 5%;
    .cardImage {
      height: 100%;
    }

    .projet {
      height: 50%;
    }
  }
  .picture {
    img {
      width: 50%;
    }
  }
}
</style>