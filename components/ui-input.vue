<template>
  <div
    class="max-w-xs"
    :class="wrapperClass"
  >
    <label for="input">{{ label }}</label>
    <input
      :class="classes"
      class="placeholder-lightGray text-customBlack pl-4 py-4 font-mono text-lg w-64"
      :value="modelValue"
      :type="type"
      :placeholder="placeholder"
      @input="$emit('update:modelValue', $event?.target?.value)"
    >
  </div>
</template>

<script lang="ts" setup>
const {label, modelValue, placeholder, type, classes} = defineProps({
  label: {
    type: String,
    default: ''
  },
  modelValue: {
    type: String,
    default: '',
  },
  type: {
    type: String,
    default: 'text',
  },
  placeholder: {
    type: String,
    default: ''
  },
  classes: {
    type: String,
    default: ''
  },
  wrapperClass: {
    type: String,
    default: ''
  }
});

const emit = defineEmits(['update:modelValue'])

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const handleChange = (event: Event | null) => {
  emit('update:modelValue', (event?.target as HTMLInputElement).value);
};
</script>

<style scoped>
</style>
