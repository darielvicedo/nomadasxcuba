<template>
  <v-card>
    <v-img
        :src="equipment.img"
    ></v-img>

    <v-card-title>{{ equipment.title }}</v-card-title>

    <v-card-text>
      <v-row
          align="center"
          class="mx-0"
      >
        <v-rating
            :value="equipment.rating.value"
            color="secondary"
            dense
            half-increments
            readonly
            size="14"
        ></v-rating>

        <div class="grey--text ml-4">
          {{ equipment.rating.value }} ({{ equipment.rating.reviews }})
        </div>
      </v-row>

      <div class="my-4 subtitle-1">{{ equipment.subtitle }}</div>

      <div>{{ equipment.description }}</div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-actions class="justify-end">
      <v-btn
          color="primary darken-1"
          :href="equipment.url"
          target="_blank"
      >
        <v-icon class="mr-3">mdi-currency-eur</v-icon>
        Ver precio
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "Equipment",
  props: {
    equipment: {
      type: Object,
      required: true,
    }
  },
}
</script>