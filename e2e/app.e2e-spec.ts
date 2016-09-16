import { OfficePage } from './app.po';

describe('office App', function() {
  let page: OfficePage;

  beforeEach(() => {
    page = new OfficePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
