import { ref } from "vue";
import { tableDataEdit } from "../data";

export function useColumns() {
  const dataList = ref(tableDataEdit);

  const columns: TableColumnList = [
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

  return {
    columns,
    dataList
  };
}
