import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IMachine } from '../../../interfaces/machine';
import { MachineComponent } from '../machine/machine.component';
@Component({
  selector: 'app-machines',
  standalone: true,
  imports: [CommonModule, MachineComponent],
  templateUrl: './machines.component.html',
  styleUrl: './machines.component.scss'
})
export class MachinesComponent {
  @Input() machineList!:IMachine[];
  @Input() isHeader!:boolean;

}
