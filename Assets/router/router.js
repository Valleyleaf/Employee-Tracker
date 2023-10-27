const inquirer = require('inquirer');
const express = require('express');
const chalk = require('chalk');
const router = require('./Employee-Tracker-Assets/Assets/router/router')
app = express();

// What is needed here?

// Need to set up function to act as middleware to direct user to their selection. Will each option have its own middleware to manage it or do I shove it all into
// the server. Probably server.

// No no, kill this and use a index file instead.