<template>
  <div id="exampleView">
    <MdEditor :value="mdValue" :handleChange="onMdChange" />
    {{ codeValue }}
    <CodeEditor :value="codeValue" :handleChange="onCodeChange" />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import MdEditor from "@/components/MdEditor.vue";
import CodeEditor from "@/components/CodeEditor.vue";

const mdValue = ref("");
const codeValue = ref("");
const onMdChange = (v: string) => {
  mdValue.value = v;
  console.log(v);
};
const onCodeChange = (v: string) => {
  codeValue.value = v;
  console.log(v);
};
</script>

<style></style>
