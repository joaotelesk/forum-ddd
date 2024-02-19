import { Answer } from '../../enterprise/entities/answer'

export interface AnswarsRepository {
  create(answer: Answer): Promise<void>
}
