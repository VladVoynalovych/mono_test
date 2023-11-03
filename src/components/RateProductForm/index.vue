<script setup lang="ts">
import {
  emailRules,
  nameRules,
  phoneRules,
} from "@/components/RateProduct/_utils/validationRules";
import { FormType } from "@/components/RateProduct/_utils/types";

defineProps<FormType>();

const emit = defineEmits<{
  (e: "update:name", value: string): void;
  (e: "update:email", value: string): void;
  (e: "update:phone", value: string): void;
  (e: "update:rate", value: string): void;
  (e: "update:review", value: string): void;
}>();
</script>

<template>
  <v-text-field
    :model-value="name"
    @update:model-value="(value: string) => emit('update:name', value)"
    :rules="nameRules"
    validate-on="blur"
    label="Name"
  ></v-text-field>
  <v-text-field
    :model-value="email"
    @update:model-value="(value: string) => emit('update:email', value)"
    label="Email"
    validate-on="blur"
    :rules="emailRules"
  ></v-text-field>
  <v-text-field
    :model-value="phone"
    @update:model-value="(value: string) => emit('update:phone', value)"
    label="Phone"
    validate-on="blur"
    :rules="phoneRules"
  ></v-text-field>
  <v-rating
    :model-value="rate"
    @update:model-value="
      (value: number) => emit('update:rate', value.toString())
    "
    size="small"
  ></v-rating>
  <v-textarea
    label="Product Review"
    :model-value="review"
    @update:model-value="(value: string) => emit('update:review', value)"
  ></v-textarea>
</template>

<style scoped></style>
