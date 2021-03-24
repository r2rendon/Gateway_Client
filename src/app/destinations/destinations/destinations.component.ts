import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-destinations',
  templateUrl: './destinations.component.html',
  styleUrls: ['./destinations.component.css']
})
export class DestinationsComponent implements OnInit {
  origin:string = "Origen";
  destiny:string = "Destino";
  internet:string = "Velocidad de internet";
  experience: string = "Experiencia"

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

  setOrigin(origin:string){
    this.origin = origin;
  }

  setDestiny(destiny:string){
    this.destiny = destiny;
  }

  setExperience(experience:string){
    this.experience = experience;
  }

}
