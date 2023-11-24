export class Dinosaurio {
    id: number;
    name: string;
    scientificName: string;
    image: string;
    description: string;
    shortDescription: string;
    era :string;
    feeding : string;
    discoveryCountry : string;
  
    constructor(id: number,
      name: string,
      scientificName: string,
      image: string,
      description: string,
      shortDescription: string, era : string,
      feeding : string,
      discoveryCountry :  string
      ){
        this.id = id;
        this.name = name;
        this.scientificName = scientificName;
        this.image = image;
        this.description = description;
        this.shortDescription = shortDescription;
        this.era = era;
        this.feeding = feeding
        this.discoveryCountry = discoveryCountry

      }
  }
  