import { ElNg1Page } from './app.po';

describe('el-ng1 App', function() {
  let page: ElNg1Page;

  beforeEach(() => {
    page = new ElNg1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
