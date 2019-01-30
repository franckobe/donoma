<template>
    <section>
        <div class="container">
            <div class="row">
                <div class="col-md-4 name">&copy; Donoma Agency</div>
                <div class="col-md-4 text-center">
                    <img alt="icon" src="../assets/insta.png" />
                    <img alt="icon" src="../assets/facebook.png" />
                    <img alt="icon" src="../assets/twitter.png" />
                </div>
            </div>
        </div>
    </section>
</template>
<style lang="scss" scoped>
    img {
        margin: 0 10px;
        height: 30px;
        width: auto;
    }
    .text-center {
        text-align: center;
    }
    section {
        padding-top: 100px;
        padding-bottom: 100px;
    }
    @media screen and (max-width: 992px) {
        .name {
            margin-bottom: 10px;
            text-align: center;
        }
    }
</style>