"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mailhelper_1 = require("./utils/mailhelper");
const mongoose_1 = __importDefault(require("mongoose"));
const logwriter_1 = require("./utils/logwriter");
const MONGO_URI = process.env.DATABASE_URL || "";
const moduleName = 'Util - Create Test Email';
mongoose_1.default.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose_1.default.connection.on('open', () => __awaiter(void 0, void 0, void 0, function* () {
    logwriter_1.WriteSysLog(logwriter_1.LogLevel.info, moduleName, 'Job Started');
    let newAttach01 = {
        filename: "logo.png",
        content: "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",
        encoding: "base64"
    };
    let newAttach02 = {
        filename: "Test02.txt",
        content: "This is the content 02",
        contentType: "text/plain"
    };
    let attachments = new Array(0);
    attachments.push(newAttach01);
    attachments.push(newAttach02);
    yield mailhelper_1.NewMailRaw('TTLHumphrey@gmail.com', 'humphrey.cheung@igsl-group.com', undefined, undefined, "Subject Test", "Text Test", undefined, Date.now(), undefined)
        .then((res) => console.info(res.toJSON()))
        .catch((reason) => console.error(reason));
    yield mailhelper_1.NewMailRaw('TTLHumphrey@gmail.com', 'humphrey.cheung@igsl-group.com', undefined, undefined, "Subject HTML", undefined, '<HTML>Hello World</HTML>', Date.now(), attachments)
        .then((res) => console.info(res.toJSON()))
        .catch((reason) => console.error(reason));
    logwriter_1.WriteSysLog(logwriter_1.LogLevel.info, moduleName, 'Job Completed');
    mongoose_1.default.disconnect();
    process.exit(1);
}));
mongoose_1.default.connection.on('error', (err) => {
    console.error(err.message);
});
//# sourceMappingURL=createmail.js.map