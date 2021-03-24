import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-destinations',
  templateUrl: './destinations.component.html',
  styleUrls: ['./destinations.component.css']
})
export class DestinationsComponent implements OnInit {
  origin:string = "Origen";
  destiny:string = "Destino";
  internet:string = "Paquete internet";
  experience: string = "Experiencia"
  multipleDestinations: boolean = false;
  flights: any =[{
    origin: "Origen",
    destiny: "Destino",
  }];

  internetVelocity:any =[
    {
      velocidad: "25mbps"
    },
    {
      velocidad: "10mps"
    },
    {
      velocidad: "3-10mbps"
    },
  ]




  destinations:any = [
    {
    name: "United State",
      cities: [
          {
              name: "Los Angeles",
              countryId: 1,
              nearActivities: [],
              places: [],
              id: 1
          }
      ],
      id: 1
  },
  {
      name: "Honduras",
      cities: [
          {
              name: "San Pedro Sula",
              countryId: 2,
              nearActivities: [],
              places: [],
              id: 2
          }
      ],
    i: 2
  },       
  ]

  experiences: any = [
    {
      type: "aventura" 
    },
    {
      type: "cultura" 
    },
    {
      type: "naturaleza" 
    },
    {
      type: "playa" 
    }
  ]



  constructor() { }

  ngOnInit(): void {
  }

  setInternet(int:string){
    this.internet = int;
  }

  setOrigin(idx:number, origin:string){
    this.flights[idx].origin = origin;
  }

  setDestiny(idx:number ,destiny:string){
    this.flights[idx].destiny = destiny;
  }

  setExperience(experience:string){
    this.experience = experience;
  }


  addDestinies(){
    let aux:any ={
      origin: "Origen",
      destiny: "Destino",
    };
    this.flights.push(aux);
  }

  deleteDestiny(idx){
    this.flights.splice(idx,1);

  }

  deleteOrAddDestinies(){
    if(this.multipleDestinations){
      this.flights.splice(1,(this.flights.length -1));
    }
    else{
      let aux:any ={
        origin: "Origen",
        destiny: "Destino",
      };
      for (let index = 0; index < 2; index++) {
        this.flights.push(aux);
      }
     
    }

  }
}
