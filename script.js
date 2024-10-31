function calculateDifference() {
    try {
        // Получаем значения из текстовых полей input-1 и input-2, используя BigInt для больших целых чисел
        const input1 = BigInt(document.querySelector(".input-1").value);
        const input2 = BigInt(document.querySelector(".input-2").value);

        // Вычисляем разницу
        const result = input1 - input2;

        // Записываем результат в input-3 в виде строки
        document.querySelector(".input-3").value = result.toString();
    } catch (error) {
        alert(
            "Введите только целые числа без пробелов или специальных символов."
        );
    }
}
