# local-dev-sandbox

## How to run

Run the command below:

```bash
# For Docker Compose V2
docker compose up -d
```


## Services

| Service | Port | Links |
| ------ | ------ |------ |
| Redis server | 6379 |Connection URL- ```redis://default@redis:6379``` |
| RedisInsight | 5540 | [UI](http://localhost:5540), [Health Check](http://localhost:5540/api/health/) |
