import { TestOnlyPage } from './app.po';

describe('test-only App', () => {
  let page: TestOnlyPage;

  beforeEach(() => {
    page = new TestOnlyPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
