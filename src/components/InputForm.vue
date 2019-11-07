<template>
  <v-dialog v-model="isVisible" width="800px">
    <v-card>
      <v-card-title class="grey darken-2">Create contact</v-card-title>
      <v-form ref="form" :lazy-validation="true" v-model="valid">
        <v-container>
          <v-row>
            <v-col cols="6">
              <v-text-field v-model="name" :rules="nameRules" label="Name" required />
            </v-col>
            <v-col cols="6">
              <v-text-field v-model="surname" :rules="surnameRules" label="Surname" required />
            </v-col>
            <v-col cols="12">
              <v-text-field v-model="email" :rules="emailRules" label="E-mail" required />
            </v-col>
            <v-col cols="12">
              <v-text-field v-model="query" label="Query" />
            </v-col>
          </v-row>
        </v-container>
        <v-card-actions>
          <v-btn text color="primary" @click="closeModal">Cancel</v-btn>
          <v-spacer />
          <v-btn text :disabled="!valid" color="success" @click="submitForm">Submit</v-btn>
        </v-card-actions>
      </v-form>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "InputForm",
  props: ["isVisible"],
  data: () => ({
    valid: true,
    name: "",
    nameRules: [v => !!v || "Name is required"],
    surname: "",
    surnameRules: [v => !!v || "Surname is required"],
    email: "",
    emailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+\..+/.test(v) || "E-mail must be valid"
    ],
    query: ""
  }),
  methods: {
    closeModal() {
      // Tell the parent that modal is closed
      this.$emit("modalClose", true);
    },
    submitForm() {
      if (this.$refs.form.validate()) {
        let newUserData = {
          name: this.name,
          surname: this.surname,
          email: this.email,
          query: this.query
        };
        this.$store.commit("addUserRecord", newUserData);

        this.closeModal();
      }
    }
  }
};
</script>

<style>
</style>