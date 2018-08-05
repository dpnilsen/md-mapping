import { Component, OnInit } from '@angular/core';

// Import TinyMCE
import tinymce from 'tinymce/tinymce';
// A theme is also required
import 'tinymce/themes/modern/theme';

// Any plugins you want to use has to be imported
import 'tinymce/plugins/paste';
import 'tinymce/plugins/link';
import 'tinymce/plugins/image';
import 'tinymce/plugins/imagetools';


@Component({
  selector: 'app-editor-tiny',
  templateUrl: './editor-tiny.component.html',
  styleUrls: ['./editor-tiny.component.css']
})
export class EditorTinyComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    // Initialize the app
    tinymce.init({
      selector: '#tiny',
      plugins: ['paste', 'link', 'image', 'imagetools'],
      skin_url: '/assets/tiny/skins/lightgray'
    });
  }

}
