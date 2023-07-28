"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomFont = exports.Tertiary = exports.Secondary = exports.Primary = void 0;
var MyLabel_1 = require("../../components/MyLabel");
var meta = {
    title: "UI/MyLable",
    component: MyLabel_1.MyLabel,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        size: { control: 'select' },
        color: { control: 'select' },
        fontColor: { control: 'color' },
    },
};
exports.default = meta;
exports.Primary = {
    args: {
        label: "Primary",
        size: "normal",
        color: "primary"
    },
};
exports.Secondary = {
    args: {
        label: "Secondary",
        size: "h2",
        color: "secondary"
    },
};
exports.Tertiary = {
    args: {
        label: "Tertiary",
        size: "h1",
        color: "tertiary",
        allCaps: true
    },
};
exports.CustomFont = {
    args: {
        label: "Custom font",
        size: "h1",
        color: "primary",
        fontColor: '#5517ac'
    },
};
