<template>
  <div class="card">
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
        </div>
        <div class="modal-body content_modal">
          <div class="picture">
            <img
              :src="info_project.image"
              :alt="'image project' + info_project.id"
            />
          </div>
          <div v-html="details_prj"></div>
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
import { marked } from 'marked';
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
    };
  },
  methods: {
    markdownToHtml(text) {
      return marked(text);
    },
  },
  mounted() {
    this.details_prj = this.markdownToHtml(this.details_prj)
  }
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

  .cardImage {
    width: 100%;
    height: 70%;
    background-size: cover;
    background-position: center;
    box-shadow: inset 0px -10px 20px 0px #000000;
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

.content_modal {
  display: flex;
  flex-direction: column;
  justify-content: center;
  .picture {
    display: flex;
    justify-content: center;
    margin-bottom: 4%;
    width: 100%;
  }
}

.title_modal {
  font-weight: bold;
  font-size: 19px;
  text-transform: uppercase;
}

img {
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 5px;
  width: 50%;
}
</style>