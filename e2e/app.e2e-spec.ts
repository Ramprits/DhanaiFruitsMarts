import { DhanaiFruitsMartPage } from './app.po';

describe('dhanai-fruits-mart App', () => {
  let page: DhanaiFruitsMartPage;

  beforeEach(() => {
    page = new DhanaiFruitsMartPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to yo!');
  });
});
