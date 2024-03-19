import { APIGatewayProxyResult } from "aws-lambda";
import { createConnection } from "mysql2/promise";

export const hello = async () => {
    console.log("hello world!");
    return "hello world!";
};

export const goodbye = () => {
    console.log("goodbye world!");
    return "goodbye world";
};

export const getAllPatients = async (): Promise<APIGatewayProxyResult> => {
    try {
        const dbConnection = await createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
            port: parseInt(process.env.DB_PORT || "3306"),
        });

        const [rows] = await dbConnection.query("SELECT * FROM patients");
        await dbConnection.end();


        console.table(rows);

        return {
            statusCode: 200,
            body: JSON.stringify(rows),
        }

    } catch (error: unknown) {
        const response: APIGatewayProxyResult = {
            statusCode: 500,
            body: JSON.stringify({
                message: error
            }),
        }

    return response

    }
};