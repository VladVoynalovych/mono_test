<template>
  <v-container class="fill-height">
    <v-card loading title="Card title" subtitle="Subtitle" text="...">
      <v-text-field
        v-model="formData.name"
        :rules="rules"
        label="Name"
      ></v-text-field>
      <v-text-field
        v-model="formData.email"
        :rules="rules"
        label="Email"
      ></v-text-field>
      <v-text-field
        v-model="formData.phone"
        :rules="rules"
        label="Phone"
      ></v-text-field>
      <v-text-field
        v-model="formData.rate"
        :rules="rules"
        label="Rate"
      ></v-text-field>
      <v-text-field
        v-model="formData.review"
        :rules="rules"
        label="Product Review"
      ></v-text-field>
      <v-card-actions>
        <v-btn>Click me</v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from "vue";

type FormType = {
  name: string;
  email: string;
  phone: string;
  rate: number | string;
  review: string;
};

const formData = ref<FormType>({
  name: "",
  email: "",
  phone: "",
  rate: "",
  review: "",
});
</script>
