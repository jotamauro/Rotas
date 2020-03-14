import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { AlunosComponent } from './alunos/alunos.component';
import { AuthService } from './login/auth.service';
import { AuthGuard } from './guards/auth-guard';
import { CursosGuard } from './cursos/cursos.guard';
import { AlunosGuard } from './guards/alunos.guard';
import { AlunoDetalheResolver } from './alunos/guards/aluno-detalhe.resolver';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    PaginaNaoEncontradaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [AuthService,AuthGuard,CursosGuard,AlunosGuard,AlunoDetalheResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
