<template>
    <!-- <nav class="navbar navbar-expand navbar-dark bg-dark">
      <router-link to="/" class="navbar-brand">Proda</router-link>
      <div class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/customers" class="nav-link">Customers</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/add" class="nav-link">Add</router-link>
        </li>
      </div>
    </nav> -->

    <div class="row">
        <div class="sidenav col-md-1">
            <ul class="nav">
                <div class="nav-title"><router-link to="/" class="navbar-brand"><img :src="require('./assets/img/logo.png')" class="logo"/></router-link></div>
                <div class="nav-body">
                    <router-link to="/customers" class="menu"><img :src="require('./assets/img/speed_50px.png')" class="ico"/></router-link>
                    <router-link to="/customers" class="menu"><img :src="require('./assets/img/user_groups_50px.png')" class="ico"/></router-link>
                    <router-link to="/customers" class="menu"><img :src="require('./assets/img/product_50px.png')" class="ico"/></router-link>
                    <router-link to="/customers" class="menu"><img :src="require('./assets/img/transaction_50px.png')" class="ico"/></router-link>
                    <!-- <a href="<?php echo HOST?>/client" class="menu" id="client" data-controller="Client" title="client"><img src="<?php echo HOST?>/webroot/img/user_groups_50px.png" alt="client" class="ico"></a> -->
                </div>
                <div class="nav-footer">
                    <router-link to="/customers" class="menu"><img :src="require('./assets/img/logout_50px.png')" class="ico"/></router-link>
                </div>
            </ul>
            
        </div>
    
        <div class="col-md-11 content-for-layout container">
            <div class="content">
              <router-view />
            </div>
        </div>
        
    </div>
</template>

<script>
export default {
  name: "App"
};
</script>

