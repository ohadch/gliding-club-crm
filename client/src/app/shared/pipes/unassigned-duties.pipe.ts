import { Pipe, PipeTransform } from '@angular/core';
import {GetDuties_duties} from "../graphql/types/GetDuties";

@Pipe({
  name: 'unassignedDuties'
})
export class UnassignedDutiesPipe implements PipeTransform {

  transform(duties: GetDuties_duties[]): GetDuties_duties[] {
    return duties.filter(duty => duty.role?.name).filter(duty => !duty.member);
  }

}
