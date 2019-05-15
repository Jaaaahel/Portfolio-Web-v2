<template>
    <div id="app">
        <div class="home navbar is-fixed-top is-transparent" style="background: rgba(0, 0, 0, 0.75);" data scroll header>
            <div class="container">
                <div class="navbar-brand">
                    <router-link class="navbar-item" to="/" style="background-color: transparent;">
                        <img src="@/assets/img/logo.png">
                    </router-link>
                    <a class="navbar-item has-text-white is-size-3 is-hidden-desktop" href="https://www.linkedin.com/in/jjjrelova/">
                        <i class="icon-linkedin-square"></i>
                    </a>
                    <a class="navbar-item has-text-white is-size-3 is-hidden-desktop" href="https://github.com/Jaaaahel">
                        <i class="icon-github-square"></i>
                    </a>
                    <a role="button" class="navbar-burger burger has-text-white">
                        <span></span>
                        <span></span>
                        <span></span>
                    </a>
                </div>
                <div class="navbar-menu" id="navmenu" style="background-color: transparent;">
                    <div class="navbar-start">
                        <router-link class="navbar-item has-text-link has-text-weight-bold is-hidden-touch is-active" to="/">Home</router-link>
                        <router-link class="navbar-item has-text-link has-text-weight-bold is-hidden-touch" to="/about">About</router-link>
                        <router-link class="navbar-item has-text-link has-text-weight-bold is-hidden-touch" to="/projects">Projects</router-link>
                        <router-link class="navbar-item has-text-link has-text-weight-bold is-hidden-touch" to="/experience">Experience</router-link>
                        <!-- <a class="navbar-item has-text-white has-text-weight-bold is-hidden-desktop" href="#home">Home</a> -->
                    </div>
                    <div class="navbar-end">
                        <a class="navbar-item has-text-white has-text-weight-bold is-hidden-touch link" href="#contact">Contact</a>
                        <a class="navbar-item has-text-white is-size-3 is-hidden-touch" href="https://www.linkedin.com/in/jjjrelova/">
                            <i class="icon-linkedin-square"></i>
                        </a>
                        <a class="navbar-item has-text-white is-size-3 is-hidden-touch" href="https://github.com/Jaaaahel">
                            <i class="icon-github-square"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <transition name="fade" mode="out-in">
            <router-view />
        </transition>
    </div>
</template>

<style lang="scss">
    $primary: #080d12;
    $link: #fff;
    @import '@/assets/scss/styles.scss';
    @import '@/assets/scss/icomoon.scss';
</style>