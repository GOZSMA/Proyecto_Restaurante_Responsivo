import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent implements OnInit {

  contactForm!: FormGroup;
  name!: string;
  var = "Tooltip";

  constructor (private readonly fb: FormBuilder) {}

  ngOnInit(): void {
    this.contactForm = this.initForm();
  }

  onSubmit(): void{
    console.log(this.contactForm.value)
  }

  initForm():FormGroup{
    return this.fb.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      // email: ['', [Validators.required]],
      email: ['', [Validators.email]],
      asunto: ['', [Validators.required]],
      mensaje: ['', [Validators.required, Validators.minLength(50)]],
    })
  }

}
