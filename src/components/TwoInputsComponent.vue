<template>
    <div>
        <div class="mb-3">
            <b-form-input v-focus:should-focus="shouldFocus" />
        </div>

        <div class="mt-3">
            <b-form-input v-focus:should-focus="!shouldFocus" />
        </div>
    </div>
</template>

<script>
export default {
  name: "TwoInputsComponent",
  data() {
    return {
      shouldFocus: true
    };
  }
};
</script>

<style scoped>
</style>
