export class Employess{
    firtName: string;
    lastName: string;
    birthday: Date;
    address: string;
    jobTitle: string;
    constructor(firtName: string, lastName: string, birthday: Date, address: string, jobTitle: string){
        this.firtName = firtName;
        this.lastName = lastName;
        this.birthday = birthday;
        this.address = address;
        this.jobTitle = jobTitle;
    }
}