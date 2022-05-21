# Angular Formarray Example

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### How to implement form array in angular

### Steps: 

- Create angular project with below command.
	"ng new angular-formarray-example"

- After successfully creation of angular app, change file directory to project-name.
	"cd angular-formarray-example"

- Open project in vs code using "code ."

- Then run the project using "ng serve".

- Open project in chrome using localhost:4200

- Open app component in vs code and remove the content which is created by angular cli while creating the app.

- Add ReactiveFormsModule, FormsModule in app.module.ts

- Open app.component.ts , then add formbuilder as dependency in constuctor.

- Create form variable above the constructor.

- Create formInit method to intialize the form and call the method form either contructor or ngOninit.

- And create form group using form builder and also added skills as formArray inside form group.

- Create get method for getall the skills and return type must be formarray.

- Add some dummy data in the form array by directly using formgroup or skills.push method.

- Displaying form array in app.component.html to follow below options.
 
```bash
  <form class="form" [formGroup]="form">
  </form>
```

```bash
  <form class="form" [formGroup]="form">
   <div class="container">
      <div formArrayName="skills"></div>
   </div>
</form>
```
  

```bash
<form class="form" [formGroup]="form">
   <div class="container">
      <div formArrayName="skills">
         <div *ngFor="let skill of skills.controls;let i=index" >
            <div [formGroupName]="i"><input type="checkbox" formControlName="checked" /> {{skill.get('name').value}}</div>
         </div>
      </div>
   </div>
</form>
```
  
  
  ### OUTPUT
  
  
  ![image](https://user-images.githubusercontent.com/98155788/168487254-25c17ec3-6ffe-4fda-80e2-95ead1e0e49c.png)

