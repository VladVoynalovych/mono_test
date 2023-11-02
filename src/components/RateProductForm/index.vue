<script setup lang="ts">
import {
  emailRules,
  nameRules,
  phoneRules,
} from "@/components/RateProduct/_utils/validationRules";
import { FormType } from "@/components/RateProduct/_utils/types";

withDefaults(defineProps<FormType>(), {
  name: "",
  email: "",
  phone: "+380",
  rate: "",
  review: "",
});

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
    :model="name"
    @update:model-value="(value: string) => emit('update:name', value)"
    :rules="nameRules"
    validate-on="blur"
    label="Name"
  ></v-text-field>
  <v-text-field
    :model="email"
    @update:model-value="(value: string) => emit('update:email', value)"
    label="Email"
    validate-on="blur"
    :rules="emailRules"
  ></v-text-field>
  <v-text-field
    :model="phone"
    @update:model-value="(value: string) => emit('update:phone', value)"
    label="Phone"
    validate-on="blur"
    :rules="phoneRules"
  ></v-text-field>
  <v-rating
    :model="rate"
    @update:model-value="
      (value: number) => emit('update:rate', value.toString())
    "
    size="small"
  ></v-rating>
  <v-textarea
    label="Product Review"
    :model="review"
    @update:model-value="(value: string) => emit('update:review', value)"
  ></v-textarea>
</template>

<style scoped></style>
