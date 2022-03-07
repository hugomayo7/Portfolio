<template>
  <main>
    <div class="projectsList">
      <ProjectCard
        v-for="(prj, index) in data_project"
        :key="index"
        :info_project="prj"
      />
    </div>
  </main>
</template>

<script>
import BD from "../BD.js";
import { onMounted, ref } from "vue";
import ProjectCard from "../components/ProjectCard.vue";
export default {
  components: {
    ProjectCard,
  },
  setup() {
    class CardProject {
      constructor(id, title, image, resume, details) {
        (this.id = id), (this.title = title), (this.image = image), (this.resume = resume), (this.details = details);
      }
    }

    let data_project = ref([]);

    const makeProject = () => {

      for (const project of BD) {
        const new_project = new CardProject(
          project.id,
          project.title,
          project.image,
          project.resume,
          project.details
        );

        data_project.value.push(new_project);
      }
      console.log(data_project.value);
    };

    onMounted(makeProject);

    return {
      data_project,
    };
  },
};
</script>

<style lang="scss">
main {
  font-family: "Roboto", sans-serif;
  display: flex;
  height: auto;
  justify-content: center;
  width: 100%;
  .projectsList {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-start;
    height: auto;
    width: 90%;
    margin-top: 13vh;
    margin-bottom: 3%;
    padding: 1%;
    padding-bottom: 2.5%;
  }
}
</style>