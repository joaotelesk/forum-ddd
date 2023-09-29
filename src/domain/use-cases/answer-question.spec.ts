import { expect, test } from "vitest"
import { AnswerQuestionUseCase } from "./answer-question"
import { AnswersRepository } from "../repositories/answers-repository"
import { Answer } from "../entities/answer"


const feakeAnswerRepository:AnswersRepository = {
    create:async (answer:Answer) => {
        return
    }
}


test("create answer",  async ()=> {
    const answerQuestion = new AnswerQuestionUseCase(feakeAnswerRepository)

    const asnwer = await answerQuestion.execute({
        instrucorId: "1",
        questionId: "1",
        content: "Nova resposta"
    })

    expect(asnwer.content).toEqual("Nova resposta")
})