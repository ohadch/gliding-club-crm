import { Pipe, PipeTransform } from '@angular/core';
import {GetShifts_shifts} from "../graphql/types/GetShifts";
import moment from "moment";
import {WEEKDAY} from "../../consts";

@Pipe({
  name: 'shiftName'
})
export class ShiftNamePipe implements PipeTransform {

  transform(shift: GetShifts_shifts): string {
    const date = new Date(shift.action.date)
    return `${WEEKDAY[date.getDay()]} ${moment(date).format("DD/MM/YYYY")} - ${shift.type}`
  }

}
