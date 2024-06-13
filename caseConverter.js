class CaseConverter {
  // Converts snake_case to camelCase
  static snakeToCamel(snake) {
    return snake.replace(/(_\w)/g, (match) => match[1].toUpperCase());
  }

  // Converts snake_case to PascalCase
  static snakeToPascal(snake) {
    return snake.replace(/(^|_)(\w)/g, (match, p1, p2) => p2.toUpperCase());
  }

  // Converts camelCase to snake_case
  static camelToSnake(camel) {
    return camel.replace(/([A-Z])/g, '_$1').toLowerCase();
  }

  // Converts camelCase to PascalCase
  static camelToPascal(camel) {
    return camel.charAt(0).toUpperCase() + camel.slice(1);
  }

  // Converts PascalCase to snake_case
  static pascalToSnake(pascal) {
    return pascal.replace(/([A-Z])/g, (match, offset) => (offset ? '_' : '') + match.toLowerCase());
  }

  // Converts PascalCase to camelCase
  static pascalToCamel(pascal) {
    return pascal.charAt(0).toLowerCase() + pascal.slice(1);
  }

}

// Example usage:
console.log(CaseConverter.snakeToCamel('snake_case_example')); // Outputs: snakeCaseExample
console.log(CaseConverter.snakeToPascal('snake_case_example')); // Outputs: SnakeCaseExample
console.log(CaseConverter.camelToSnake('camelCaseExample')); // Outputs: camel_case_example
console.log(CaseConverter.camelToPascal('camelCaseExample')); // Outputs: CamelCaseExample
console.log(CaseConverter.pascalToSnake('PascalCaseExample')); // Outputs: pascal_case_example
console.log(CaseConverter.pascalToCamel('PascalCaseExample')); // Outputs: pascalCaseExample
