# serverless-emoji


## Deploy the Service
Use this when you have made changes to your Functions, Events or Resources in serverless.yml or you simply want to deploy all changes within your Service at the same time.

> serverless deploy -v

## Deploy the Function
Use this to quickly upload and overwrite your function code, allowing you to develop faster.

> serverless deploy function -f emojiGenerate

## Invoke the Function
Invokes a Function and returns logs.

> serverless invoke -f emojiGenerate -l

Result should look like:

> START RequestId: .........6c09f5 Version: $LATEST

> Date time	.........6c09f5	:-}

> END RequestId: .........6c09f5

> REPORT RequestId: .........6c09f5	Duration: 2.14 ms	Billed Duration: 100 ms 	Memory Size: 1024 MB	Max Memory Used: 18 MB	

## Fetch the Function Logs
Open up a separate tab in your console and stream all logs for a specific Function using this command.

> serverless logs -f emojiGenerate -t

Results should look like:

> Date time	.........6c09f5	Loading function

> START RequestId: .........6c09f5 Version: $LATEST

> Date time	.........6c09f5	:-}

> END RequestId: .........6c09f5

> REPORT RequestId: .........6c09f5	Duration: 2.14 ms	Billed Duration: 100 ms 	Memory Size: 1024 MB	Max Memory Used: 18 MB	



## Cleanup

If at any point, you no longer need your service, you can run the following command to remove the Functions, Events and Resources that were created, and ensure that you don't incur any unexpected charges.

> serverless remove