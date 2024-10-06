#!/usr/bin/env node
import { program } from 'commander';
const gendiff = () =>

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .option('-V, --version', 'output the version number')
  .helpOption('-h, --help', 'output usage information')
  .parse(process.argv);

const { args } = program;
const options = program.opts();
const { version, help } = options;

gendiff(args, version, help);