import {Component} from "@angular/core";
import {DataService} from "../services/DataService";
import {MdtCellAlign} from "./mdt-cell-align.directive";

@Component({
    moduleId: module.id,
    selector: '[mdt-columns]',
    templateUrl: 'mdt-columns.html',
    styleUrls: ['main.css'],
    directives: [MdtCellAlign]
})
export class MdtColumns{
    constructor(public dataService: DataService){

    }
}