import { BarbeloFrontendPage } from './app.po';

describe('barbelo-frontend App', function() {
  let page: BarbeloFrontendPage;

  beforeEach(() => {
    page = new BarbeloFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
