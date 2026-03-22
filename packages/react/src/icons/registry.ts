import { PlusIcon } from "./svgs/Plus"
import { SearchIcon } from "./svgs/search";

export const iconRegistry = {
  plus: PlusIcon,
  search: SearchIcon
};

export type IconName = keyof typeof iconRegistry;