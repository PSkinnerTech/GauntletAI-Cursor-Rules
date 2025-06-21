# Gauntlet AI Cursor Rules 🚀

Welcome to the **Gauntlet AI Cursor Rules** repository! This is our team's shared collection of Cursor IDE rules designed to enhance productivity, maintain code quality, and streamline development workflows.

## About Gauntlet AI

[Gauntlet AI](https://gauntletai.com) is not for the faint of heart. Only those with true grit, intelligence, and creativity make it through. Being among the few Gauntlet AI graduates is a rare and distinguished accomplishment.

## What Are Cursor Rules?

Cursor Rules are powerful configuration files that help AI assistants understand your project context, coding standards, and preferences. They enable more accurate code suggestions, better refactoring, and consistent development patterns across your entire team.

📖 **Learn more:** [Official Cursor Rules Documentation](https://docs.cursor.com/context/rules)

## Available Rules

### Frontend & UI Development

| Rule | Description | Contributor | Version |
|------|-------------|-------------|---------|
| **[shadcn.mdc](.cursor/rules/shadcn.mdc)** | Comprehensive shadcn/ui component guidelines with Tailwind CSS v4 best practices. Includes modern CSS-first configuration, dynamic utilities, and browser compatibility notes. | Patrick Skinner [🐦](https://x.com/PSkinnerTech) [🐙](https://github.com/PSkinnerTech) | 1.0 |

### Backend Development
*Coming soon...*

### DevOps & Infrastructure  
*Coming soon...*

### AI/ML Development
*Coming soon...*

## How to Use These Rules

### Method 1: Copy Individual Rules
1. Browse the rules above and click on the rule you want
2. Copy the content of the `.mdc` file
3. In your project, create a new Cursor Rule via Command Palette (`Cmd/Ctrl + Shift + P` > "New Cursor Rule")
4. Paste the content and save

### Method 2: Clone the Repository
```bash
git clone https://github.com/your-org/cursor-rules.git
cd cursor-rules
```

Then copy the desired rules from `.cursor/rules/` to your project's `.cursor/rules/` directory.

### Method 3: Reference Rules
You can reference these rules in your project using the `@file` syntax:
```
@file https://raw.githubusercontent.com/your-org/cursor-rules/main/.cursor/rules/shadcn.mdc
```

## Contributing Your Rules

We encourage all Gauntlet AI team members to share their valuable Cursor Rules! Here's how to contribute:

### Step 1: Create Your Rule
1. Create a new `.mdc` file in the `.cursor/rules/` directory
2. Follow the existing naming convention: `[technology/purpose].mdc`
3. Include a clear description and any necessary patterns/globs

### Step 2: Document Your Rule
Add your rule to the appropriate section in this README with:
- Rule name and link
- Brief description
- Your name and social links
- Version number

### Step 3: Submit a Pull Request
1. Fork this repository
2. Create a feature branch: `git checkout -b add/your-rule-name`
3. Add your rule file and update the README
4. Submit a pull request with a clear description

### Rule Format Guidelines
```markdown
---
description: "Brief description of what this rule does"
patterns: "*.tsx,*.ts" # File patterns where this rule applies
---

# Rule Name

Detailed explanation of the rule, its purpose, and how to use it.
```

## Best Practices

Following the official [Cursor Rules documentation](https://docs.cursor.com/context/rules), here are key practices for creating effective rules:

### Rule Structure & Content
- **Keep rules concise**: Target under 500 lines per rule
- **Be focused and actionable**: Write rules like clear internal documentation, not vague guidance
- **Split large concepts**: Create multiple, composable rules instead of one massive file
- **Include concrete examples**: Use `@filename.ts` to reference template files or code examples

### Rule Types & Scoping
- **Choose the right rule type**:
  - `Always` - For core standards that should always apply
  - `Auto Attached` - For rules tied to specific file patterns (use `globs`)
  - `Agent Requested` - For contextual rules the AI can choose (requires `description`)
  - `Manual` - For specialized rules invoked with `@ruleName`

### MDC Format Best Practices
```markdown
---
description: "Clear, specific description of what this rule does"
globs: "*.tsx,*.ts"  # File patterns where this applies
alwaysApply: false   # Set based on rule type
---

# Rule content with specific, actionable guidance
```

### Organization & Reusability
- **Use nested rules**: Place `.cursor/rules` in subdirectories for domain-specific guidance
- **Reference related files**: Include templates and examples with `@template-file.ts`
- **Create reusable rules**: If you're repeating the same prompt in chat, make it a rule
- **Organize by domain**: Frontend rules in `/frontend/.cursor/rules`, backend in `/backend/.cursor/rules`

### Content Guidelines
- **Provide specific instructions**: "Use zod for validation" vs "validate properly"
- **Include templates**: Reference boilerplate files for consistency
- **Add workflow automation**: Automate common development tasks
- **Stay current**: Update rules when technologies evolve (like our Tailwind v4 focus)

### Testing & Validation
- **Test rule activation**: Verify `Auto Attached` rules trigger with correct file patterns
- **Check descriptions**: Ensure `Agent Requested` rules have clear descriptions
- **Validate references**: Confirm `@referenced-files.ts` exist and are accessible
- **Test in context**: Use rules in real scenarios before sharing

## Contributors

Big thanks to all our team members who have contributed rules:

- **Patrick Skinner** [🐦](https://x.com/PSkinnerTech) [🐙](https://github.com/PSkinnerTech) - shadcn/ui & Tailwind v4 rules

*Add your name here when you contribute!*

---

**Happy coding!** 🚀

*Started with 🤖❤️ by Gauntlet AI Cohort 2*
