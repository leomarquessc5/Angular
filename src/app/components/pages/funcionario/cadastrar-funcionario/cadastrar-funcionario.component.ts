import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastrar-funcionario',
  templateUrl: './cadastrar-funcionario.component.html',
  styleUrls: ['./cadastrar-funcionario.component.css']
})
export class CadastrarFuncionarioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  calcular(): void{
    alert("olá mundo");
    console.log("olá mundo")
  }
}
