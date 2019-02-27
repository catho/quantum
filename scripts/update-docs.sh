#!/bin/bash

if [ -z "$BRANCHES_TO_SKIP" ]; then
  BRANCHES_TO_SKIP=(master develop)
fi

if [ $(printf "%s\n" "${BRANCHES_TO_SKIP[@]}" | grep -c "^$BRANCH_NAME$") -eq 1 ]; then
  exit 0
fi

BRANCH_NAME=$(git symbolic-ref --short HEAD)
BRANCH_NAME="${BRANCH_NAME##*/}"

PREFIX_MSG="Update docs"
COMMIT_TYPE="docs"
MSG=""

if [ -n "$TEAM_NAME" ]; then
  PREFIX_MSG="[$TEAM_NAME] $PREFIX_MSG"
fi

if [ -n "$BRANCH_NAME" ]; then
  MSG="$COMMIT_TYPE"
  if [ `git config --get init.templatedir` ]; then
    MSG="$MSG: $PREFIX_MSG"
  else
    MSG="$MSG($BRANCH_NAME): $PREFIX_MSG"
  fi
fi

if [[ `git status docs --porcelain` ]] && [ -n "$PREFIX_MSG" ]; then
    echo "Automatically updating docs"

    git add -A docs
    git commit -m "$MSG" --no-verify
    git push --no-verify
fi
