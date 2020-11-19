import { Component, OnInit, ViewChildren, ElementRef, AfterViewInit } from '@angular/core';
import { socialItemsArray } from "src/app/components/header/header.component";
import { FormBuilder, FormGroup, Validators, FormControlName } from '@angular/forms';
import { GenericValidator } from 'src/app/common/validations/generic-validator';
import { Observable, fromEvent, merge } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { HttpService } from 'src/app/services/http.service';
@Component({
  selector: 'dk-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit, AfterViewInit {
  constructor(
    private fb: FormBuilder,
    private httpService: HttpService

  ) {
    this.validationMessages = {
      'name': {
        'required': 'Name is required.',
        'minlength': 'Name must be at least three characters.',
        'maxlength': 'Name cannot exceed 50 characters.'
      },
      'email': {
        'required': 'Email ID is required.',
        'pattern': 'Email id must be Valid'
      },
      'message': {
        'required': 'message is required.'
      }
    };
    this.genericValidator = new GenericValidator(this.validationMessages);

    this.dataForm = this.fb.group({
      name: [{value: '', disabled: true}, [Validators.required, Validators.minLength(3)],],
      email: [{value: '', disabled: true}, [Validators.required, Validators.pattern(this.emailRegex)]],
      message: [{value: '', disabled: true}, Validators.required]
    })
  }
  socialItems= socialItemsArray;
  displayMessage: { [key: string]: string } = {};
  private validationMessages: { [key: string]: { [key: string]: string } };
  private genericValidator: GenericValidator;
  dataForm: FormGroup;
  emailRegex = new RegExp('^[a-zA-Z0-9._]+@[a-zA-Z0-9.]+[.]{1}[a-zA-Z0-9]+$');

  @ViewChildren(FormControlName, { read: ElementRef }) formInputElements: ElementRef[];

  ngOnInit() {
  }
  ngAfterViewInit(): void {

    // Watch for the blur event from any input element on the form.
    const controlBlurs: Observable<any>[] = this.formInputElements
      .map((formControl: ElementRef) => fromEvent(formControl.nativeElement, 'blur'));

    // Merge the blur event observable with the valueChanges observable
    merge(this.dataForm.valueChanges, ...controlBlurs).pipe(
      debounceTime(800)
    ).subscribe(() => {
      this.displayMessage = this.genericValidator.processMessages(this.dataForm);
    });

  }

  submitForm(): void {
    if (this.dataForm.valid) {
        let adminMailOptions = {
          from: 'dharmadevi60@gmail.com',
          to: 'aaaa7388@gmail.com',
          subject: this.dataForm.value.name + 'Wants to connect you' ,
          text: this.dataForm.value.message+ "   reply   "+ this.dataForm.value.email
        };
        let userMailOptions = {
          from: 'dharmadevi60@gmail.com',
          to:  this.dataForm.value.email,
          subject: 'Thanks for pinggig me' ,
          text: "I will get in touch shortly. or call me +91 99560763929"
        };
        this.dataForm.disable();
        let url='https://dheerendra-alexa-joke-skill.herokuapp.com/api/sendMail';
        let url2='https://localhost:3000/api/sendMail';
        this.httpService.post(url, new Map(), adminMailOptions).then(data=>{
          this.dataForm.enable();
          this.dataForm.reset();

        })
        this.httpService.post(url, new Map(), userMailOptions).then(data=>{
          this.dataForm.enable();
          this.dataForm.reset();
        })
  }
  }

  keyPressOnlyNumbers(event: any) {
    const pattern = /[6789]{1}[0-9]{9}/;
    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }

}
