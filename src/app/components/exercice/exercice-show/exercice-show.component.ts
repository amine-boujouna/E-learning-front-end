import {Component, OnInit} from '@angular/core';
import {Exercice} from "../../../model/Exercice";
import {ExerciceService} from "../../../services/exerciceService/exercice.service";

import {MatTableDataSource} from "@angular/material/table";
import { DomSanitizer} from '@angular/platform-browser';
@Component({
  selector: 'app-exercice-show',
  templateUrl: './exercice-show.component.html',
  styleUrls: ['./exercice-show.component.scss']
})




export class ExerciceShowComponent implements OnInit {
  exercices: Exercice[] = []


  constructor(private es: ExerciceService,private sanitizer : DomSanitizer) {
  }



  displayedColumns = ['numero', 'niveau', 'trimestre','sousChamp', 'chapitre','difficulte','fichiers'];

  dataSource: any;

  ngOnInit(): void {
    this.es.FindAllExercices().subscribe(res => {
      this.exercices = res;
      this.dataSource = new MatTableDataSource<Exercice>(this.exercices);
      console.log(this.exercices);
    })
  }
  applyFilter(filterValue) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getSanitizedURL(url:string) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }

}
