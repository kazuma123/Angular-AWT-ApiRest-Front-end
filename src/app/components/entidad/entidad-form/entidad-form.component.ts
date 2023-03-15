import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Entidad } from 'src/app/models/entidad';
import { TipoContribuyente } from 'src/app/models/tipo-contribuyente';
import { TipoDocumento } from 'src/app/models/tipo-documento';
import { EntidadService } from 'src/app/services/entidad.service';
import { TipoContribuyenteService } from 'src/app/services/tipo-contribuyente.service';
import { TipoDocumentoService } from 'src/app/services/tipo-documento.service';

@Component({
  selector: 'app-entidad-form',
  templateUrl: './entidad-form.component.html',
  styleUrls: ['./entidad-form.component.css']
})
export class EntidadFormComponent implements OnInit{
  entidad: Entidad = new Entidad();

  tipoDocumento: TipoDocumento[] = [];
  tipoContribuyente: TipoContribuyente[] = [];

  constructor(
    private contribuyenteService: TipoContribuyenteService,
    private documentoService: TipoDocumentoService,
    private service: EntidadService, 
    private router: Router, 
    private route: ActivatedRoute
    ){}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id: number = +params.get('id');
      if(id){
        this.service.ver(id).subscribe(contribuyente => {
          this.entidad = contribuyente;
        }) 
      }
    })
    this.contribuyenteService.listar().subscribe(c => this.tipoContribuyente = c);
    this.documentoService.listar().subscribe(d => this.tipoDocumento = d);

  }

  crear(form: NgForm){
    this.service.crear(this.entidad).subscribe(contribuyente => {
      console.log(contribuyente);
      alert('Tipo de Contribuyente creado con exito');
      this.router.navigate(['/entidad']);
    })
  }

  editar(form: NgForm){
    this.service.crear(this.entidad).subscribe(contribuyente => {
      console.log(contribuyente);
      alert('Tipo de Contribuyente actualizado con exito');
      this.router.navigate(['/entidad']);
    })
  }
}
