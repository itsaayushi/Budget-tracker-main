import Icons from "assets/icons";
export const ICON_MAP = {
  AvailableBalance: () => Icons.AvalaibleBalance,
  Overview: () => Icons.OverviewIcon,
  Income: () => Icons.IncomeIcon,
  Expense: () => Icons.ExpenseIcon,
  Menu: () => Icons.MenuIcon,
  Money: () => Icons.MoneyIcon,
  Trash: () => Icons.TrashIcon,
  Refresh: () => Icons.RefreshIcon
};
export const getIconComponent = (name) => {
  const applyMapper = ICON_MAP[name];

  return applyMapper ? applyMapper() : null;
};
