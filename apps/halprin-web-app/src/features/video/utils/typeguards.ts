import { VideoUrl } from '@/data/data.types';
import { isNonEmptyString, isPlainObject } from '@contredanse/common';

export const isVideoUrl = (v: unknown): v is VideoUrl => {
  if (isNonEmptyString(v)) return true;
  if (!isPlainObject(v)) return false;
  return (
    'fr' in v && 'en' in v && isNonEmptyString(v.fr) && isNonEmptyString(v.en)
  );
};
