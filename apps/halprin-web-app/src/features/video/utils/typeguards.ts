import { LocalizedMediaUrl, MediaUrl } from '@/data/data.types';
import { isNonEmptyString, isPlainObject } from '@contredanse/common';

export const isMediaUrl = (v: unknown): v is MediaUrl => {
  if (isNonEmptyString(v)) return true;
  return isLocalizedMediaUrl(v);
};

export const isLocalizedMediaUrl = (v: unknown): v is LocalizedMediaUrl => {
  if (!isPlainObject(v)) return false;
  return (
    'fr' in v && 'en' in v && isNonEmptyString(v.fr) && isNonEmptyString(v.en)
  );
};
