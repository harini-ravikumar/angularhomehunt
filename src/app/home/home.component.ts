import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Home } from '../interface/home';
import { ModelserviceService } from '../service/modelservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: false
})
export class HomeComponent implements OnInit {
  models: Home[] = [];
  newHome: Home = {
    homeName: '',
    src: '',
    description: '',
    price: ''
  };

  modalRef?: BsModalRef;

  constructor(
    private modalService: BsModalService,
    private service: ModelserviceService
  ) {}

  ngOnInit(): void {
    this.service.getAllModel().subscribe({
      next: (data: Home[]) => (this.models = data),
      error: (err) => console.log(err)
    });
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, { class: 'modal-lg modal-dialog-centered' });
  }

  addHome(): void {
    if (!this.newHome.homeName || !this.newHome.src || !this.newHome.description || !this.newHome.price) {
      alert("Please fill out all fields");
      return;
    }
    this.service.addModel(this.newHome).subscribe({
      next: (data: Home) => {
        this.models.push(data);
        this.modalRef?.hide();
        this.resetForm();
      },
      error: (err) => console.log(err)
    });
  }

  resetForm() {
    this.newHome = {
      id: 0,
      homeName: '',
      src: '',
      description: '',
      price: ''
    };
  }
}
