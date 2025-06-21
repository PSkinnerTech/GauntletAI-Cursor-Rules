#!/usr/bin/env node

const { Command } = require('commander');
const chalk = require('chalk');
const fs = require('fs-extra');
const path = require('path');
const os = require('os');

const program = new Command();

// ASCII Art Banner
const banner = chalk.cyan(`
  ⚡ GAUNTLET AI CURSOR RULES ⚡
  
  Elite rules for elite developers
  Not for the faint of heart
`);

// Get the rules directory path
const getRulesPath = () => {
  const currentDir = process.cwd();
  return path.join(currentDir, '.cursor', 'rules');
};

// Get the source rules directory (relative to this script)
const getSourceRulesPath = (category) => {
  const scriptDir = path.dirname(__filename);
  return path.join(scriptDir, '..', 'rules', category);
};

// Copy rules function
async function copyRules(category, description) {
  try {
    const sourcePath = getSourceRulesPath(category);
    const baseTargetPath = getRulesPath();
    const categoryTargetPath = path.join(baseTargetPath, category);
    
    // Ensure .cursor/rules/[category] directory exists
    await fs.ensureDir(categoryTargetPath);
    
    // Check if source category exists
    if (!await fs.pathExists(sourcePath)) {
      console.log(chalk.yellow(`⚠️  ${category} rules not yet available`));
      return false;
    }
    
    // Copy all files from source category to target category directory
    const files = await fs.readdir(sourcePath);
    let copiedCount = 0;
    
    for (const file of files) {
      if (file.endsWith('.mdc')) {
        await fs.copy(
          path.join(sourcePath, file),
          path.join(categoryTargetPath, file)
        );
        copiedCount++;
      }
    }
    
    if (copiedCount > 0) {
      console.log(chalk.green(`✅ ${description} rules installed (${copiedCount} files)`));
      console.log(chalk.gray(`   📁 ${categoryTargetPath}`));
    } else {
      console.log(chalk.yellow(`⚠️  No .mdc files found in ${category} category`));
    }
    
    return copiedCount > 0;
  } catch (error) {
    console.error(chalk.red(`❌ Error installing ${category} rules:`), error.message);
    return false;
  }
}

// Install command
program
  .name('gauntlet-rules')
  .description('Elite Cursor Rules from Gauntlet AI graduates')
  .version('1.0.0');

program
  .command('install')
  .description('Install Cursor rules into your project')
  .option('--design', 'Install UI/UX design standards and patterns')
  .option('--infra', 'Install DevOps, backend, and infrastructure patterns')
  .option('--ai', 'Install LLM prompting, ML, and agent structures')
  .option('--all', 'Install all available rulesets')
  .action(async (options) => {
    console.log(banner);
    
    let installed = false;
    
    if (options.all) {
      console.log(chalk.bold('🚀 Installing ALL Gauntlet AI rules...\n'));
      
      const categories = [
        { key: 'design', desc: 'UI/UX Design Standards' },
        { key: 'infra', desc: 'DevOps & Infrastructure' },
        { key: 'ai', desc: 'AI/ML Development' }
      ];
      
      for (const category of categories) {
        const success = await copyRules(category.key, category.desc);
        if (success) installed = true;
      }
    } else {
      if (options.design) {
        const success = await copyRules('design', 'UI/UX Design Standards');
        if (success) installed = true;
      }
      
      if (options.infra) {
        const success = await copyRules('infra', 'DevOps & Infrastructure');
        if (success) installed = true;
      }
      
      if (options.ai) {
        const success = await copyRules('ai', 'AI/ML Development');
        if (success) installed = true;
      }
      
      if (!options.design && !options.infra && !options.ai) {
        console.log(chalk.yellow('Please specify which rules to install:'));
        console.log(chalk.gray('  --design  UI/UX design standards'));
        console.log(chalk.gray('  --infra   DevOps & infrastructure'));
        console.log(chalk.gray('  --ai      AI/ML development'));
        console.log(chalk.gray('  --all     All available rules'));
        console.log(chalk.gray('\nExample: npx gauntlet-rules install --design'));
        return;
      }
    }
    
    if (installed) {
      console.log(chalk.green('\n🎉 Rules successfully installed!'));
      console.log(chalk.gray('Open Cursor and start using your new rules.'));
    } else {
      console.log(chalk.yellow('\n⚠️  No rules were installed.'));
    }
  });

// List command
program
  .command('list')
  .description('List available rule categories')
  .action(() => {
    console.log(banner);
    console.log(chalk.bold('📋 Available Rule Categories:\n'));
    
    const categories = [
      { flag: '--design', folder: 'rules/design', desc: 'UI/UX design standards and patterns' },
      { flag: '--infra', folder: 'rules/infra', desc: 'DevOps, backend, and infrastructure patterns' },
      { flag: '--ai', folder: 'rules/ai', desc: 'LLM prompting, ML, and agent structures' },
      { flag: '--all', folder: 'rules/*', desc: 'Installs every ruleset available' }
    ];
    
    categories.forEach(cat => {
      console.log(chalk.cyan(`${cat.flag.padEnd(12)}`), chalk.gray(`${cat.folder.padEnd(20)}`), cat.desc);
    });
    
    console.log(chalk.gray('\nExample: npx gauntlet-rules install --design'));
  });

// Error handling
program.on('command:*', () => {
  console.error(chalk.red('Invalid command. Use --help for available commands.'));
  process.exit(1);
});

// Parse and execute
program.parse(process.argv);

// Show help if no command provided
if (!process.argv.slice(2).length) {
  program.outputHelp();
} 