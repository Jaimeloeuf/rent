export type Post = {
  id: string;

  /**
   * Created at is an ISO Date Time String.
   */
  createdAt: string;

  title: string;

  location: string;

  type: 'HDB' | 'Condo' | 'Landed';

  /**
   * Price per month in SGD
   * @todo only allow positive ints up to a certain max value
   */
  price: number;

  /**
   *
   */
  imgLinks: Array<string>;
};
