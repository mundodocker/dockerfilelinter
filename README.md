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

- [x] Allow RUN in shell form
- [x] Allow RUN in exec form
- [x] Allow RUN in shell form with multiple lines
- [ ] Deny RUN in exec form with single quotes
- [ ] Deny RUN in exec form with unescaped back lashes
- [ ] Warn RUN in shell form with a long line of commands
- [ ] Warn RUN in shell form if arguments aren't sorted alphanumerically
