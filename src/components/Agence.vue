<template>
    <section>
        <div class="container">
            <div class="row">
                <div class="col-sm-12 side d-md-none d-lg-none d-sm-block">
                    <img src="../assets/ampoule.png" alt="icon"/>
                </div>
                <div class="col-sm-12 col-md-8 main p-2">
                    <h3>L'agence</h3>
                    <p>
                        Donoma Agency est une agence de marketing & communication digitale créée en janvier 2019 par huit
                        collaborateurs passionnés par la recherche, la collaboration, et l'imagination.
                    </p>
                    <p>
                        Notre agence Donoma Agency propose une large gamme de compétences que nous serons mettre profit
                        pour vous conseiller, guider, ainsi que développer l’image de marque ou produits auprès de vos prospects.
                    </p>
                    <p>
                        Nous sommes en mesure de répondre à de nombreux besoins étant données l’entendue des aptitudes de notre équipe :
                        <br />
                        Marketing & communication, Design & 3D, Recherche & développement web, Management & conseil digital, consulting Webdesign.
                    </p>
                    <div class="btn-container">
                        <button class="btn-plus" @click="toggleModal">Voir plus</button>
                        <AgenceModal
                                @toggleModal="toggleModal"
                                class="modal"
                                :class="expanded ? 'expanded' : ''" />
                    </div>
                </div>
                <div class="col-md-4 side d-none d-md-block d-lg-block">
                    <img src="../assets/ampoule.png" alt="icon"/>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import AgenceModal from "./AgenceModal";

    export default {
        name: 'Agence',
        components: {
            AgenceModal,
        },
        data() {
            return {
                expanded: false,
            }
        },
        methods: {
            toggleModal() {
                this.expanded = !this.expanded;
                this.$emit('toggleModal');
            }
        }
    }
</script>

<style lang="scss" scoped>
    section {
        background-color: #EAEAEA;
    }
    img {
        margin-top: 10%;
    }
</style>