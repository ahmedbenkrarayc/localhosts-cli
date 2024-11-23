#!/usr/bin/env node

const fs = require("fs");
const { Command } = require("commander");

const program = new Command();
const HOSTS_FILE = "C:\\Windows\\System32\\drivers\\etc\\hosts";

// Add a new entry to the hosts file
program
  .command("add")
  .description("Add a new entry to the hosts file")
  .argument("<ip>", "IP address to map")
  .argument("<hostname>", "Hostname to associate with the IP")
  .action((ip, hostname) => {
    const entry = `${ip} ${hostname}`;

    try {
      const fileContent = fs.readFileSync(HOSTS_FILE, "utf8");

      if (fileContent.includes(entry)) {
        console.log(`Entry "${entry}" already exists.`);
        return;
      }

      fs.writeFileSync(HOSTS_FILE, `${fileContent}\n${entry}`, { flag: "a" });
      console.log(`Added "${entry}" to hosts file.`);
    } catch (err) {
      console.error(`Error: ${err.message}`);
    }
  });

program
  .version("1.0.0")
  .description("CLI tool to manage Windows hosts file");

program.parse(process.argv);
