import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { AlunosService } from '../alunos.service';
import { IFormCanDeactivate } from 'src/app/guards/form-candeactivate';

@Component({
  selector: 'app-alunos-form',
  templateUrl: './alunos-form.component.html',
  styleUrls: ['./alunos-form.component.scss']
})
export class AlunosFormComponent implements OnInit,OnDestroy,IFormCanDeactivate {

  constructor(private route: ActivatedRoute,
              private alunosService: AlunosService
    ) { }

  id: number;
  inscricao: Subscription;
  aluno: any;
  formAluno: boolean = false;
  
  ngOnInit() {

    this.inscricao = this.route.params.subscribe( 
      (params: any) => {
        this.id = params['id'];

        this.aluno = this.alunosService.getAluno(this.id);

        if (this.aluno == null){
            this.aluno = {}
        }
      }
    );
  }

  ngOnDestroy(){
    this.inscricao.unsubscribe();
  }

  onInput(){
    this.formAluno = true;
  }

  podeMudarRota(){
    if (this.formAluno) {
      confirm('Deseja realmente sair ?');
    }
    return true;
  }
  podeDesativar(){
    this.podeMudarRota();
  }
}
