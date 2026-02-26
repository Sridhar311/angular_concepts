import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Admin } from './components/admin/admin';

import { Databinding } from './components/databinding/databinding';
import { Signalexample } from './components/signalexample/signalexample';
import { Controlflow } from './components/controlflow/controlflow';

@Component({
  selector: 'app-root',
  imports: [RouterLink,RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('concepts');
}
