<template>
  <div class="container-date">
    <label :class="`label-date label-date-${icon} text-${size}`">{{ label }}</label>
    <div class="test">
      <svg
        v-if="icon"
        class="svg"
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        width="512px"
        height="512px"
        viewBox="0 0 512 512"
        enable-background="new 0 0 512 512"
        xml:space="preserve"
      >
        <path
          class="img"
          d="M160,240v32c0,8.844-7.156,16-16,16h-32c-8.844,0-16-7.156-16-16v-32c0-8.844,7.156-16,16-16h32
        C152.844,224,160,231.156,160,240z
        M144,352h-32c-8.844,0-16,7.156-16,16v32c0,8.844,7.156,16,16,16h32c8.844,0,16-7.156,16-16v-32
        C160,359.156,152.844,352,144,352z
        M272,224h-32c-8.844,0-16,7.156-16,16v32c0,8.844,7.156,16,16,16h32c8.844,0,16-7.156,16-16v-32
        C288,231.156,280.844,224,272,224z
        M272,352h-32c-8.844,0-16,7.156-16,16v32c0,8.844,7.156,16,16,16h32c8.844,0,16-7.156,16-16v-32
        C288,359.156,280.844,352,272,352z
        M400,224h-32c-8.844,0-16,7.156-16,16v32c0,8.844,7.156,16,16,16h32c8.844,0,16-7.156,16-16v-32
        C416,231.156,408.844,224,400,224z
        M400,352h-32c-8.844,0-16,7.156-16,16v32c0,8.844,7.156,16,16,16h32c8.844,0,16-7.156,16-16v-32
        C416,359.156,408.844,352,400,352z
        M112,96h32c8.844,0,16-7.156,16-16V16c0-8.844-7.156-16-16-16h-32c-8.844,0-16,7.156-16,16v64
        C96,88.844,103.156,96,112,96z
        M512,128v320c0,35.344-28.656,64-64,64H64c-35.344,0-64-28.656-64-64V128c0-35.344,28.656-64,64-64
        h16v16c0,17.625,14.359,32,32,32h32c17.641,0,32-14.375,32-32V64h160v16c0,17.625,14.375,32,32,32h32c17.625,0,32-14.375,32-32V64
        h16C483.344,64,512,92.656,512,128z
        M480,192c0-17.625-14.344-32-32-32H64c-17.641,0-32,14.375-32,32v256c0,17.656,14.359,32,32,32
        h384c17.656,0,32-14.344,32-32V192z
        M368,96h32c8.844,0,16-7.156,16-16V16c0-8.844-7.156-16-16-16h-32c-8.844,0-16,7.156-16,16v64
        C352,88.844,359.156,96,368,96z"
        />
      </svg>
      <datepicker
        @input="change"
        input-class="datepicker"
        :placeholder="placeholder"
        :clear-button="true"
      ></datepicker>
    </div>
  </div>
</template>

<script>
import Datepicker from "vuejs-datepicker";
export default {
  name: "VueLibDatepicker",
  components: {
    Datepicker,
  },
  props: {
    label: {
      type: String,
      required: true,
      default: "",
    },
    size: {
      type: String,
      required: false,
      default: "medium",
    },
    icon: {
      type: Boolean,
      required: false,
      default: false,
    },
    placeholder: {
      type: String,
      required: false,
      default: "Välj datum",
    },
    getValue: {
      type: Function,
      required: true,
    },
  },
  methods: {
    change(value) {
      this.getValue(value);
    },
  },
};
</script>

<style>
@import "./css.css";
.container-date {
  margin: 20px 10px;
  display: flex;
  flex-direction: column;
}
.container-date:focus-within .label-date {
  color: var(--dark-gray);
}
.datepicker {
  position: relative;
  left: 0;
  box-shadow: var(--box-shadow);
  border: 1px solid var(--gray);
  outline: none;
  margin-top: 5px;
  margin-right: 5px;
  padding: 0px 15px;
  width: 230px;
  height: 31px;
  border-radius: 7.5px;
  font-size: 14px;
  cursor: pointer;
}
.datepicker:focus {
  border: 1px solid var(--dark-gray);
}
.datepicker::placeholder {
  color: var(--gray);
}
.label-date {
  position: relative;
  left: 10px;
  color: var(--gray);
}
.label-date-true {
  left: 32px;
}
.test {
  display: flex;
}
.svg {
  margin-top: 8px;
  margin-right: 5px;
  width: 20px;
  height: 23px;
  z-index: 100;
}
.container-date:focus-within .img {
  fill: var(--dark-gray);
}
.img {
  fill: var(--gray);
}
</style>
