<template>
    <div v-if="currentCustomer" class="edit-form">
        <h4>Customer</h4>
        <form>
            <div class="form-group">
                <label for="name">Name</label>
                <input type="text" class="form-control" id="name" name="name" v-model="currentCustomer.name"/>
            </div>
            <div class="form-group">
                <label for="email">Adresse email</label>
                <input type="email" class="form-control" id="email" v-model="currentCustomer.email"/>
            </div>
        </form>
        <button class="badge badge-danger mr-2" @click="deleteCustomer">
            Delete
        </button>
        <button type="submit" class="badge badge-success" @click="updateCustomer">
            Update
        </button>
        <p>{{ message }}</p>
    </div>
    <div v-else>
        <br />
        <p>Please click on a Customer...</p>
    </div>
</template>

<script>
import CustomerDataService from "../services/CustomerDataService"
export default {
  name: "curr-customer",
  data() {
    return {
      currentCustomer: {},
      message: ''
    }
  },
  methods: {
    getCustomer(id) {
      CustomerDataService.get(id)
        .then(response => {
          this.currentCustomer = response.data.data.customer
          console.log(response.data)
        })
        .catch(e => {
          console.log(e)
        })
    },
    updateCustomer() {
      CustomerDataService.update(this.currentCustomer.id, this.currentCustomer)
        .then(response => {
          console.log(response.data.data)
          this.message = 'The customer was updated successfully!'
        })
        .catch(e => {
          console.log(e)
        })
    },
    deleteCustomer() {
      CustomerDataService.delete(this.currentCustomer.id)
        .then(response => {
          console.log(response.data.data)
          this.$router.push({ name: "customers" })
        })
        .catch(e => {
          console.log(e)
        })
    }
  },
  mounted() {
    this.message = ''
    this.getCustomer(this.$route.params.id)
  }
}
</script>

<style>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>