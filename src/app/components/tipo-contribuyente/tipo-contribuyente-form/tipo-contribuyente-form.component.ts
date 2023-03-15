import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TipoContribuyente } from 'src/app/models/tipo-contribuyente';
import { TipoContribuyenteService } from 'src/app/services/tipo-contribuyente.service';

@Component({
  selector: 'app-tipo-contribuyente-form',
  templateUrl: './tipo-contribuyente-form.component.html',
  styleUrls: ['./tipo-contribuyente-form.component.css']
})
export class TipoContribuyenteFormComponent implements OnInit{

  tipoContribuyente: TipoContribuyente = new TipoContribuyente();

  constructor(private service: TipoContribuyenteService, private router: Router, private route: ActivatedRoute ){

  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id: number = +params.get('id');
      if(id){
        this.service.ver(id).subscribe(contribuyente => {
          this.tipoContribuyente = contribuyente;
        })
      }
    })
  }

  crear(form: NgForm){
    this.service.crear(this.tipoContribuyente).subscribe(contribuyente => {
      console.log(contribuyente);
      alert('Tipo de Contribuyente creado con exito');
      this.router.navigate(['/tipo_contribuyente']);
    })
  }

  editar(form: NgForm){
    this.service.crear(this.tipoContribuyente).subscribe(contribuyente => {
      console.log(contribuyente);
      alert('Tipo de Contribuyente actualizado con exito');
      this.router.navigate(['/tipo_contribuyente']);
    })
  }
}
