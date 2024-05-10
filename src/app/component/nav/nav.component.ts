import { Component, Input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { IMachine } from '../../../interfaces/machine';
import { MachinesComponent } from '../machines/machines.component';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [DatePipe, MachinesComponent],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {
  time: number = Date.now();
  @Input() machineList:IMachine[]=[];

}
