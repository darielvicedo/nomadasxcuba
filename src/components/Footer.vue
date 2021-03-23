<template>
  <v-footer
      dark
      padless
  >
    <v-card
        class="flex"
        flat
        tile
    >
      <v-card-title class="primary darken-1">
        <strong class="subheading">Te esperamos en nuestras redes sociales:</strong>

        <v-spacer></v-spacer>

        <v-btn
            v-for="link in links"
            :key="link.icon"
            class="mx-4"
            dark
            icon
            :href="link.url"
            target="_blank"
        >
          <v-icon size="24px">
            {{ link.icon }}
          </v-icon>
        </v-btn>
      </v-card-title>

      <v-card-text class="py-1 white--text text-right">
        hecho a
        <v-icon color="yellow lighten-5">mdi-hand</v-icon>
        con el
        <v-icon color="red">mdi-heart</v-icon>
        y el
        <v-icon color="orange lighten-1">mdi-brain</v-icon>
        en
        <v-icon color="teal">mdi-home</v-icon>
        usando
        <a href="https://vuejs.org/" target="_blank">
          <v-icon color="green darken-1">mdi-vuejs</v-icon>
        </a>
        y
        <a href="https://vuetifyjs.com/en/" target="_blank">
          <v-icon color="blue lighten-2">mdi-vuetify</v-icon>
        </a>
        y humildemente hospedado en
        <a href="https://github.com" target="_blank">
          <v-icon>mdi-github</v-icon>
        </a>
        — {{ new Date().getFullYear() }}
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: "Footer",
  data: () => ({
    links: [
      {
        icon: 'mdi-youtube',
        url: 'https://www.youtube.com/channel/UC7OeYRSIr64y-uVCYFj-QIA',
      },
      {
        icon: 'mdi-instagram',
        url: 'https://www.instagram.com/nomadas_cu/',
      },
    ],
  }),
}
</script>

<style scoped lang="scss">
a {
  text-decoration: none;
}
</style>