import { useTranslations as NextUseTranslation } from "next-intl";

const useTranslation = <T extends string>(groupName?: string) => {
  return NextUseTranslation(groupName);
};

export default useTranslation;
