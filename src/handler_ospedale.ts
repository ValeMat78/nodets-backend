/**
 * $ GET
 *      - getAllPazienti
 *      - getPazientiById
 * 
 * $ POST
 *      - createPaziente
 * 
 * $ PUT
 *      - updatePaziente
 * 
 * $ DELETE
 *      - deletePaziete
 */

import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { createConnection } from "mysql2/promise";
import { IPaziente } from "./models/IPaziente";

const getDbConnection = async() =>{
    return await createConnection({
        host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
            port: parseInt(process.env.DB_PORT || "3306")
    })
};

export const getAllPatients = async (): Promise<APIGatewayProxyResult> =>{
    try {
        const dbConnection = await getDbConnection();

        const [rows] = await dbConnection.query("SELECT * FROM patients");
        await dbConnection.end();


        console.table(rows);

        const response: APIGatewayProxyResult = {
            statusCode: 200,
            body: JSON.stringify(rows),
        }
        return response

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


// localhost:8080/pazienti/{id}
export const getPatientsById = async (
    event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> =>{
    try {

        if(!event.pathParameters?.id){
            throw new Error("Missing id parameter in the URL. ");
        }

        const dbConnection = await getDbConnection();

        const [rows] = await dbConnection.query(
                                                "SELECT * FROM patients where id = ?",
                                                [event.pathParameters?.id]);
        await dbConnection.end();

        console.table(rows);

        const response: APIGatewayProxyResult = {
            statusCode: 200,
            body: JSON.stringify(rows),
        }
        return response

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

export const createPaziente = async (
    event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> =>{
    try {

        if(!event.body){
            throw new Error("Missing request body");
        }

        // Omit permette di omettere alcuni dati dal input
        const paziente: Omit<IPaziente, "id"> = JSON.parse(event.body);

        const dbConnection = await getDbConnection();

        const [rows] = await dbConnection.query("insert into pazienti set ?",
                                                [paziente]);
        await dbConnection.end();


        console.table(rows);

        const response: APIGatewayProxyResult = {
            statusCode: 200,
            body: JSON.stringify(rows),
        }
        return response

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

export const updatePaziente = async (
    event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> =>{
    try {
        const dbConnection = await getDbConnection();

        const [rows] = await dbConnection.query("SELECT * FROM patients");
        await dbConnection.end();


        console.table(rows);

        const response: APIGatewayProxyResult = {
            statusCode: 200,
            body: JSON.stringify(rows),
        }
        return response

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

export const deletePaziete = async (
    event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> =>{
    try {
        const dbConnection = await getDbConnection();

        const [rows] = await dbConnection.query("SELECT * FROM patients");
        await dbConnection.end();


        console.table(rows);

        const response: APIGatewayProxyResult = {
            statusCode: 200,
            body: JSON.stringify(rows),
        }
        return response

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