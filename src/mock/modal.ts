// 模拟白名单检查函数
export const getWhiteList = async (awemeId: string) => {
  // 由于window.whiteList中所有值都为true，直接返回true
  return true;
};

// 模拟表格数据获取函数
export const getTableData = async () => {
  return {
    list: []
  };
};