<template>
  <v-container class="fill-height flex align-center justify-center flex-column">
    <v-card :loading="isReviewLoading" title="Product Review" class="mb-16">
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
    <v-btn @click="router.push('/reviews')">Navigate to Reviews Page</v-btn>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { FormType } from "@/pages/RateProductPage/_utils/types";
import RateProductForm from "@/components/RateProductForm/index.vue";
import db from "@/firebase/init";
import { collection, addDoc } from "firebase/firestore";
import { useRouter } from "vue-router";

const initialFormData: FormType = {
  name: "",
  email: "",
  phone: "+380",
  rate: "",
  review: "",
};

const router = useRouter();

const formRef = ref<HTMLFormElement | null>(null);

const formData = ref<FormType>({ ...initialFormData });
const isReviewLoading = ref(false);

const handleSubmit = () => {
  if (formRef.value?.validate()) {
    createReview();
    router.push("/reviews");
  }
};

const createReview = async () => {
  isReviewLoading.value = true;
  try {
    await addDoc(collection(db, "reviews"), formData.value);
  } catch (e) {
    throw e;
  } finally {
    isReviewLoading.value = false;
    formData.value = { ...initialFormData };
  }
};
</script>
