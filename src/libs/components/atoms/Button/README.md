# Button Component

![image](https://github.com/navike21/navike21-web/assets/613163/de57b03b-61b0-44cd-a62f-973bcbf368eb)

The `Button` component is a reusable button component in React that can be customized to suit your needs. You can use it in your applications to create buttons with different sizes, styles, and functionality.

## Usage

To use the `Button` component, simply import and use it in your application as shown below:

```javascript
import React from 'react'
import Button from '@Components/Button' // Make sure to import the Button component from the correct location

function App() {
	return (
		<div>
			<Button>Default Button</Button>
			<Button size="small">Small Button</Button>
			<Button size="large" outline>
				Large Outline Button
			</Button>
			<Button disabled>Disabled Button</Button>
		</div>
	)
}

export default App
```

## Props

The `Button` component accepts the following props:

- `children`: The content of the button. This can be a string or a React component.
- `size`: The size of the button. This can be one of `SMALL`, `MEDIUM`, or `LARGE`. The default value is `MEDIUM`.
- `outline`: A boolean value that determines whether the button should be outlined or not. The default value is `false`.
- `disabled`: A boolean value that determines whether the button should be disabled or not. The default value is `false`.

## Code Variants

The `Button` component uses CSS classes of TailwindCss to apply different styles to the buttons. Here is a description of the classes used:

- `px-X py-Y`: Adjusts the horizontal (`px`) and vertical (`py`) padding of the button for different sizes.
- `active: scale-95`: Adds a scaling animation to the button on click.
- `text-grey-800`: Defines the text color.
- `bg-grey-300`: Defines the background color for disabled buttons.
- `cursor-not-allowed`: Changes the cursor to "not allowed" for disabled buttons.
- `bg-transparent ring-inset ring-[0.15rem] ring-primary`: Outline style with a ring in the `primary` color.
- `bg-primary`: Button style with a background color of `primary`.

You can customize these classes or add your own CSS classes to tailor the button style to your design.

## See it in Action

To see the `Button` component in action, you can use Storybook. Make sure you have Storybook installed in your project. To launch Storybook and view the `Button` component, run the following command using npm or yarn:

```bash
npm run storybook
# or
yarn storybook
```

Open your web browser and navigate to `http://localhost:6006` to access Storybook. Find the `Button` component in the "Components / Atoms / Button" section to see and interact with the buttons.

Make sure to write proper tests for the `Button` component to maintain code quality and coverage.

This `README.md` provides information on the usage of the `Button` component and its code variants, helping other developers understand how to use it in their projects.
