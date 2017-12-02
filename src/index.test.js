
import isUrl from 'is-url';

import validateUrl from './index';

jest.mock('is-url', () => jest.fn());

describe('prop-types-url-validator', () => {
  const propName = 'baejadley';
  const componentName = 'jaebaebae';
  const url = 'http://google.com';
  let mockedIsUrl;

  afterEach(() => mockedIsUrl.mockRestore());

  describe('validateUrl', () => {
    it('should throw an error if prop value is not a valid URL', () => {
      mockedIsUrl = isUrl.mockImplementation(() => false);
      const props = {};
      props[propName] = url;
      expect(() => validateUrl(props, propName, componentName))
        .toThrow(TypeError, `Invalid URL Prop Value: ${url} for ${propName} in ${componentName}`);
    });

    it('should return null if prop is not defined', () => {
      const props = {};
      expect(validateUrl(props, propName, componentName)).toBeNull();
    });

    it('should return null if prop value is a valid URL', () => {
      mockedIsUrl = isUrl.mockImplementation(() => true);
      const props = {};
      props[propName] = url;
      expect(validateUrl(props, propName, componentName)).toBeNull();
    });
  });

  describe('validateRequiredUrl', () => {
    it('should throw an error if prop value is not a valid URL', () => {
      mockedIsUrl = isUrl.mockImplementation(() => false);
      const props = {};
      props[propName] = url;
      expect(() => validateUrl.isRequired(props, propName, componentName))
        .toThrow(TypeError, `Invalid URL Prop Value: ${url} for ${propName} in ${componentName}`);
    });

    it('should throw an error if prop is not defined', () => {
      const props = {};
      expect(() => validateUrl.isRequired(props, propName, componentName))
        .toThrow(TypeError, `Invalid URL Prop Value: ${url} for ${propName} in ${componentName}`);
    });

    it('should return null if prop value is a valid URL', () => {
      mockedIsUrl = isUrl.mockImplementation(() => true);
      const props = {};
      props[propName] = url;
      expect(validateUrl.isRequired(props, propName, componentName)).toBeNull();
    });
  });
});