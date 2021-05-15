const path = require("path");

module.exports = {
    module: {
        rules: [
            {
                test    : /\.scss$/,
                loaders : ["sass-loader"],
                include : path.resolve(__dirname, "../")
            }
        ]
    }
};

/*
test    -> scss 확장자 파일만을 적용하도록 파일 검사 규칙을 추가
loaders -> sass-loader로 sass 구문을 css로 변환
 */