import { HeaderData } from './../footer/header-data.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
// vai ter que faazer get e set mas nao para acessar o BehaviorSubject mas sim o HeaderData
  private _headerData = new BehaviorSubject<HeaderData>({
    title: 'Inicio',
    icon: 'home',
    routerUrl: ''
  })
  constructor() { }

  get headerData(): HeaderData {
    return this._headerData.value
  }

  set headerData(headerData: HeaderData) {
    // para que o BehaviorSubject possa capturar as mudanças nos valores internos de headerData
    this._headerData.next(headerData)
  }
}
