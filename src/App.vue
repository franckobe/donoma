<template>
  <div id="app">

    <div class="modal-backdrop" :class="expanded ? 'expanded' : ''"></div>

    <Menu />

    <Accueil />

    <Services @toggleModal="toggleBackdrop" />

    <Agence @toggleModal="toggleBackdrop" />

    <Equipe @toggleModal="toggleBackdrop" />

    <Contact @toggleModal="toggleBackdrop" />

    <Footer />

  </div>
</template>

<script>
import Menu from './components/Menu.vue'
import Accueil from './components/Accueil.vue'
import Services from './components/Services.vue'
import Agence from './components/Agence.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'
import Equipe from "./components/Equipe";

export default {
  name: 'app',
  components: {
    Equipe,
    Menu,
    Accueil,
    Services,
    Agence,
    Contact,
    Footer,
  },
  data() {
      return {
          expanded: false,
      }
  },
  methods: {
      toggleBackdrop() {
          this.expanded = !this.expanded;
      },
  }
}
</script>

<style lang="scss">
  body {
    position: relative;
    margin: 0;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
  }

  .modal-backdrop {
    position: fixed;
    background: rgba(0, 0, 0, 0.59);
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    transition: all ease 0.2s;
    opacity: 0;
  }
  .modal-backdrop.expanded {
    z-index: 9;
    display: block;
    opacity: 1;
  }
  .modal {
    z-index: -1;
    position: fixed;
    width: 0;
    height: 0;
    left: 50%;
    top: 50%;
    background: #ffffff;
    opacity: 0;
    transition: all ease 0.2s;
  }
  .modal.expanded {
    z-index: 10;
    opacity: 1;
    left: 5%;
    top: 5%;
    width: 90%;
    height: 90%;
  }

  .text-right {
    text-align: right;
    padding-right: 20px;
  }
  .text-center {
    text-align: center;
  }

  p {
    text-align: justify;
    line-height: 1.5em;
    font-size: 1.2em;
  }

  h3 {
    font-size: 1.8em;
    font-family: "Kiona",sans-serif;
    text-transform: uppercase;
  }

  section {
    padding: 40px;
  }
  section .btn-container {
    position: relative;
  }
  section .btn-plus {
    cursor: pointer;
    padding: 10px 20px;
    text-transform: uppercase;
    font-weight: bold;
    background: #f16776;
  }
  section .side {
    padding: 30px 40px;
  }
  section .left-side {
    text-align: right;
  }
  section .side img {
    height: auto;
    max-width: 200px;
    width: auto;
  }

  @media screen and (max-width: 992px) {
    section .side img {
      height: auto;
      max-width: 150px;
      width: auto;
    }
    section .left-side {
       text-align: center;
     }
    section .side {
      text-align: center;
    }
  }

</style>
