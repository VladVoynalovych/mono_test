<template>
  <v-container class="fill-height">
    <v-card title="Product Review">
      <v-form ref="formRef">
        <v-text-field
          v-model="formData.name"
          :rules="nameRules"
          validate-on="blur"
          label="Name"
        ></v-text-field>
        <v-text-field
          v-model="formData.email"
          label="Email"
          validate-on="blur"
          :rules="emailRules"
        ></v-text-field>
        <v-text-field
          v-model="formData.phone"
          label="Phone"
          validate-on="blur"
          :rules="phoneRules"
        ></v-text-field>
        <v-rating v-model="formData.rate" size="small"></v-rating>
        <v-textarea
          label="Product Review"
          :model-value="formData.review"
        ></v-textarea>
      </v-form>
      <v-card-actions>
        <v-btn @click="handleSubmit">Submit</v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from "vue";
import {
  nameRules,
  emailRules,
  phoneRules,
} from "@/components/RateProduct/_utils/validationRules";
import { FormType } from "@/components/RateProduct/_utils/types";

const formRef = ref<HTMLFormElement | null>(null);

const formData = ref<FormType>({
  name: "",
  email: "",
  phone: "+380",
  rate: "",
  review: "",
});

const handleSubmit = () => {
  if (formRef.value?.validate()) {
    console.log("validated");
  }
};
</script>
