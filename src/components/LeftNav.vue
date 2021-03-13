<template>
  <v-sheet>
    <v-list color="#666666">
      <v-list-item
          v-for="anchor in links"
          :key="anchor.name"
          link
          :href="anchor.anchor"
      >
        <v-list-item-content>
          <v-list-item-title class="primary--text text--lighten-1">
            <span class="font-weight-bold primary--text text--darken-1">#</span>{{ anchor.name | upper }}
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-sheet>
</template>

<script>
export default {
  name: "LeftNav",
  props: {
    links: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style scoped lang="scss">
.v-list-item__title {
  letter-spacing: 1px;
}
</style>