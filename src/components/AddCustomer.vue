<template>
    <div class="submit-form">
        <div v-if="!submitted" class="modal-content mymodal">
            <h6 class="modal-title">Client</h6>
            <form id="addform" name="formClient" class="addform1" method="post">
                <div class="modal-body mymodal">
                    <div class="form-group">
                        <label for="name" class="col-form-label">Nom</label>
                        <input type="text" class="form-control" id="name" required v-model="customer.name" name="name"/>
                        <i class="error-message"></i>
                    </div>
                    <div class="form-group">
                        <label for="email" class="col-form-label">Email</label>
                        <input type="email" class="form-control" id="email" required v-model="customer.email" name="email"/>
                        <i class="error-message"></i>
                    </div>
                </div>
                <div class="mymodal-footer">
                    <slot/>
                    <button type="button" class="btn form-btn save" @click="saveCustomer"><img :src="require('../assets/img/save_50px.png')" alt="save" class="ico"></button>
                </div>
            </form>
        </div>

        <div v-else class="modal-content mymodal">
            <div class="modal-body mymodal">
                <div class="submitted">
                    <h4>You submitted successfully <b>!</b></h4>
                </div>
            </div>
            <div class="mymodal-footer">
                <slot/>
                <button class="btn form-btn" @click="newCustomer"><img :src="require('../assets/img/add_24px.png')" alt="save" class="ico"></button>
            </div>
        </div>
    </div>

    
</template>


<script>
import CustomerDataService from "../services/CustomerDataService";
export default {
    name: "add-customer",
    props: ['currentCustomer'],
    data() {
        return {
            customer: {
                name: "",
                email: ""
            },
            submitted: false
        };
    },
    methods: {
        saveCustomer() {
            return this.currentCustomer ? this.updateCustomer() : this.createCustomer()
        },
        createCustomer() {
            var data = {
                name: this.customer.name,
                email: this.customer.email
            }
            CustomerDataService.create(data)
            .then(response => {
                this.customer.id = response.data.data.id
                console.log(response.data)
                this.submitted = true
            })
            .catch(e => {
                console.log(e)
            })
        },
        updateCustomer() {
            CustomerDataService.update(this.customer.id, this.customer)
            .then(response => {
                console.log(response.data.data)
                this.message = 'The customer was updated successfully!'
            })
            .catch(e => {
                console.log(e)
            })
        },
        
        newCustomer() {
            this.submitted = false
            this.customer = {}
        }
    },
    mounted() {
        if(this.currentCustomer)
            this.customer = this.currentCustomer
    }
};
</script>