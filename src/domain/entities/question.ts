import { randomUUID } from "node:crypto"


interface QuestionProps {
    content: string, 
    title:string, 
    autherId: string
}

export class Question {
    public id: string
    public title: string
    public content: string
    public authorId: string

    constructor({title, content, autherId}: QuestionProps, id?:string) {
        this.id = id ?? randomUUID()
        this.title = title
        this.content = content
        this.authorId = autherId
    }
}