import { NgExternalFunctionsPage } from './app.po';

describe('ng-external-functions App', () => {
  let page: NgExternalFunctionsPage;

  beforeEach(() => {
    page = new NgExternalFunctionsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
