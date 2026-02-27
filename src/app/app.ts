import { ChangeDetectorRef, Component, inject, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Admin } from './components/admin/admin';

import { Databinding } from './components/databinding/databinding';
import { Signalexample } from './components/signalexample/signalexample';
import { Controlflow } from './components/controlflow/controlflow';
import { Master } from './services/master';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
}
