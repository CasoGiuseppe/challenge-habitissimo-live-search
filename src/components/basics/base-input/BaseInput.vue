<template>
  <div class="base-input">
    <h3
      v-if="$slots['title']"
      class="base-input__title"
    >
      <slot name="title" />
    </h3>
    <label
      class="base-input__label"
      :for="id"
    >
      <input
        class="base-input__field"
        :id="id"
        :type="type"
        :value="value"
        :required="isRequired.state"
        :placeholder="placeholder"
        @input="handleInputState"
        @focus="handleFocusState"
        @blur="handleBlurState"
      />

      <!-- ICON  -->
      <slot name="icon" />
      <!-- /// -->
    </label>

    <!-- DATA LIST -->
    <aside
      v-if="$slots['data-list']"
      class="base-input__results"
    >
      <slot name="data-list" />
    </aside>
    <!-- /// -->

    <!-- REQUIRED LABEL -->
    <span
      class="base-input__required-label"
      v-if="isRequired.state">
        {{isRequired.label}}
    </span>
    <!-- /// -->
  </div>
</template>

<script>
export default {
  name: 'BaseInput',

  data() {
    return {
      onActive: false,
    };
  },

  methods: {
    handleInputState(e) {
      this.$emit('input', e.target.value);
    },

    handleFocusState(e) {
      this.$emit('focus', {
        state: true,
        value: e.target.value,
      });
    },

    handleBlurState(e) {
      this.$emit('blur', {
        state: false,
        value: e.target.value,
      });
    },
  },

  props: {
    type: {
      type: String,
      default: 'text',
    },

    id: {
      type: String,
      default: 'test',
    },

    placeholder: {
      type: String,
      default: 'placeholder',
    },

    value: {
      type: String,
      default: null,
    },

    isRequired: {
      type: Object,
      default() {
        return {
          state: false,
          label: 'required',
        };
      },
    },
  },
};
</script>

<style lang='scss' scoped src= './BaseInput.scss'></style>
