<template>

    <div>
        <button class="btn btn-warning mx-2" @click="navigatePrev" type="button" v-show="togglePrevious()">Previous</button>

        <button class="btn btn-info mx-2" @click="navigateNext" type="button">{{ nextBtnTxt() }}</button>


        <transition name="modal">
            <div class="modal-mask" v-show="showResult">
                <div class="modal-wrapper">
                    <div class="modal-container">
                     
                        <div class="modal-header">
                            Congrats
                        </div>

                        <div class="modal-body" v-html="result">
                         
                        </div>

                        <div class="modal-footer">
                            <slot name="footer">
                                <button class="modal-default-button btn btn-warning" @click="close">
                                    close
                                </button>
                            </slot>
                        </div>
                    </div>
                </div>
            </div>
        </transition>

    </div>

</template>

<script>
    export default {

        data() {

            return {
                showResult: false,
                result: ''
            }
        },
        methods: {
            nextBtnTxt() {
              if(this.$route.name == 'thirdStep') {

                  return 'Finish';
              }

              return 'Next';
            },
            togglePrevious() {
                if(this.$route.name == 'firstStep') {

                    return false;
                }

                return true;
            },
            navigateNext() {

                if(this.$route.name == 'firstStep') {
                    this.$router.push('/second-step/');
                } else if(this.$route.name == 'secondStep') {

                //     this.$router.push('/third-step/');

                // } else {

                    // handle saving of the form
                    this.result = `
                    <div class="container-fluid text-left">
                            <div class="row">
                              <div class="col-12 col-md-6">
                        <h5>User Details</h5>
                        <p class='m-0 p-0'><strong> Name: </strong> ${this.$store.state.user.fullname}</p>
                        <p  class='m-0 p-0'><strong>Email: </strong> ${this.$store.state.user.email}</p>
                              </div>
                              <div class="col-12 col-md-6">
                                 <h5>Company Details</h5>
                    <p  class='m-0 p-0'><strong> company Name: </strong> ${this.$store.state.company.companyName}</p>
                    <p  class='m-0 p-0'><strong>Website : </strong> ${this.$store.state.company.website}</p>
                    <p  class='m-0 p-0'><strong>Number of Employees: </strong> ${this.$store.state.company.numOfEmp}</p>
                    <p  class='m-0 p-0'><strong>Industry : </strong> ${this.$store.state.company.industry}</p>
                    <p  class='m-0 p-0'><strong>Funding : </strong> ${this.$store.state.company.funding}</p>

                     <p  class='m-0 p-0'><strong>Benefits : </strong> ${this.$store.state.company.benefits}</p>

              
                     <p  class='m-0 p-0'><strong>healthInsurance : </strong> ${this.$store.state.company.healthInsurance}</p>
                    <p  class='m-0 p-0'><strong>sumInsured: </strong> ${this.$store.state.company.sumInsured}</p>
                    <p  class='m-0 p-0'><strong>familyCovered: </strong> ${this.$store.state.company.familyCovered}</p>
                    <p  class='m-0 p-0'><strong>parentsCovered: </strong> ${this.$store.state.company.parentsCovered}</p>
                    <p  class='m-0 p-0'><strong>maternityCovered: </strong> ${this.$store.state.company.maternityCovered}</p>
                   
                   
                    <p  class='m-0 p-0'><strong>gymMembership: </strong> ${this.$store.state.company.gymMembership}</p>
                    <p  class='m-0 p-0'><strong>freeDocOnCall: </strong> ${this.$store.state.company.freeDocOnCall}</p>
                    <p  class='m-0 p-0'><strong>numOfPaidLeaves: </strong> ${this.$store.state.company.numOfPaidLeaves}</p>
                     <p  class='m-0 p-0'><strong>flexibleTimings: </strong> ${this.$store.state.company.flexibleTimings}</p>
                      <p  class='m-0 p-0'><strong>remoteWorkFriendly: </strong> ${this.$store.state.company.remoteWorkFriendly}</p>
                     
                              </div>
                            </div>
                          </div>
                     
                    `

                    this.showResult = true;


                }
            },
            navigatePrev() {

                // if(this.$route.name == 'thirdStep') {

                //     this.$router.push('/second-step/');
                // } else 
                if(this.$route.name == 'secondStep') {

                    this.$router.push('/first-step/');
                }
            },
            close() {
                this.showResult = false
            }
        }

    }
</script>

<style scoped>
    .modal-mask {
        position: fixed;
        z-index: 9998;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, .5);
        display: table;
        transition: opacity .3s ease;
    }

    .modal-wrapper {
        display: table-cell;
        vertical-align: middle;
    }

    .modal-container {
        width: 70%;
        margin: 0px auto;
        /* padding: 20px 30px; */
        background-color: #fff;
        border-radius: 2px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
        transition: all .3s ease;
        font-family: Helvetica, Arial, sans-serif;
    }

    .modal-header h3 {
        margin-top: 0;
        color: #42b983;
    }

    .modal-body {
        /* margin: 20px 0; */
    }

    .modal-default-button {
        float: right;
    }

    .modal-enter {
        opacity: 0;
    }

    .modal-leave-active {
        opacity: 0;
    }

    .modal-enter .modal-container,
    .modal-leave-active .modal-container {
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
    }
</style>