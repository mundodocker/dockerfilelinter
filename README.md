# dockerfilelinter

## Rules

**FROM**

- [ ] FROM must be the first non-comment instruction
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
