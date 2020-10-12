<template>
  <div id="app">
    <div>
      <b>Buttons</b>
      <br />
      <vue-lib-button label="Button" :action="onClick"></vue-lib-button>
      <br />
      <vue-lib-button label="Danger" color="danger" :action="onClick"></vue-lib-button>
    </div>
    <br />
    <b>Props:</b>
    <br />
    <br />label: String - required
    <br />action: Function - required
    <br />color: String - "danger, default" - default "default"
    <br />size: String - "small, medium, large"- default "medium"
    <hr />
    <div>
      <b>Input Fields</b>
      <vue-lib-input placeholder="Only Text" label="Only Text" :getValue="getValue"></vue-lib-input>
      <vue-lib-input
        placeholder="Only Number"
        filter="number"
        label="Only Number"
        :getValue="getValue"
      ></vue-lib-input>
    </div>
    <br />
    <b>Props:</b>
    <br />
    <br />label: String - required
    <br />getValue: Function - required
    <br />size: String - "small, medium, large"- default "medium"
    <br />placeholder: String
    <br />filter: String - "text, number" -default "text"
    <hr />
    <div>
      <b>Datepicker</b>
      <br />
      <vue-lib-datepicker
        label="Datum"
        placeholder="Välj en datum"
        :icon="true"
        :getValue="getValue"
      ></vue-lib-datepicker>
      <br />
      <b>Props:</b>
      <br />
      <br />label: String - required
      <br />getValue: Function - required
      <br />size: String - "small, medium, large"- default "medium"
      <br />placeholder: String
      <br />icon: Boolean - default "false"
      <hr />
    </div>
    <div>
      <b>Table List</b>
      <vue-lib-table-list :action="getValue" :rows="mockDataRows" :columns="mockDataColums"></vue-lib-table-list>
      <br />
      <b>Props:</b>
      <br />
      <br />
      rows: Array - required - [{ id: 1, test: "Han Solo 1", test2: "Han Solo 2", test3: "Han Solo 3" }]
      <br />
      columns: Array - required - [{ key: "test", label: "Namn 1" }]
      <br />hover: Boolean - default "true"
      <br />action: Function
      <hr />
      <br />
      <br />
      <br />
      <br />
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import {
  VueLibButton,
  VueLibInput,
  VueLibDatepicker,
  VueLibTableList,
} from "@/entry";

export default Vue.extend({
  name: "ServeDev",
  components: {
    VueLibButton,
    VueLibInput,
    VueLibDatepicker,
    VueLibTableList,
  },
  data() {
    return {
      mockDataColums: [
        { key: "test", label: "Namn 1" },
        { key: "test2", label: "Namn 2" },
        { key: "test3", label: "Namn 3" },
      ],
      mockDataRows: [
        {
          id: 1,
          test: "Luke Skywalker 1",
          test2: "Luke Skywalker 2",
          test3: "Luke Skywalker 3",
        },
        { id: 2, test: "Han Solo 1", test2: "Han Solo 2", test3: "Han Solo 3" },
        {
          id: 3,
          test: "Chewbacca 1",
          test2: "Chewbacca 2",
          test3: "Chewbacca 3",
        },
      ],
    };
  },
  methods: {
    onClick() {
      console.log("click");
    },
    getValue(value) {
      console.log(value);
    },
  },
});
</script>

<style scoped>
#id {
  overflow: hidden;
}
</style>
