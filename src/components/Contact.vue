<template>
    <section>
        <div class="container">
            <div class="row">
                <div class="col-sm-12 side d-md-none d-lg-none d-sm-block">
                    <img src="../assets/telephone.png" alt="icon"/>
                </div>
                <div class="col-sm-12 col-md-8 main p-2">
                    <h3>Contact</h3>
                    <p>
                        <img src="../assets/position.png" alt="icon" />
                        2 rue le Corbusier, 13090 Aix-en-Provence
                    </p>
                    <p>
                        <img src="../assets/mail.png" alt="icon" />
                        contact@donoma-agency.com
                    </p>
                    <p>
                        <img src="../assets/telephone_1.png" alt="icon" />
                        04 26 28 01 19
                    </p>
                </div>
                <div class="col-md-4 side d-none d-md-block d-lg-block">
                    <img src="../assets/telephone.png" alt="icon"/>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'Contact',
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
        background-color: #d9d9d9;
    }
    p {
        line-height: 30px;
    }
    .main img {
        float: left;
        height: auto;
        width: 30px;
        margin-right: 20px;
    }
</style>