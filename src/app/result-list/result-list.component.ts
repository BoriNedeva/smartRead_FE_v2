import { Component, Input } from '@angular/core';
import { ActionsService } from '../services/actions.service';
import { AddToListDTO } from '../model/add-to-list-dto';
import { Book } from '../model/book';

@Component({
    selector: 'result-list',
    templateUrl: 'result-list.template.html',
})
export class ResultListComponent{
    @Input() books: any[];

    listOptions = ['Read',  'To Read', 'Favourite'];
    successful = false;
    unsuccessful = false;
    message: String;

    constructor(private actionsService: ActionsService){}

    addBookToList(option: String, book: Book, bookContainer: Element) {
        //let bookdto = new Book(book.name, book.author, book.genre);
        let addToListDto = new AddToListDTO(sessionStorage.getItem('currentUser'), book, option);
        let res = this.actionsService.addToList(addToListDto).subscribe(mess => {
            // Emit list event
            // this.unsuccessful = false;
            // this.successful = true;
            // this.message = mess;
            let alert = document.createElement('p');
            alert.setAttribute('type', 'bg-success');
            alert.className = 'bg-success';
            alert.innerHTML = mess.toString();
            bookContainer.appendChild(alert);

        },
            err => {
                // this.successful = false;
                // this.unsuccessful = true;
                // this.message = err;
                let alert = document.createElement('p');
                //alert.setAttribute('type', 'bg-danger');
                alert.className = 'bg-danger'
                alert.innerHTML = err.toString();
                bookContainer.appendChild(alert);
                console.log(err);
            });
    }
}
