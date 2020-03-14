import { NgModule } from "@angular/core";

import { AlunosComponent } from './alunos.component';
import { CommonModule } from '@angular/common';
import { AlunosFormComponent } from './alunos-form/alunos-form.component';
import { AlunosDetalheComponent } from './alunos-detalhe/alunos-detalhe.component';
import { AlunosRoutingModule } from './alunos.routing.module';
import { AlunosService } from './alunos.service';
import { FormsModule } from '@angular/forms';
import { AlunosDeactivateGuard } from '../guards/alunos-deactivate.guard';


@NgModule({
    declarations: [AlunosComponent, 
                   AlunosFormComponent, 
                   AlunosDetalheComponent,
                  ],
                   
    imports:      [CommonModule,AlunosRoutingModule,FormsModule],
    providers:    [AlunosService,AlunosDeactivateGuard],
    bootstrap:    []
  })
  export class AlunosModule { }
  