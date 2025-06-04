db = db.getSiblingDB("admin");

db.createUser({
  user: "mongo_user",
  pwd: "mongo_pass",
  roles: [
    { role: "userAdminAnyDatabase", db: "admin" },
    { role: "readWriteAnyDatabase", db: "admin" }
  ]
});
