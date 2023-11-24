import { Component, OnInit } from '@angular/core';
import { Dinosaurio } from './dinosaurio';
import { DinosaurioService } from './dinosaurio.service';
import { DinosaurioDetail } from './dinosaurio-detail/dinosaurio-detail';

@Component({
  selector: 'app-dinosaurio',
  templateUrl: './dinosaurio.component.html',
  styleUrls: ['./dinosaurio.component.css']
})
export class DinosaurioComponent implements OnInit {

  dinosaurios: Array<Dinosaurio> = [];
  selectedDino!: DinosaurioDetail;
  selected: boolean = false;


  constructor(private dinosaurioService: DinosaurioService) { }
 
  getDinosaurios(): void {
    this.dinosaurioService.getDinosaurios().subscribe((dinosaurios) => {
      this.dinosaurios = dinosaurios;
    });
  }
 
  selectedDinosaurio(dino: DinosaurioDetail){
    this.selectedDino = dino;
    this.selected = true;
  }

  ngOnInit() {
    this.getDinosaurios();
  }

}
