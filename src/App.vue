
  <template>
  <v-app>
    <v-app-bar :clipped-left="$vuetify.breakpoint.lgAndUp" app color="blue darken-3" dark>
      <div class="text-right">
        <v-btn
          class="ma-2"
          bottom
          color="pink"
          dark
          @click="showInputFormModal = !showInputFormModal"
        >
          <v-icon>mdi-plus</v-icon>New item
        </v-btn>
        <v-dialog v-model="showGeneratorDialog" persistent max-width="290">
          <template v-slot:activator="{ on }">
            <v-btn class="ma-2" light @click="showGeneratorDialog = true">
              <v-icon>mdi-auto-fix</v-icon>Generate items
            </v-btn>
          </template>
          <v-card>
            <v-card-title class="headline">Generated content</v-card-title>
            <v-card-text>Would you like to generate conted instead of manual input?</v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="green darken-1" text @click="showGeneratorDialog = false">No</v-btn>
              <v-btn color="green darken-1" text @click="generateContent(10)">Yes</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </div>
    </v-app-bar>
    <v-content>
      <v-container fluid>
        <v-layout child-flex>
          <List v-bind:tableData="userData" />
        </v-layout>
      </v-container>
    </v-content>
    <InputFormModal
      v-bind:isVisible="showInputFormModal"
      v-on:modalClose="updateShowInputFormModal"
    />
  </v-app>
</template>


<script>
import List from "./components/List";
import InputFormModal from "./components/InputFormModal";
import ContentGenerator from "./helpers/ContentGenerator";

export default {
  name: "App",

  components: {
    List,
    InputFormModal
  },

  data: () => ({
    showInputFormModal: false,
    showGeneratorDialog: false
  }),
  methods: {
    // Triggered when `modalClosed` event is emitted by the child.
    updateShowInputFormModal(isFormModalClosed) {
      this.showInputFormModal = !isFormModalClosed;
    },

    generateContent(count) {
      this.showGeneratorDialog = false;

      let generator = new ContentGenerator();
      generator.generate(count);
    }
  },
  computed: {
    userData() {
      return this.$store.getters.allUserData;
    }
  }
};
</script>

<style scoped>
.text-right {
  width: 100%;
}

.text-right * {
  float: right;
}
</style>