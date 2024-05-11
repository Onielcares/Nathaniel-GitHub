"use strict";
let number1 = 5;
let number2 = 10;
let result = number1 + number2;
console.log(result);

function generateOTP() {
    const otp = Math.floor(100000 + Math.random() * 900000);
    return otp.toString();
}

console.log("Generated OTP:", generateOTP());


function generateOTP(length = 6) {
    const chars = '0123456789';
    let otp = '';
    for (let i = 0; i < length; i += 1) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      otp += chars[randomIndex];
    }
    return otp;
}

const otp = generateOTP()

console.log(otp)