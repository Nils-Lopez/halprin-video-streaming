import { LocalizedVideoUrl, VideoUrl } from '@/data/data.types';
import { isNonEmptyString, isPlainObject } from '@contredanse/common';

export const isVideoUrl = (v: unknown): v is VideoUrl => {
  if (isNonEmptyString(v)) return true;
  return isLocalizedVideoUrl(v);
};

export const isLocalizedVideoUrl = (v: unknown): v is LocalizedVideoUrl => {
  if (!isPlainObject(v)) return false;
  return (
    'fr' in v && 'en' in v && isNonEmptyString(v.fr) && isNonEmptyString(v.en)
  );
};
