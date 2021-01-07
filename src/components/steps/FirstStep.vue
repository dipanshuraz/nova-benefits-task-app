<template>
    
    <div class="text-center w-50 mx-auto border border-light p-5">

            <p class="h4 mb-4">User Details</p>

            <div class="form-row mb-4">
                <div class="col">
                    <input type="text" id="fullname" name="fullname" class="form-control" placeholder="Full Name" v-model="fullname">
                </div>
            </div>

            <input type="email" id="useremail" name="email" class="form-control mb-4" placeholder="E-mail" v-model="email">

            

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
            fullname: {
                get() {
                    return this.$store.state.user.fullname
                },
                set(value) {
                    this.$store.commit('setFullname', value)
                }
            },
            email: {
                get() {
                    return this.$store.state.user.email
                },
                set(value) {
                    this.$store.commit('setEmail', value)
                }
            },
            
           
        }
    }
</script>