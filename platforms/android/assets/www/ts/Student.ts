class Student {
    fullname: string;
    constructor(public firstname: string, public middleinitial: string, public lastname: string) {
        this.fullname = firstname + " " + middleinitial + " " + lastname;
    }
}

export = Student;