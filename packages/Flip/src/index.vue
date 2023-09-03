<template>
  <div
    class="ds-flip"
    :style="{
      '--color': color,
    }"
  >
    <div
      class="ds-flip-container"
      :class="item !== '.' ? 'ds-flip-box' : 'ds-flip-point'"
      v-for="(item, index) in showVal"
      :key="index"
    >
      <div v-if="item != '.'" class="ds-flip-content" :class="['rolling_' + item]">
        <div v-for="(num, numIndex) in numberList" :key="numIndex" class="ds-flip-num">
          {{ num }}
        </div>
      </div>
      <div v-else class="ds-flip-content">.</div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref, defineProps, watch } from "vue";

const props = defineProps({
  // 最大值
  maxVal: {
    type: Number,
    default: 100,
  },
  // 频次
  step: {
    type: Number,
    default: 1,
  },
  // 间隔时间
  interval: {
    type: Number,
    default: 1,
  },
  // 是否循环
  loop: {
    type: Boolean,
    default: true,
  },
  // 颜色
  color: {
    type: String,
    default: "#409eff",
  },
});

const curVal = ref(0),
  showVal = ref([]),
  numberList = ref([...new Array(10).keys()]);
let timer = null;

watch(curVal, (newVal) => {
  if (newVal > props.maxVal) {
    if (props.loop) {
      curVal.value = 0;
    } else {
      newVal = 0;
    }
  }
  showVal.value = newVal.toString().split("");
});

onMounted(() => {
  showVal.value = curVal.value.toString().split("");
  timer = setInterval(() => {
    curVal.value += props.step;
  }, 1000 * props.interval);
});
onBeforeUnmount(() => {
  clearInterval(timer);
});
</script>
<style lang="less" scoped>
.ds-flip {
  display: inline-block;
  height: 3.125rem /* 50/16 */;
  line-height: 3.125rem /* 50/16 */;
  font-size: 2.25rem /* 36/16 */;
  color: var(--color);
  .ds-flip-container {
    position: relative;
    display: inline-block;
    overflow: hidden;
    height: 100%;
    .ds-flip-content {
      text-align: center;
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      animation-fill-mode: forwards;
    }
  }

  .ds-flip-box {
    margin-right: 0.25rem /* 4/16 */;
    width: 2.25rem /* 36/16 */;
    border: 1px solid var(--color);
    line-height: 3rem /* 48/16 */;
    border-radius: 4px;
  }

  .ds-flip-point {
    margin-right: 0.25rem /* 4/16 */;
    width: 0.625rem /* 10/16 */;
  }
}

.rolling_0 {
  animation: rolling_0 0.5s ease;
}

@keyframes rolling_0 {
  from {
    transform: translateY(-90%);
  }
  to {
    transform: translateY(0);
  }
}

.rolling_1 {
  animation: rolling_1 0.5s ease;
}

@keyframes rolling_1 {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-10%);
  }
}

.rolling_2 {
  animation: rolling_2 0.5s ease;
}

@keyframes rolling_2 {
  from {
    transform: translateY(-10%);
  }
  to {
    transform: translateY(-20%);
  }
}

.rolling_3 {
  animation: rolling_3 0.5s ease;
}

@keyframes rolling_3 {
  from {
    transform: translateY(-20%);
  }
  to {
    transform: translateY(-30%);
  }
}

.rolling_4 {
  animation: rolling_4 0.5s ease;
}

@keyframes rolling_4 {
  from {
    transform: translateY(-30%);
  }
  to {
    transform: translateY(-40%);
  }
}

.rolling_5 {
  animation: rolling_5 0.5s ease;
}

@keyframes rolling_5 {
  from {
    transform: translateY(-40%);
  }
  to {
    transform: translateY(-50%);
  }
}

.rolling_6 {
  animation: rolling_6 0.5s ease;
}

@keyframes rolling_6 {
  from {
    transform: translateY(-50%);
  }
  to {
    transform: translateY(-60%);
  }
}

.rolling_7 {
  animation: rolling_7 0.5s ease;
}

@keyframes rolling_7 {
  from {
    transform: translateY(-60%);
  }
  to {
    transform: translateY(-70%);
  }
}

.rolling_8 {
  animation: rolling_8 0.5s ease;
}

@keyframes rolling_8 {
  from {
    transform: translateY(-70%);
  }
  to {
    transform: translateY(-80%);
  }
}

.rolling_9 {
  animation: rolling_9 0.5s ease;
}

@keyframes rolling_9 {
  from {
    transform: translateY(-80%);
  }
  to {
    transform: translateY(-90%);
  }
}
</style>
