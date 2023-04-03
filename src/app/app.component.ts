import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { QuillConfiguration } from "./quill-configration";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  quillConfiguration = QuillConfiguration
  RichTextForm: FormGroup;
  constructor(){
      this.RichTextForm = new FormGroup({
        textEditor: new FormControl(""),
      });
    }
    testEditorContent(){
      alert(this.RichTextForm.get('textEditor')!.value);
    }
}


