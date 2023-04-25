import {Component, Input, OnInit} from '@angular/core';
import {GetGliders_gliders} from "../../shared/graphql/types/GetGliders";

@Component({
  selector: 'app-gliders-page-gliders-table',
  templateUrl: './gliders-page-gliders-table.component.html',
  styleUrls: ['./gliders-page-gliders-table.component.css']
})
export class GlidersPageGlidersTableComponent implements OnInit {

  @Input() gliders!: GetGliders_gliders[]
  displayedColumns: string[] = ['id', 'callSign', 'endorsements', 'owners'];

  constructor() { }

  ngOnInit(): void {
  }

}
