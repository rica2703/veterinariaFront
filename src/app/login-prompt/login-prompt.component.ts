import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-prompt',
  templateUrl: './login-prompt.component.html',
  styleUrls: ['./login-prompt.component.css']
})
export class LoginPromptComponent {
  @Output() close = new EventEmitter<void>();

  constructor(private router: Router) {}

  onLogin() {
    this.router.navigate(['/login']); 
    this.close.emit(); 
  }

  onRegister() {
    this.router.navigate(['/crearCuenta']); 
    this.close.emit(); 
  }

  onClose() {
    this.close.emit(); 
  }
}
