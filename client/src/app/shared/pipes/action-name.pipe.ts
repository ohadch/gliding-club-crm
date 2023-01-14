import { Pipe, PipeTransform } from '@angular/core';
import {GetActions_actions} from "../graphql/types/GetActions";
import moment from "moment";
import {WEEKDAY} from "../../consts";

@Pipe({
  name: 'actionName'
})
export class ActionNamePipe implements PipeTransform {

  transform(action: GetActions_actions): string {
    const date = new Date(action.date)
    return `${WEEKDAY[date.getDay()]} ${moment(date).format("DD/MM/YYYY")}`
  }


}
