import { Component, OnInit} from "@angular/core"
import { CalcService } from './calculator.service';
import {FormControl,FormGroup} from "@angular/forms"

@Component({
    templateUrl : "../calculator/calculator.component.html",
    styles : [
        `.container {padding-left:20px; padding-right :20px;}
        `
    ]
})

export class CalculatorComponent implements OnInit {
   // calcForm : FormGroup
    constructor(private calcService : CalcService){
        
     }
    // number1 : FormControl;
    // number2 : FormControl;
    // result : FormControl;
    calcForm : FormGroup;
    ngOnInit(): void {
        let number1=new FormControl();
        let number2=new FormControl();
        let result =new FormControl();
        this.calcForm =new FormGroup({
            number1  :number1,
            number2 : number2,
            result : result
        })
    }

    evalAdd(){
        let formValue=this.calcForm.value;
        let result=this.calcService.add(formValue.number1,formValue.number2);
        this.calcForm.patchValue({ result: result });
    }
    evalSub(){
        let formValue=this.calcForm.value;
        let result=this.calcService.sub(formValue.number1,formValue.number2);
        this.calcForm.patchValue({ result: result });
    }
    evalMul(){
        let formValue=this.calcForm.value;
        let result=this.calcService.mul(formValue.number1,formValue.number2);
        this.calcForm.patchValue({ result: result });
    }
    evalDiv(){
        let formValue=this.calcForm.value;
        let result=this.calcService.div(formValue.number1,formValue.number2);
        this.calcForm.patchValue({ result: result });
    }
}