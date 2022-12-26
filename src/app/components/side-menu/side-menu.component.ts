import { Component, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent {
  constructor(private modalService: NgbModal) {}

  open() {
    const modalRef = this.modalService.open(NgbdModalContent);
    modalRef.componentInstance.name = 'World';
  }
}

@Component({
  selector: 'ngbd-modal-content',
  standalone: true,
  template: `
    <div class="modal-header d-flex justify-content-end">
      <h1 class="text-center m-auto col-11">Instructions</h1>
      <button
        type="button"
        class="btn-close col-1"
        aria-label="Close"
        (click)="activeModal.dismiss('Cross click')"
      ></button>
    </div>
    <div class="modal-body">
      <ul>
        <li>
          If the dealer has blackjack and the player doesn't, the player
          automatically loses.
        </li>
        <li>
          If the player has blackjack and the dealer doesn't, the player
          automatically wins.
        </li>
        <li>If both the player and dealer have blackjack then it's a push.</li>
        <li>
          If neither side has blackjack, then each player plays out his hand,
          one at a time.
        </li>
        <li>When all the players have finished the dealer plays his hand.</li>
        <li>The player's options for playing his or her hand are:</li>

        <li>Hit: Take another card.</li>
        <li>Stand: Take no more cards.</li>
        <li>
          Double down: Double the wager, take exactly one more card, and then
          stand.
        </li>
        <li>
          Split: Double the wager and have each card be the first card in a new
          hand. This option is available only when both cards have the same
          value. Sometimes two face cards will be considered acceptable for
          splitting, as each is 10 points.
        </li>
      </ul>
      <div class="modal-footer">
        <button
          type="button"
          class="btn btn-outline-light"
          (click)="activeModal.close('Close click')"
        >
          Close
        </button>
      </div>
    </div>
  `,
})
export class NgbdModalContent {
  @Input() name: any;

  constructor(public activeModal: NgbActiveModal) {}
}
