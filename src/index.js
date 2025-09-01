module.exports = function toReadable(number) {
  const ones = [
    '',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ];
  const teens = [
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen',
  ];
  const tens = [
    '',
    '',
    'twenty',
    'thirty',
    'forty',
    'fifty',
    'sixty',
    'seventy',
    'eighty',
    'ninety',
  ];

  if (number === 0) {
    return 'zero';
  }

  let result = '';
  const hundreds = Math.floor(number / 100);
  const remainder = number % 100;

  if (hundreds > 0) {
    result += `${ones[hundreds]} hundred`;
    if (remainder > 0) {
      result += ' ';
    }
  }

  if (remainder > 0) {
    if (remainder < 10) {
      result += `${ones[remainder]}`;
    } else if (remainder < 20) {
      result += `${teens[remainder - 10]}`;
    } else {
      const ten = Math.floor(remainder / 10);
      const one = remainder % 10;
      result += `${tens[ten]}`;
      if (one > 0) {
        result += ` ${ones[one]}`;
      }
    }
  }

  return result.trim();
};
