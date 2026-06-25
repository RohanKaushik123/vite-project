# Contributing to Vite Project

Thank you for your interest in contributing to the Vite Project! We welcome contributions from everyone.

## How to Contribute

### Reporting Bugs

When creating a bug report, please include:

- **Clear and descriptive title**
- **Steps to reproduce the problem**
- **Expected behavior**
- **Actual behavior**
- **Screenshots if applicable**
- **Your environment details**

### Suggesting Enhancements

When suggesting enhancements, please include:

- **Clear and descriptive title**
- **Detailed description of the enhancement**
- **Use cases and examples**
- **Mockups if applicable**

### Pull Requests

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/YourFeature`
3. Make your changes
4. Test thoroughly: `npm run build && npm run preview`
5. Run linter: `npm run lint`
6. Commit with clear messages
7. Push to your fork
8. Open a Pull Request

## Development Setup

```bash
# Clone the repository
git clone https://github.com/RohanKaushik123/vite-project.git
cd vite-project

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Coding Standards

- Use 2 spaces for indentation
- Use camelCase for variable and function names
- Use meaningful component names
- Write JSX with proper indentation
- Keep components small and reusable
- Add comments for complex logic

## File Organization

Place new components in `src/components/` directory:

```
src/
├── components/
│   ├── EmployeeCard.jsx
│   ├── EmployeeForm.jsx
│   └── ...
├── App.jsx
├── index.css
└── main.jsx
```

## Commit Messages

- Use present tense: "Add feature" not "Added feature"
- Use imperative mood
- Limit to 72 characters or less
- Reference issues: "Fix #123"

## Testing

Before submitting a PR, ensure:

- `npm run lint` passes without errors
- `npm run build` completes successfully
- Application runs correctly: `npm run dev`
- No console errors or warnings

## CSS Guidelines

- Use CSS classes instead of inline styles
- Follow BEM naming convention: `component__element--modifier`
- Keep CSS modular and reusable
- Use CSS variables for colors and spacing

## Performance Considerations

- Minimize bundle size
- Optimize images
- Use React.memo for expensive components
- Avoid unnecessary re-renders

## Documentation

- Update README.md if adding new features
- Document complex functions
- Add comments for non-obvious code
- Update CHANGELOG if applicable

## Community

- Be respectful and constructive
- Help others with questions
- Review pull requests from community members
- Share knowledge and experience

## Questions?

Open an issue with the `question` label or start a discussion.

Thank you for contributing! 🚀
