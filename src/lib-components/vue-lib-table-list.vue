<template>
  <div class="container">
    <ul>
      <li class="row row--header">
        <div
          :class="[
            'column',
            {
              'column--push-right':
                pushRight && columns.length - 1 === headerIdx
            }
          ]"
          v-for="(column, headerIdx) in columns"
          :key="column.key"
        >{{ column.label }}</div>
      </li>
      <li
        :class="['row', { 'row--hover': hover }]"
        v-for="(row, rowIdx) in rows"
        :key="rowIdx"
        @click="onClick(row)"
      >
        <div
          :class="[
            'column',
            { 'column--push-right': pushRight && columns.length - 1 === colIdx }
          ]"
          v-for="(col, colIdx) in columns"
          :key="colIdx"
        >{{ row[col.key] }}</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "VueLibTableList",
  props: {
    columns: {
      type: Array,
      required: true,
    },
    rows: {
      type: Array,
      required: true,
    },
    pushRight: {
      type: Boolean,
      required: false,
      default: true,
    },
    hover: {
      type: Boolean,
      required: false,
      default: true,
    },
    action: {
      type: Function,
      required: true,
    },
  },
  methods: {
    onClick(row) {
      if (!this.hover) return;
      this.action(row);
    },
  },
};
</script>

<style scoped>
.container {
  margin: 0px 10px;
}
ul {
  display: table;
  background-color: var(--white);
  border-radius: 16px;
  list-style: none;
  width: 100%;
  padding: 0;
  overflow: hidden;
  margin-bottom: 8px;
  border: 1px solid var(--off-white);
  box-shadow: var(--box-shadow);
}
ul .row {
  display: table-row;
  transition: all 0.3s ease;
}
ul .row:nth-child(even) {
  background-color: var(--off-white);
}
ul .row--header {
  font-weight: 600;
}
ul .row .column {
  display: table-cell;
  vertical-align: middle;
  min-width: 100px;
  padding: 12px 10px;
  white-space: nowrap;
}
ul .row .column .push-right {
  width: 100%;
}
ul .row--hover:hover {
  cursor: pointer;
  overflow: hidden;
}
ul .row--hover:hover .column {
  color: var(--gray);
  background-color: var(--dark-gray);
}
</style>
