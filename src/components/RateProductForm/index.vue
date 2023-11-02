<script setup lang="ts">
import {
  emailRules,
  nameRules,
  phoneRules,
} from "@/components/RateProduct/_utils/validationRules";
import { FormType } from "@/components/RateProduct/_utils/types";

const { name, email, phone, rate, review } = withDefaults(
  defineProps<FormType>(),
  {
    name: "",
    email: "",
    phone: "+380",
    rate: "",
    review: "",
  },
);

const emit = defineEmits();
</script>

<template>
  <v-text-field
    :model-value="name"
    @on-update:model-value="(value) => emit('update:name', value)"
    :rules="nameRules"
    validate-on="blur"
    label="Name"
  ></v-text-field>
  <v-text-field
    :model-value="email"
    @on-update:model-value="(value) => emit('update:email', value)"
    label="Email"
    validate-on="blur"
    :rules="emailRules"
  ></v-text-field>
  <v-text-field
    :model-value="phone"
    @on-update:model-value="(value) => emit('update:phone', value)"
    label="Phone"
    validate-on="blur"
    :rules="phoneRules"
  ></v-text-field>
  <v-rating
    :model-value="rate"
    @on-update:model-value="(value) => emit('update:rate', value)"
    size="small"
  ></v-rating>
  <v-textarea
    label="Product Review"
    :model-value="review"
    @on-update:model-value="(value) => emit('update:review', value)"
  ></v-textarea>
</template>

<style scoped></style>
