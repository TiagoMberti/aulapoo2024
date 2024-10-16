import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TelaInicialComponent } from './tela-inicial/tela-inicial.component';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { HomeComponent } from './home/home.component';
import { InvestimentoComponent } from './investimento/investimento.component';


export const routes: Routes = [
    {path:'',component:TelaInicialComponent},
    {path:'login',component:LoginComponent},
    {path:'cadastro',component:CadastroComponent},
    {path:'home',component:HomeComponent},
    {path:'investimento',component:InvestimentoComponent}
];
