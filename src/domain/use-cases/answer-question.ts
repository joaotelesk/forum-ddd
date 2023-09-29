import { Answer } from "../entities/answer"


interface AnswerQuestionUseCaseRequest {
    instrucorId: string
    questionId: string
    content: string  
}

export class AnswerQuestionUseCase {

    execute({instrucorId, questionId, content}: AnswerQuestionUseCaseRequest) {

        const answer = new Answer({content, authorId: instrucorId, questionId})

        return answer
    }
}