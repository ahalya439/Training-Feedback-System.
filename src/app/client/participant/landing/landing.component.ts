import { Component } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent {

  
  constructor() { }

  ngOnInit(): void {
  }

  register(){
  const modal = document.getElementById('exampleModal');
  if (modal) {
   
    modal.style.display = 'display';
    
    setTimeout(() => {
      document.body.classList.remove('modal-open');

      const modalBackdrop = document.querySelector('.modal-backdrop');
      if (modalBackdrop && modalBackdrop.parentNode) { // Check if modalBackdrop and parentNode are not null
        modalBackdrop.parentNode.removeChild(modalBackdrop);
      }
    }, 100);    }
  
}

}