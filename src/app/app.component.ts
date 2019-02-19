import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <p textBlue>텍스트 블루 디렉티브를 적용함</p>
    <button counting>Hit</button>
  `,
  styles: []
})
export class AppComponent {
  title = 'framework-directive-custom-attr-directive';
}
