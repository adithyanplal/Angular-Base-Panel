import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
 
})
export class SidebarComponent {
  menuItems = [
    { label: 'Components', open: false, subMenu: ['Component 1', 'Component 2', 'Component 3'] }
  ];

  toggleAccordion(item: any): void {
    // Toggle the 'open' property for the item
    item.open = !item.open;
  
    // Using setTimeout to ensure DOM manipulation happens after Angular's change detection cycle
    setTimeout(() => {
      const element = document.querySelector('.accordion-content');
      
      if (element) {
        // Add 'open' class when the accordion is open, remove when it's closed
        if (item.open) {
          element.classList.add('open');
          element.classList.remove('close');  // Remove the 'close' class when opening
        } else {
          element.classList.remove('open');
          element.classList.add('close');  // Add the 'close' class when closing
        }
      }
    }, 0);
  }
  
  
}
