import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Curso } from './curso';
import { CursoService } from './curso.service';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {

  

  vetor:Curso[];

  curso = new Curso();

  constructor( private curso_servico:CursoService) { }

  ngOnInit(){

    this.selecao();

      }

    selecao(){
      this.curso_servico.obterCursos().subscribe(
        (res: Curso[]) => {
          this.vetor = res;
      }
      )
    }  

    cadastro(): void{

    }

    alterar(): void{

    }

    remover(): void{

    }
}
