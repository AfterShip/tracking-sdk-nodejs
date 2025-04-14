import { AfterShipErrorCodes, AftershipError } from "../error";

export interface Proxy {
    host: string;
    port: number;
    protocol?: string;
    auth?: {
        username: string;
        password: string;
    };
}

export function parseProxy(input?: string): Proxy | undefined {
    if (!input) {
        return undefined;
    }
    return { ...getAddress(input), ...getProtocol(input), ...getAuth(input) };
}

function getAddress(input: string): { host: string; port: number } {
    if (input.includes("@")) {
        input = input.substring(input.lastIndexOf("@") + 1);
    }
    else if (input.includes("://")) {
        input = input.split("://")[1];
    }
    if (!input.includes(":")) {
        throw new AftershipError(
            `Invalid option: proxy`,
            AfterShipErrorCodes.INVALID_OPTION
        );
    }
    const host = input.split(":")[0];
    const port = parseInt(input.split(":")[1]);
    if (/^\w+$/.test(host)) {
        throw new AftershipError(
            `Invalid option: proxy`,
            AfterShipErrorCodes.INVALID_OPTION
        );
    }
    if (isNaN(port)) {
        throw new AftershipError(
            `Invalid option: proxy`,
            AfterShipErrorCodes.INVALID_OPTION
        );
    }
    return { host: host, port: port };
}

function getProtocol(input: string): { protocol: string } {
    if (!input.includes("://")) {
        return { protocol: "http" };
    }
    const protocol = input.split("://")[0];
    if (protocol.length < 3 || protocol.length > 6) {
        throw new AftershipError(
            `Invalid option: proxy`,
            AfterShipErrorCodes.INVALID_OPTION
        );
    }
    return { protocol };
}

function getAuth(input: string): { auth: { username: string; password: string } } | undefined {
    if (!input.includes("@")) {
        return undefined;
    }
    if (input.includes("://")) {
        input = input.split("://")[1];
    }
    input = input.substring(0, input.lastIndexOf("@"));
    if (!input.includes(":")) {
        throw new AftershipError(
            `Invalid option: proxy`,
            AfterShipErrorCodes.INVALID_OPTION
        );
    }
    const [username, password] = input.split(":");
    return { auth: { username, password } };
}
