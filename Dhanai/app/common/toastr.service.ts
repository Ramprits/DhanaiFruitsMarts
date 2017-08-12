import { Injectable } from '@angular/core';
declare let toastr: any;
@Injectable()
export class ToastrService {

    constructor() { }
    // tslint:disable-next-line:one-line
    success(message: string, title?: string) {
        toastr.success(message, title);
    }
    info(message: string, title?: string) {
        toastr.info(message, title);
    }
    danger(message: string, title?: string) {
        toastr.danger(message, title);
    }
    warning(message: string, title?: string) {
        toastr.warning(message, title);
    }
}
