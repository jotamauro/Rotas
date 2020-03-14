import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { AlunosComponent } from './alunos.component';
import { AlunosDetalheComponent } from './alunos-detalhe/alunos-detalhe.component';
import { AlunosFormComponent } from './alunos-form/alunos-form.component';
import { AlunosGuard } from '../guards/alunos.guard';
import { AlunosDeactivateGuard } from '../guards/alunos-deactivate.guard';
import { AlunoDetalheResolver } from './guards/aluno-detalhe.resolver';

const alunosRoutes = [
    {path: '', component: AlunosComponent, 
    canActivateChild:[AlunosGuard], children: 
        [
          {path: 'novo', component: AlunosFormComponent},
          {path: ':id', component: AlunosDetalheComponent,
                        resolve:{ aluno: AlunoDetalheResolver }},
          {path: ':id/editar', component: AlunosFormComponent,canDeactivate:[AlunosDeactivateGuard]}
        ]
    },
] ;

@NgModule({
    declarations: [],
    imports:      [RouterModule.forChild(alunosRoutes)],
    exports:      [RouterModule],
    providers:    [],
    bootstrap:    []
})
export class AlunosRoutingModule {}
