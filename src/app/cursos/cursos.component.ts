import { Component, OnInit } from '@angular/core';
import { CursosService } from './cursos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {


  cursos: any[];
  inscricao: Subscription;
  pagina: number;

  constructor(private cursosService: CursosService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.cursos = this.cursosService.getCursos();
    this.route.queryParams.subscribe(
      (queryParams: any) => {

        this.pagina = queryParams['pagina'];
      }
    );
  }

  ngOnDestroy(){
    this.inscricao.unsubscribe();
  }
  proximaPagina(){
    this.pagina++;
    this.router.navigate(['/cursos'],
     {queryParams:{'pagina': this.pagina}});
  }
}
