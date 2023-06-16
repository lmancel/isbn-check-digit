function sanitizeInput(value: string): string {
  return value.trim().replaceAll('-', '')
}

export { sanitizeInput }
