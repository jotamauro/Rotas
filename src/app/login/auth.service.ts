import { Injectable, EventEmitter } from '@angular/core';
import { Usuario } from './usuario';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }
  private usuarioAutenticado: boolean = false;
  mostrarMenuEmitter = new EventEmitter<boolean>();

  fazerlogin(usuario: Usuario){
    if(usuario.nome === 'admin' && usuario.senha === '1234'){
      console.log("Logado");
      this.usuarioAutenticado = true;

      this.mostrarMenuEmitter.emit(true);

      this.router.navigate(['/']);
    }else{
      this.usuarioAutenticado = false;

      this.mostrarMenuEmitter.emit(false);
    }
  }
  usuarioEstaAutenticado(){
    return this.usuarioAutenticado;
  }
}
