<template>
    <div>
        <div class="mb-3">
            <b-input-group class="mt-3">
                <b-form-input id="1" v-focus:should-focus="!isDevidedByTwo" />
                <b-input-group-append>
                <b-button @click="changeFocus(1)" variant="outline-secondary">Set Focus to This Element</b-button>
                </b-input-group-append>
            </b-input-group>
        </div>

        <div class="mt-3">
            <b-input-group class="mt-3">
                <b-form-input id="2" v-focus:should-focus="isDevidedByTwo" />
                <b-input-group-append>
                <b-button @click="changeFocus(2)" variant="outline-secondary">Set Focus to This Element</b-button>
                </b-input-group-append>
            </b-input-group>
        </div>
    </div>
</template>

<script>
export default {
  name: "TwoInputsComponent",
  data() {
    return {
      shouldFocus: true,
      focusedElement: 1
    };
  },
  computed: {
    isDevidedByTwo() {
      return this.focusedElement % 2 === 0;
    }
  },
  methods: {
    changeFocus(elementInFocus) {
      this.focusedElement = 0;
      this.focusedElement = elementInFocus;
    }
  }
};
</script>

<style scoped>
</style>
