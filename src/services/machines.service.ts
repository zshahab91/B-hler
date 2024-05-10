import { Injectable } from '@angular/core';
import { IMachine } from '../interfaces/machine';

@Injectable({
    providedIn: 'root'
})
export class MachinesService {
    url = "http://localhost:3000";

    constructor() { }

    async getAllMachines(): Promise<IMachine[]> {
        const data = await fetch(`${this.url}/machines`);
        return await data.json() ?? [];
    }

    async saveAllMachinesData(data: IMachine[]): Promise<IMachine[]> {
        let result: IMachine[] = [];
        try {
            const response = await fetch(`${this.url}/save`, {
                method: "POST",
                body: JSON.stringify(data)
            });
            result = await response.json();
        } catch (error) {}
        return result;
    }

}
