import { useTranslation as NextUseTranslation } from "react-i18next";

const useTranslation = (groupName?: string[]) => {
  return NextUseTranslation(groupName);
};

export default useTranslation;
