import { Credit } from '@/data/data.types';
import { creditsData } from '@/data/credits.data';
import { Asserts } from '@contredanse/common';
import { StringConvert } from '@contredanse/common/utils/string-convert';

type Props = {
  creditsData?: Credit[];
};

export class CreditsRepo {
  private data: Credit[];
  constructor(props?: Props) {
    this.data = props?.creditsData ?? creditsData;
  }
  getCredits = (): Credit[] => {
    return this.data;
  };

  getCredit = (creditId: number | string): Credit | null => {
    const id = StringConvert.toSafeInteger(creditId);
    Asserts.isPresent(id, () => {
      return new Error('Cannot getCredit, invalid creditId parameter');
    });
    const found = this.data.filter((credit) => credit.id === id);
    return found.length > 0 ? found[0] : null;
  };
}
