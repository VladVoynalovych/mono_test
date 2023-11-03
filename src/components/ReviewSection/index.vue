<script setup lang="ts">
import { FormType } from "@/pages/RateProductPage/_utils/types";

const props = defineProps<{
  reviews: FormType[];
}>();
</script>

<template>
  <v-table>
    <thead>
      <tr>
        <th class="text-left">Name</th>
        <th class="text-left">Email</th>
        <th class="text-left">Phone</th>
        <th class="text-left">Rate</th>
        <th class="text-left">Review</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in reviews" :key="item.name">
        <td>{{ item.name }}</td>
        <td>{{ item.email }}</td>
        <td>{{ item.phone }}</td>
        <td>{{ item.rate }}</td>
        <td>{{ item.review }}</td>
      </tr>
    </tbody>
  </v-table>
</template>

<style scoped></style>
