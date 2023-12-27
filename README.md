# S3 credentials

## Test

```shell
npx s3-credentials -e <endpoint> -r <region> -a <access> -s <secret> -b <bucket>
```

* `-e, --endpoint <endpoint>` - URL to endpoint e.g. `https://s3.provider.store`
* `-r, --region <region>` - region e.g. `us-east-1`
* `-a, --access <access>` - access key e.g. `31d4f5...`
* `-s, --secret <secret>` - secret key e.g. `31d4f5...`
* `-b, --bucket <bucket>` - bucket name e.g. `backup`

## Version

```shell
npx s3-credentials --version
```

## Help

```shell
npx s3-credentials -h
```
