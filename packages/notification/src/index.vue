<template>
  <div>
    <el-popover
      placement="bottom"
      :width="300"
      trigger="click"
      popper-class="notification-popper"
    >
      <template #default>
        <slot></slot>
      </template>
      <template #reference>
        <el-badge
          style="cursor: pointer"
          :value="value"
          :max="max"
          :is-dot="isDot"
        >
          <component :is="`el-icon-${toLine(icon)}`" />
        </el-badge>
      </template>
    </el-popover>
  </div>
</template>
<script lang="ts" setup>
import { toLine } from "../../utils";
let props = defineProps({
  // 显示的图标
  icon: {
    type: String,
    default: "Bell",
  },
  // 通知数量
  value: {
    type: [String, Number],
    default: "",
  },
  // 最大值
  max: {
    type: Number,
  },
  // 是否显示小圆点
  isDot: {
    type: Boolean,
    default: false,
  },
});
</script>
