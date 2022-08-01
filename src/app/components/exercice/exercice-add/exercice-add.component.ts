import { Component, OnInit } from '@angular/core';
import {NiveauService} from "../../../services/niveauService/niveau.service";
import {Router} from "@angular/router";
import {TrimestreService} from "../../../services/trimestreService/trimestre.service";
import {ChampService} from "../../../services/champService/champ.service";
import {SousChampService} from "../../../services/sousChampService/sous-champ.service";

import {ChapitreService} from "../../../services/chapitreService/chapitre.service";
import {DifficulteService} from "../../../services/difficulteService/difficulte.service";

import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {FichierService} from "../../../services/fichierService/fichier.service";
import {ExerciceService} from "../../../services/exerciceService/exercice.service";
import { Niveau } from 'src/app/model/Niveau';
import {Trimestre} from "../../../model/Trimestre";
import {Champ} from "../../../model/Champ";
import {SousChamp} from "../../../model/SousChamp";
import {Chapitre} from "../../../model/Chapitre";
import {Difficulte} from "../../../model/Difficulte";
import {Exercice} from "../../../model/Exercice";
import {MatSelectChange} from "@angular/material/select";

@Component({
  selector: 'app-exercice-add',
  templateUrl: './exercice-add.component.html',
  styleUrls: ['./exercice-add.component.scss']
})
export class ExerciceAddComponent implements OnInit {
  niveau = new FormControl('', [Validators.required]);
  trimestre = new FormControl('', [Validators.required]);
  champ = new FormControl('', [Validators.required]);
  sousChamp = new FormControl('', [Validators.required]);
  chapitre = new FormControl('', [Validators.required]);
  difficulte = new FormControl('', [Validators.required]);
  numero = new FormControl('', [Validators.required, Validators.pattern(/^[0-9]+$/)]);

  ex:Exercice=new Exercice();
 niveaux:Niveau[]=[];
 trimestres:Trimestre[]=[];
  submitted: any;
  opt = [1,2,3,4,5,6,7,8,9,10]
  ngSelect = 1;
   champs: Champ[]=[];
   sousChamps: SousChamp[]=[];
  cacher: boolean=false;
   chapitres: Chapitre[]=[] ;
   difficultes: Difficulte[]=[];
  uploadForm: FormGroup;
  formdata: FormData=new FormData();
  champselec: Champ;
   file: File;
  constructor(
    private formBuilder: FormBuilder,
    private ns:NiveauService,
    private ts:TrimestreService,
    private cs:ChampService,
    private ss:SousChampService,
    private es:ExerciceService,
    private chaps:ChapitreService,
    private ds:DifficulteService,
    private fs:FichierService,
    private _router:Router) { }

  ngOnInit(): void {

    this.uploadForm = this.formBuilder.group({
      fichier: ['']
    });
    this.cacher=false;
    this.ns.FindAllNiveaus().subscribe(res=>
    {this.niveaux=res;
    console.log(this.niveau);
    }

    );
    this.ts.FindAllTrimestres().subscribe(res=>{
      this.trimestres=res;
      console.log("trim",this.trimestres);

    })

    this.cs.FindAllChamps().subscribe(res=>{
      this.champs=res;
      console.log(this.champs)


    })
    this.chaps.FindAllChapitres().subscribe(res=>{
      this.chapitres=res;
      console.log(this.chapitres);

    })
    this.ds.FindAllDifficultes().subscribe(res=>{
      this.difficultes=res;
      console.log(this.difficultes);
    })



  }

  onSubmit() {

    this.es.addExercice(this.ex).subscribe(res=>{
      console.log(res.id);
      console.log(this.formdata)
      this.fs.AddExerciceFiles(res.id,this.formdata).subscribe(()=>("file added"));

    })

    console.log(this.ex)
    }

  SelectChamp($event: MatSelectChange) {
    console.log(this.champselec);
    this.ss.FindSousChampByChamp(this.champselec.id).subscribe(res=>
    {this.sousChamps=res;console.log(this.sousChamps);})
    this.cacher=true;
    console.log(this.cacher);

  }
  onFileChange(event: any) {
    this.file = event.target.files[0];
    this.uploadForm.get('fichier').setValue(this.file);
    console.log(this.file.type);
    this.formdata.append('file', this.uploadForm.get('fichier').value);
    console.log(this.formdata);
  }

  getErrorMessage() {
    if (this.niveau.hasError('required')) {
      return 'Choisissez une valeur svp';
    }
    if (this.trimestre.hasError('required')) {
      return 'Choisissez une valeur svp';
    }
    if (this.champ.hasError('required')) {
      return 'Choisissez une valeur svp';
    }
    if (this.sousChamp.hasError('required')) {
      return 'Choisissez une valeur svp';
    }
    if (this.difficulte.hasError('required')) {
      return 'Choisissez une valeur svp';
    }
    if (this.numero.hasError('number')) {
      return 'Choisir un nombre svp';
    }

    else return null;


  }


}
