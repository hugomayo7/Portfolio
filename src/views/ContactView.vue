<template>
  <main>
    <ContactForm />
  </main>
</template>

<script>
import ContactForm from "../components/ContactForm.vue";
export default {
  components: {
    ContactForm,
  },
};
</script>

<style scoped>
main {
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  padding-top: 5vh;
  font-family: "Montserrat", sans-serif;
  transition: 2s ease-in-out;
}
</style>