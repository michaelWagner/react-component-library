# React Component Library

This is a **React** component library built using **TypeScript**, **Vite**, and **Tailwind**.
It provides a collection of reusable and customizable UI components to accelerate your development process.

## Table of Contents

- [Installation](#installation)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Folder Structure](#folder-structure)
- [Usage](#usage)
- [Customization](#customization)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)

## Installation

First, clone the repository and install the dependencies:

```bash
git clone https://github.com/your-repo/react-component-library.git
cd react-component-library
npm install
```

### Peer Dependencies

Ensure you have `react` and `react-dom` installed as peer dependencies in your project.

```bash
npm install react react-dom
```

## Getting Started

This component library is designed to be used in any React project. Here’s a quick guide to get you started:

1. **Build the library**:

```bash
npm run build
```

2. **Publish to npm** (or use locally):

```bash
npm publish
```

3. **Install in your project**:

If published:

```bash
npm install react-component-library
```

Or if using locally:

```bash
npm install ../path-to-your-library
```

4. **Import components**:

```tsx
import { Button, Select } from 'react-component-library'

const App = () => (
  <div>
    <Button size="large" variant="primary">Click me</Button>
    <Select options={['Option 1', 'Option 2']} />
  </div>
)
```

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the library in development mode using **Vite**. The app will reload if you make edits.

### `npm run build`

Builds the library for production to the `dist` folder using Vite’s build optimization for faster loading times and smaller bundle sizes.

### `npm run test`

Runs tests using **Jest** and **React Testing Library**.

### `npm run lint`

Runs **ESLint** to analyze code for potential errors and to enforce consistent code style.

## Folder Structure

Here's the structure of the library:

```bash
├── src
│   ├── components
│   │   ├── Button
│   │   │   ├── Button.tsx
│   │   │   ├── Button.spec.tsx
│   │   │   └── Button.stories.tsx
│   │   ├── Select
│   │   │   ├── Select.tsx
│   │   │   ├── Select.spec.tsx
│   │   │   └── Select.stories.tsx
│   └── index.ts
├── vite.config.ts
├── tsconfig.json
└── package.json
```

- **`src/components`**: Contains all the reusable components in their own folders, with TypeScript files (`.tsx`), test files (`.spec.tsx`), and Storybook files (`.stories.tsx`).
- **`vite.config.ts`**: Configuration for Vite to bundle the library.
- **`tests`**: Contains setup for Jest and testing utilities.

## Usage

Each component can be imported individually. Here's an example of how to use the `Button` and `Select` components:

### Button Example

```tsx
import { Button } from 'react-component-library'

const App = () => (
  <Button size="large" variant="primary">
    Click me
  </Button>
)
```

### Select Example

```tsx
import { Select } from 'react-component-library'

const App = () => (
  <Select options={['Option 1', 'Option 2', 'Option 3']} />
)
```

## Customization

Each component can be customized using props to fit your UI needs. Below are the common props available:

### Button Props

| Prop       | Type      | Description                             |
|------------|-----------|-----------------------------------------|
| `size`     | `string`  | Size of the button (`small`, `large`)    |
| `variant`  | `string`  | Visual style (`primary`, `secondary`)    |
| `onClick`  | `function`| Handler for click events                |

### Select Props

| Prop       | Type       | Description                             |
|------------|------------|-----------------------------------------|
| `options`  | `string[]` | Array of options to select from         |
| `onChange` | `function` | Callback when the value is changed      |

## Testing

This library uses **Jest** and **React Testing Library** for unit testing and assertions.

To run the tests:

```bash
npm run test
```

### Example Test

Here’s a simple test for the `Button` component:

```tsx
import { render, screen, fireEvent } from '@testing-library/react'
import { Button } from './Button'

test('renders the button and handles click event', () => {
  const handleClick = jest.fn()
  render(<Button onClick={handleClick}>Click Me</Button>)

  const buttonElement = screen.getByText(/Click Me/i)
  fireEvent.click(buttonElement)

  expect(handleClick).toHaveBeenCalled()
  expect(buttonElement).toBeInTheDocument()
})
```

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature (`git checkout -b feature-name`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push the branch (`git push origin feature-name`).
5. Create a pull request describing your changes.

### Development Workflow

- Always write tests for new features and bug fixes.
- Run `npm run lint` to check for code quality issues before pushing your changes.
- Use descriptive commit messages and follow a consistent commit message style.

## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.
