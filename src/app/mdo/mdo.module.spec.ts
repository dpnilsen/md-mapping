import { MdoModule } from './mdo.module';

describe('MdoModule', () => {
  let mdoModule: MdoModule;

  beforeEach(() => {
    mdoModule = new MdoModule();
  });

  it('should create an instance', () => {
    expect(mdoModule).toBeTruthy();
  });
});
