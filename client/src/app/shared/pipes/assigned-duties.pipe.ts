import { Pipe, PipeTransform } from '@angular/core';
import {GetDuties_duties} from "../graphql/types/GetDuties";

@Pipe({
  name: 'assignedDuties'
})
export class AssignedDutiesPipe implements PipeTransform {

  transform(duties: GetDuties_duties[]): GetDuties_duties[] {
    return duties.filter(duty => duty.member).filter(duty => duty.member);
  }

}
