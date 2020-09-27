<template>
  

  <v-row>
    <v-col cols="12" sm="12" >
      <v-card>
        <v-container fluid>
          <v-row>
            <v-col>
              <v-hover v-slot:default="{ hover }">
              <v-card flat tile class="d-flex">
                <v-img
                    :src="require('../assets/images/p7.jpg')"
                 :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
                  aspect-ratio="1"
                  class="grey lighten-2">

                  <v-expand-transition>
                      <div
                        v-if="hover"
                        class="d-flex transition-fast-in-fast-out red lighten-3 v-card--reveal display-3 white--text"
                        style="height: 100%;"
                      >
                        Event Design
                      </div>
                 </v-expand-transition>
                </v-img>
              </v-card>
               </v-hover>
            </v-col>

            <v-col>
              <v-hover v-slot:default="{ hover }">
              <v-card flat tile class="d-flex">
                <v-img
                    :src="require('../assets/images/p17.jpg')"
                  aspect-ratio="1"
                  class="grey lighten-2">

                   <v-expand-transition>
                      <div
                        v-if="hover"
                        class="d-flex transition-fast-in-fast-out red lighten-3 v-card--reveal display-3 white--text"
                        style="height: 100%;"
                      >
                        Photography
                      </div>
                 </v-expand-transition>
                </v-img>
              </v-card>
               </v-hover>
            </v-col>

            <v-col>
              <v-hover v-slot:default="{ hover }">
              <v-card flat tile class="d-flex">
                <v-img
                    :src="require('../assets/images/p11.jpg')"
                 :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
                  aspect-ratio="1"
                  class="grey lighten-2">
                   <v-expand-transition>
                      <div
                        v-if="hover"
                        class="d-flex transition-fast-in-fast-out red lighten-3 v-card--reveal display-3 white--text"
                        style="height: 100%;"
                      >
                        Wedding Invitations
                      </div>
                 </v-expand-transition>
                </v-img>
              </v-card>
               </v-hover>
            </v-col>
          </v-row>

          
          <v-row>
            <v-col>
              <v-hover v-slot:default="{ hover }">
              <v-card flat tile class="d-flex">
                <v-img
                    :src="require('../assets/images/p1.jpg')"
                 :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
                  aspect-ratio="1"
                  class="grey lighten-2">
                   <v-expand-transition>
                      <div
                        v-if="hover"
                        class="d-flex transition-fast-in-fast-out red lighten-3 v-card--reveal display-3 white--text"
                        style="height: 100%;"
                      >
                        Snapchat Filters
                      </div>
                 </v-expand-transition>
                </v-img>
              </v-card>
               </v-hover>
            </v-col>

            <v-col>
              <v-hover v-slot:default="{ hover }">
              <v-card flat tile class="d-flex">
                
                <v-img
                    :src="require('../assets/images/p3.jpg')"
                 :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
                  aspect-ratio="1"
                  class="grey lighten-2">
                   <v-expand-transition>
                      <div
                        v-if="hover"
                        class="d-flex transition-fast-in-fast-out red lighten-3 v-card--reveal display-3 white--text"
                        style="height: 100%;"
                      >
                        Wedding Dresses
                      </div>
                 </v-expand-transition>
                </v-img>
              </v-card>
               </v-hover>
            </v-col>

            <v-col>
              <v-hover v-slot:default="{ hover }">
              <v-card flat tile class="d-flex">
                <v-img
                    :src="require('../assets/images/p9.jpg')"
                 :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
                  aspect-ratio="1"
                  class="grey lighten-2">
                   <v-expand-transition>
                      <div
                        v-if="hover"
                        class="d-flex transition-fast-in-fast-out red lighten-3 v-card--reveal display-3 white--text"
                        style="height: 100%;"
                      >
                        Wedding Cakes
                      </div>
                 </v-expand-transition>
                </v-img>
              </v-card>
               </v-hover>
            </v-col>
            
          </v-row>

        </v-container>
      </v-card>
    </v-col>
  </v-row>
  
</template>
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