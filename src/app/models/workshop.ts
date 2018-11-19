export class Workshop {
    
    constructor(_id = '', message = ''){
        this._id = _id;
        this.message = message; 
    }

    _id: string; 
    message: string; 
}
