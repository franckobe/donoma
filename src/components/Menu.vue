<template>
    <div id="navbar">
        <img src="../assets/donoma.png" alt="Donoma" />
        <div class="menu-btn" :class="menuOpened ? 'opened' : ''" @click="menuOpened = !menuOpened">
            <span></span>
            <span></span>
            <span></span>
        </div>
        <ul class="menu">
            <li>
                <a @click.prevent.stop="slideTo" href="#accueil">Accueil</a>
            </li>
            <li>
                <a @click.prevent.stop="slideTo" href="#services">Nos services</a>
            </li>
            <li>
                <a @click.prevent.stop="slideTo" href="#agence">L'agence</a>
            </li>
            <li>
                <a @click.prevent.stop="slideTo" href="#equipe">L'équipe</a>
            </li>
            <li>
                <a @click.prevent.stop="slideTo" href="#contact">Contact</a>
            </li>
        </ul>
        <ul class="side-menu">
            <li @click.prevent="slideTo">
                <a href="#accueil" @click.prevent="slideTo">Accueil</a>
            </li>
            <li @click.prevent="slideTo">
                <a href="#services" @click.prevent="slideTo">Nos services</a>
            </li>
            <li @click.prevent="slideTo">
                <a href="#agence" @click.prevent="slideTo">L'agence</a>
            </li>
            <li @click.prevent="slideTo">
                <a href="#equipe" @click.prevent="slideTo">L'équipe</a>
            </li>
            <li @click.prevent="slideTo">
                <a href="#contact" @click.prevent="slideTo">Contact</a>
            </li>
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
        methods: {
            slideTo($event) {
                const elem = $($event.target);
                const id = elem[0].tagName.toLowerCase() === 'a' ? elem.attr('href') : elem.find('a').attr('href');
                $('html, body').animate({
                    scrollTop: $(id).offset().top
                }, 300);
                if (this.menuOpened) this.menuOpened = false;
            }
        }
    }
</script>

<style lang="scss" scoped>

    #navbar {
        display: block;
        position: relative;
        background: #F9F9F9;
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
        cursor: pointer;
    }
    #navbar .menu li:hover {
        color: #b14823;
    }
    #navbar li a {
        color: #404040;
        text-decoration: none;
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
            z-index: 9;
            left: 0;
            top: $navbarMiniHeight;
            width: 100%;
            background: #404040;
            color: #FFFFFF;
            border-top: solid 1px #a0a0a0;
            border-bottom: solid 1px #a0a0a0;
            padding: 0;
        }
        #navbar .menu li a {
            color: #FFFFFF;
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

    .side-menu {
        display: none;
        position: fixed;
        top: calc(50% - 100px);
        right: 40px;
        text-align: right;
        list-style: none;
        height: 200px;
        padding: 0;
        margin: 0;
    }
    .side-menu li {
        height: 40px;
        line-height: 40px;
        font-size: 18px;
        position: relative;
        font-family: "Kiona",sans-serif;
        cursor: pointer;
        text-transform: uppercase;
    }
    .side-menu li a {
        color: transparent !important;
        transition: color ease 0.2s;
    }
    .side-menu li.active a, .side-menu li:hover a {
        color: #404040 !important;
    }
    .side-menu li::after {
        content: '';
        position: absolute;
        right: -25px;
        top: 12.5px;
        width: 15px;
        height: 15px;
        border-radius: 50%;
        border: solid 2px #404040;
        background-color: transparent;
    }
    .side-menu li.active::after {
        background-color: #404040;
    }

    @media screen and (min-width: 993px) {
        .side-menu.visible {
            display: block;
        }
    }
    @media screen and (max-width: 992px) {
        .side-menu.visible {
            display: none !important;
        }
    }

</style>