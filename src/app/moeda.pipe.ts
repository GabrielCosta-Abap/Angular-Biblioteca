import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'moeda'
})
export class MoedaPipe implements PipeTransform {
  //300 ou 300.004342 -> 300.00
  //300.00 -> 300,00
  //300,00 -> R$ 300,00
  transform(valor: number | undefined): string {
    if(!valor) {
      return "";
    }
    const valorDecimal = valor.toFixed(2);
    const valorDecimalBr = valorDecimal.replace('.', ',');
    const valorMoeda = 'R$ '+valorDecimalBr;
    return valorMoeda;
  }

}
