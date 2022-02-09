module.exports = function towelSort(matrix) {
    if (arguments.length == 0 || matrix.length == 0) {
        return [];
    } else {
        let result = [];

        matrix.forEach((element, index) => {
            if (index % 2 === 0) {
                for (let i = 0; i < element.length; i++) {
                    result.push(element[i]);
                }
            } else {
                for (let i = element.length - 1; i >= 0; i--) {
                    result.push(element[i]);
                }
            }
        });
        return result;
    }
};
