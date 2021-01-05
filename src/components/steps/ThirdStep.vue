<template>
    
        <div class="text-center border border-light p-5">

            <buttons></buttons>

        </div>

</template>

<script>

    import Buttons from './Buttons.vue';

    export default {
        components: {
            Buttons
        },
        computed: {
            facebook: {
                get() {
                    return this.$store.state.facebook
                },
                set(value) {
                    this.$store.commit('setFacebook', value)
                }
            },
        }
    }
</script>