# serverless-emoji


## Deploy the Service
Use this when you have made changes to your Functions, Events or Resources in serverless.yml or you simply want to deploy all changes within your Service at the same time.

> serverless deploy -v

## Deploy the Function
Use this to quickly upload and overwrite your function code, allowing you to develop faster.

> serverless deploy function -f emojiGenerateHappy

or

> serverless deploy function -f emojiGenerateSad

## Invoke the Function
Invokes a Function and returns logs.

> serverless invoke -f emojiGenerateHappy -l

Result should look something like:

> :-}

## Fetch the Function Logs
Open up a separate tab in your console and stream all logs for a specific Function using this command.

> serverless logs -f emojiGenerate -t

Results should look like:

>	Loading function

> :-}


## Cleanup

If at any point, you no longer need your service, you can run the following command to remove the Functions, Events and Resources that were created, and ensure that you don't incur any unexpected charges.

> serverless remove