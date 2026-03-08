#!/bin/bash
# dev.sh — Run Drevcael.org locally on port 3007
PORT=3007

# Kill any process on the port
lsof -ti:$PORT | xargs kill -9 2>/dev/null

echo "Starting Drevcael.org on port $PORT..."
PORT=$PORT npm run dev
