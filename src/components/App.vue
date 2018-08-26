<template>
    <section id="app">
        <p>Hello Vue!</p>
        <button class="button is-primary" @click="loadFirst">
            <span class="mdi mdi-download"></span>
            <span>Load async component</span>
        </button>
        <addon-first v-if="isTriggered"/>
    </section>
</template>

<script>
export default {
    name: 'app',
    components: {
        AddonFirst: () => import('./addon-first').then(module => module.default),
    },
    data() {
        return {
            isTriggered: false,
        };
    },
    methods: {
        loadFirst() {
            this.isTriggered = true;
        },
    },
};
</script>
