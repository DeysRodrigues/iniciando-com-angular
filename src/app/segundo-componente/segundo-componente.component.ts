import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-segundo-componente',
  templateUrl: './segundo-componente.component.html',
  styleUrls: ['./segundo-componente.component.css']
})
export class SegundoComponenteComponent {

  nome = "João";
  dataNascimento = "2001-03-11";
  urlImagem = "/assets/joaum.jpg";
}
