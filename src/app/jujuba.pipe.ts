import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'jujuba'
})
export class JujubaPipe implements PipeTransform {

  transform(valor: number, multiplicador: any): any {
    return valor * multiplicador;
  }

}