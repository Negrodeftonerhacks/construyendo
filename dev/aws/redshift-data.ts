const completionSpec: Fig.Spec = {
  name: "redshift-data",
  description:
    "You can use the Amazon Redshift Data API to run queries on Amazon Redshift tables. You can run individual SQL statements, which are committed if the statement succeeds.  For more information about the Amazon Redshift Data API, see Using the Amazon Redshift Data API in the Amazon Redshift Cluster Management Guide",
  subcommands: [
    {
      name: "cancel-statement",
      description:
        "Cancels a running query. To be canceled, a query must be running",
      options: [
        {
          name: "--id",
          description:
            "The identifier of the SQL statement to cancel. This value is a universally unique identifier (UUID) generated by Amazon Redshift Data API. This identifier is returned by ExecuteStatment and ListStatements",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-statement",
      description:
        "Describes the details about a specific instance when a query was run by the Amazon Redshift Data API. The information includes when the query started, when it finished, the query status, the number of rows returned, and the SQL statement",
      options: [
        {
          name: "--id",
          description:
            "The identifier of the SQL statement to describe. This value is a universally unique identifier (UUID) generated by Amazon Redshift Data API. This identifier is returned by ExecuteStatment and ListStatements",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-table",
      description:
        "Describes the detailed information about a table from metadata in the cluster. The information includes its columns. A token is returned to page through the column list. Depending on the authorization method, use one of the following combinations of request parameters:    AWS Secrets Manager - specify the Amazon Resource Name (ARN) of the secret and the cluster identifier that matches the cluster in the secret.    Temporary credentials - specify the cluster identifier, the database name, and the database user name. Permission to call the redshift:GetClusterCredentials operation is required to use this method",
      options: [
        {
          name: "--cluster-identifier",
          description:
            "The cluster identifier. This parameter is required when authenticating using either AWS Secrets Manager or temporary credentials",
          args: {
            name: "string",
          },
        },
        {
          name: "--connected-database",
          description:
            "A database name. The connected database is specified when you connect with your authentication credentials",
          args: {
            name: "string",
          },
        },
        {
          name: "--database",
          description:
            "The name of the database that contains the tables to be described. If ConnectedDatabase is not specified, this is also the database to connect to with your authentication credentials",
          args: {
            name: "string",
          },
        },
        {
          name: "--db-user",
          description:
            "The database user name. This parameter is required when authenticating using temporary credentials",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of tables to return in the response. If more tables exist than fit in one response, then NextToken is returned to page through the results",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "A value that indicates the starting point for the next set of response records in a subsequent request. If a value is returned in a response, you can retrieve the next set of records by providing this returned NextToken value in the next NextToken parameter and retrying the command. If the NextToken field is empty, all response records have been retrieved for the request",
          args: {
            name: "string",
          },
        },
        {
          name: "--schema",
          description:
            "The schema that contains the table. If no schema is specified, then matching tables for all schemas are returned",
          args: {
            name: "string",
          },
        },
        {
          name: "--secret-arn",
          description:
            "The name or ARN of the secret that enables access to the database. This parameter is required when authenticating using AWS Secrets Manager",
          args: {
            name: "string",
          },
        },
        {
          name: "--table",
          description:
            "The table name. If no table is specified, then all tables for all matching schemas are returned. If no table and no schema is specified, then all tables for all schemas in the database are returned",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--starting-token",
          description:
            "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "string",
          },
        },
        {
          name: "--page-size",
          description:
            "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "integer",
          },
        },
        {
          name: "--max-items",
          description:
            "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "integer",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "execute-statement",
      description:
        "Runs an SQL statement, which can be data manipulation language (DML) or data definition language (DDL). This statement must be a single SQL statement. Depending on the authorization method, use one of the following combinations of request parameters:    AWS Secrets Manager - specify the Amazon Resource Name (ARN) of the secret and the cluster identifier that matches the cluster in the secret.    Temporary credentials - specify the cluster identifier, the database name, and the database user name. Permission to call the redshift:GetClusterCredentials operation is required to use this method",
      options: [
        {
          name: "--cluster-identifier",
          description:
            "The cluster identifier. This parameter is required when authenticating using either AWS Secrets Manager or temporary credentials",
          args: {
            name: "string",
          },
        },
        {
          name: "--database",
          description:
            "The name of the database. This parameter is required when authenticating using temporary credentials",
          args: {
            name: "string",
          },
        },
        {
          name: "--db-user",
          description:
            "The database user name. This parameter is required when authenticating using temporary credentials",
          args: {
            name: "string",
          },
        },
        {
          name: "--secret-arn",
          description:
            "The name or ARN of the secret that enables access to the database. This parameter is required when authenticating using AWS Secrets Manager",
          args: {
            name: "string",
          },
        },
        {
          name: "--sql",
          description: "The SQL statement text to run",
          args: {
            name: "string",
          },
        },
        {
          name: "--statement-name",
          description:
            "The name of the SQL statement. You can name the SQL statement when you create it to identify the query",
          args: {
            name: "string",
          },
        },
        {
          name: "--with-event",
          description:
            "A value that indicates whether to send an event to the Amazon EventBridge event bus after the SQL statement runs",
        },
        {
          name: "--no-with-event",
          description:
            "A value that indicates whether to send an event to the Amazon EventBridge event bus after the SQL statement runs",
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-statement-result",
      description:
        "Fetches the temporarily cached result of an SQL statement. A token is returned to page through the statement results",
      options: [
        {
          name: "--id",
          description:
            "The identifier of the SQL statement whose results are to be fetched. This value is a universally unique identifier (UUID) generated by Amazon Redshift Data API. This identifier is returned by ExecuteStatment and ListStatements",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "A value that indicates the starting point for the next set of response records in a subsequent request. If a value is returned in a response, you can retrieve the next set of records by providing this returned NextToken value in the next NextToken parameter and retrying the command. If the NextToken field is empty, all response records have been retrieved for the request",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--starting-token",
          description:
            "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-items",
          description:
            "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "integer",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "list-databases",
      description:
        "List the databases in a cluster. A token is returned to page through the database list. Depending on the authorization method, use one of the following combinations of request parameters:    AWS Secrets Manager - specify the Amazon Resource Name (ARN) of the secret and the cluster identifier that matches the cluster in the secret.    Temporary credentials - specify the cluster identifier, the database name, and the database user name. Permission to call the redshift:GetClusterCredentials operation is required to use this method",
      options: [
        {
          name: "--cluster-identifier",
          description:
            "The cluster identifier. This parameter is required when authenticating using either AWS Secrets Manager or temporary credentials",
          args: {
            name: "string",
          },
        },
        {
          name: "--database",
          description:
            "The name of the database. This parameter is required when authenticating using temporary credentials",
          args: {
            name: "string",
          },
        },
        {
          name: "--db-user",
          description:
            "The database user name. This parameter is required when authenticating using temporary credentials",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of databases to return in the response. If more databases exist than fit in one response, then NextToken is returned to page through the results",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "A value that indicates the starting point for the next set of response records in a subsequent request. If a value is returned in a response, you can retrieve the next set of records by providing this returned NextToken value in the next NextToken parameter and retrying the command. If the NextToken field is empty, all response records have been retrieved for the request",
          args: {
            name: "string",
          },
        },
        {
          name: "--secret-arn",
          description:
            "The name or ARN of the secret that enables access to the database. This parameter is required when authenticating using AWS Secrets Manager",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--starting-token",
          description:
            "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "string",
          },
        },
        {
          name: "--page-size",
          description:
            "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "integer",
          },
        },
        {
          name: "--max-items",
          description:
            "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "integer",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "list-schemas",
      description:
        "Lists the schemas in a database. A token is returned to page through the schema list. Depending on the authorization method, use one of the following combinations of request parameters:    AWS Secrets Manager - specify the Amazon Resource Name (ARN) of the secret and the cluster identifier that matches the cluster in the secret.    Temporary credentials - specify the cluster identifier, the database name, and the database user name. Permission to call the redshift:GetClusterCredentials operation is required to use this method",
      options: [
        {
          name: "--cluster-identifier",
          description:
            "The cluster identifier. This parameter is required when authenticating using either AWS Secrets Manager or temporary credentials",
          args: {
            name: "string",
          },
        },
        {
          name: "--connected-database",
          description:
            "A database name. The connected database is specified when you connect with your authentication credentials",
          args: {
            name: "string",
          },
        },
        {
          name: "--database",
          description:
            "The name of the database that contains the schemas to list. If ConnectedDatabase is not specified, this is also the database to connect to with your authentication credentials",
          args: {
            name: "string",
          },
        },
        {
          name: "--db-user",
          description:
            "The database user name. This parameter is required when authenticating using temporary credentials",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of schemas to return in the response. If more schemas exist than fit in one response, then NextToken is returned to page through the results",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "A value that indicates the starting point for the next set of response records in a subsequent request. If a value is returned in a response, you can retrieve the next set of records by providing this returned NextToken value in the next NextToken parameter and retrying the command. If the NextToken field is empty, all response records have been retrieved for the request",
          args: {
            name: "string",
          },
        },
        {
          name: "--schema-pattern",
          description:
            'A pattern to filter results by schema name. Within a schema pattern, "%" means match any substring of 0 or more characters and "_" means match any one character. Only schema name entries matching the search pattern are returned',
          args: {
            name: "string",
          },
        },
        {
          name: "--secret-arn",
          description:
            "The name or ARN of the secret that enables access to the database. This parameter is required when authenticating using AWS Secrets Manager",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--starting-token",
          description:
            "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "string",
          },
        },
        {
          name: "--page-size",
          description:
            "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "integer",
          },
        },
        {
          name: "--max-items",
          description:
            "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "integer",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "list-statements",
      description:
        "List of SQL statements. By default, only finished statements are shown. A token is returned to page through the statement list",
      options: [
        {
          name: "--max-results",
          description:
            "The maximum number of SQL statements to return in the response. If more SQL statements exist than fit in one response, then NextToken is returned to page through the results",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "A value that indicates the starting point for the next set of response records in a subsequent request. If a value is returned in a response, you can retrieve the next set of records by providing this returned NextToken value in the next NextToken parameter and retrying the command. If the NextToken field is empty, all response records have been retrieved for the request",
          args: {
            name: "string",
          },
        },
        {
          name: "--role-level",
          description:
            "A value that filters which statements to return in the response. If true, all statements run by the caller's IAM role are returned. If false, only statements run by the caller's IAM role in the current IAM session are returned. The default is true",
        },
        {
          name: "--no-role-level",
          description:
            "A value that filters which statements to return in the response. If true, all statements run by the caller's IAM role are returned. If false, only statements run by the caller's IAM role in the current IAM session are returned. The default is true",
        },
        {
          name: "--statement-name",
          description:
            "The name of the SQL statement specified as input to ExecuteStatement to identify the query. You can list multiple statements by providing a prefix that matches the beginning of the statement name. For example, to list myStatement1, myStatement2, myStatement3, and so on, then provide the a value of myStatement. Data API does a case-sensitive match of SQL statement names to the prefix value you provide",
          args: {
            name: "string",
          },
        },
        {
          name: "--status",
          description:
            "The status of the SQL statement to list. Status values are defined as follows:    ABORTED - The query run was stopped by the user.    ALL - A status value that includes all query statuses. This value can be used to filter results.    FAILED - The query run failed.    FINISHED - The query has finished running.    PICKED - The query has been chosen to be run.    STARTED - The query run has started.    SUBMITTED - The query was submitted, but not yet processed",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--starting-token",
          description:
            "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "string",
          },
        },
        {
          name: "--page-size",
          description:
            "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "integer",
          },
        },
        {
          name: "--max-items",
          description:
            "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "integer",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "list-tables",
      description:
        "List the tables in a database. If neither SchemaPattern nor TablePattern are specified, then all tables in the database are returned. A token is returned to page through the table list. Depending on the authorization method, use one of the following combinations of request parameters:    AWS Secrets Manager - specify the Amazon Resource Name (ARN) of the secret and the cluster identifier that matches the cluster in the secret.    Temporary credentials - specify the cluster identifier, the database name, and the database user name. Permission to call the redshift:GetClusterCredentials operation is required to use this method",
      options: [
        {
          name: "--cluster-identifier",
          description:
            "The cluster identifier. This parameter is required when authenticating using either AWS Secrets Manager or temporary credentials",
          args: {
            name: "string",
          },
        },
        {
          name: "--connected-database",
          description:
            "A database name. The connected database is specified when you connect with your authentication credentials",
          args: {
            name: "string",
          },
        },
        {
          name: "--database",
          description:
            "The name of the database that contains the tables to list. If ConnectedDatabase is not specified, this is also the database to connect to with your authentication credentials",
          args: {
            name: "string",
          },
        },
        {
          name: "--db-user",
          description:
            "The database user name. This parameter is required when authenticating using temporary credentials",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of tables to return in the response. If more tables exist than fit in one response, then NextToken is returned to page through the results",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "A value that indicates the starting point for the next set of response records in a subsequent request. If a value is returned in a response, you can retrieve the next set of records by providing this returned NextToken value in the next NextToken parameter and retrying the command. If the NextToken field is empty, all response records have been retrieved for the request",
          args: {
            name: "string",
          },
        },
        {
          name: "--schema-pattern",
          description:
            'A pattern to filter results by schema name. Within a schema pattern, "%" means match any substring of 0 or more characters and "_" means match any one character. Only schema name entries matching the search pattern are returned. If SchemaPattern is not specified, then all tables that match TablePattern are returned. If neither SchemaPattern or TablePattern are specified, then all tables are returned',
          args: {
            name: "string",
          },
        },
        {
          name: "--secret-arn",
          description:
            "The name or ARN of the secret that enables access to the database. This parameter is required when authenticating using AWS Secrets Manager",
          args: {
            name: "string",
          },
        },
        {
          name: "--table-pattern",
          description:
            'A pattern to filter results by table name. Within a table pattern, "%" means match any substring of 0 or more characters and "_" means match any one character. Only table name entries matching the search pattern are returned. If TablePattern is not specified, then all tables that match SchemaPatternare returned. If neither SchemaPattern or TablePattern are specified, then all tables are returned',
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--starting-token",
          description:
            "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "string",
          },
        },
        {
          name: "--page-size",
          description:
            "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "integer",
          },
        },
        {
          name: "--max-items",
          description:
            "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "integer",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
  ],
};

export default completionSpec;
