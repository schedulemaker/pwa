import { action, computed, observable } from "mobx";
import axiosInstane from "../../stores/axios";
import messageStore from "../../stores/message";

export class ChartStore {
    @observable schedules: Map<String, String> = new Map<String, String>()
    @observable scheduleName: string = null;

    constructor() {
        this.schedules.set("Default", "Default")
    }

    @computed get scheduleArray() {
        return Array.from(this.schedules)
    }

    @action.bound changeName(name) {
        this.scheduleName = name
    }

    @action.bound addSchedule() {
        let name = this.scheduleName;

        let existingSchedule = this.schedules.get(name) != undefined
        let invalidName = name == null
        console.log(existingSchedule, invalidName)
        console.log(name)
        if (existingSchedule || invalidName ) {
            //already have a schedule with that name or name is invalid
            console.log("wtf")
            return;
        }
        console.log("done")
        this.schedules.set(name, name)
    }
}

const store = new ChartStore();

export default store
