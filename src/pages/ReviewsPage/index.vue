<script setup lang="ts">
import { FormType } from "@/pages/RateProductPage/_utils/types";
import ReviewSection from "@/components/ReviewSection/index.vue";
import { ref } from "vue";
import db from "@/firebase/init";
import { query, collection, getDocs } from "firebase/firestore";
import { useRouter } from "vue-router";

const router = useRouter();

const reviews = ref<FormType[]>([]);

const getReviews = async () => {
  const reviewsDoc = await getDocs(query(collection(db, "reviews")));
  reviewsDoc.forEach((doc) => reviews.value.push(doc.data()));
};

getReviews();
</script>

<template>
  <review-section :reviews="reviews" />
  <v-btn @click="router.push('/')">Navigate to Create Review</v-btn>
</template>

<style scoped></style>
