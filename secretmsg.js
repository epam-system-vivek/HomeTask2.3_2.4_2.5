function createSecretHolder(secret) {
  return {
    getSecret: function () {
      return secret;
    },
    setSecret: function (newSecret) {
      secret = newSecret;
    }
  };
}
obj = createSecretHolder(5);
document.writeln("Get secret message is: "+obj.getSecret());
obj.setSecret(2);
document.writeln("Get secret message is: "+obj.getSecret());