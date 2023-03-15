import { Component, OnInit } from '@angular/core';
import { TipoDocumento } from 'src/app/models/tipo-documento';
import { TipoDocumentoService } from 'src/app/services/tipo-documento.service';

@Component({
  selector: 'app-tipo-documento',
  templateUrl: './tipo-documento.component.html',
  styleUrls: ['./tipo-documento.component.css']
})
export class TipoDocumentoComponent implements OnInit{
  tipoDocumento: TipoDocumento[];

  constructor(private service: TipoDocumentoService){}

  ngOnInit(): void {
    this.service.listar().subscribe(tipoDocumentos => this.tipoDocumento = tipoDocumentos);
  }

  public eliminar(documento: TipoDocumento){
    if(confirm(`¿Seguro que desea eliminar a ${documento.nombre} ?`)){
      this.service.eliminar(documento.idTipoDocumento).subscribe(()=>{
        this.tipoDocumento = this.tipoDocumento.filter(a => a !== documento);
        alert(`Entidad ${documento.nombre} eliminado con exito`)
      })
    }
  }

  

}
