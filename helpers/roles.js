const AccessControl = require("accesscontrol");
const ac = new AccessControl();

const roles = () => {
  ac.grant("basic")
    .readOwn("profile")
    .updateOwn("profile", ["password", "email", "first_name", "last_name"])
    .deleteOwn("profile")
    .readAny("card")
    .readAny("lot")
    .createOwn("lot");

  ac.grant("supervisor")
    .extend("basic")
    .readAny("profile")
    .createAny("profile", ["*", "!role"])
    .updateAny("profile", ["*", "!role"])
    .deleteAny("profile")
    .createAny("card")
    .updateAny("card")
    .deleteAny("card")
    .createAny("lot")
    .updateAny("lot")
    .deleteAny("lot");

  ac.grant("admin")
    .extend("basic")
    .extend("supervisor")
    .createAny("profile")
    .updateAny("profile");

  ac.deny("admin").deleteOwn("profile");

  return ac;
};

module.exports = roles();
