import { Component, OnInit } from '@angular/core';
import { Entidad } from 'src/app/models/entidad';
import { EntidadService } from 'src/app/services/entidad.service';

@Component({
  selector: 'app-entidad',
  templateUrl: './entidad.component.html',
  styleUrls: ['./entidad.component.css']
})
export class EntidadComponent implements OnInit{
  
  titulo = 'Listado Entidades'
  entidades: Entidad[];

  constructor(private service: EntidadService){}

  ngOnInit(): void {
    this.service.listar().subscribe(entidades => this.entidades = entidades);
  }

  public eliminar(entidad: Entidad){
    if(confirm(`¿Seguro que desea eliminar a ${entidad.nombreComercial} ?`)){
      this.service.eliminar(entidad.idEntidad).subscribe(()=>{
        this.entidades = this.entidades.filter(a => a !== entidad);
        alert(`Entidad ${entidad.nombreComercial} eliminado con exito`)
      })
    }
  }

}
