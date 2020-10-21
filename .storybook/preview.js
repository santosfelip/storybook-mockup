import { setCompodocJson } from "@storybook/addon-docs/angular";
import docJson from "../documentation.json";
import { addDecorator } from '@storybook/angular';
import { withTests } from '@storybook/addon-jest';
import results from '../.jest-test-results.json';
setCompodocJson(docJson);

addDecorator(
  withTests({
    results,
    filesExt: '((\\.specs?)|(\\.tests?))?(\\.ts)?$',
  })
);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}
