import { Credit } from '@/data/data.types';
import { creditsData } from '@/data/credits.data';

type Props = {
  credits: Credit[];
};

export class CreditsRepo {
  private data: Credit[];
  constructor(props?: Props) {
    this.data = props?.credits ?? creditsData;
  }
  getCredits = () => {
    return this.data;
  };
}
