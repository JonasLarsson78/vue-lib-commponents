<template>
  <button @click="click" :class="`btn ${color} ${size}`">{{ label }}</button>
</template>

<script>
export default {
  name: 'VueLibButton',
  props: {
    label: {
      type: String,
      required: true,
      default: null
    },
    color: {
      type: String,
      required: false,
      default: 'default'
    },
    size: {
      type: String,
      required: false,
      default: 'medium'
    },
    action: {
      type: Function,
      required: true
    }
  },
  methods: {
    click() {
      this.action()
    }
  }
}
</script>

<style scoped>
@import 'css.css';
.btn {
  border: none;
  box-shadow: var(--box-shadow);
  cursor: pointer;
  outline: none;
  color: white;
  margin: 10px;
}
.btn:hover {
  box-shadow: var(--box-shadow-hover);
}
.btn:active {
  box-shadow: var(--box-shadow);
}
/* Colors */
.default {
  background-color: var(--default);
}
.default:hover {
  background-color: var(--default-hover);
}
.danger {
  background-color: var(--danger);
}
.danger:hover {
  background-color: var(--danger-hover);
}
</style>
