#!/usr/bin/env node
import { Option, program } from 'commander'
import { PACKAGE_JSON } from './package'
import { ListBucketsCommand, S3Client } from '@aws-sdk/client-s3'

async function main (): Promise<void> {
  program
    .name(PACKAGE_JSON.name)
    .description(PACKAGE_JSON.description)
    .version(PACKAGE_JSON.version, '-v, --version')

  program
    .description('Test credentials')
    .addOption(new Option('-e, --endpoint <endpoint>', 'URL to endpoint e.g. `https://s3.provider.store`'))
    .addOption(new Option('-r, --region <region>', 'region e.g. `us-east-1`'))
    .addOption(new Option('-a, --access <access>', 'access key e.g. `31d4f5...`'))
    .addOption(new Option('-s, --secret <secret>', 'secret key e.g. `986ac4...`'))
    .addOption(new Option('-b, --bucket <bucket>', 'bucket name e.g. `backup`'))
    .action(async (action: {
      endpoint: string
      region: string
      access: string
      secret: string
      bucket: string
    }): Promise<void> => {
      const client = new S3Client({
        region: action.region,
        credentials: {
          accessKeyId: action.access,
          secretAccessKey: action.secret
        },
        endpoint: action.endpoint,
        forcePathStyle: true
      })
      const result = await client.send(new ListBucketsCommand({ Bucket: action.bucket }))
      if (result.$metadata.httpStatusCode == 200)
        console.log('ok')
      else
        throw new Error(JSON.stringify(result))
    })

  program.parse()
}

main().catch(console.error)
