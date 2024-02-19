import { Slug } from './slug'

test('shoud be able to create a new slug from text', () => {
  const slug = Slug.createFromText('Exaple question title')
  expect(slug.value).toEqual('exaple-question-title')
})
