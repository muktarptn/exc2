import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styles: []
})
export class SortComponent implements OnInit {

  prods=[
    {"pid":"p001" ,"name":"Dell" ,"price":"400000"},
    
    {"pid":"p002" ,"name":"hp" ,"price":"35000"},
    
    {"pid":"p003" ,"name":"samsung" ,"price":"25000"},
    
    {"pid":"p004" ,"name":"apple" ,"price":"24000"},
    
    {"pid":"p005" ,"name":"lenovo" ,"price":"30000"},
    
    {"pid":"p006" ,"name":"acer" ,"price":"8000"},
 
    {"pid":"p007" ,"name":"Asus" ,"price":"8000"}
 
 ];


sortdata(name:string)
{
this.prods.sort(function(a,b)
{
if(a[name] > b[name])
return 1;
});

}









  constructor() { }

  ngOnInit() {
  }

}
