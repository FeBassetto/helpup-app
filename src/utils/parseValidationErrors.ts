interface ValidationError {
  message: string;
  issues: {
    _errors?: string[];
    [key: string]:
      | {
          _errors: string[];
        }
      | string[]
      | undefined;
  };
}

export const parseValidationErrors = (errorObject: ValidationError): string => {
  if (errorObject && errorObject.issues) {
    for (const field in errorObject.issues) {
      if (field !== "_errors") {
        const issue = errorObject.issues[field];

        if (
          typeof issue === "object" &&
          issue !== null &&
          "_errors" in issue &&
          issue._errors.length > 0
        ) {
          return issue._errors[0] === "Required"
            ? `Campo ${field} é obrigatório`
            : issue._errors[0];
        }
      }
    }
  }

  return "";
};
