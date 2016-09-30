FROM airhacks/payara-configured
MAINTAINER Robert Brem <robert.brem@adesso.ch>

ADD ./target/hero-command.war ${DEPLOYMENT_DIR}