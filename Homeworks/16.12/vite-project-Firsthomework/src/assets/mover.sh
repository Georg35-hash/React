#!/bin/bash

DIR1="/opt/090924-wdm/Heorhii/Heorhii1.1"
DIR2="/opt/090924-wdm/Heorhii/Heorhii1.2"

for FILE in "$DIR1"/*; do
    BASENAME=$(basename "$FILE")

    if [[ "$BASENAME" =~ ^[0-9]+$ ]]; then
       if (( BASENAME % 2 == 0 )); then
           mv "$FILE" "$DIR2"
       fi
    fi
done       
