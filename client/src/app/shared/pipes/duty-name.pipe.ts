import { Pipe, PipeTransform } from '@angular/core';
import {GetDuties_duties} from "../graphql/types/GetDuties";
import {WEEKDAY} from "../../consts";
import moment from "moment";

@Pipe({
  name: 'dutyName'
})
export class DutyNamePipe implements PipeTransform {

  transform(duty: GetDuties_duties): string {
    const date = new Date(duty.shift.action.date)
    return `${duty.role.name} - ${WEEKDAY[date.getDay()]} ${moment(date).format("DD/MM/YYYY")} - ${duty.shift.type}`
  }

}
