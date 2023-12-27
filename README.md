# S3 credentials

Console tool to test S3 credentials access

## Run

```shell
npx s3-credentials -e <endpoint> -r <region> -a <access> -s <secret> -b <bucket>
```

* `-e, --endpoint <endpoint>` - URL to endpoint e.g. `https://s3.provider.store`
* `-r, --region <region>` - region e.g. `us-east-1`
* `-a, --access <access>` - access key e.g. `31d4f5...`
* `-s, --secret <secret>` - secret key e.g. `986ac4...`
* `-b, --bucket <bucket>` - bucket name e.g. `backup`

## Version

```shell
npx s3-credentials -v
```

## Help

```shell
npx s3-credentials -h
```

## Development

[DEVELOPMENT.md](docs/DEVELOPMENT.md)

## Npmjs

[![npm](https://img.shields.io/npm/v/s3-credentials?label=npm)](https://www.npmjs.com/package/s3-credentials)
[![downloads](https://img.shields.io/npm/dt/s3-credentials?label=downloads)](https://www.npmjs.com/package/s3-credentials)
