<template>
<v-row dense>
  <v-col v-for="(service, index) in services" :key="index" cols="6" md="4" class="pa-2">
    <v-hover v-slot:default="{ hover }">
    <v-card flat tile class="d-flex">
      <v-img
          :src="service.img"
        aspect-ratio="1"
        class="grey lighten-2"
        >
        <v-expand-transition>
            <div
              v-if="hover"
              class="d-flex transition-fast-in-fast-out red lighten-3 v-card--reveal display-3 white--text"
              style="height: 100%;"
            >
              {{service.title}}
            </div>
        </v-expand-transition>
      </v-img>
    </v-card>
      </v-hover>
  </v-col>
</v-row>
</template>

<script>
export default {
  data() {
    return {
      services: [
        {
          title: "Event Design",
          img: "/images/p7.jpg",
        },
        {
          title: "Photography",
          img: "/images/p17.jpg"
        },
        {
          title: "Wedding Invitations",
          img: "/images/p11.jpg"
        },
        {
          title: "Snapchat Filters",
          img: "/images/p1.jpg"
        },
        {
          title: "Wedding Dresses",
          img: "/images/p3.jpg"
        },
        {
          title: "Wedding Cakes",
          img: "/images/p9.jpg"
        },
      ]
    }
  },

}
</script>

<style >
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: .5;
  position: absolute;
  width: 100%;
}
</style>