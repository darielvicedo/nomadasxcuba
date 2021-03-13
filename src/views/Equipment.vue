<template>
  <v-container>
    <v-row>
      <v-col cols="3" class="d-none d-md-block">
        <left-nav :links="anchorLinks"></left-nav>
      </v-col>

      <v-col cols="9">
        <v-sheet
            min-height="70vh"
            rounded="lg"
            class="pa-8"
        >
          <h1 class="mb-4">Nuestro Equipamiento</h1>
          <p>
            Aqui te presentamos el equipo que usamos en nuestras aventuras.
            No encontrarás nada que no usemos nosotros mismos y que no hayamos probado miles de veces,
            ni que no estemos convencidos de su calidad.
            Comprar con estos links nos ayuda muchísimo a adquirir nuevos gadgets y útiles mientras
            que no te costará nada extra. Nuestros ingresos de afiliados no los convertimos en
            efectivo sino que se quedan como tarjetas de regalo de Amazon para nuevas adquisiciones y
            reponer equipamiento viejo y dañado. Todas las fotografías de productos son nuestras.
          </p>

          <hr class="my-8">

          <div
              v-for="equipment in equipments"
              :key="equipment.category"
          >
            <h2
                :id="equipment.category"
                class="my-8 primary--text text--darken-1"
            >
              <span class="font-weight-bold primary--text text--lighten-1">#</span>{{ equipment.name | upper }}
            </h2>

            <v-row
                v-for="item in equipment.equipments"
                :key="item.url"
            >
              <v-col cols="6">
                <v-card>
                  <v-img
                      src="https://images-na.ssl-images-amazon.com/images/I/71K0oSHXYhL._AC_SL1500_.jpg"
                  ></v-img>

                  <v-card-title>{{ item.title }}</v-card-title>

                  <v-card-text>
                    <v-row
                        align="center"
                        class="mx-0"
                    >
                      <v-rating
                          :value="item.rating.value"
                          color="secondary"
                          dense
                          half-increments
                          readonly
                          size="14"
                      ></v-rating>

                      <div class="grey--text ml-4">
                        {{ item.rating.value }} ({{ item.rating.reviews }})
                      </div>
                    </v-row>

                    <div class="my-4 subtitle-1">{{ item.subtitle }}</div>

                    <div>{{ item.description }}</div>
                  </v-card-text>

                  <v-divider class="mx-4"></v-divider>

                  <v-card-actions class="justify-end">
                    <v-btn
                        color="primary darken-1"
                        :href="item.url"
                        target="_blank"
                    >
                      <v-icon class="mr-3">mdi-currency-eur</v-icon>
                      Ver precio
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-col>
              <v-col cols="6">
                <p v-html="item.presentation"></p>
              </v-col>
            </v-row>
          </div>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import {getEquipment} from '@/services/jsondata-service';
import LeftNav from "@/components/LeftNav";

export default {
  name: "Equipment",
  components: {LeftNav},
  data: () => ({
    anchorLinks: [
      {
        name: 'Acampada',
        anchor: '#camping',
      },
    ],
    equipments: [],
  }),
  beforeMount: function () {
    this.equipments = getEquipment();
  },
}
</script>

<style scoped>

</style>