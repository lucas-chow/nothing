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
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const errorhandler_1 = require("../utils/errorhandler");
const role_model_1 = require("../models/role.model");
const router = express_1.Router();
exports.RoleRoute = router;
const moduleName = "API - Role";
router.get('/', (req, resp, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let target;
        target = yield role_model_1.Role.find().select("name");
        resp.status(errorhandler_1.HTTPStatus.OK).json(target);
    }
    catch (error) {
        next(errorhandler_1.CreateErr(errorhandler_1.HTTPStatus.INTERNAL_SERVER_ERROR, error.message, moduleName));
    }
}));
//# sourceMappingURL=role.route.js.map