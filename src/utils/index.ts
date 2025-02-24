// 是否可用
const isAvailable = async ({
  externalAction,
  isEdit,
  isFxg,
  apiAllowOptimizePeriod, // 由于window.whiteList.long_period_white_list_optimize恒为true，此参数实际不再影响结果
}: Record<string, boolean>) => {
  // 由于window.whiteList.long_period_white_list_optimize恒为true，
  // 原本的(window.whiteList.long_period_white_list_optimize || apiAllowOptimizePeriod)必定为true
  // 因此只需要判断showOptimizePeriod和!isEdit即可
  const showOptimizePeriod = externalAction && isFxg;
  return showOptimizePeriod && !isEdit;
};
