<template>
  <v-row>
    <v-col cols="12" sm="12" >
      <v-card>
        <v-container fluid>
          <v-row>
            <v-col>
              <v-card flat tile class="d-flex">
                <v-img
                    :src="require('../assets/images/p7.jpg')"
                 :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
                  aspect-ratio="1"
                  class="grey lighten-2">
                </v-img>
              </v-card>
            </v-col>

            <v-col>
              <v-card flat tile class="d-flex">
                <v-img
                    :src="require('../assets/images/p17.jpg')"
                  aspect-ratio="1"
                  class="grey lighten-2">
                </v-img>
              </v-card>
            </v-col>

            <v-col>
              <v-card flat tile class="d-flex">
                <v-img
                    :src="require('../assets/images/p11.jpg')"
                 :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
                  aspect-ratio="1"
                  class="grey lighten-2">
                </v-img>
              </v-card>
            </v-col>
          </v-row>

          
          <v-row>
            <v-col>
              <v-card flat tile class="d-flex">
                <v-img
                    :src="require('../assets/images/p1.jpg')"
                 :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
                  aspect-ratio="1"
                  class="grey lighten-2">
                </v-img>
              </v-card>
            </v-col>

            <v-col>
              <v-card flat tile class="d-flex">
                <v-img
                    :src="require('../assets/images/p3.jpg')"
                 :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
                  aspect-ratio="1"
                  class="grey lighten-2">
                </v-img>
              </v-card>
            </v-col>

            <v-col>
              <v-card flat tile class="d-flex">
                <v-img
                    :src="require('../assets/images/p9.jpg')"
                 :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
                  aspect-ratio="1"
                  class="grey lighten-2">
                </v-img>
              </v-card>
            </v-col>
          </v-row>

        </v-container>
      </v-card>
    </v-col>
  </v-row>
</template>