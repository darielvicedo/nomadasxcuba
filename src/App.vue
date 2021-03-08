<template>
  <v-app id="nomadasxcuba">
    <header>
      <v-app-bar
          app
          color="#00897B"
          flat
      >
        <v-container class="py-0 fill-height">
          <v-avatar
              class="mr-10"
              color="grey darken-1"
              size="32"
          ></v-avatar>

          <v-btn
              text
              to="/"
              class="mr-3"
              raised
              elevation="2"
              color="#FFA726"
          >
            Inicio
          </v-btn>

          <v-btn
              text
              to="/"
              class="mr-3"
              raised
              elevation="2"
              color="#FFA726"
          >
            Rutas
          </v-btn>

          <v-btn
              text
              to="/"
              class="mr-3"
              raised
              elevation="2"
              color="#FFA726"
          >
            Equipamiento
          </v-btn>

          <v-btn
              text
              to="/"
              class="mr-3"
              raised
              elevation="2"
              color="#FFA726"
          >
            Blog
          </v-btn>

          <v-btn
              text
              to="/"
              class="mr-3"
              raised
              elevation="2"
              color="#FFA726"
          >
            Vlog
          </v-btn>

          <v-btn
              text
              to="/about"
              class="mr-3"
              raised
              elevation="2"
              color="#FFA726"
          >
            Nosotros
          </v-btn>

          <v-spacer></v-spacer>

          <v-responsive max-width="260">
            <v-text-field
                dense
                flat
                hide-details
                rounded
                solo-inverted
            ></v-text-field>
          </v-responsive>
        </v-container>
      </v-app-bar>
    </header>

    <v-main class="grey lighten-3">
      <v-container>
        <v-row>
          <v-col cols="2">
            <v-sheet rounded="lg">
              <v-list color="transparent">
                <v-list-item
                    v-for="n in 5"
                    :key="n"
                    link
                >
                  <v-list-item-content>
                    <v-list-item-title>
                      List Item {{ n }}
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>

                <v-divider class="my-2"></v-divider>

                <v-list-item
                    link
                    color="grey lighten-4"
                >
                  <v-list-item-content>
                    <v-list-item-title>
                      Refresh
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-sheet>
          </v-col>

          <v-col>
            <v-sheet
                min-height="70vh"
                rounded="lg"
            >
              <router-view/>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
