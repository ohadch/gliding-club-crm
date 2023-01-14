import { BaseEntity } from 'typeorm';
import { getLogger } from '../../services/logging';

export default class BaseModel extends BaseEntity {
  public get className() {
    return this.constructor.toString().match(/\w+/g)![1];
  }

  public get logger() {
    return getLogger(`${this.className}_${(this as any).id}`);
  }
}
