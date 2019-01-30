<template>
    <div>
        <button class="close" @click="$emit('toggleModal')">&times;</button>
        <div class="container">
            <h2>L'équipe</h2>
            <div class="row">
                <div class="col-sm-6 col-md-3">
                    <div class="card">
                        <div class="image">
                            <img src="../assets/team/xavier.jpg" alt="xavier" />
                        </div>
                        <div class="card-detail">
                            <span>Xavier Urgu-Bertoux</span>
                            <span>Chef d’agence</span>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-md-3">
                    <div class="card">
                        <div class="image">
                            <img src="../assets/team/pierre-alexis.jpg" alt="p-a" />
                        </div>
                        <div class="card-detail">
                            <span>Pierre-Alexis COSTA</span>
                            <span>Commercial</span>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-md-3">
                    <div class="card">
                        <div class="image">
                            <img src="../assets/team/franck.jpg" alt="franck" />
                        </div>
                        <div class="card-detail">
                            <span>Franck GARROS</span>
                            <span>Concepteur développeur</span>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-md-3">
                    <div class="card">
                        <div class="image">
                            <img src="../assets/team/sebastien.jpg" alt="sebastien" />
                        </div>
                        <div class="card-detail">
                            <span>Sébastien VERWERFT</span>
                            <span>Concepteur développeur</span>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-md-3">
                    <div class="card">
                        <div class="image">
                            <img src="../assets/team/nicolas.jpg" alt="nicolas" />
                        </div>
                        <div class="card-detail">
                            <span>Nicolas BOUFFIER</span>
                            <span>Graphiste</span>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-md-3">
                    <div class="card">
                        <div class="image">
                            <img src="../assets/team/amandine.jpg" alt="amandine" />
                        </div>
                        <div class="card-detail">
                            <span>Amandine VIGIER</span>
                            <span>Directrice artistique</span>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-md-3">
                    <div class="card">
                        <div class="image">
                            <img src="../assets/team/helene.jpg" alt="helene" />
                        </div>
                        <div class="card-detail">
                            <span>Hélène BOITEUX</span>
                            <span>Concepteur développeur</span>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-md-3">
                    <div class="card">
                        <div class="image">
                            <img src="../assets/team/dan.jpg" alt="dan" />
                        </div>
                        <div class="card-detail">
                            <span>Dan ESPOSITO</span>
                            <span>Infrastructure réseau</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "EquipeModal"
    }
</script>

<style scoped>
    .row {
        text-align: center;
    }
    img {
        position: relative;
        height: auto;
        width: auto;
        max-width: 80%;
        box-shadow: -2px 2px 4px #9c9c9c;
        border-radius: 5px;
    }

    .card {
        padding: 20px;
        border: solid 1px #bbbbbb;
        margin-bottom: 25px;
        box-shadow: -2px 2px 4px #9c9c9c;
        border-radius: 5px;
    }
    .card-detail span {
        display: block;
    }
    .card-detail span:first-child {
        font-weight: bold;
        margin-top: 10px;
    }
</style>