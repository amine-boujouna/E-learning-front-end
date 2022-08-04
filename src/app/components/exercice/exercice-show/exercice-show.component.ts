import {Component, OnInit, ViewChild} from '@angular/core';
import {Exercice} from "../../../model/Exercice";
import {ExerciceService} from "../../../services/exerciceService/exercice.service";
import {delay} from "utils-decorators";

import {MatTableDataSource} from "@angular/material/table";
import { DomSanitizer} from '@angular/platform-browser';
import {LiveAnnouncer} from "@angular/cdk/a11y";
import {MatSort, Sort} from "@angular/material/sort";
@Component({
  selector: 'app-exercice-show',
  templateUrl: './exercice-show.component.html',
  styleUrls: ['./exercice-show.component.scss']
})




export class ExerciceShowComponent implements OnInit {
  exercices: Exercice[] = []
  dataSource = new MatTableDataSource<Exercice>(this.exercices);


  constructor(private es: ExerciceService,private sanitizer : DomSanitizer,private _liveAnnouncer: LiveAnnouncer) {
  }



  displayedColumns = ['numero', 'niveau', 'trimestre','sousChamp', 'chapitre','difficulte','fichiers'];


  @delay(500)
  getInfo(){
    this.es.FindAllExercices().subscribe(res=>this.exercices=res);

    this.getList();
  }
  @delay(1500)
  getList(){
    this.dataSource = new MatTableDataSource<Exercice>(this.exercices);
    this.dataSource.sortingDataAccessor = (item, property) => {
      switch(property) {
        case 'niveau': return item.niveau.titre;
        case 'chapitre': return item.chapitre.titre;
        case 'trimestre': return item.trimestre.titre;
        case 'sousChamp': return item.sousChamp.titre;
        case 'difficulte': return item.difficulte.titre;

        default: return item[property];
      }
    };
    if (this.exercices != []) {
      this.dataSource.sort = this.sort;
    }
  }


  ngOnInit(): void {
   this.getInfo()
  }
  @ViewChild(MatSort) sort: MatSort;



  applyFilter(filterValue) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getSanitizedURL(url:string) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }
  announceSortChange(sortState: Sort) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

}
