import { Entity } from '../../shared/entity';

export interface Application extends Entity {
  applicationId: number;
  name: string;
  checkInDate: number; // date in milliseconds
  checkedIn: boolean;

}
