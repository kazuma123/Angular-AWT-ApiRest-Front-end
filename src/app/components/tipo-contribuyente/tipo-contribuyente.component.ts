import { Component, OnInit } from '@angular/core';
import { TipoContribuyente } from 'src/app/models/tipo-contribuyente';
import { TipoContribuyenteService } from 'src/app/services/tipo-contribuyente.service';

@Component({
  selector: 'app-tipo-contribuyente',
  templateUrl: './tipo-contribuyente.component.html',
  styleUrls: ['./tipo-contribuyente.component.css']
})
export class TipoContribuyenteComponent implements OnInit{

  tipoContribuyente: TipoContribuyente[];

  constructor(private service: TipoContribuyenteService){}

  ngOnInit(): void {
    this.service.listar().subscribe(tipoContribuyentes => this.tipoContribuyente = tipoContribuyentes);
  }

  public eliminar(tipo_contribuyente: TipoContribuyente){
    if(confirm(`¿Seguro que desea eliminar a ${tipo_contribuyente.nombre} ?`)){
      this.service.eliminar(tipo_contribuyente.idTipoContribuyente).subscribe(()=>{
        this.tipoContribuyente = this.tipoContribuyente.filter(a => a !== tipo_contribuyente);
        alert(`Entidad ${tipo_contribuyente.nombre} eliminado con exito`)
      })
    }
  }

}
