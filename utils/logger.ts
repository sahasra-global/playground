import { makeid } from './makeid';
import { lockObject } from './lock-object';
import { digitsTemplate } from './digits-template';

export interface ILogData {
    [key: string]: unknown;
}

const twoDigits = digitsTemplate(2);
const threeDigits = digitsTemplate(3);
const format2 = (value: number) => twoDigits.format(value);
const format3 = (value: number) => threeDigits.format(value);

export type LogType = 'information' | 'error' | 'debug' | 'warning';
export type LogTypes = LogType[]

export interface ILogger {
    readonly key: string;
    error(message: string, data?: ILogData): void;
    debug(message: string, data?: ILogData): void;
    warning(message: string, data?: ILogData): void;
    information(message: string, data?: ILogData): void;
}

export function createLogger({ logger, correlationId, logs = ['information', 'error', 'warning'] }: {
    logger?: ILogger;
    correlationId?: string;
    logs?: LogTypes;
}): ILogger {

    if (correlationId === undefined) {
        correlationId = makeid(5);
    }

    if (logger === undefined) {
        logger = createConsoleLogger({ correlationId });
    }

    const information = (message: string, data?: ILogData): void => {
        if (logs.includes('information')) {
            data = {
                correlationId,
                ...data
            };

            logger.information(message, data);
        }
    }

    const error = (message: string, data?: ILogData): void => {
        if (logs.includes('error')) {
            data = {
                correlationId,
                ...data
            };

            logger.error(message, data);
        }
    }

    const debug = (message: string, data?: ILogData): void => {
        if (logs.includes('debug')) {
            data = {
                correlationId,
                ...data
            };

            logger.debug(message, data);
        }
    }

    const warning = (message: string, data?: ILogData): void => {
        if (logs.includes('warning')) {
            data = {
                correlationId,
                ...data
            };

            logger.warning(message, data);
        }
    }

    return lockObject({
        key: correlationId,
        information,
        error,
        debug,
        warning
    });
}

function createConsoleLogger({ correlationId }: { correlationId: string }): ILogger {

    const timestamp = (): string => {
        const dt = new Date();
        const hours = format2(dt.getHours());
        const minutes = format2(dt.getMinutes());
        const seconds = format2(dt.getSeconds());
        const milliseconds = format3(dt.getMilliseconds());
        return `${hours}:${minutes}:${seconds}:${milliseconds}`;
    }

    const information = (message: string, data?: ILogData): void => {
        if (!data) {
            console.log(message);
        } else if (!data['correlationId']) {
            console.log(`[${timestamp()}]`, message, JSON.stringify(data));
        } else {
            const correlationId = data['correlationId'];
            delete data['correlationId'];
            console.log(`[${correlationId}]`, `[${timestamp()}]`, message, Object.keys(data).length === 0 ? '' : JSON.stringify(data));
        }
    }

    const error = (message: string, data?: ILogData): void => {
        if (!data) {
            console.error(message);
        } else if (!data['correlationId']) {
            console.error(`[${timestamp()}]`, message, JSON.stringify(data));
        } else {
            const correlationId = data['correlationId'];
            delete data['correlationId'];
            console.error(`[${correlationId}]`, `[${timestamp()}]`, message, Object.keys(data).length === 0 ? '' : JSON.stringify(data));
        }
    }

    const debug = (message: string, data?: ILogData): void => {
        if (!data) {
            console.debug(message);
        } else if (!data['correlationId']) {
            console.debug(`[${timestamp()}]`, message, JSON.stringify(data));
        } else {
            const correlationId = data['correlationId'];
            delete data['correlationId'];
            console.debug(`[${correlationId}]`, `[${timestamp()}]`, message, Object.keys(data).length === 0 ? '' : JSON.stringify(data));
        }
    }

    const warning = (message: string, data?: ILogData): void => {
        if (!data) {
            console.warn(message);
        } else if (!data['correlationId']) {
            console.warn(`[${timestamp()}]`, message, JSON.stringify(data));
        } else {
            const correlationId = data['correlationId'];
            delete data['correlationId'];
            console.warn(`[${correlationId}]`, `[${timestamp()}]`, message, Object.keys(data).length === 0 ? '' : JSON.stringify(data));
        }
    }

    return {
        key: correlationId,
        information,
        error,
        debug,
        warning
    }
}
