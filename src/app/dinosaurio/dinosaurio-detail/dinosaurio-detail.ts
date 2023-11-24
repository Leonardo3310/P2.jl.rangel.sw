import { Dinosaurio } from "../dinosaurio";


export class DinosaurioDetail extends Dinosaurio {
  

  constructor(id: number,
    name: string,
    scientificName: string,
    image: string,
    description: string,
    shortDescription: string, era : string,
    feeding : string,
    discoveryCountry :  string
    ){
      super(id, name, scientificName, image, description, shortDescription, feeding, discoveryCountry, era);
      
    }
}
