export const  TypesMachine = {
    "ALARM":{
        name: "Attacher",
            status: {
                name: "ALARM",
                icon: "error_outline"
            },
            mainIcon: "grid_on"
    },
   "RUNNING": {
        name: "Scale",
            status: {
                name: "RUNNING",
                icon: "settings_backup_restore"
            },
            mainIcon: "system_update_alt"
    },
    "WARNING":{
        name: "Packer",
            status: {
                name: "WARNING",
                icon: "report_problem"
            },
            mainIcon: "system_update_alt"
    }
}