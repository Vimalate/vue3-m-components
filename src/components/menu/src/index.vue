<template>
  <el-menu
    v-bind="$attrs"
    class="el-menu-vertical-demo"
    :router="router"
    :default-active="defaultActive"
  >
    <template v-for="(item, i) in data" :key="i">
      <el-menu-item v-if="!item[children] || !item[children].length" :index="item[index]">
        <component v-if="item[icon]" :is="`el-icon-${toLine(item[icon])}`"></component>
        <span>{{ item[name] }}</span>
      </el-menu-item>
      <el-sub-menu :index="item[index]" v-if="item[children] && item[children].length">
        <template #title>
          <component v-if="item[icon]" :is="`el-icon-${toLine(item[icon])}`"></component>
          <span>{{ item[name] }}</span>
        </template>
        <el-menu-item v-for="(it, i) in item[children]" :key="i" :index="it[index]">
          <component v-if="it[icon]" :is="`el-icon-${toLine(it[icon])}`"></component>
          <span>{{ it[name] }}</span>
        </el-menu-item>
      </el-sub-menu>
    </template>
  </el-menu>
</template>

<script lang="ts" setup>
import { PropType } from "vue";
// import { MenuItem } from "./types"
import { toLine } from "../../../utils/index"
const props = defineProps({
  data: {
    type: Array as PropType<any[]>,
    required: true,
  },
  defaultActive: {
    type: String,
    default: ''
  },
  router: {
    type: Boolean,
    default: false
  },
  index: {
    type: String,
    default: 'index'
  },
  name: {
    type: String,
    default: 'name'
  },
  icon: {
    type: String,
    default: 'icon'
  },
  children: {
    type: String,
    default: 'children'
  }
})
console.log(props.data);

</script>

<style scoped>
svg {
  margin-right: 4px;
  width: 1em;
  height: 1em;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
}
</style>