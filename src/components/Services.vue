<template>
    <section>
        <div class="container">
            <div class="row">
                <div class="col-sm-12 col-md-4 side left-side">
                    <img src="../assets/mecanique.png" alt="icon"/>
                </div>
                <div class="col-sm-12 col-md-8 main">
                    <h3>Nos services</h3>
                    <p>
                        Nous proposons divers services tels que le consulting e-marketing et e-communication,
                        de la conception graphique digitale ainsi que du développement web et mobile.
                        Efficacité, performance, proximité, créativité et partage prônent pour répondre à vos attentes.
                    </p>
                    <div class="btn-container">
                        <button class="btn-plus" @click="toggleModal">Voir plus</button>
                        <ServicesModal
                                @toggleModal="toggleModal"
                                class="modal"
                                :class="expanded ? 'expanded' : ''" />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import ServicesModal from "./ServicesModal";

    export default {
        name: 'Services',
        components: {
            ServicesModal,
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

</style>