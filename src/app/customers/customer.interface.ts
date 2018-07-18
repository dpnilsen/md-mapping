import { Entity } from '../shared/entity';

export interface Customer extends Entity {
  customerId: number;
  name: string;
  checkInDate: number; // date in milliseconds
  checkedIn: boolean;

}
