import { SimpleApiAppPage } from './app.po';

describe('simple-api-app App', () => {
  let page: SimpleApiAppPage;

  beforeEach(() => {
    page = new SimpleApiAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
