# localhosts-cli

A simple command-line tool for managing Windows hosts file entries with ease.

## Description

`localhosts-cli` is a Node.js-based command-line tool that simplifies the process of adding and managing entries in your Windows system's hosts file. It provides a user-friendly interface to modify the hosts file without manually editing it, reducing the risk of syntax errors and improving efficiency.

## Installation

Install the tool globally using npm:

```bash
npm install -g localhosts-cli
```

## Usage

The tool provides a simple command interface to add new host entries. You'll need to run your command prompt or terminal as Administrator since modifying the hosts file requires elevated privileges.

Basic command syntax:

```bash
localhosts add <ip-address> <hostname>
```

Example:

```bash
localhosts add 127.0.0.1 mydev.local
```

This will add the following entry to your hosts file:
```
127.0.0.1    mydev.local
```

## How It Works

The tool performs the following operations:
1. Validates the provided IP address and hostname format
2. Checks for administrator privileges
3. Reads the current hosts file (located at `C:\Windows\System32\drivers\etc\hosts`)
4. Adds the new entry while preserving existing content
5. Saves the modified file back to the system

The tool ensures that:
- Duplicate entries are not created
- The hosts file format is maintained
- Existing entries remain unchanged
- Proper spacing and formatting are applied

## Important Notes

- **Windows Only**: This tool is specifically designed for Windows operating systems
- **Administrator Rights Required**: You must run the command prompt as Administrator
- **File Location**: The hosts file is located at `C:\Windows\System32\drivers\etc\hosts`

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.