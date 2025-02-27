// ComponentExample.stories.js
import { Dateinput } from "./Dateinput.js";
import defaultdata from "./dateinput.data.json";

export default {
  tags: ["autodocs"],
  title: "Components/Dateinput",
  render: (args) => {
    
    //Storybook produces a comma delimited string when using the check control type (table-striped, table-bordered) etc. 
    //We can't use commas on our class="..." attribute, so we need to replace the commas with spaces.

    if( typeof(args.customClass) === 'string' ) {
      args.customClass = args.customClass.replaceAll(","," ");
    } else if ( typeof(args.customClass) === 'object' ) {
      args.customClass = args.customClass.join(" ");
    }
  
    return new Dateinput(args).html;
  
  },

  //https://storybook.js.org/docs/api/arg-types
  argTypes: {
  },
};

/**
 * Default Date inputs
 */
export const Default = {
  args: defaultdata,
};

/**
 * Dark themed Date inputs
 */
export const Dark = {
  args: { 
	  ...defaultdata,
	  ...{isDisabled: false},
  },
  parameters: {
    backgrounds: {
      default: 'Dark',
      values: [
        { name: 'Dark', value: 'var(--qld-brand-primary)' },
      ],
    },
  },
  decorators: [
    (Story) => {
      return `
      <div class="dark">
          ${Story()}
      </div>
      `;
    },
  ],
};

/**
 * Filled style Date inputs
 */
export const Filled = {
  args: { 
	  ...defaultdata,
	  ...{customClass: "form-style-filled"},
  },
};


/**
 * Disabled Date inputs
 */
export const Disabled = {
  args: { 
	  ...defaultdata,
	  ...{isDisabled: true},
  },
};

/**
 * Valid Date inputs
 */
export const Valid = {
  args: {
	  ...defaultdata,
    ...{customClass: "qld-input-success"},
  },
};

/**
 * Invalid Date inputs
 */
export const Invalid = {
  args: {
	  ...defaultdata,
    ...{customClass: "qld-input-error"},
  },
};
