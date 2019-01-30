<template>
    <div>
        <button class="close" @click="$emit('toggleModal')">&times;</button>
        <div class="container">
            <h2>Nos services</h2>
            <div class="d-flex">
                <div class="flex-grow-1 card">
                    <img src="../assets/icons/money.png" alt="icon">
                    <h3 class="card-title">CONSULTING : E-MARKETING</h3>
                    <div class="card-content">
                        <p>
                            Référencement SEA/SEO, mobile, display, rédaction web,
                            SMA, affiliation, community management, emailing,
                            Adwords, market Places shopbot, web analytics.
                        </p>
                    </div>
                </div>
                <div class="flex-grow-1 card">
                    <img src="../assets/icons/bubble.png" alt="icon">
                    <h3 class="card-title">CONSULTING : E-COMMUNICATION</h3>
                    <div class="card-content">
                        <p>
                            Gestion de projet digital, accompagnement en transformation
                            digitale, audit technique - marketing - UX/UI, accompagnement
                            technique, stratégie de communication et marketing digitale.
                        </p>
                    </div>
                </div>
            </div>
            <div class="d-flex">
                <div class="flex-grow-1 card">
                    <img src="../assets/icons/bulb.png" alt="icon">
                    <h3 class="card-title">CONCEPTION GRAPHIQUE DIGITALE</h3>
                    <div class="card-content">
                        <p>
                            Affiche, Interface Utilisateur, Expérience Utilisateur,
                            animation/montage, annonce presse, bannières statiques ou
                            animées, catalogue, identité visuelle, newsletters,
                            plaquettes commerciales, retouche photo,
                            Sound Design/création sonore, web design.
                        </p>
                    </div>
                </div>
                <div class="flex-grow-1 card">
                    <img src="../assets/icons/network.png" alt="icon">
                    <h3 class="card-title">DÉVELOPPEMENT WEB & MOBILE</h3>
                    <div class="card-content">
                        <p>
                            Création de site e-commerce et vitrine, création d’application
                            mobile (iOS / Android / Hybride), développement de
                            fonctionnalités sur-mesure, configuration serveur, hébergement.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ServicesModal"
    }
</script>

<style scoped>
    .card {
        padding: 15px;
        margin: 15px;
        border: solid 1px #d9d9d9;
        width: 50%;
        border-radius: 5px;
    }
    @media screen and (max-width: 992px) {
        .d-flex {
            display: block !important;
        }
        .card {
            display: block !important;
            width: 100%;
            margin: 15px 0;
        }
    }
    .card-title {
        text-align: center;
        font-size: 20px;
    }
    .card-content {
        text-align: center;
    }
    img {
        display: block;
        width: 70px;
        height: auto;
        margin: 0 auto;
    }
</style>