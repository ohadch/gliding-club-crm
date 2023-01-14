import * as path from "path";
import * as winston from "winston";

const LOGS_DIR = path.join(__dirname, "../../../../logs");

function getLoggerInternal(logsDir: string, name: string) {
  return winston.createLogger({
    level: 'info',
    format: winston.format.combine(
      winston.format.timestamp({
        format: 'MMM-DD-YYYY HH:mm:ss',
      }),
      winston.format.printf((info) => `[${info.timestamp}] [${info.level.toUpperCase()}] [${name}] ${info.message}`),
    ),
    transports: [
      new winston.transports.Console(),
    ]
  });
}

export const loggerFactory = (logsDir: string) => (name: string = "default") => getLoggerInternal(logsDir, name);

export const getLogger = (name: string = "default") => loggerFactory(LOGS_DIR)(name);
