#!/bin/sh

if [ -z "$BRANCHES_TO_SKIP" ]; then
  BRANCHES_TO_SKIP=(master develop)
fi

if [ $(printf "%s\n" "${BRANCHES_TO_SKIP[@]}" | grep -c "^$BRANCH_NAME$") -eq 1 ]; then
  exit 0
fi

BRANCH_NAME=$(git symbolic-ref --short HEAD)
BRANCH_NAME="${BRANCH_NAME##*/}"

PREFIX_MSG="Update docs"
if [ -n "$TEAM_NAME" ]; then
  PREFIX_MSG="[$TEAM_NAME] $PREFIX_MSG"
fi

if [ -n "$BRANCH_NAME" ]; then
  PREFIX_MSG="docs($BRANCH_NAME): $PREFIX_MSG"
fi

if [[ `git status docs --porcelain` ]] && [ -n "$PREFIX_MSG" ]; then
    echo "Automacally updating docs"

    git add docs/*
    git commit -m "$PREFIX_MSG" --no-verify
fi
