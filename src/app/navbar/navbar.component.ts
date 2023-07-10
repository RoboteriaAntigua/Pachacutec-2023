import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  public agregar_propiedades(){
    //Quiero que navbar-hide adquiera estas propiedades:  display: flex;  flex-direction: column;
    const navbarhide:any = document.getElementById("navbarhide");
    navbarhide.style.setProperty('display',"flex");
    navbarhide.style.setProperty('flex-direction',"column");
    const ocultarnavegarsitio:any = document.getElementById("ocultar");
    ocultarnavegarsitio.style.setProperty('display',"none");
}

public  ocultar_menu(){
  //Si la pantalla es peque ocultar menu sino no:
  if(screen.width<=767){
  const navbarhide:any = document.getElementById("navbarhide");
  navbarhide.style.setProperty('display',"none");



  const ocultarnavegarsitio:any = document.getElementById("ocultar");
  ocultarnavegarsitio.style.setProperty('display',"flex");
  ocultarnavegarsitio.style.setProperty('text-align',"center");
  }
}
}
