import { Component } from "@angular/core"
import { IonicModule } from "@ionic/angular"
import { CommonModule } from "@angular/common"
import { FormsModule } from "@angular/forms"

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})

export class HomePage{
  nome: string = '';
  idade: number = 0;
  resultado: string = '';

  mostrar(){
    this.resultado = `Você se chama ${this.nome} e tem ${this.idade} anos`
  }
}