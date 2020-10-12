<template>
  <div class="container">
    <label :class="`label text-${size}`" :for="id">{{ label }}</label>
    <input
      :id="id"
      :class="`input-text ${size}`"
      :placeholder="placeholder"
      type="text"
      :ref="id"
      @input="change"
    />
  </div>
</template>

<script>
import { v4 as uuidv4 } from 'uuid'
import { filters } from './filter'
export default {
  name: 'VueLibInput',
  props: {
    label: {
      type: String,
      required: true,
      default: ''
    },
    size: {
      type: String,
      required: false,
      default: 'medium'
    },
    placeholder: {
      type: String,
      required: false,
      default: ''
    },
    getValue: {
      type: Function,
      required: true
    },
    filter: {
      type: String,
      required: false,
      default: 'text'
    }
  },
  computed: {
    id() {
      return uuidv4()
    }
  },
  methods: {
    change(e) {
      const value = e.target.value
      const el = this.$refs[this.id]

      switch (this.filter) {
        case 'text':
          el.value = filters.text(value)
          this.getValue(filters.text(value))
          break
        case 'number':
          el.value = filters.number(value)
          this.getValue(filters.number(value))
          break
        default:
          this.getValue(value)
      }
    }
  }
}
</script>

<style scoped>
@import './css.css';
.container {
  margin: 20px 10px;
  display: flex;
  flex-direction: column;
}
.container:focus-within .label {
  color: var(--dark-gray);
}
.label {
  position: relative;
  left: 5px;
  color: var(--gray);
}
.input-text {
  position: relative;
  left: 0;
  box-shadow: var(--box-shadow);
  border: 1px solid var(--gray);
  outline: none;
  margin-top: 5px;
  padding: 0px 15px;
}
.input-text:focus {
  border: 1px solid var(--dark-gray);
}
.input-text::placeholder {
  color: var(--gray);
}
</style>
