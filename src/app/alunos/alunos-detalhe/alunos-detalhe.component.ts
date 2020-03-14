import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CursosService } from 'src/app/cursos/cursos.service';
import { Subscription } from 'rxjs';
import { AlunosService } from '../alunos.service';
import { Aluno } from '../aluno';

@Component({
  selector: 'app-alunos-detalhe',
  templateUrl: './alunos-detalhe.component.html',
  styleUrls: ['./alunos-detalhe.component.scss']
})
export class AlunosDetalheComponent implements OnInit,OnDestroy {

  id: number;
  inscricao: Subscription;
  aluno: any;

  constructor(private route: ActivatedRoute,
              private alunosService: AlunosService,
              private router: Router
              ) {  
          
              }

  ngOnInit() {

    console.log('ngOnInit: AlunosDetalheComponent');
  
    this.inscricao = this.route.data.subscribe(
      (info: {aluno: Aluno}) => {
          console.log(info);
          this.aluno = info.aluno;
      }
    );
  }
  editarContato(){
    this.router.navigate(['/alunos',this.aluno.id,'editar']);

  }
  ngOnDestroy(){
    this.inscricao.unsubscribe();
  }
}