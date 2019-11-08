<template>
  <v-card>
    <v-card-title>
      <v-text-field v-model="search" label="Search" single-line hide-details></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="tableData"
      :search="search"
      :items-per-page="10"
      class="elevation-1"
      no-data-text="No records yet"
    ></v-data-table>
  </v-card>
</template>
<script>
export default {
  name: "List",
  props: ["tableData"],
  data() {
    return {
      search: "",
      headers: [
        {
          text: "Name",
          align: "left",
          value: "name"
        },
        {
          text: "Surname",
          align: "left",
          value: "surname"
        },
        {
          text: "Email",
          value: "email"
        },
        {
          text: "Query",
          value: "query"
        }
      ]
    };
  }
};
</script>
