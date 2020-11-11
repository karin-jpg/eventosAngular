import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})

export class EventosComponent implements OnInit {

  eventos: any = [];
  imagemLargura = 50;
  iamgemMargem = 50;
  mostrarImagem = false;
  filtroLista = '';
  constructor(private http: HttpClient) { }

  // tslint:disable-next-line: typedef
  ngOnInit() {
    this.getEventos();
  }

  // tslint:disable-next-line: typedef
  alternarImagem(){
    this.mostrarImagem = !this.mostrarImagem;
  }

  // tslint:disable-next-line: typedef
  getEventos(){
   this.http.get('http://localhost:5000/api/values').subscribe(response => {
     this.eventos = response;
     console.log(response);
    }, error => {
      console.log(error);
    }
   );
  }


}
