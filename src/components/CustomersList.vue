<template>
    <!-- <div class="list row">
        <div class="col-md-8">
            <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="Search by name" v-model="name"/>
                <div class="input-group-append">
                    <button class="btn btn-outline-secondary" type="button" @click="searchTitle">Search</button>
                </div>
            </div>
        </div>
        <div class="col-md-6">
            <h4>Customers List</h4>
            <ul class="list-group">
                <li class="list-group-item" :class="{ active: index == currentIndex }" v-for="(customer, index) in customers" :key="index" @click="setActiveCustomer(customer, index)">
                    {{ customer.name }}
                </li>
            </ul>
            <button class="m-3 btn btn-sm btn-danger" @click="removeAllTutorials">Remove All</button>
        </div>
        <div class="col-md-6">
            <div v-if="currentCustomer">
                <h4>Customer</h4>
                <div>
                    <label><strong>Nom:</strong></label> {{ currentCustomer.name }}
                </div>
                <div>
                    <label><strong>Email:</strong></label> {{ currentCustomer.email }}
                </div>
                <router-link :to="'/customers/' + currentCustomer.id" class="badge badge-warning">Edit</router-link>
            </div>
            <div v-else>
                <br />
                <p>Please click on a Customer...</p>
            </div>
        </div>
    </div> -->

    <div class="card-list">
        <div class="card card2 Best">
            <div class="card-top">
                <div class="text">Meilleur client de l'annee</div>
                <div class="icon"><img :src="require('../assets/img/favorites_24px.png')" alt="add" class="add_ico"></div>
            </div>
            <div class="card-bottom">
            </div>
        </div>
        <div class="card card2 Effectif">
            <div class="card-top">
                <div class="text">Effectif client</div>
                <div class="icon"><img :src="require('../assets/img/survey_24px.png')" alt="add" class="add_ico"></div>
            </div>
            <div class="card-bottom">
            </div>
        </div>
        <div class="card card2">
        </div>
    </div><br>
    <div class="heading">
        <button class="btn btn-default" @click="toggleModal"><img :src="require('../assets/img/add_24px.png')" alt="add" class="add_ico">&nbsp; Client</button>

        <modal-component :reveal="reveal" :toggleModal="toggleModal" :currentCustomer="currentCustomer">
          
        </modal-component>

        <form action="" method="post">
            <i class="fas fa-flip-horizontal fa-search">R</i><input type="search" name="search" id="searchinput" placeholder="Recherche...">
        </form>
    </div><br>
    <table class="table" id="listTable">
        <thead>
            <th style="width:38%;">Nom</th>
            <th style="width:37%;">Email</th>
            <th style="width:25%;">Actions</th>
        </thead>
        <tbody>
            <tr v-for="(customer, index) in customers" :key="index">
              <td>{{ customer.name }}</td>
              <td>{{ customer.email }}</td>
              <td><button type="button" class="btn" @click="setActiveCustomer(customer, index)">Edit</button></td>
            </tr>
        </tbody>
    </table>

</template>
<script>
import CustomerDataService from "../services/CustomerDataService"
import ModalComponent from "./ModalComponent"
export default {
  watch: {
  },
  name: "customers-list",
  components: {
    ModalComponent
  },
  data() {
    return {
      customers: [],
      currentCustomer: null,
      currentIndex: -1,
      name: "",
      reveal: false,
    }
  },
  methods: {
    retrieveCustomer() {
      CustomerDataService.getAll()
        .then(response => {
          this.customers = response.data.data
          console.log(response.data)
        })
        .catch(e => {
          console.log(e)
        })
    },
    refreshList() {
      this.retrieveCustomer()
      this.currentCustomer = null
      this.currentIndex = -1
    },
    setActiveCustomer(customer, index) {
      this.currentCustomer = customer
      this.currentIndex = customer ? index : -1
      this.toggleModal()
    },
    
    /* searchTitle() {
      CustomerDataService.findByTitle(this.title)
        .then(response => {
          this.tutorials = response.data
          this.setActiveTutorial(null)
          console.log(response.data)
        })
        .catch(e => {
          console.log(e)
        })
    } */

    toggleModal() {
      this.reveal = !this.reveal
      if(this.reveal == false)
        this.refreshList()
    }
  },
  mounted() {
    this.retrieveCustomer()
  }
}
</script>

<style>

</style>