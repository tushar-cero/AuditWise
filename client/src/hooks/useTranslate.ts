import { useTranslation } from 'react-i18next';

export const useTranslate = () => {
  const { t } = useTranslation();

  const trans = (key: any) => {
    return t(`${key}`);
  };
  return { t: trans };
};
