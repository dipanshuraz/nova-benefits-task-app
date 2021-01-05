<template>
    
    <div class="text-center w-50 mx-auto border border-light p-5">

            <p class="h4 mb-4">User Details</p>

            <div class="form-row mb-4">
                <div class="col">
                    <input type="text" id="fullname" name="fullname" class="form-control" placeholder="Name" v-model="fullname">
                </div>
            </div>

            <input type="email" id="useremail" name="email" class="form-control mb-4" placeholder="E-mail" v-model="email">

            <input type="text" id="company" name="company" class="form-control mb-4" placeholder="Company" v-model="company">

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
                  console.log(this.$store.state.fullname,'getter')
                    return this.$store.state.fullname
                },
                set(value) {
                  console.log(value,'setter')
                    this.$store.commit('setFullname', value)
                }
            },
            email: {
                get() {
                    return this.$store.state.email
                },
                set(value) {
                    this.$store.commit('setEmail', value)
                }
            },
            company: {
                get() {
                  console.log('getter',this.$store.state.company)
                    return this.$store.state.company
                },
                set(value) {
                  console.log(value,'value setter')
                    this.$store.commit('setCompany', value)
                }
            },
           
        }
    }
</script>