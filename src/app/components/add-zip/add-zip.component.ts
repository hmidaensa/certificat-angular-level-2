import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ICity } from '../../shared/module/icity';

@Component({
  selector: 'app-add-zip',
  templateUrl: './add-zip.component.html',
  styleUrl: './add-zip.component.css'
})
export class AddZipComponent implements OnInit{
 

  zipForm!: FormGroup;
  errorExist=false;
  errorServer=false;
  success=false;
  @Output() refreshListWeader=new EventEmitter<any>();

  constructor(private weatherService:WeatherService,private formBuild:FormBuilder){

  }

  ngOnInit(): void {

    this.zipForm=this.formBuild.group(
     {
      zip: new FormControl('',[Validators.required,Validators.pattern(new RegExp("^[0-9]{5}$"))])
     }
    );
     
  }
 
 

  saveZip(){
 
    if(this.zipForm.valid){
      try{
        this.weatherService.laodLocationIfExiste(this.zipForm.value.zip).subscribe( location =>{
          
          let statusAdded=this.weatherService.addLocationToLocalStoarge(location);
          if(statusAdded !=-1){
            this.refreshListWeader.emit(statusAdded);
            this.success=true;
            setTimeout(() => {
              this.success=false;
            }, 3000);
          }
          else{
            this.errorExist=true;
            setTimeout(() => {
              this.errorExist=false;
            }, 3000);
          }

        })
      }
      catch(e){
        this.errorServer=true;
        setTimeout(() => {
          this.errorServer=false;
        }, 3000);
          
      }
      
    }


  }
   get f():any{
    return this.zipForm.controls;
   }

}
