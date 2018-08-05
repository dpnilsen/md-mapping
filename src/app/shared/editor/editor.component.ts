import { Component, OnInit } from '@angular/core';


// import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import * as DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';
import { CKEditor5 } from '@ckeditor/ckeditor5-angular/ckeditor';
import { ChangeEvent, FocusEvent, BlurEvent } from '@ckeditor/ckeditor5-angular/ckeditor.component';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {


  Editor = DecoupledEditor; // ClassicEditor;

  public isDisabled = false;

  public editorData = `<p>Getting used to an entirely different culture can be challenging.
While it’s also nice to learn about cultures online or from books, nothing comes close to experiencing cultural diversity in person.
You learn to appreciate each and every single one of the differences while you become more culturally fluid.</p>`;

  public componentEvents: string[] = [];

  constructor() { }

  ngOnInit() {
  }

  toggleDisableEditors() {
    this.isDisabled = !this.isDisabled;
  }

  onReady( editor: CKEditor5.Editor ): void {
    editor.ui.view.editable.element.parentElement.insertBefore(
    editor.ui.view.toolbar.element,
    editor.ui.view.editable.element
    );

    this.componentEvents.push( 'The editor is ready.' );

  }

  onChange( event: ChangeEvent ): void {
    this.componentEvents.push( 'Editor model changed.' );
  }

  onFocus( event: FocusEvent ): void {
    this.componentEvents.push( 'Focused the editing view.' );
  }

  onBlur( event: BlurEvent ): void {
    this.componentEvents.push( 'Blurred the editing view.' );
  }
}
