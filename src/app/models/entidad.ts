import { TipoContribuyente } from "./tipo-contribuyente";
import { TipoDocumento } from "./tipo-documento";

export class Entidad {
    idEntidad: number;
    direccion: string;
    nombreComercial: string;
    nroDocumento: string;
    razonSocial: string;
    telefono: string;
    tbTipoContribuyente: TipoContribuyente[]
    tbTipoDocumento: TipoDocumento[]
}
