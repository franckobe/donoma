<template>
    <section>
        <div class="container">
            <div class="row">
                <div class="col-sm-12 col-md-4 side left-side">
                    <img src="../assets/main.png" alt="icon"/>
                </div>
                <div class="col-sm-12 col-md-8 main">
                    <h3>L'équipe</h3>
                    <p>
                        L'équipe est composée de 8 collaborateurs :
                    </p>
                    <ul>
                        <li>2 chargés de stratégie commerciale</li>
                        <li>2 graphistes</li>
                        <li>4 développeurs</li>
                    </ul>
                    <p>
                        Nous possédons des forces complémentaires et saurons les mettre à profit
                        pour mener à bien vos différents projets.
                    </p>
                    <div class="btn-container">
                        <button class="btn-plus" @click="toggleModal">Voir plus</button>
                        <EquipeModal
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
    import EquipeModal from "./EquipeModal";

    export default {
        name: "Equipe",
        components: {
            EquipeModal,
        }
    }
</script>

<style scoped>

</style>