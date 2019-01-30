<template>
    <div>
        <button class="close" @click="$emit('toggleModal')">&times;</button>
        <div class="container">
            <h2>L'agence</h2>
            <div class="row">
                <div class="col-md-3">
                    <div>
                        <h4>EFFICACITÉ</h4>
                        <p>
                            Être les meilleurs au meilleur prix, grâce à notre méthode de travail agile, nous gagnons
                            en productivité et nous vous en faisons bénéficier via la rapidité de réalisation de nos services.
                        </p>
                    </div>
                    <div>
                        <h4>PROXIMITÉ</h4>
                        <p>
                            Acteur majeur sur les projets digitaux et de communication, nous voulons être votre soutien
                            de tous les jours ; que vous puissiez compter sur nous pour vous conseil-ler dans la
                            réalisation de tous vos projets. Pour nous, la proximité avec nos clients une valeur fondamentale.
                        </p>
                    </div>
                </div>
                <div class="col-md-3">
                    <div>
                        <h4>CRÉATIVITÉ</h4>
                        <p>
                            L’image communicante de chaque entreprise est pour nous unique. Nos objectifs sont de
                            concevoir une communication originale, attractive et fonctionnelle. `
                            L’imagination de notre équipe créative est un des atouts majeurs de notre agence. Leur
                            flexibilité et leur agilité assurent le caractère personnel des projets auxquels nous
                            touchons, tout en respectant l’identité de nos clients.
                        </p>
                    </div>
                </div>
                <div class="col-md-3">
                    <div>
                        <h4>LA RÉUSSITE COMMUNE </h4>
                        <p>
                            Un client n’est pas simplement un contrat pour notre agence. C’est une aventure commune
                            pour la réussite de votre projet. Accompagner et aider à remplir les objectifs de nos
                            clients est donc une victoire qui nous concerne également.
                        </p>
                    </div>
                    <div>
                        <h4>LE PARTAGE</h4>
                        <p>
                            Toute notre équipe est soucieuse de comprendre les enjeux de votre activité à
                            toutes les étapes d’un projet.
                        </p>
                    </div>
                </div>
                <div class="col-md-3">
                    <div>
                        <h4>PERFORMANCE</h4>
                        <p>
                            Notre objectif principal est de vous proposer le meilleur du web par le biais
                            d’une veille permanente sur notre scoop de services et d’une formation continue de nos équipes.
                        </p>
                    </div>
                    <div>
                        <h4>INNOVATION</h4>
                        <p>
                            Nous échangeons avec nos clients et nos collaborateurs dans le but de faire naitre des
                            idées parfois irréalisables et d’autres fois novatrices et en parfaite adéquation avec leur
                            image. Notre objectif est de surprendre nos clients. Le génie renvoie à l’idée de surprise,
                            d’innovation. Il s’oppose à la banalisation, à l’automatisation.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "AgenceModal"
    }
</script>

<style scoped>
    h4 {
        margin: 5px 0 5px 0;
    }
    p {
        margin-top: 5px;
    }
</style>