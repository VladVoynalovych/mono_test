<script setup lang="ts">
import { FormType } from "@/pages/RateProductPage/_utils/types";
import ReviewSection from "@/components/ReviewSection/index.vue";
import { ref } from "vue";
import db from "@/firebase/init";
import { query, collection, getDocs } from "firebase/firestore";

const getReviews = async () => {
  const reviewsDoc = await getDocs(query(collection(db, "reviews")));
  reviewsDoc.forEach((doc) => reviews.value.push(doc.data()));
};

const reviews = ref<FormType[]>([]);
getReviews();
</script>

<template>
  <review-section :reviews="reviews" />
</template>

<style scoped></style>
