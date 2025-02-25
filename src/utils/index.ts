// 是否可用
const isAvailable = async ({
  externalAction,
  isEdit,
  isFxg,
}: Record<string, boolean>) => {
  // 只需要判断基础条件
  return externalAction && isFxg && !isEdit;
};
