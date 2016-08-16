import { SimpleSearchTestPage } from './app.po';

describe('simple-search-test App', function() {
  let page: SimpleSearchTestPage;

  beforeEach(() => {
    page = new SimpleSearchTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('ss-app works!');
  });
});
