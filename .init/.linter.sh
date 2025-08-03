#!/bin/bash
cd /home/kavia/workspace/code-generation/karthik-creative-portfolio-137135-137144/portfolio_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

