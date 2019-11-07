
  <template>
  <v-app id="inspire">
    <v-app-bar :clipped-left="$vuetify.breakpoint.lgAndUp" app color="blue darken-3" dark>
      <v-toolbar-title style="width: 300px" class="ml-0 pl-4">
        <span class="hidden-sm-and-down">Data input</span>
      </v-toolbar-title>
    </v-app-bar>
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <List v-bind:tableData="userData" />
        </v-row>
      </v-container>
    </v-content>
    <v-btn bottom color="pink" dark fab fixed right @click="showModal = !showModal">
      <v-icon>mdi-plus</v-icon>
    </v-btn>
    <InputForm v-bind:isVisible="showModal" v-on:modalClose="updateShowModal" />
  </v-app>
</template>


<script>
import List from "./components/List";
import InputForm from "./components/InputForm";

export default {
  name: "App",

  components: {
    List,
    InputForm
  },

  data: () => ({
    showModal: false
  }),
  methods: {
    // Triggered when `modalClosed` event is emitted by the child.
    updateShowModal(isModalClosed) {
      this.showModal = !isModalClosed;
    }
  },
  computed: {
    userData() {
      return this.$store.getters.allUserData;
    }
  }
};
</script>
