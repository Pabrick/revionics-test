import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { RevOption } from './rev-select.types';

@Component({
  selector: 'rev-select',
  templateUrl: './rev-select.component.html',
  styleUrls: ['./rev-select.component.scss'],
})
export class RevSelectComponent implements AfterViewInit, OnChanges {
  @ViewChild('selectBtn', { static: true }) selectBtn: ElementRef | undefined;
  private selectBtnElem: HTMLElement | undefined;

  @Input() placeholderText!: string;
  @Input() options!: RevOption[];

  @Input() index!: number;
  @Output() indexChange = new EventEmitter<number>();

  @Output() onSelection: EventEmitter<string> = new EventEmitter();

  public isOpen: boolean = false;

  ngAfterViewInit() {
    this.selectBtnElem = this.selectBtn?.nativeElement;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['index']?.previousValue !== changes['index']?.currentValue) {
      this.onIndexChange(changes['index'].currentValue);
    }
  }

  private onIndexChange(index: number) {
    this.index = index;
    this.indexChange.emit(this.index);
    this.onSelection.emit(this.options[index].id);
  }

  public toggleOptions() {
    this.isOpen = !this.isOpen;
    this.selectBtnElem?.setAttribute('aria-expanded', `${this.isOpen}`);
  }

  public onClickOption(i: number) {
    this.onIndexChange(i);
    this.isOpen = false;
  }
}
