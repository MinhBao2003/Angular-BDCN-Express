import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactService } from 'src/app/server/contact/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  // Define form controls
  contactForm = new FormGroup({
    hoten: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    comment: new FormControl('', Validators.required),
  });

  constructor(private contactService: ContactService) {}

  onSubmit() {
    if (this.contactForm.valid) {
      const formData = {
        hoten: this.contactForm.get('hoten')?.value,
        email: this.contactForm.get('email')?.value,
        comment: this.contactForm.get('comment')?.value,
        date: new Date().toLocaleDateString(),
        clock: new Date().toLocaleTimeString(),
      };

      this.contactService.submitForm(formData)
        .subscribe(response => {
          console.log('Form submitted successfully:', response);
          // Additional logic after form submission
          alert('Form submitted successfully!');
        });
    } else {
      // Handle form validation errors
      // You can display an error message or perform any other actions
      console.log('Form is not valid');
    }
  }
}
