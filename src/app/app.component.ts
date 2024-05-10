import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


import { NavComponent } from './component/nav/nav.component';
import { MachinesComponent } from './component/machines/machines.component';
import { IMachine } from '../interfaces/machine';
import { MachinesService } from '../services/machines.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavComponent, MachinesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'buhler-test';
  machinesService: MachinesService = inject(MachinesService);
  machineList: IMachine[] = [];

  constructor(private toastr: ToastrService) { }

  async saveData(data: IMachine[]) {
    try {
      await this.machinesService.saveAllMachinesData(data);
    } catch (error) {
      console.error("Error:", error);
    }
  }

  async getMachinList() {
    const data = await this.machinesService.getAllMachines();
    try {
      this.machineList = data;
      this.toastr.success('Welcome to your dashboard!', 'Success');
      this.machineList = data;
      this.saveData(data);
    } catch (exceptionVar) {
      //Err
      this.toastr.error(``, 'Error!')
    }
  }
  ngOnInit() {
    this.getMachinList();
  }

}
