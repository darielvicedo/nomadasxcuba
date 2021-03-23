<template>
  <v-container>
    <v-row>
      <v-col cols="3" class="d-none d-md-block">
        <left-nav :links="anchorLinks"></left-nav>
      </v-col>

      <v-col cols="12" md="9">
        <v-sheet
            min-height="70vh"
            rounded="lg"
            class="px-8 pt-8 pb-1"
        >
          <h1 class="mb-4">Nuestro Equipamiento</h1>
          <p class="text-justify">
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

            <div class="inverter">
              <v-row
                  v-for="(item, index) in equipment.equipments"
                  :key="item.url"
                  :class="{'d-flex flex-row-reverse': index % 2 !== 0, 'mb-3 pa-1 rounded': true, 'equipment-row': true}"
              >
                <v-col cols="12" md="6" class="pa-0">
                  <equipment :equipment="item"></equipment>
                </v-col>
                <v-col cols="12" md="6">
                  <p class="text-justify font-weight-medium" v-html="item.presentation"></p>
                </v-col>
              </v-row>
            </div>
          </div>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import {getEquipment} from '@/services/jsondata-service';
import LeftNav from "@/components/LeftNav";
import Equipment from "@/components/Equipment";

export default {
  name: "EquipmentPage",
  components: {Equipment, LeftNav},
  data: () => ({
    anchorLinks: [
      {
        name: 'Acampada',
        anchor: '#camping',
      },
      {
        name: 'Tecnología',
        anchor: '#tech',
      },
    ],
    equipments: [],
  }),
  beforeMount: function () {
    this.equipments = getEquipment();
  },
}
</script>

<style scoped lang="scss">
.equipment-row {
  background-color: #BBDEFB;
}
</style>