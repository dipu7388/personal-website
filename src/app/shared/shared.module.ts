import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { LoginService } from '../services/login.service';
import { MatSidenavModule, MatFormFieldModule, MatInputModule, MatSidenavContainer, MatSnackBarContainer } from '@angular/material';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomMaterialModule } from '../modules/custom-material/custom-material.module';

@NgModule({
  declarations: [SideMenuComponent, SidenavComponent],
  imports: [
    CommonModule,
    MatSidenavModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    CustomMaterialModule,
    ReactiveFormsModule,
  ],
  providers: [
    LoginService
  ],
  exports: [
    SidenavComponent,
    SideMenuComponent,
    MatFormFieldModule,
    MatInputModule,
  ],
   entryComponents:[
    SidenavComponent,
    SideMenuComponent,
  ]
})
export class SharedModule { }
