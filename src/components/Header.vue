<template>
  <v-card class="overflow-hidden rounded-0">
    <v-app-bar
        color="white"
        dark
        prominent
        src="https://picsum.photos/1920/1080?random"
    >
      <template v-slot:img="{ props }">
        <v-img
            v-bind="props"
            gradient="to top right, rgba(25, 118, 210, .9), rgba(25, 118, 210, .1)"
        ></v-img>
      </template>

      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Nómadas por Cuba</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn
          v-for="menuIcon in menuIcons"
          :key="menuIcon.link"
          color="black"
          :href="menuIcon.link"
          target="_blank"
          class="mr-5 mt-3"
      >
        <v-icon color="primary darken-1" class="mr-2">
          {{ menuIcon.icon }}
        </v-icon>
        {{ menuIcon.name }}
      </v-btn>

      <template v-slot:extension>
        <v-tabs align-with-title color="primary darken-1">
          <v-tab
              v-for="menuLink in menuLinks"
              :key="menuLink.link"
              :to="menuLink.link"
          >
            {{ menuLink.name }}
          </v-tab>
        </v-tabs>
      </template>
    </v-app-bar>
  </v-card>
</template>

<script>
export default {
  name: 'Header',
  data: () => ({
    menuLinks: [
      {
        name: 'Inicio',
        link: '/',
      },
      {
        name: 'Nosotros',
        link: '/about',
      },
    ],
    menuIcons: [
      {
        name: 'Instagram',
        link: 'https://www.instagram.com/nomadas_cu/',
        icon: 'mdi-instagram',
      },
      {
        name: 'YouTube',
        link: 'https://www.youtube.com/channel/UC7OeYRSIr64y-uVCYFj-QIA',
        icon: 'mdi-youtube',
      },
    ],
  }),
}
</script>