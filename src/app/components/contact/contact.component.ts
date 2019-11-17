import { Component, OnInit, ViewChildren, ElementRef, AfterViewInit } from '@angular/core';
import { socialItemsArray } from "src/app/components/header/header.component";
import { FormBuilder, FormGroup, Validators, FormControlName } from '@angular/forms';
import { GenericValidator } from 'src/app/common/validations/generic-validator';
import { Observable, fromEvent, merge } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
@Component({
  selector: 'dk-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit, AfterViewInit {
  socialItems= socialItemsArray;
  displayMessage: { [key: string]: string } = {};
  private validationMessages: { [key: string]: { [key: string]: string } };
  private genericValidator: GenericValidator;
  dataForm: FormGroup;
  emailRegex = new RegExp('^[a-zA-Z0-9._]+@[a-zA-Z0-9.]+[.]{1}[a-zA-Z0-9]+$');
  constructor(
    private fb: FormBuilder,

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
      name: ["", [Validators.required, Validators.minLength(3)]],
      email: ["", [Validators.required, Validators.pattern(this.emailRegex)]],
      message: ["", Validators.required]
    })
  }

  ngOnInit() {
  }

  @ViewChildren(FormControlName, { read: ElementRef }) formInputElements: ElementRef[];
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
      // if (this.dataForm.dirty) {
      //   let blog = new BlogCommentModel();
      //   blog.name = this.dataForm.value.name;
      //   blog.email = this.dataForm.value.email;
      //   blog.rating = this.dataForm.value.rating;
      //   blog.comment = this.dataForm.value.comment;
      //   blog.blogId = this.blogId;
      //   this.submitButtonValue = 'Posting...';
      //   this.submitButtonState = 0;
      //   this.dataForm.disable();
      //   this.contentService.addCommentToBlog((output) => {
      //     if (output.error == false) {
      //       this.onSaveComplete();
      //       this.submitButtonValue = 'Posted';
      //       this.submitButtonState = 1;
      //       this.dataForm.enable();
      //       this.contentService.updatePostCommentClicked(true);
      //       setTimeout(() => {
      //         this.dataForm.reset();
      //         this.submitButtonState = -1;
      //         this.submitButtonValue = 'Post';
      //       }, 2000);
      //     } else {
      //       // this.patchValues(blog);
      //       this.submitButtonValue = 'Not Posted';
      //       this.submitButtonState = 2;
      //       this.dataForm.enable();
      //     }
      //   }, blog, this.blogId)
      // } else {
      //   this.onSaveComplete();
      // }
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
