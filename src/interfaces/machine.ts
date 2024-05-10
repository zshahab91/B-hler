export const enum LogLevel {
    RUNNING,
    ALARM,
    WARNING
}
export interface StatusIMachine {
    name: keyof typeof LogLevel,
    icon: string,
}
export interface IMachine {
    name: string,
    status: StatusIMachine,
    mainIcon:string
}
