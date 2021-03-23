const redis = require("redis");
const client = redis.createClient(6379, "localhost");
client.subscribe("my-chat");

export default client();
