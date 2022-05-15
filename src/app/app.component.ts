import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-formarray-example';

  form:FormGroup;

  constructor(private fb:FormBuilder){
    this.formInit();
  }

  formInit(){
    this.form = this.fb.group({
      skills: this.fb.array([
        this.fb.group({
          name:['JavaScript'],
          checked:[true]
        }),
        this.fb.group({
          name:['Angular'],
          checked:[false]
        }),
        this.fb.group({
          name:['React Js'],
          checked:[true]
        })
      ])
    })

    console.log(this.form.getRawValue());
  }


  public get skills(){
    return this.form.get('skills') as FormArray;
  }


}
