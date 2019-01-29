<template>
    <div id="navbar">
        <img src="../assets/donoma.png" alt="Donoma" />
        <div class="menu-btn" :class="menuOpened ? 'opened' : ''" @click="menuOpened = !menuOpened">
            <span></span>
            <span></span>
            <span></span>
        </div>
        <ul class="menu">
            <li>Accueil</li>
            <li>Nos services</li>
            <li>L'agence</li>
            <li>L'équipe</li>
            <li>Contact</li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'Menu',
        data() {
            return {
                menuOpened: false,
            }
        },
    }
</script>

<style lang="scss" scoped>

    #navbar {
        display: block;
        position: relative;
        background: #ffffff;
        padding: 15px 40px;
    }
    #navbar img {
        height: $navbarElemsHeight;
        width: auto;
    }

    #navbar .menu {
        list-style: none;
        margin: 0;
        padding: 50px 0 0 0;
        float: right;
    }
    #navbar .menu li {
        display: inline-block;
        margin: 0 15px;
        font-size: 20px;
    }

    #navbar .menu-btn {
        display: none;
        float: right;
        position: relative;
        top: 21px;
        height: 24px;
        width: 24px;
        background: none;
        border: none;
        padding: 5px;
        cursor: pointer;
    }
    #navbar .menu-btn span {
        background: #b14823;
        height: 2px;
        border-radius: 5px;
        width: 100%;
        left: 0;
        position: absolute;
        transition: all ease 0.3s;
    }
    #navbar .menu-btn span:first-child {
        top: 4px;
    }
    #navbar .menu-btn span:nth-child(2) {
        top: 11px;
    }
    #navbar .menu-btn span:last-child {
        bottom: 4px;
    }

    @media screen and (max-width: 992px) {
        #navbar {
            padding: 8px 40px;
        }
        #navbar img {
            height: $navbarElemsMiniHeight;
        }
        #navbar .menu {
            position: absolute;
            left: 0;
            top: $navbarMiniHeight;
            width: 100%;
            background: #404040;
            color: #FFFFFF;
            border-top: solid 1px #a0a0a0;
            border-bottom: solid 1px #a0a0a0;
            padding: 0;
        }
        #navbar .menu li {
            line-height: $navbarElemsMiniHeight;
            display: block;
            font-size: inherit;
        }
        #navbar .menu li:not(:last-child) {
            border-bottom: solid 1px #c2c2c2;
        }
        #navbar .menu-btn {
            display: block;
        }
        #navbar .menu-btn ~ .menu {
            display: none;
        }
        #navbar .menu-btn.opened ~ .menu {
            display: block;
        }
        #navbar .menu-btn.opened span:nth-child(2) {
            display: none;
        }
        #navbar .menu-btn.opened span:nth-child(1) {
            transform: rotate(-45deg);
            position: absolute;
            top: 50%;
        }
        #navbar .menu-btn.opened span:nth-child(3) {
            transform: rotate(45deg);
            position: absolute;
            top: calc(50%);
        }
    }

</style>