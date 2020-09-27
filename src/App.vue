
  

<template>
  <v-app class="grey">
    <v-app-bar app flat color="#DEBEB9" :src="'/images/toolbar.jpg'">
      <v-app-bar-nav-icon
        @click.stop="drawer = !drawer"
        class="d-md-none white--text"
      ></v-app-bar-nav-icon>
      <v-img contain max-width="60px" class="mb-2" src="/images/logo-3.png">
      </v-img>
      <span class="display-1 white--text mx-2"> Wedding venues</span>
      <v-spacer></v-spacer>
      <div class="d-none d-md-block">
        <v-btn
          flat
          color="#F1ECCD"
          :to="link.link"
          class="mx-1"
          v-for="link in links"
          :key="`btn` + link.link"
        >
          <v-icon left>{{ link.icon }}</v-icon>
          <span> {{ link.title }}</span>
        </v-btn>
      </div>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" app>
      <v-list nav dense>
        <v-list-item
          v-for="link in links"
          :key="`list` + link.link"
          :to="link.link"
        >
          <v-list-item-title>
            {{ link.title }}
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main class="white">
      <v-container style="height: 800px" fluid class="pa-0">
        <router-view />
        <v-row no-gutters class="grey">
          <v-col cols="12">
            <div class="caption text-center white--text py-12">
              Demo project by Nahla
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},

  data() {
    return {
      activeBtn: 1,
      drawer: false,
      links: [
        {
          title: "Home",
          icon: "mdi-home",
          link: "/",
        },
        {
          title: "Services",
          icon: "mdi-heart",
          link: "/services",
        },
        {
          title: "About",
          icon: "mdi-account-box",
          link: "/about",
        },
        {
          title: "Contact Us",
          icon: "mdi-phone",
          link: "/contactus",
        },
      ],
    };
  },
};
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
  .btn {
    margin: 30px;
  }
}
</style>
