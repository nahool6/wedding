
  

<template>
 
  <v-app >
    <v-toolbar app flat
      color="#DEBEB9"
      prominent
      :src="require('./assets/images/toolbar.jpg')"
      scroll-target="#scrolling-techniques-3"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          
          gradient="to top right,rgba(222, 190, 185, .7), rgba(241, 236, 205, .7)"
        ></v-img>
      </template>

      <v-toolbar-title > 
       <v-toolbar-side-icon ><img src="./assets/images/logo-3.png" ></v-toolbar-side-icon>
      </v-toolbar-title>
      <v-toolbar-title > 
      <h1> Wedding venues</h1>
     </v-toolbar-title>
      <v-spacer></v-spacer>
      
      <template v-slot:extension>
        <v-tabs align-with-title  class="primary--text" color="#C0847A" >

      <v-spacer></v-spacer>
     
         <v-tab>  <router-link to="/"><v-btn  flat color="#F1ECCD" >
           
                <v-icon >mdi-home</v-icon>
            <span > Home</span>
            
                  </v-btn>
                  </router-link>
                </v-tab>
       
        <v-tab><router-link to="/services"><v-btn color="#F1ECCD">
          <v-icon>mdi-heart</v-icon>
            <span> Services</span>
                </v-btn>
                 </router-link>
                </v-tab>

        <v-tab><router-link to="/about"><v-btn color="#F1ECCD">
          <v-icon> mdi-account-box</v-icon>
          <span> About</span>
            </v-btn>
               </router-link>
            </v-tab>

        <v-tab><router-link to="/contactus"><v-btn color="#F1ECCD">
          <v-icon>mdi-phone</v-icon>
          <span> Contact us</span>
             </v-btn> </router-link></v-tab>

            </v-tabs>
      </template>
    </v-toolbar>
   
      <v-container style="height: 800px" >
         <router-view/>

      </v-container>
   
 
     

    <v-main>
   
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  components: {
  },


  data () {
      return {
        activeBtn: 1,
       
      }
    },}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
  .btn{
    margin: 30px;
  }
 
}
</style>
