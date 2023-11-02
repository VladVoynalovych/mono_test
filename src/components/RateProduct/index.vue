<template>
  <v-container class="fill-height flex align-center justify-center">
    <v-card title="Product Review">
      <v-form ref="formRef">
        <rate-product-form
          v-model:name="formData.name"
          v-model:email="formData.email"
          v-model:phone="formData.phone"
          v-model:rate="formData.rate"
          v-model:review="formData.review"
        />
      </v-form>
      <v-card-actions>
        <v-btn @click="handleSubmit">Submit</v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { FormType } from "@/components/RateProduct/_utils/types";
import RateProductForm from "@/components/RateProductForm/index.vue";
import db from "@/firebase/init";
import { collection, addDoc } from "firebase/firestore";

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
    createReview();
  }
};

const createReview = async () => {
  const colRef = collection(db, "reviews");
  await addDoc(colRef, formData.value);
};
</script>
