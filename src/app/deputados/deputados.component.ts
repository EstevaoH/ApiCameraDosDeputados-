import { Component, OnInit } from '@angular/core';
import { Deputados } from '../models/deputados';
import { DadosService } from '../services/dados.service';

@Component({
  selector: 'app-deputados',
  templateUrl: './deputados.component.html',
  styleUrls: ['./deputados.component.css']
})
export class DeputadosComponent implements OnInit {

  deputado: Deputados[];

  constructor(private ds: DadosService) {
    this.deputado = [];
   }

  ngOnInit() {
    this.ds.dados().subscribe(
      res =>{
        this.deputado = res["dados"];
      }
    );
  }

}
