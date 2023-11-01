export const nameRules = [
  (name: string) => {
    if (!name.length) return "Name is required.";
    const nameWords = name.trim().split(" ");

    return (
      nameWords.every((word) => word[0] === word[0].toUpperCase()) ||
      "Every word in should start from capital letter"
    );
  },
];

export const emailRules = [
  (value: string) => {
    return /.+@.+\..+/.test(value) || "E-mail must be valid.";
  },
  (value: string) => {
    return !!value.length || "E-mail is required.";
  },
];

export const phoneRules = [
  (value: string) => {
    return !!value.length || "Phone is required.";
  },
  (value: string) => {
    return value.startsWith("+380") || "The number should start with '+380'";
  },
  (value: string) => {
    return value.length === 13 || "Enter correct phone number";
  },
];
