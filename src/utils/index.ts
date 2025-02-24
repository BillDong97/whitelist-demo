// 是否可用
const isAvailable = async ({
  externalAction,
  isEdit,
  isFxg,
  apiAllowOptimizePeriod,
}: Record<string, boolean>) => {
  const showOptimizePeriod = externalAction && isFxg;
  return (
    showOptimizePeriod &&
    !isEdit &&
    (window.whiteList.long_period_white_list_optimize || apiAllowOptimizePeriod)
  );
};
