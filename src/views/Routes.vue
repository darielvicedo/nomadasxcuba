<template>
  <v-container>
    <v-row>
      <v-col cols="3" class="d-none d-md-block">
        <v-sheet
            rounded
            elevation="1"
            color="secondary"
        >
          <v-list color="transparent">
            <v-list-item
                v-for="anchor in anchorLinks"
                :key="anchor.name"
                link
                :href="anchor.anchor"
            >
              <v-list-item-content>
                <v-list-item-title>
                  <span class="font-weight-bold">#</span>{{ anchor.name | upper }}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-sheet>
      </v-col>

      <v-col md="9" cols="12">
        <v-sheet
            min-height="70vh"
            rounded="lg"
            class="pa-8"
        >
          <h1 class="mb-4">Rutas</h1>

          <p>
            Una lista curada de nuestras rutas.
          </p>

          <hr class="my-8">

          <div
              v-for="route in routes"
              :key="route.category"
          >
            <h2
                :id="route.category"
                class="my-8 orange--text text--lighten-1"
            >
              <span class="font-weight-bold orange--text text--darken-1">#</span>{{ route.name | upper }}
            </h2>

            <v-row
                v-for="item in route.routes"
                :key="item.url"
            >
              <v-col cols="12" md="6">
                <v-card>
                  <v-img
                      height="250"
                      :src="item.cardImage"
                  ></v-img>

                  <v-card-title>{{ item.title }}</v-card-title>

                  <v-card-text>
                    <v-row
                        align="center"
                        class="mx-0"
                    >
                      <v-rating
                          :value="item.data.difficulty"
                          color="secondary"
                          dense
                          length="10"
                          half-increments
                          readonly
                          size="14"
                      ></v-rating>

                      <div class="grey--text ml-4">
                        Dificultad {{ item.data.difficulty }} / 10
                      </div>
                    </v-row>
                  </v-card-text>

                  <v-card-text>
                    <div class="my-2 subtitle-1">{{ item.subtitle }}</div>

                    <div>{{ item.description }}</div>
                  </v-card-text>

                  <v-divider class="mx-4"></v-divider>

                  <v-card-text>
                    <div class="subtitle-2 mb-2">Principales características</div>

                    <v-chip-group>
                      <v-tooltip
                          v-for="tag in item.tags"
                          :key="tag.id"
                          top
                      >
                        <template v-slot:activator="{ on, attrs }">
                          <v-chip
                              color="secondary darken-1"
                              outlined
                              v-bind="attrs"
                              v-on="on"
                          >
                            <v-icon small class="mr-2">
                              {{ tag.icon }}
                            </v-icon>
                            {{ tag.value }}
                          </v-chip>
                        </template>
                        <span>{{ tag.title }}</span>
                      </v-tooltip>
                    </v-chip-group>
                  </v-card-text>

                  <v-card-actions class="justify-end">
                    <v-btn
                        color="primary darken-1"
                        :href="'/routes/' + item.slug"
                        target="_blank"
                    >
                      <v-icon class="mr-3">mdi-hiking</v-icon>
                      Ver ruta
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-col>

              <v-col cols="6" class="d-none d-md-block">
                <p>{{ item.presentation }}</p>
              </v-col>
            </v-row>
          </div>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import {getRoutes} from "@/services/jsondata-service";

export default {
  name: "Routes",
  data: () => ({
    anchorLinks: [
      {
        name: 'Senderismo',
        anchor: '#trekking',
      },
      {
        name: 'Cicloturismo',
        anchor: '#bikepacking',
      },
    ],
    routes: [],
  }),
  beforeMount: function () {
    this.routes = getRoutes();
  },
}
</script>

<style scoped>
.v-list-item__title {
  color: lightgray;
}

.v-list-item__title > span {
  color: white;
}
</style>