import { Component, OnInit } from '@angular/core';
import { Dinosaurio } from '../dinosaurio';
import { DinosaurioDetail } from '../dinosaurio-detail/dinosaurio-detail';
import { DinosaurioService } from '../dinosaurio.service';

@Component({
  selector: 'app-dinosaurio',
  templateUrl: './dinosaurio-list.component.html',
  styleUrls: ['./dinosaurio-list.component.css']
})
export class DinosaurioListComponent implements OnInit {

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
