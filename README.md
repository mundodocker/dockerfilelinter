# dockerfilelinter

[![Build Status](https://travis-ci.org/mundodocker/dockerfilelinter.svg?branch=master)](https://travis-ci.org/mundodocker/dockerfilelinter)
[![Coverage Status](https://coveralls.io/repos/github/mundodocker/dockerfilelinter/badge.svg?branch=master)](https://coveralls.io/github/mundodocker/dockerfilelinter?branch=master)

## Rules

**GENERAL RULES**

- [ ] Comments must start with #
- [ ] FROM must be the first non-comment instruction

**PARSER DIRECTIVES**

- [ ] Should be a comment
- [ ] Format must be in a key-value format (directive=value)
- [ ] Cannot appear after a comment or another builder
- [ ] Cannot have line continuation

**FROM**

- [x] Allow FROM scratch
- [x] Allow FROM with tag
- [x] Allow FROM with digest
- [ ] Allow multiple FROM occurrences
- [x] Allow optional tag
- [x] Allow optional digest
- [x] Warn if tag equals to `latest`
- [x] Warn if missing tag or digest

**MAINTAINER**

- [x] Optional

**RUN**

- [x] Allow RUN in shell form: `RUN <command>`
- [x] Allow RUN in exec form: `RUN ["executable", "param1", "param2"]`
- [x] Allow RUN in shell form with multiple lines
- [x] Deny RUN in exec form with single quotes
- [x] Deny RUN in exec form with unescaped back lashes
- [x] Warn RUN in exec form with an invalid JSON, where the command is treated as shell form
- [ ] Warn RUN in shell form with a long line of commands
- [ ] Warn RUN in shell form if arguments aren't sorted alphanumerically

**CMD**
- [x] Allow CMD in exec form: `CMD ["executable","param1","param2"]`
- [x] Warn if CMD shell form is used, since is the preferred form: `CMD command param1 param2`
- [x] Deny CMD in exec form with single quotes
- [ ] Warn if multiple CMD entries

**LABEL**
- [x] Allow single line label
- [x] Allow multiple labels in the same line
- [x] Allow labels with multiple lines
- [ ] Allow labels values with multiple values
- [ ] Allow multiple labels in the same Dockerfile
- [ ] Warn if more than one LABEl directive is found
