import { AnswerQuestionUseCase } from './answer-question'

import { Answer } from '../../enterprise/entities/answer'
import { AnswarsRepository } from '../repositories/answers-repository'

const fakeAnswersRepository: AnswarsRepository = {
  create: async function (answer: Answer): Promise<void> {
    if (answer) console.log('')
  },
}

test('create answer', async () => {
  const answerQuestion = new AnswerQuestionUseCase(fakeAnswersRepository)

  const asnwer = await answerQuestion.execute({
    instrucorId: '1',
    questionId: '1',
    content: 'Nova resposta',
  })

  expect(asnwer.content).toEqual('Nova resposta')
})
