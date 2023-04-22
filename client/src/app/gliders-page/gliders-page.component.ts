import { Component, OnInit } from '@angular/core';
import {GetGliders_gliders} from "../shared/graphql/types/GetGliders";
import {GlidersService} from "../shared/services/gliders.service";

@Component({
  selector: 'app-gliders-page',
  templateUrl: './gliders-page.component.html',
  styleUrls: ['./gliders-page.component.css']
})
export class GlidersPageComponent implements OnInit {

  gliders: GetGliders_gliders[] = []

  constructor(
    private glidersService: GlidersService
  ) { }

  ngOnInit(): void {
    this.glidersService.getAll().subscribe(({ data }) => {
      this.gliders = [...data.gliders].sort((a, b) => a.id > b.id ? 1 : -1)
    })
  }

}
