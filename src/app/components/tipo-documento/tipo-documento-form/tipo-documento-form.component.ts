import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TipoDocumento } from 'src/app/models/tipo-documento';
import { TipoDocumentoService } from 'src/app/services/tipo-documento.service';

@Component({
  selector: 'app-tipo-documento-form',
  templateUrl: './tipo-documento-form.component.html',
  styleUrls: ['./tipo-documento-form.component.css']
})
export class TipoDocumentoFormComponent implements OnInit{

  tipoDocumento: TipoDocumento = new TipoDocumento();

  constructor(private service: TipoDocumentoService, private router: Router, private route: ActivatedRoute ){

  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id: number = +params.get('id');
      if(id){
        this.service.ver(id).subscribe(documento => {
          this.tipoDocumento = documento;
        })
      }
    })
  }

  crear(form: NgForm){
    this.service.crear(this.tipoDocumento).subscribe(documento => {
      console.log(documento);
      alert('Tipo de Documento creado con exito');
      this.router.navigate(['/tipo_documento']);
    })
  }

  editar(form: NgForm){
    this.service.crear(this.tipoDocumento).subscribe(documento => {
      console.log(documento);
      alert('Tipo de Documento actualizado con exito');
      this.router.navigate(['/tipo_documento']);
    })
  }

}
