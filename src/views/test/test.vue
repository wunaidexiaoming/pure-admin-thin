<script setup lang="ts">
import { ref } from "vue";
import { getSelectUsers } from "@/api/routes";

const columns = [
  {
    label: "序号",
    prop: "id"
  },
  {
    label: "账号",
    prop: "username"
  },
  {
    label: "密码",
    prop: "password"
  },
  {
    label: "时间",
    prop: "time"
  }
];

const username = ref("");
const userData = ref<any[]>([]); // 直接使用 any[]
const error = ref(null);

const fetchUserData = async () => {
  try {
    userData.value = []; // 清空旧数据
    error.value = null;
    const result = await getSelectUsers(username.value);
    if (result.success) {
      userData.value = result.data; // 直接断言为 any[]
      alert(JSON.stringify(userData.value)); // 可能需要 JSON.stringify 来避免警告或正确显示对象
    } else {
      error.value = "API调用失败";
    }
  } catch (err) {
    error.value = err.message || "未知错误";
  }
};
</script>

<template>
  <div>
    <input v-model="username" placeholder="请输入用户名" />
    <button @click="fetchUserData">查询用户</button>
  </div>
  <div class="flex">
    <pure-table
      class="!w-[30vw]"
      row-key="id"
      border
      :data="userData"
      :columns="columns"
    />
  </div>
</template>
