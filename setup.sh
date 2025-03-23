#!/bin/bash

# Print colored messages
print_message() {
  echo -e "\033[1;36m>> $1\033[0m"
}

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
  echo "Error: Node.js is not installed. Please install Node.js (version 18+) and try again."
  exit 1
fi

# Print Node.js and npm versions
print_message "Node.js version: $(node -v)"
print_message "npm version: $(npm -v)"

# Install dependencies
print_message "Installing dependencies..."
npm install

# Check if installation was successful
if [ $? -ne 0 ]; then
  echo "Error: Failed to install dependencies."
  exit 1
fi

print_message "Dependencies installed successfully."

# Ask if user wants to start the development server
read -p "Do you want to start the development server now? (y/n): " choice
if [[ "$choice" =~ ^[Yy]$ ]]; then
  print_message "Starting development server..."
  npm run dev
else
  print_message "Setup completed. You can start the server later using: npm run dev"
fi

print_message "When ready, you can view the website at: http://localhost:3000" 