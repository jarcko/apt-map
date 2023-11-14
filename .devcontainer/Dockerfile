ARG VARIANT=20-bullseye

FROM mcr.microsoft.com/devcontainers/typescript-node:1-${VARIANT}

# Uncomment following lines to enable non-interactive installation.
# ENV DEBIAN_FRONTEND=noninteractive

# RUN \
#   apt-get update && \
#   apt-get --yes install --no-install-recommends

ARG USERNAME
USER $USERNAME

RUN \
  npm install --global @antfu/ni npkill npm pnpm taze
