import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-filter-textbox',
  standalone: true,
  imports: [FormsModule],
  templateUrl: "./filter-textbox.component.html",
  styleUrl: './filter-textbox.component.scss'
})

export class FilterTextboxComponent {
    private _message = '';
    @Input() get message(){
        return this._message;
    }

    set message(val:string){
        this._message = val;
        this.changed.emit(this._message)
    }

    @Output() changed = new EventEmitter<string>();
}
