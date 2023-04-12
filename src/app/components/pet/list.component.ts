import { Component, OnInit } from '@angular/core';
import { Pet } from 'src/app/models/pet';
import { PetService } from 'src/app/service/pet.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  pet: Pet[] = [];

  constructor(
    private PetService: PetService
    ) {}

  ngOnInit(): void {
  this.PetService.list().subscribe((data) => {
    this.pet = data;
  });
}
}