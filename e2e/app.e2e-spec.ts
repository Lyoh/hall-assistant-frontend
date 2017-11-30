import { HallAssistantFrontendPage } from './app.po';

describe('hall-assistant-frontend App', () => {
  let page: HallAssistantFrontendPage;

  beforeEach(() => {
    page = new HallAssistantFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
