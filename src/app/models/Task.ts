export class Task {
    id: string;
    name: string;
    dueDate: string;
    category: string;
    importance: Number;
    status: string;
    comment: string;

    constructor(name: string) {
        this.name = name;
        this.category = 'Rep';
        this.importance = 0;
        this.dueDate = 'Today';
    }
}
