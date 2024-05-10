import { Component, Input } from '@angular/core';
import { IMachine } from '../../../interfaces/machine';

@Component({
  selector: 'app-machine',
  standalone: true,
  imports: [],
  templateUrl: './machine.component.html',
  styleUrl: './machine.component.scss'
})
export class MachineComponent {
  @Input() machine!: IMachine;
  @Input() isHeader: boolean = false;
  machineClass: string = '';

  ngOnInit() {
    this.machineClass = this.isHeader ? `box machine-header ${this.machine?.status?.name.toLowerCase()}` : `box machine ${this.machine?.status?.name.toLowerCase()}`;
  }
}
