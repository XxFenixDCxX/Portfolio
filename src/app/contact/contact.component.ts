import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  email: string = '';
  nombre: string = '';
  empresa: string = '';
  mensaje: string = '';

  enviarCorreo() {
    if (!this.email || !this.nombre || !this.mensaje) {
      alert('Por favor, complete todos los campos obligatorios.');
      return;
    }

    const subject = encodeURIComponent("Correo Portafolio " + this.nombre + " - " + this.email);
    const body = encodeURIComponent("Nombre: " + this.nombre + "\n" + "Empresa: " + (this.empresa ? this.empresa : 'No proporcionada') + "\n\n" + this.mensaje);
    const mailtoLink = "mailto:arkaitzcs@gmail.com?subject=" + subject + "&body=" + body;

    window.open(mailtoLink);
  }
}
